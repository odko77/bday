import PricingPage from "@/components/pages/Pricing"
import { CouponsApi, FaqApi } from "@/utils/api"

/**
  @param {} props
*/
const Prcing = async () =>
{

  const rsp = await FaqApi.list()
  const faq = rsp?.data?.data ?? []

  return (
    <PricingPage faq={faq} />
  )
}
export default Prcing
