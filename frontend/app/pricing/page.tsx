import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Ticket, Star, Crown, Zap } from "lucide-react"

const plans = [
  {
    name: "Үнэгүй",
    price: "0₮",
    period: "сар бүр",
    description: "Эхлэхэд тохиромжтой",
    icon: Ticket,
    color: "bg-secondary",
    buttonColor: "bg-foreground text-white hover:bg-foreground/90",
    features: [
      "10 купон сар бүр",
      "Энгийн хямдралууд (10-20%)",
      "Имэйл мэдэгдэл",
      "Үндсэн брэндүүд",
    ],
    notIncluded: [
      "VIP хямдралууд",
      "Гар утасны апп",
      "Тэргүүлэх дэмжлэг",
    ],
  },
  {
    name: "Standard",
    price: "9,900₮",
    period: "сар бүр",
    description: "Хувь хүнд тохиромжтой",
    icon: Star,
    color: "bg-sparkli-green",
    buttonColor: "bg-sparkli-green text-white hover:bg-sparkli-green/90",
    popular: true,
    features: [
      "Хязгааргүй купон",
      "Дунд зэргийн хямдрал (20-50%)",
      "Push мэдэгдэл",
      "Бүх брэндүүд",
      "Гар утасны апп",
      "Имэйл дэмжлэг",
    ],
    notIncluded: [
      "VIP онцгой хямдрал",
    ],
  },
  {
    name: "Premium",
    price: "19,900₮",
    period: "сар бүр",
    description: "Гэр бүл, бизнест",
    icon: Crown,
    color: "bg-sparkli-yellow",
    buttonColor: "bg-sparkli-yellow text-foreground hover:bg-sparkli-yellow/90",
    features: [
      "Хязгааргүй купон",
      "VIP хямдрал (50-100%)",
      "Шуурхай мэдэгдэл",
      "Бүх брэндүүд + VIP",
      "Гар утасны апп",
      "24/7 дэмжлэг",
      "5 гэр бүлийн гишүүн",
      "Онцгой саналууд",
    ],
    notIncluded: [],
  },
]

const yearlyPlans = [
  {
    name: "Standard жилээр",
    price: "99,000₮",
    originalPrice: "118,800₮",
    savings: "19,800₮ хэмнэлт",
    icon: Star,
    color: "bg-sparkli-blue",
  },
  {
    name: "Premium жилээр",
    price: "199,000₮",
    originalPrice: "238,800₮",
    savings: "39,800₮ хэмнэлт",
    icon: Crown,
    color: "bg-sparkli-orange",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-sparkli-cream pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-sparkli-yellow/30 blur-xl" />
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-sparkli-pink/30 blur-xl" />
          <div className="absolute bottom-20 left-1/4 w-36 h-36 rounded-full bg-sparkli-green/20 blur-xl" />
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sparkli-green/20 px-4 py-2 text-sm font-semibold text-sparkli-green">
            <Zap className="h-4 w-4" />
            Хязгаарлагдмал санал: Эхний сард 30% хямдрал
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            <span className="text-balance">Өөрт тохирох</span>
            <br />
            <span className="text-sparkli-green">багцаа сонгоорой</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Сар бүр мянга мянган төгрөг хэмнэх боломжтой. Гишүүнчлэлийн үнэ өөрөө нөхөгдөнө!
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative overflow-hidden rounded-3xl border-2 ${plan.popular ? "border-sparkli-green shadow-2xl scale-105" : "border-border shadow-lg"} bg-white p-8 transition-all hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 rounded-bl-2xl bg-sparkli-green px-4 py-2 text-sm font-bold text-white">
                    Хамгийн түгээмэл
                  </div>
                )}
                
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${plan.color} text-white`}>
                  <plan.icon className="h-7 w-7" />
                </div>
                
                <h3 className="mb-2 text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mb-4 text-muted-foreground">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                
                <Button className={`mb-8 w-full rounded-full py-6 font-bold ${plan.buttonColor}`}>
                  {plan.price === "0₮" ? "Үнэгүй эхлэх" : "Гишүүн болох"}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sparkli-green/20">
                        <Check className="h-3 w-3 text-sparkli-green" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 opacity-50">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted">
                        <span className="text-xs text-muted-foreground">-</span>
                      </div>
                      <span className="text-muted-foreground line-through">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Plans */}
      <section className="bg-sparkli-cream py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
              <span className="text-sparkli-green">Жилээр авбал</span> илүү хэмнэнэ
            </h2>
            <p className="text-muted-foreground">
              Жилийн гишүүнчлэл авснаар 2 сарын үнэ хэмнэнэ
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
            {yearlyPlans.map((plan) => (
              <div
                key={plan.name}
                className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`absolute top-0 left-0 h-2 w-full ${plan.color}`} />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${plan.color} text-white`}>
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{plan.name}</h3>
                    <span className="inline-block rounded-full bg-sparkli-green/20 px-3 py-1 text-xs font-semibold text-sparkli-green">
                      {plan.savings}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground line-through ml-2">{plan.originalPrice}</span>
                </div>
                
                <Button className="w-full rounded-full bg-foreground text-white hover:bg-foreground/90">
                  Жилээр авах
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground md:text-4xl">
              Түгээмэл <span className="text-sparkli-green">асуултууд</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Купонуудыг хэрхэн ашиглах вэ?",
                  a: "Гар утасны апп эсвэл вэбсайтаас купон сонгоод QR код авна. Дараа нь дэлгүүр, ресторанд QR кодоо уншуулж хямдрал авна.",
                },
                {
                  q: "Гишүүнчлэлээ цуцлах боломжтой юу?",
                  a: "Тийм, хүссэн үедээ гишүүнчлэлээ цуцалж болно. Цуцалсан сарын төгсгөл хүртэл үйлчилгээ үргэлжилнэ.",
                },
                {
                  q: "Нэг купоныг хэдэн удаа ашиглаж болох вэ?",
                  a: "Ихэнх купон нэг удаа ашиглагдана. Зарим онцгой купонуудыг олон удаа ашиглах боломжтой.",
                },
                {
                  q: "Гэр бүлийн гишүүд хэрхэн нэмэх вэ?",
                  a: "Premium багцад 5 хүртэл гэр бүлийн гишүүн нэмж болно. Тохиргооноос гэр бүлийн гишүүдийн имэйлийг оруулна.",
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-border p-6">
                  <h3 className="mb-2 font-bold text-foreground">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
