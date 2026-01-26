import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Болормаа Б.",
    quote:
      "Сар бүр 100,000₮ орчим хэмнэж байна. KFC, Pizza Hut, Nomin-ийн купонуудыг байнга ашигладаг. Үнэхээр сайн платформ!",
    color: "bg-sparkli-yellow",
  },
  {
    name: "Төмөрбаатар Д.",
    quote:
      "Гэр бүлээрээ хоол идэхдээ үргэлж купон ашигладаг болсон. Premium гишүүнчлэл авснаас хойш хоолны зардал 40% буурсан.",
    color: "bg-sparkli-pink",
  },
  {
    name: "Сарантуяа М.",
    quote:
      "Blue Sky зочид буудалд 50% хямдралаар байрласан. Энэ ганц купон гишүүнчлэлийн үнийг нөхчихсөн!",
    color: "bg-sparkli-green",
  },
  {
    name: "Ганбат Э.",
    quote:
      "Бизнесийн хурлуудын үед ресторануудын купонуудыг ашигладаг. Компанийн зардал мэдэгдэхүйц буурсан.",
    color: "bg-sparkli-blue",
  },
  {
    name: "Оюунбилэг Н.",
    quote:
      "Апп-аар маш хялбар купон авч ашигладаг. QR код уншуулаад л хямдрал авдаг. Маш тохиромжтой!",
    color: "bg-sparkli-orange",
  },
  {
    name: "Мөнхбат С.",
    quote:
      "Аялалын купонуудыг их ашигладаг. MIAT, Hunnu Air-ийн хямдралаар олон удаа аялсан.",
    color: "bg-sparkli-yellow",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-5xl">
            <span className="text-balance">Хэрэглэгчдийн</span>
            <br />
            <span className="text-sparkli-green">сэтгэгдэл</span>
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            50,000+ гишүүн хэмнэлтэйгээр амьдарч байна. Тэдний сэтгэгдлийг уншаарай.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl ${index === 1 ? "md:translate-y-4" : ""}`}
            >
              <div className={`absolute top-0 left-0 h-1.5 w-full ${testimonial.color}`} />
              <Quote className={`mb-4 h-8 w-8 ${testimonial.color.replace("bg-", "text-")} opacity-50`} />
              <p className="mb-6 text-foreground leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${testimonial.color}`} />
                <span className="font-bold text-foreground">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
