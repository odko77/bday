"use client"

import React from "react"

import { Building2, Utensils, ShoppingBag, Plane, Sparkles, Coffee, Car, Smartphone } from "lucide-react"

const brands = [
  {
    title: "KFC Mongolia",
    description: "Бүх combo-д 30-50% хямдрал",
    icon: Utensils,
    color: "bg-sparkli-orange",
  },
  {
    title: "Nomin Supermarket",
    description: "Хүнсний бүтээгдэхүүнд хямдрал",
    icon: ShoppingBag,
    color: "bg-sparkli-green",
  },
  {
    title: "Blue Sky Hotel",
    description: "Өрөө, ресторанд хямдрал",
    icon: Building2,
    color: "bg-sparkli-blue",
  },
  {
    title: "MIAT Airlines",
    description: "Онгоцны тийзэнд хямдрал",
    icon: Plane,
    color: "bg-sparkli-pink",
  },
  {
    title: "Shangri-La Mall",
    description: "Дэлгүүрүүдэд хямдрал",
    icon: Sparkles,
    color: "bg-sparkli-yellow",
  },
  {
    title: "Coffee Bean",
    description: "Кофе, зууш хямдрал",
    icon: Coffee,
    color: "bg-sparkli-orange",
  },
  {
    title: "Toyota Mongolia",
    description: "Автомашины үйлчилгээнд",
    icon: Car,
    color: "bg-sparkli-green",
  },
  {
    title: "Unitel",
    description: "Багц, интернет хямдрал",
    icon: Smartphone,
    color: "bg-sparkli-blue",
  },
]

export function BrandsSection() {
  return (
    <section id="brands" className="overflow-hidden bg-sparkli-cream py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-5xl">
            <span className="text-balance">200+ брэндийн</span>
            <br />
            <span className="text-sparkli-green">хямдралууд</span>
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            Монголын тэргүүлэх компаниудын купонуудыг нэг дороос олоорой.
          </p>
        </div>

        {/* Scrolling Brands - Row 1 */}
        <div className="mb-6 flex animate-scroll gap-6">
          {[...brands, ...brands].map((brand, index) => (
            <BrandCard key={`${brand.title}-${index}`} {...brand} />
          ))}
        </div>

        {/* Scrolling Brands - Row 2 (Reverse) */}
        <div className="flex animate-scroll-reverse gap-6">
          {[...brands.reverse(), ...brands].map((brand, index) => (
            <BrandCard key={`${brand.title}-reverse-${index}`} {...brand} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface BrandCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

function BrandCard({ title, description, icon: Icon, color }: BrandCardProps) {
  return (
    <div className="flex min-w-[280px] items-center gap-4 rounded-2xl bg-white p-5 shadow-md cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color} text-white`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
