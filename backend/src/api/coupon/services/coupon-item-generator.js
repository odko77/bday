async function generateCouponItems(coupon) {
  const { documentId: couponDocumentId, count } = coupon;

  if (!count || count <= 0) return;

  // 1️⃣ EN + MN coupon localized rows
  const coupons = await strapi.db
    .query('api::coupon.coupon')
    .findMany({
      where: {
        documentId: couponDocumentId,
        locale: ['en', 'mn'],
      },
      fields: ['id'],
    });

  if (coupons.length === 0) return;

  const couponIds = coupons.map(c => c.id);

  // 2️⃣ Зөвхөн эдгээр coupon-тэй холбогдсон couponItems авах
  const couponItems = await strapi.db
    .query('api::coupon-item.coupon-item')
    .findMany({
      where: {
        coupon: couponIds, // ✅ зөвхөн энэ coupon-тэй холбогдсон
      },
      orderBy: { sequence: 'asc' },
    });

  const existingCount = couponItems.length;

  // 3️⃣ Илүүдэл couponItems устгах
  if (existingCount > count) {
    const toDelete = couponItems.slice(count);

    await strapi.db
      .query('api::coupon-item.coupon-item')
      .deleteMany({
        where: { id: toDelete.map(i => i.id) },
      });
  }

  // 4️⃣ Дутуу couponItems үүсгэх
  if (existingCount < count) {
    const missingCount = count - existingCount;

    for (let i = 0; i < missingCount; i++) {
      const sequence = existingCount + i + 1;

      const created = await strapi
        .documents('api::coupon-item.coupon-item')
        .create({
          data: {
            code: `CPN-${couponDocumentId}-${String(sequence).padStart(3, '0')}`,
            sequence,
            coupon: {
              connect: couponIds, // ✅ connect to EN + MN
            },
          },
        });

      couponItems.push(created);
    }
  }

  // 5️⃣ Бүх couponItems-д relation-ийг sync хийх (EN + MN)
  await Promise.all(
    couponItems.map(item =>
      strapi.documents('api::coupon-item.coupon-item').update({
        documentId: item.documentId,
        data: {
          coupon: {
            connect: couponIds, // ✅ ALWAYS connect to EN + MN
          },
        },
      })
    )
  );
}

module.exports = { generateCouponItems };
