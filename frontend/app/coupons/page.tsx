"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CouponCard } from "@/components/coupon-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  SlidersHorizontal,
  Utensils,
  ShoppingBag,
  Plane,
  Film,
  Sparkles,
  Building2,
  Shirt,
  Heart,
  X,
} from "lucide-react"

const categories = [
  { id: "all", name: "Бүгд", icon: Sparkles, count: 156 },
  { id: "food", name: "Хоол & Ресторан", icon: Utensils, count: 42 },
  { id: "shopping", name: "Дэлгүүр", icon: ShoppingBag, count: 38 },
  { id: "travel", name: "Аялал", icon: Plane, count: 24 },
  { id: "entertainment", name: "Энтертайнмент", icon: Film, count: 18 },
  { id: "fashion", name: "Хувцас", icon: Shirt, count: 15 },
  { id: "health", name: "Эрүүл мэнд", icon: Heart, count: 12 },
  { id: "services", name: "Үйлчилгээ", icon: Building2, count: 7 },
]

const coupons = [
  {
    id: "1",
    company: "KFC Mongolia",
    discount: "50%",
    description: "Бүх combo болон bucket-д хамаарна. Өдөрт 1 удаа ашиглах боломжтой.",
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
    description: "Хүнсний бүтээгдэхүүн болон гэр ахуйн барааны хямдрал",
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
    description: "Deluxe болон Suite өрөөний үнэнд хамаарна",
    code: "BLUESKY40",
    validUntil: "2026.03.01",
    category: "Аялал",
    color: "blue" as const,
    usageCount: 892,
  },
  {
    id: "4",
    company: "Urgoo Cinema",
    discount: "2+1",
    description: "2 тасалбар авахад 1 тасалбар үнэгүй",
    code: "URGOO21",
    validUntil: "2026.02.20",
    category: "Энтертайнмент",
    color: "yellow" as const,
    isHot: true,
    usageCount: 3210,
  },
  {
    id: "5",
    company: "MIAT Airlines",
    discount: "25%",
    description: "Дотоодын бүх чиглэлийн нислэгт хамаарна",
    code: "MIAT25FLY",
    validUntil: "2026.04.30",
    category: "Аялал",
    color: "green" as const,
    isNew: true,
    usageCount: 567,
  },
  {
    id: "6",
    company: "Pizza Hut",
    discount: "35%",
    description: "Large пицца захиалахад Medium пицца үнэгүй",
    code: "PIZZA35",
    validUntil: "2026.02.25",
    category: "Хоол & Ресторан",
    color: "orange" as const,
    usageCount: 1432,
  },
  {
    id: "7",
    company: "Cashmere House",
    discount: "20%",
    description: "Ноолууран бүтээгдэхүүн болон дагалдах хэрэгсэлд",
    code: "CASH20",
    validUntil: "2026.03.15",
    category: "Хувцас",
    color: "pink" as const,
    usageCount: 723,
  },
  {
    id: "8",
    company: "Intermed Hospital",
    discount: "15%",
    description: "Эрүүл мэндийн иж бүрэн үзлэгт хамаарна",
    code: "HEALTH15",
    validUntil: "2026.03.31",
    category: "Эрүүл мэнд",
    color: "green" as const,
    usageCount: 445,
  },
  {
    id: "9",
    company: "E-Mart",
    discount: "25%",
    description: "Бүх төрлийн цахилгаан бараанд хамаарна",
    code: "EMART25",
    validUntil: "2026.02.28",
    category: "Дэлгүүр",
    color: "blue" as const,
    isHot: true,
    usageCount: 1890,
  },
  {
    id: "10",
    company: "Seoul Restaurant",
    discount: "40%",
    description: "Солонгос хоолны цэсэнд хамаарна",
    code: "SEOUL40",
    validUntil: "2026.02.14",
    category: "Хоол & Ресторан",
    color: "yellow" as const,
    usageCount: 987,
  },
  {
    id: "11",
    company: "Grand Khaan Irish Pub",
    discount: "30%",
    description: "Бүх хоол болон ундаанд хамаарна",
    code: "IRISH30",
    validUntil: "2026.03.01",
    category: "Хоол & Ресторан",
    color: "green" as const,
    usageCount: 654,
  },
  {
    id: "12",
    company: "Shangri-La Mall",
    discount: "15%",
    description: "Сонгогдсон брэндүүдэд хамаарна",
    code: "SHANGRILA15",
    validUntil: "2026.03.20",
    category: "Дэлгүүр",
    color: "pink" as const,
    isNew: true,
    usageCount: 1123,
  },
]

export default function CouponsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const filteredCoupons = coupons.filter((coupon) => {
    const matchesCategory =
      selectedCategory === "all" ||
      coupon.category === categories.find((c) => c.id === selectedCategory)?.name
    const matchesSearch =
      coupon.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coupon.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-sparkli-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sparkli-yellow/20 blur-2xl" />
          <div className="absolute top-40 right-20 w-52 h-52 rounded-full bg-sparkli-pink/20 blur-2xl" />
          <div className="absolute bottom-10 left-1/3 w-36 h-36 rounded-full bg-sparkli-green/15 blur-2xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              <span className="text-balance">Бүх </span>
              <span className="text-sparkli-green">купонууд</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              200+ компанийн хямдралын купонуудаас өөрт тохирохыг олоорой
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Компани эсвэл купон хайх..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 rounded-2xl border-2 border-muted bg-white text-base shadow-sm focus:border-sparkli-green focus:ring-sparkli-green/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowFilters(!showFilters)}
                className={`h-14 px-6 rounded-2xl border-2 bg-transparent ${showFilters ? "border-sparkli-green bg-sparkli-green/10" : "border-muted"}`}
              >
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                Шүүлтүүр
              </Button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-sparkli-green text-white shadow-md"
                    : "bg-white text-foreground border-2 border-muted hover:border-sparkli-green/50 hover:bg-sparkli-green/5"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <Badge
                  variant="secondary"
                  className={`ml-1 text-xs ${selectedCategory === category.id ? "bg-white/20 text-white" : "bg-muted"}`}
                >
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">{filteredCoupons.length}</span> купон олдлоо
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Эрэмбэлэх:</span>
              <select className="text-sm font-medium bg-transparent border-0 cursor-pointer text-foreground focus:ring-0">
                <option>Хамгийн шинэ</option>
                <option>Их хямдралтай</option>
                <option>Түгээмэл</option>
                <option>Дуусах хугацаа</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Coupons Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCoupons.map((coupon) => (
              <CouponCard key={coupon.id} {...coupon} />
            ))}
          </div>

          {filteredCoupons.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Купон олдсонгүй</h3>
              <p className="text-muted-foreground">Өөр түлхүүр үгээр хайж үзнэ үү</p>
            </div>
          )}

          {/* Load More */}
          {filteredCoupons.length > 0 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 border-sparkli-green text-sparkli-green hover:bg-sparkli-green/10 bg-transparent"
              >
                Илүү ихийг үзэх
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
