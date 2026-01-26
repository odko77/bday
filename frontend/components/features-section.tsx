import { Bell, Percent, Shield, Smartphone, Clock, Star } from "lucide-react"

const features = [
  {
    title: "Шинэ купонуудын мэдэгдэл",
    description: "Таны дуртай брэндүүдийн шинэ купон гарахад тэр даруй мэдэгдэл авна",
    icon: Bell,
    color: "bg-sparkli-green",
  },
  {
    title: "Том хэмжээний хямдрал",
    description: "50%-100% хүртэл хямдралтай купонуудыг зөвхөн гишүүдэд санал болгоно",
    icon: Percent,
    color: "bg-sparkli-yellow",
  },
  {
    title: "Баталгаат купонууд",
    description: "Бүх купонууд шалгагдсан, баталгаатай бөгөөд ажиллахыг 100% баталгаажуулна",
    icon: Shield,
    color: "bg-sparkli-pink",
  },
  {
    title: "Гар утасны апп",
    description: "iOS болон Android апп-аар хаанаас ч купонуудаа ашиглах боломжтой",
    icon: Smartphone,
    color: "bg-sparkli-blue",
  },
  {
    title: "Хугацаатай санал",
    description: "Өдөр бүр шинэ хязгаарлагдмал хугацааны хямдралууд нэмэгддэг",
    icon: Clock,
    color: "bg-sparkli-orange",
  },
  {
    title: "VIP хямдралууд",
    description: "Premium гишүүдэд зориулсан онцгой, өндөр хэмжээний хямдралууд",
    icon: Star,
    color: "bg-sparkli-green",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-5xl">
            <span className="text-balance">Яагаад бидэнтэй</span>
            <br />
            <span className="text-sparkli-green">хамтрах вэ?</span>
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            Монголын хамгийн том купон платформ. 200+ брэндийн хямдралыг нэг дороос олоорой.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} text-white transition-transform group-hover:scale-110`}
              >
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
