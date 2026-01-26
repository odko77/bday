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
  User,
  ArrowRight,
  Chrome,
  Check,
} from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  const passwordChecks = [
    { label: "8+ тэмдэгт", valid: password.length >= 8 },
    { label: "Том үсэг", valid: /[A-Z]/.test(password) },
    { label: "Тоо", valid: /[0-9]/.test(password) },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-sparkli-pink via-sparkli-pink/90 to-rose-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-sparkli-yellow/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-sparkli-orange/20 rounded-full blur-2xl" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gift Box 1 */}
          <div className="absolute top-[20%] right-[15%] rotate-[12deg]">
            <div className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <div className="text-4xl">🎁</div>
            </div>
          </div>

          {/* Discount Badge */}
          <div className="absolute top-[45%] left-[15%] rotate-[-8deg]">
            <div className="bg-sparkli-yellow rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl">
              <span className="text-2xl font-black text-yellow-800">50%</span>
              <span className="text-xs font-bold text-yellow-700">OFF</span>
            </div>
          </div>

          {/* Ticket */}
          <div className="absolute bottom-[25%] right-[20%] rotate-[5deg]">
            <div className="bg-white/95 rounded-xl px-6 py-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <Ticket className="w-8 h-8 text-sparkli-pink" />
                <div>
                  <div className="font-bold text-foreground">VIP PASS</div>
                  <div className="text-xs text-muted-foreground">Premium Access</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stars */}
          <div className="absolute top-[10%] left-[30%] text-4xl animate-pulse">✨</div>
          <div className="absolute bottom-[15%] left-[40%] text-3xl animate-pulse delay-300">⭐</div>
          <div className="absolute top-[60%] right-[10%] text-2xl animate-pulse delay-500">💫</div>
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
            Хэмнэлтээ
            <br />
            <span className="text-sparkli-yellow">өнөөдрөөс</span>
            <br />
            эхлүүлээрэй
          </h1>

          <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
            Үнэгүй бүртгүүлээд шилдэг хямдралуудыг хамгийн түрүүнд мэдээрэй.
          </p>

          {/* Features */}
          <div className="space-y-4">
            {[
              "200+ компанийн купонууд",
              "Өдөр бүрийн шинэ санал",
              "Эксклюзив хямдралууд",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 xl:px-20 bg-sparkli-cream">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-sparkli-pink flex items-center justify-center">
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CouponMN</span>
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-foreground mb-2">Бүртгүүлэх</h2>
            <p className="text-muted-foreground">
              Бүртгэлтэй юу?{" "}
              <Link href="/login" className="text-sparkli-pink font-semibold hover:underline">
                Нэвтрэх
              </Link>
            </p>
          </div>

          {/* Social Register */}
          <div className="space-y-3 mb-6">
            <Button
              variant="outline"
              className="w-full h-12 rounded-xl border-2 font-semibold bg-white hover:bg-gray-50 transition-all"
            >
              <Chrome className="w-5 h-5 mr-3" />
              Google-ээр бүртгүүлэх
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

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                Нэр
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Таны нэр"
                  className="h-12 pl-12 rounded-xl border-2 border-border bg-white focus:border-sparkli-pink focus:ring-sparkli-pink/20"
                  required
                />
              </div>
            </div>

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
                  className="h-12 pl-12 rounded-xl border-2 border-border bg-white focus:border-sparkli-pink focus:ring-sparkli-pink/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-semibold text-foreground">
                Нууц үг
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Нууц үг үүсгэх"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pl-12 pr-12 rounded-xl border-2 border-border bg-white focus:border-sparkli-pink focus:ring-sparkli-pink/20"
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
              
              {/* Password Strength */}
              {password && (
                <div className="flex gap-2 mt-2">
                  {passwordChecks.map((check) => (
                    <div
                      key={check.label}
                      className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-colors ${
                        check.valid
                          ? "bg-sparkli-green/10 text-sparkli-green"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {check.valid && <Check className="w-3 h-3" />}
                      {check.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="rounded-md mt-0.5" required />
              <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                <Link href="/terms" className="text-sparkli-pink hover:underline">
                  Үйлчилгээний нөхцөл
                </Link>{" "}
                болон{" "}
                <Link href="/privacy" className="text-sparkli-pink hover:underline">
                  Нууцлалын бодлого
                </Link>
                -г зөвшөөрч байна
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-xl bg-sparkli-pink hover:bg-sparkli-pink/90 text-white font-bold text-base shadow-lg shadow-sparkli-pink/25 transition-all"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Бүртгэж байна...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Бүртгүүлэх
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </Button>
          </form>

          {/* Trust Badge */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              🔒 Таны мэдээлэл бүрэн хамгаалагдсан
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
