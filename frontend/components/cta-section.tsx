import { Button } from "@/components/ui/button"
import { Ticket, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

const benefits = [
  "200+ брэндийн купон",
  "Сар бүр шинэ хямдралууд",
  "VIP онцгой саналууд",
  "Гар утасны апп",
]

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-sparkli-green py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Star className="absolute top-10 left-[10%] h-8 w-8 text-white/20" />
        <Star className="absolute top-20 right-[15%] h-6 w-6 text-white/30" />
        <Star className="absolute bottom-16 left-[20%] h-10 w-10 text-white/15" />
        <Star className="absolute bottom-24 right-[25%] h-5 w-5 text-white/25" />
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
            <Ticket className="h-4 w-4" />
            Хязгаарлагдмал санал
          </div>

          <h2 className="mb-6 text-3xl font-extrabold text-white md:text-5xl">
            <span className="text-balance">Одоо бүртгүүлээд</span>
            <br />
            <span className="text-sparkli-yellow">30% хямдрал авах!</span>
          </h2>

          <p className="mb-8 text-lg text-white/90">
            Эхний 1000 гишүүнд жилийн гишүүнчлэл 30% хямдралтай. Боломжоо бүү алдаарай!
          </p>

          {/* Benefits */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5 text-sparkli-yellow" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <Link href="/pricing">
            <Button
              size="lg"
              className="h-14 rounded-full bg-sparkli-yellow px-8 text-base font-bold text-foreground shadow-lg transition-all hover:bg-sparkli-yellow/90 hover:shadow-xl"
            >
              <Ticket className="mr-2 h-5 w-5" />
              Гишүүн болох
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
