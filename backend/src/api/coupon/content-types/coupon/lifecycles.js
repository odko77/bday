const { generateCouponItems } = require('../../services/coupon-item-generator');

module.exports = {
  async afterCreate(event) {
    await generateCouponItems(event.result);
  },

  async afterUpdate(event) {
    await generateCouponItems(event.result); // keep CouponItems in sync if count changes
  },
};
