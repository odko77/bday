"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Ticket,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  Gift,
  Percent,
  ArrowRight,
  Chrome,
} from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-sparkli-green via-sparkli-green/90 to-emerald-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10 w-80 h-80 bg-sparkli-yellow/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-sparkli-pink/20 rounded-full blur-2xl" />
        </div>

        {/* Floating Coupons */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Coupon 1 */}
          <div className="absolute top-[15%] left-[10%] rotate-[-15deg] animate-pulse">
            <div className="bg-white/95 rounded-2xl p-4 shadow-2xl w-48">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sparkli-orange/20 flex items-center justify-center">
                  <span className="font-bold text-orange-600 text-sm">K</span>
                </div>
                <span className="font-bold text-sm text-foreground">KFC</span>
              </div>
              <div className="text-2xl font-black text-sparkli-orange">50%</div>
              <div className="text-xs text-muted-foreground">Бүх combo-д</div>
            </div>
          </div>

          {/* Coupon 2 */}
          <div className="absolute top-[40%] right-[15%] rotate-[10deg]">
            <div className="bg-white/95 rounded-2xl p-4 shadow-2xl w-44">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sparkli-pink/20 flex items-center justify-center">
                  <span className="font-bold text-pink-600 text-sm">N</span>
                </div>
                <span className="font-bold text-sm text-foreground">Nomin</span>
              </div>
              <div className="text-2xl font-black text-sparkli-pink">30%</div>
              <div className="text-xs text-muted-foreground">Хүнсний бараа</div>
            </div>
          </div>

          {/* Coupon 3 */}
          <div className="absolute bottom-[20%] left-[20%] rotate-[5deg]">
            <div className="bg-white/95 rounded-2xl p-4 shadow-2xl w-52">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sparkli-blue/20 flex items-center justify-center">
                  <span className="font-bold text-blue-600 text-sm">B</span>
                </div>
                <span className="font-bold text-sm text-foreground">Blue Sky</span>
              </div>
              <div className="text-2xl font-black text-sparkli-blue">40%</div>
              <div className="text-xs text-muted-foreground">Зочид буудал</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Ticket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CouponMN</span>
            </Link>
          </div>

          <h1 className="text-4xl xl:text-5xl font-black text-white leading-tight mb-6 text-balance">
            Хамгийн сайн
            <br />
            <span className="text-sparkli-yellow">хямдралуудыг</span>
            <br />
            алдаж болохгүй
          </h1>

          <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
            200+ компанийн купонуудад хандаж, сар бүр мянгаар хэмнээрэй.
          </p>

          {/* Stats */}
          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-black text-white">200+</div>
              <div className="text-white/70 text-sm">Компани</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">50K+</div>
              <div className="text-white/70 text-sm">Хэрэглэгч</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">1M+</div>
              <div className="text-white/70 text-sm">Хэмнэсэн</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 xl:px-20 bg-sparkli-cream">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-sparkli-green flex items-center justify-center">
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CouponMN</span>
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-foreground mb-2">Тавтай морил</h2>
            <p className="text-muted-foreground">
              Бүртгэлгүй юу?{" "}
              <Link href="/register" className="text-sparkli-green font-semibold hover:underline">
                Бүртгүүлэх
              </Link>
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <Button
              variant="outline"
              className="w-full h-12 rounded-xl border-2 font-semibold bg-white hover:bg-gray-50 transition-all"
            >
              <Chrome className="w-5 h-5 mr-3" />
              Google-ээр нэвтрэх
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-sparkli-cream text-muted-foreground">эсвэл</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                Имэйл хаяг
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="h-12 pl-12 rounded-xl border-2 border-border bg-white focus:border-sparkli-green focus:ring-sparkli-green/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-semibold text-foreground">
                  Нууц үг
                </Label>
                <Link href="/forgot-password" className="text-sm text-sparkli-green hover:underline">
                  Мартсан?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Нууц үгээ оруулна уу"
                  className="h-12 pl-12 pr-12 rounded-xl border-2 border-border bg-white focus:border-sparkli-green focus:ring-sparkli-green/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="rounded-md" />
              <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                Намайг сана
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-xl bg-sparkli-green hover:bg-sparkli-green/90 text-white font-bold text-base shadow-lg shadow-sparkli-green/25 transition-all"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Нэвтэрч байна...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Нэвтрэх
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </Button>
          </form>

          {/* Benefits */}
          <div className="mt-10 p-5 rounded-2xl bg-white border-2 border-sparkli-green/20">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sparkli-yellow" />
              Гишүүнчлэлийн давуу тал
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-sparkli-green/10 flex items-center justify-center shrink-0">
                  <Gift className="w-4 h-4 text-sparkli-green" />
                </div>
                <span className="text-muted-foreground">Эксклюзив купонуудад хандах</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-sparkli-orange/10 flex items-center justify-center shrink-0">
                  <Percent className="w-4 h-4 text-sparkli-orange" />
                </div>
                <span className="text-muted-foreground">50% хүртэл нэмэлт хямдрал</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-sparkli-pink/10 flex items-center justify-center shrink-0">
                  <Ticket className="w-4 h-4 text-sparkli-pink" />
                </div>
                <span className="text-muted-foreground">Шинэ купоны мэдэгдэл авах</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
