"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Ticket, Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sparkli-cream/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sparkli-green">
              <Ticket className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold text-foreground">CouponMN</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/coupons" className="font-semibold text-sparkli-green transition-colors hover:text-sparkli-green/80">
              Купонууд
            </Link>
            <a href="#features" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
              Онцлогууд
            </a>
            <a href="#brands" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
              Брэндүүд
            </a>
            <Link href="/pricing" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
              Үнийн мэдээлэл
            </Link>
            <Link href="/login">
              <Button variant="outline" className="rounded-full border-2 border-sparkli-green px-6 font-bold text-sparkli-green hover:bg-sparkli-green hover:text-white bg-transparent">
                Нэвтрэх
              </Button>
            </Link>
            <Link href="/register">
              <Button className="rounded-full bg-sparkli-green px-6 font-bold text-white hover:bg-sparkli-green/90">
                Бүртгүүлэх
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="border-t border-border pb-6 md:hidden">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/coupons" className="font-semibold text-sparkli-green transition-colors hover:text-sparkli-green/80">
                Купонууд
              </Link>
              <a href="#features" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
                Онцлогууд
              </a>
              <a href="#brands" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
                Брэндүүд
              </a>
              <Link href="/pricing" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
                Үнийн мэдээлэл
              </Link>
              <Link href="/login">
                <Button variant="outline" className="w-full rounded-full border-2 border-sparkli-green font-bold text-sparkli-green hover:bg-sparkli-green hover:text-white bg-transparent">
                  Нэвтрэх
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full rounded-full bg-sparkli-green font-bold text-white hover:bg-sparkli-green/90">
                  Бүртгүүлэх
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
