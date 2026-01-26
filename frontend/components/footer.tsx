import { SITE_CONFIG } from "@/utils/settings"
import { Ticket } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sparkli-green">
              <Ticket className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold">{SITE_CONFIG.title}</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#features" className="text-white/70 transition-colors hover:text-white">
              Онцлогууд
            </a>
            <a href="#brands" className="text-white/70 transition-colors hover:text-white">
              Брэндүүд
            </a>
            <Link href="/pricing" className="text-white/70 transition-colors hover:text-white">
              Үнийн мэдээлэл
            </Link>
            <a href="#testimonials" className="text-white/70 transition-colors hover:text-white">
              Сэтгэгдэл
            </a>
          </div>

          <p className="text-sm text-white/60">
            2026 {SITE_CONFIG.title}. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  )
}
