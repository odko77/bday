import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BrandsSection } from "@/components/brands-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CategoryApi, MeApi, SingleType } from "@/utils/api"

export default async function Home() {

  const rsp = await CategoryApi.list()
  const categories = rsp.data

  const homepagersp = await SingleType.homepage()
  const homePage = homepagersp?.data?.data ?? {
    title: "Монголын анхны",
    title2: "хямдралын сайт",
    description: "Хмагийн олон хямдралыг нэг дроос"
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection categories={categories.data} homePage={homePage} />
      <FeaturesSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
