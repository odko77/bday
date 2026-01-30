import CouponsPage from "@/components/pages/Coupons"
import { CategoryApi } from "@/utils/api"

/**
  @param {} props
*/
const Coupon = async () =>
{

  const rsp = await CategoryApi.all()
  const data = rsp?.data?.data ?? []

  return (
    <CouponsPage categories={data} />
  )
}
export default Coupon
