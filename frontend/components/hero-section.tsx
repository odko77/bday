"use client"

import { Button } from "@/components/ui/button"
import { CouponCard } from "@/components/coupon-card"
import { Ticket, Percent, ShoppingBag, Gift, Star, Clock } from "lucide-react"
import { DynamicIcon, IconName } from "lucide-react/dynamic"
import Link from "next/link"
import { CategoryInterface } from "@/types/categories"
import { HomePageInterface } from "@/types/singleType"
import { CouponInteface } from "@/types/coupons"
import { FeatureInteface } from "@/types/featured"

const featuredCoupons = [
  {
    id: "1",
    company: "KFC Mongolia",
    discount: "50%",
    description: "Бүх combo болон bucket-д хамаарна",
    code: "KFC50MN",
    validUntil: "2026.02.28",
    category: "Хоол & Ресторан",
    color: "orange" as const,
    isHot: true,
    usageCount: 2340,
  },
  {
    id: "2",
    company: "Nomin Supermarket",
    discount: "30%",
    description: "Хүнсний бүтээгдэхүүнд хамаарна",
    code: "NOMIN30",
    validUntil: "2026.02.15",
    category: "Дэлгүүр",
    color: "pink" as const,
    isNew: true,
    usageCount: 1856,
  },
  {
    id: "3",
    company: "Blue Sky Hotel",
    discount: "40%",
    description: "Deluxe өрөөний үнэнд хамаарна",
    code: "BLUESKY40",
    validUntil: "2026.03.01",
    category: "Аялал",
    color: "blue" as const,
    usageCount: 892,
  },
]

export function HeroSection({ categories, homePage, featured }: { categories: CategoryInterface[], homePage: HomePageInterface, featured: FeatureInteface }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-sparkli-cream">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-sparkli-yellow/30 blur-xl" />
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-sparkli-pink/30 blur-xl" />
        <div className="absolute bottom-40 left-1/4 w-36 h-36 rounded-full bg-sparkli-green/20 blur-xl" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-sparkli-orange/30 blur-xl" />
      </div>

      <div className="container relative mx-auto px-4 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Category Pills */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Link
                href={`/coupons/?category=${category.documentId}`}
                key={category.name}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-foreground shadow-md transition-transform hover:scale-105 cursor-pointer`}
                style={{ backgroundColor: category.color }}
              >
                <DynamicIcon name={category.logo_name as IconName} className={`h-4 w-4`} />
                {category.name}
              </Link>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">{homePage.title}</span>
            <span className="relative inline-block">
              <span className="relative z-10 text-sparkli-green">{homePage.title2}</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8"
                  stroke="oklch(0.75 0.18 55)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {homePage.description}
          </p>

          {/* CTA Buttons */}
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row justify-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="h-14 rounded-full bg-sparkli-green px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-sparkli-green/90 hover:shadow-xl"
              >
                <Ticket className="mr-2 h-5 w-5" />
                Гишүүн болох
              </Button>
            </Link>
            <Link href="/coupons">
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-2 border-sparkli-green/30 px-8 text-base font-bold transition-all hover:bg-sparkli-green/10 bg-transparent"
              >
                Купонууд үзэх
              </Button>
            </Link>
          </div>
        </div>

        {/* Coupon Cards Preview */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <CouponCard key={featured.coupon1.documentId} {...featured.coupon1} />
          <CouponCard key={featured.coupon2.documentId} {...featured.coupon2} />
          <CouponCard key={featured.coupon3.documentId} {...featured.coupon3} />
        </div>
      </div>
    </section>
  )
}
