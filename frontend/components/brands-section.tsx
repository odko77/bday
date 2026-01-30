"use client"

import Marquee from "react-fast-marquee"
import { useState } from "react"
import { CompanyInterface } from "@/types/coupons"
import { useMemo } from "react"
function MarqueeCard({ item, expandDirection = "up" }: { item: CompanyInterface, expandDirection?: "up" | "down" }) {
  const [isHovered, setIsHovered] = useState(false)

  const logo = useMemo(() => {
    if (!item?.logo_url?.url) {
      return null
    }
    return process.env.NEXT_PUBLIC_BACK_URL + item.logo_url.url
  }, [item?.logo_url])

  return (
    <div
      className={`relative mx-3 h-[200px] flex my-3 transition-all duration-300 ${
        expandDirection === "up" ? "items-end" : "items-start"
      } ${isHovered ? 'z-50' : 'z-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-64 rounded-2xl bg-gradient-to-br p-5 bg-white
          shadow-lg transition-all duration-300 ease-out cursor-pointer
          ${isHovered ? "shadow-2xl" : "shadow-lg"}
        `}
      >
        {/* Title and subtitle always visible */}
        <div className="flex items-center gap-3">
          {logo ? (
              <img src={logo || "/placeholder.svg"} alt={item?.name} className="w-10 h-10 object-contain" />
            ) : (
              item?.name?.charAt(0)
            )}
          <div>
            <h3 className="text-black font-bold text-lg leading-tight">{item.name}</h3>
          </div>
        </div>

        {/* Description */}
        <div
          className="overflow-hidden transition-all duration-300 ease-out"
          style={{
            maxHeight: isHovered ? "120px" : "0px",
            opacity: isHovered ? 1 : 0,
            marginTop: isHovered ? "12px" : "0px",
          }}
        >
          <div className="pt-3 border-t border-white/20">
            <p className="text-black text-sm leading-relaxed">
              {item.description[0].children[0].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BrandsSection({ companies }: { companies: CompanyInterface[] }) {
  return (
    <section id="brands" className="bg-sparkli-cream py-24 pb-0">
      <div className="mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-5xl">
            <span className="text-balance">200+ брэндийн</span>
            <br />
            <span className="text-sparkli-green">хямдралууд</span>
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            Монголын тэргүүлэх компаниудын купонуудыг нэг дороос олоорой.
          </p>
        </div>

        <div className="w-full">
          {/* First Row - Expands UP */}
          <div className="-mt-24">
            <Marquee
              speed={40}
              pauseOnHover={true}
              autoFill
            >
              {companies.map((item) => (
                <MarqueeCard key={item.id} item={item} expandDirection="up" />
              ))}
            </Marquee>
          </div>

          {/* Second Row - Expands DOWN */}
          <div className="">
            <Marquee
              speed={30}
              pauseOnHover={true}
              direction="right"
              autoFill
            >
              {[...companies].reverse().map((item) => (
                <MarqueeCard key={`reverse-${item.id}`} item={item} expandDirection="down" />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
