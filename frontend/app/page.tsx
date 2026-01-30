import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BrandsSection } from "@/components/brands-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CategoryApi, CouponsApi, MeApi, SingleType } from "@/utils/api"

export default async function Home() {

  const rsp = await CategoryApi.list()
  const categories = rsp?.data?.data ?? []

  const homepagersp = await SingleType.homepage()
  const homePage = homepagersp?.data?.data ?? {
    title: "Монголын анхны",
    title2: "хямдралын сайт",
    description: "Хмагийн олон хямдралыг нэг дроос"
  }

  const rspFeatured = await SingleType.featured()
  const featured = rspFeatured?.data?.data ?? {}

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection categories={categories} homePage={homePage} featured={featured} />
      <FeaturesSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
