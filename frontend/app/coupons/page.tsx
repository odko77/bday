import CouponsPage from "@/components/pages/Coupons"
import { CategoryApi } from "@/utils/api"

/**
  @param {} props
*/
const Coupon = async () =>
{

  const rsp = await CategoryApi.all()
  const data = rsp?.data?.data ?? []

  data.unshift(
    {
      documentId: "all",
      name: "Бүгд",
      logo_name: "sparkles",
      color: "#00b200",
      coupons: {
        count: null
      }
    }
  )

  return (
    <CouponsPage categories={data} />
  )
}
export default Coupon
