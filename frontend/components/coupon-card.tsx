"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Ticket, Clock, Copy, Check, Flame, Star } from "lucide-react"
import { useState } from "react"

interface CouponCardProps {
  id: string
  company: string
  logo?: string
  discount: string
  description: string
  code?: string
  validUntil: string
  category: string
  color: "green" | "yellow" | "orange" | "pink" | "blue"
  isHot?: boolean
  isNew?: boolean
  usageCount?: number
}

const colorMap = {
  green: {
    bg: "bg-sparkli-green",
    bgLight: "bg-sparkli-green/10",
    text: "text-sparkli-green",
    border: "border-sparkli-green/30",
    gradient: "from-sparkli-green/20 via-transparent to-transparent",
  },
  yellow: {
    bg: "bg-sparkli-yellow",
    bgLight: "bg-sparkli-yellow/20",
    text: "text-yellow-700",
    border: "border-sparkli-yellow/50",
    gradient: "from-sparkli-yellow/30 via-transparent to-transparent",
  },
  orange: {
    bg: "bg-sparkli-orange",
    bgLight: "bg-sparkli-orange/15",
    text: "text-orange-700",
    border: "border-sparkli-orange/40",
    gradient: "from-sparkli-orange/20 via-transparent to-transparent",
  },
  pink: {
    bg: "bg-sparkli-pink",
    bgLight: "bg-sparkli-pink/15",
    text: "text-pink-700",
    border: "border-sparkli-pink/40",
    gradient: "from-sparkli-pink/20 via-transparent to-transparent",
  },
  blue: {
    bg: "bg-sparkli-blue",
    bgLight: "bg-sparkli-blue/15",
    text: "text-blue-700",
    border: "border-sparkli-blue/40",
    gradient: "from-sparkli-blue/20 via-transparent to-transparent",
  },
}

export function CouponCard({
  company,
  logo,
  discount,
  description,
  code,
  validUntil,
  category,
  color,
  isHot,
  isNew,
  usageCount,
}: CouponCardProps) {
  const [copied, setCopied] = useState(false)
  const colors = colorMap[color]

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="group relative">
      {/* Main Card */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-white border-2 ${colors.border} shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
      >
        {/* Top Gradient Accent */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} pointer-events-none`} />

        {/* Ticket Cutouts */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-sparkli-cream border-2 border-r-0 border-dashed border-muted-foreground/20" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 rounded-full bg-sparkli-cream border-2 border-l-0 border-dashed border-muted-foreground/20" />

        {/* Dashed Line */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-muted-foreground/15" />

        {/* Content */}
        <div className="relative p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Company Logo */}
              <div
                className={`w-14 h-14 rounded-xl ${colors.bgLight} flex items-center justify-center font-bold text-lg ${colors.text} shadow-inner`}
              >
                {logo ? (
                  <img src={logo || "/placeholder.svg"} alt={company} className="w-10 h-10 object-contain" />
                ) : (
                  company.charAt(0)
                )}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base leading-tight">{company}</h3>
                <span className="text-xs text-muted-foreground">{category}</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-col gap-1.5 items-end">
              {isHot && (
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-0.5 rounded-full border-0 shadow-sm">
                  <Flame className="w-3 h-3 mr-1" />
                  Hot
                </Badge>
              )}
              {isNew && (
                <Badge className="bg-gradient-to-r from-sparkli-green to-emerald-500 text-white text-xs px-2 py-0.5 rounded-full border-0 shadow-sm">
                  <Star className="w-3 h-3 mr-1" />
                  New
                </Badge>
              )}
            </div>
          </div>

          {/* Discount Display */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className={`text-4xl font-black ${colors.text}`}>{discount}</span>
              <span className="text-lg font-semibold text-muted-foreground">хямдрал</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative px-5 pb-5 pt-6">
          {/* Coupon Code */}
          {code && (
            <div
              className={`mb-4 flex items-center justify-between rounded-xl ${colors.bgLight} px-4 py-3 border ${colors.border}`}
            >
              <div>
                <span className="text-xs text-muted-foreground block mb-0.5">Купон код</span>
                <span className="font-mono font-bold text-foreground tracking-wider">{code}</span>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCopy}
                className={`rounded-lg ${copied ? "text-sparkli-green" : colors.text} hover:bg-white/50`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>{validUntil} хүртэл</span>
            </div>
            {usageCount && (
              <span className="text-xs text-muted-foreground">{usageCount}+ хэрэглэсэн</span>
            )}
          </div>

          {/* Action Button */}
          <Button
            className={`w-full mt-4 rounded-xl ${colors.bg} text-white font-semibold shadow-md hover:opacity-90 transition-all`}
          >
            <Ticket className="w-4 h-4 mr-2" />
            Купон авах
          </Button>
        </div>
      </div>
    </div>
  )
}

// Compact version for lists
export function CouponCardCompact({
  company,
  discount,
  description,
  validUntil,
  category,
  color,
  isHot,
}: Omit<CouponCardProps, "id" | "code" | "usageCount" | "isNew" | "logo">) {
  const colors = colorMap[color]

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-2xl bg-white border-2 ${colors.border} shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer`}
    >
      {/* Logo */}
      <div
        className={`w-12 h-12 rounded-xl ${colors.bgLight} flex items-center justify-center font-bold ${colors.text} shrink-0`}
      >
        {company.charAt(0)}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-foreground text-sm truncate">{company}</h3>
          {isHot && <Flame className="w-3.5 h-3.5 text-orange-500 shrink-0" />}
        </div>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
        <span className="text-xs text-muted-foreground">{validUntil} хүртэл</span>
      </div>

      {/* Discount */}
      <div className={`text-right shrink-0`}>
        <span className={`text-2xl font-black ${colors.text}`}>{discount}</span>
      </div>
    </div>
  )
}
