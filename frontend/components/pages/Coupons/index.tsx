"use client"

import { useCallback, useState } from "react"
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
import { CategoryInterface } from "@/types/categories"
import { DynamicIcon, IconName } from "lucide-react/dynamic"
import { CouponsApi } from "@/utils/api"
import { CouponInteface } from "@/types/coupons"
import { Pagination } from "@/types/global"

interface CouponState {
  data: CouponInteface[];
  meta?: {
    pagination: Pagination
  },
}

export default function CouponsPage({ categories }: { categories: CategoryInterface[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const [ coupons, setCoupons ] = useState<CouponState>({
    data: [],
    meta: {
      pagination: {
        page: 0,
        pageSize: 0,
        pageCount: 0,
        total: 0,
      },
    }
  })

  const getCoupons = useCallback(
    async (documentId: string) =>
    {
      const data = await CouponsApi.coupons(documentId)
      setCoupons(data?.data ?? {})
    },
    []
  )

  console.log(coupons);

  const handleCategory = useCallback(
    (category: CategoryInterface) =>
    {
      setSelectedCategory(category.documentId)
      getCoupons(category.documentId)
    },
    []
  )

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
                onClick={() => handleCategory(category)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category.documentId
                    ? "bg-sparkli-green text-white shadow-md"
                    : "bg-white text-foreground border-2 border-muted hover:border-sparkli-green/50 hover:bg-sparkli-green/5"
                }`}
                style={{ backgroundColor: category.color }}
              >
                <DynamicIcon name={category.logo_name as IconName} className="w-4 h-4" />
                {category.name}
                <Badge
                  variant="secondary"
                  className={`ml-1 text-xs ${selectedCategory === category.documentId ? "bg-white/20 text-white" : "bg-muted"}`}
                >
                  {category.coupons.count}
                </Badge>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">{coupons.meta?.pagination?.total}</span> купон олдлоо
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
            {coupons.data.map((coupon) => (
              <CouponCard key={coupon.documentId} {...coupon} />
            ))}
          </div>

          {coupons.data.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Купон олдсонгүй</h3>
              <p className="text-muted-foreground">Өөр түлхүүр үгээр хайж үзнэ үү</p>
            </div>
          )}

          {/* Load More */}
          {coupons.length > 0 && (
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
