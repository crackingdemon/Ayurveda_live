"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

export default function Tier3Section() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen w-full bg-gray-100 flex items-center justify-center text-[#031059] py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="w-full max-w-6xl flex flex-col items-center 2xl:scale-125 space-y-8"
      >
        {/* Title */}
        <h1 className="text-Black-Mango-ExtraBold text-[#031059] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug font-normal text-center">
          Tier 3: Moonstone - <br className="sm:hidden" />
          Samskāra Cleanse
        </h1>

        {/* Main Content Container */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side - Treatment List */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[#031059] text-gtwalsheim font-bold text-lg sm:text-xl md:text-2xl mb-4">
              INCLUDES EVERYTHING IN AMETHYST, PLUS:
            </h2>

            <div className="space-y-2 text-[#031059] text-gtwalsheim font-normal text-base sm:text-lg md:text-xl leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-[#031059] mt-1 text-lg">•</span>
                <p>Total of 7 Ayurvedic treatments, progressively deeper</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#031059] mt-1 text-lg">•</span>
                <p>Therapies may include Virechana, Netra Tarpana, individualized rasayana formulas</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#031059] mt-1 text-lg">•</span>
                <p>Daily guidance: cleansing rituals, herbal teas, fasting/light days</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#031059] mt-1 text-lg">•</span>
                <p>Lifestyle realignment & journaling prompts</p>
              </div>
            </div>
          </div>

          {/* Right Side - Pricing Table */}
          <div className="flex-1 w-full">
            <div className="border text-gtwalsheim border-[#031059]/30 rounded-lg overflow-hidden bg-white">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-[#031059]/5">
                <div className="p-3 sm:p-4 border-r border-[#031059]/30 text-center font-semibold text-sm sm:text-base">
                  Duration
                </div>
                <div className="p-3 sm:p-4 border-r border-[#031059]/30 text-center font-semibold text-sm sm:text-base">
                  Shared Room
                </div>
                <div className="p-3 sm:p-4 text-center font-semibold text-sm sm:text-base">Private Room</div>
              </div>

              {/* Table Rows */}
              <div className="grid grid-cols-3 border-b border-[#031059]/30">
                <div className="p-3 sm:p-4 border-r border-[#031059]/30 text-center text-sm sm:text-base">3 Days</div>
                <div className="p-3 sm:p-4 border-r border-[#031059]/30 text-center text-sm sm:text-base">
                  ₹33,000 + Tax
                </div>
                <div className="p-3 sm:p-4 text-center text-sm sm:text-base">₹40,500 + Tax</div>
              </div>

              <div className="grid grid-cols-3 border-b border-[#031059]/30">
                <div className="p-3 sm:p-4 border-r border-[#031059]/30 text-center text-sm sm:text-base">7 Days</div>
                <div className="p-3 sm:p-4 border-r border-[#031059]/30 text-center text-sm sm:text-base">
                  ₹77,000 + Tax
                </div>
                <div className="p-3 sm:p-4 text-center text-sm sm:text-base">₹94,500+ Tax</div>
              </div>

              <div className="grid grid-cols-3 border-b border-[#031059]/30">
                <div className="p-3 sm:p-4 border-r border-[#031059]/30 text-center text-sm sm:text-base">10 Days</div>
                <div className="p-3 sm:p-4 border-r border-[#031059]/30 text-center text-sm sm:text-base">
                  ₹1,10,000 + Tax
                </div>
                <div className="p-3 sm:p-4 text-center text-sm sm:text-base">₹1,35,000 + Tax</div>
              </div>

              <div className="grid grid-cols-3">
                <div className="p-3 sm:p-4 border-r border-[#031059]/30 text-center text-sm sm:text-base">14 Days</div>
                <div className="p-3 sm:p-4 border-r border-[#031059]/30 text-center text-sm sm:text-base">
                  ₹1,54,000 + Tax
                </div>
                <div className="p-3 sm:p-4 text-center text-sm sm:text-base">₹1,89,000 + Tax</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="w-full max-w-5xl mt-8">
          <p className="text-[#031059] text-gtwalsheim font-normal text-base sm:text-lg md:text-xl leading-relaxed text-center">
            Purify deeply with Moonstone – Samskāra Cleanse. Featuring seven transformative Ayurvedic therapies— like
            Virechana and Netra Tarpana—along with guided rituals, herbal support, and mindful journaling, this tier
            realigns your body, mind, and spirit for lasting balance and clarity.
          </p>
        </div>
      </MotionDiv>
    </section>
  )
}
