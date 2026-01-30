"use client"

import { useEffect, useMemo, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CouponCard } from "@/components/coupon-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, User2, Calendar, Venus, Mars, Ticket, CheckCircle2 } from "lucide-react"
import { MeApi } from "@/utils/api"
import { CouponInteface } from "@/types/coupons"

interface ProfileUser {
  username?: string | null
  email?: string | null
  age?: number | null
  gender?: string | null
}

export default function ProfilePage() {
  const [user, setUser] = useState<ProfileUser | null>(null)
  const [myCoupons, setMyCoupons] = useState<CouponInteface[]>([])
  const [usedCoupons, setUsedCoupons] = useState<CouponInteface[]>([])

  useEffect(() => {
    // Strapi-ийн /api/users/me ээс дэлгэрэнгүй мэдээлэл авах
    const loadMe = async () => {
      try {
        const rsp = await MeApi.me()
        setUser(rsp.data)
      } catch {
        // swallow
      }
    }

    loadMe()
  }, [])

  const displayUser = useMemo<ProfileUser>(() => {
    return {
      username: user?.username ?? "Хэрэглэгч",
      email: user?.email ?? undefined,
      age: (user as any)?.age ?? null,
      gender: (user as any)?.gender ?? null,
    }
  }, [user])

  const totalCoupons = myCoupons.length
  const totalUsed = usedCoupons.length

  return (
    <main className="min-h-screen bg-sparkli-cream">
      <Navbar />

      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-sparkli-green/15 blur-3xl" />
          <div className="absolute top-24 right-0 w-72 h-72 rounded-full bg-sparkli-yellow/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-sparkli-pink/15 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                Миний <span className="text-sparkli-green">профайл</span>
              </h1>
              <p className="text-muted-foreground max-w-xl">
                Өөрийн мэдээллээ харах, авсан болон ашигласан купонуудынхаа түүхийг нэг дор хараарай.
              </p>
            </div>

            <div className="flex gap-3">
              <Badge
                variant="outline"
                className="flex items-center gap-2 rounded-full border-sparkli-green/40 px-4 py-2 bg-white/60 backdrop-blur"
              >
                <Ticket className="w-4 h-4 text-sparkli-green" />
                <span className="text-sm font-semibold text-foreground">
                  Нийт купон: {totalCoupons}
                </span>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center gap-2 rounded-full border-sparkli-pink/40 px-4 py-2 bg-white/60 backdrop-blur"
              >
                <CheckCircle2 className="w-4 h-4 text-sparkli-pink" />
                <span className="text-sm font-semibold text-foreground">
                  Ашигласан: {totalUsed}
                </span>
              </Badge>
            </div>
          </div>

          {/* Layout: Profile card + lists */}
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] items-start">
            {/* Profile Card */}
            <div className="rounded-3xl bg-white shadow-lg p-6 md:p-7 border border-border/60">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-2xl bg-sparkli-green flex items-center justify-center text-white font-bold text-2xl">
                  {displayUser.username?.charAt(0)?.toUpperCase() ?? "U"}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <User2 className="w-4 h-4 text-muted-foreground" />
                    <h2 className="text-xl font-bold text-foreground">{displayUser.username}</h2>
                  </div>
                  {displayUser.email && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span>{displayUser.email}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Нас</span>
                  </div>
                  <span className="font-semibold text-foreground">
                    {displayUser.age ?? "Тохируулаагүй"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {displayUser.gender === "male" ? (
                      <Mars className="w-4 h-4" />
                    ) : (
                      <Venus className="w-4 h-4" />
                    )}
                    <span>Хүйс</span>
                  </div>
                  <span className="font-semibold text-foreground">
                    {displayUser.gender ?? "Тохируулаагүй"}
                  </span>
                </div>
              </div>

              <Button className="w-full rounded-2xl bg-sparkli-green hover:bg-sparkli-green/90 text-white font-semibold">
                Мэдээлэл шинэчлэх
              </Button>
            </div>

            {/* Coupons sections */}
            <div className="space-y-8">
              {/* My Coupons */}
              <section className="rounded-3xl bg-white shadow-md border border-border/60 p-5 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Ticket className="w-5 h-5 text-sparkli-green" />
                    Авсан купонууд
                  </h3>
                  {totalCoupons > 0 && (
                    <span className="text-sm text-muted-foreground">Нийт {totalCoupons} ш</span>
                  )}
                </div>

                {myCoupons.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Одоогоор авсан купон алга байна. Хямдралуудаас сонгон авах боломжтой.
                  </p>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {myCoupons.map((coupon) => (
                      <CouponCard key={coupon.documentId} {...coupon} />
                    ))}
                  </div>
                )}
              </section>

              {/* Used Coupons */}
              <section className="rounded-3xl bg-white shadow-md border border-border/60 p-5 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sparkli-pink" />
                    Ашигласан купонууд
                  </h3>
                  {totalUsed > 0 && (
                    <span className="text-sm text-muted-foreground">Нийт {totalUsed} ш</span>
                  )}
                </div>

                {usedCoupons.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Ашигласан купон хараахан алга байна. Хямдралуудаа ашиглаад эргэж ирээрэй.
                  </p>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {usedCoupons.map((coupon) => (
                      <CouponCard key={coupon.documentId} {...coupon} />
                    ))}
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


