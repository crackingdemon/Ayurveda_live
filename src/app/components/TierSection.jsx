"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

export default function Tier1Section() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="w-full bg-[#ab6869] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="min-h-screen flex items-center justify-center">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="w-full max-w-6xl flex flex-col items-center space-y-8"
        >
        {/* Title */}
        <h1 className="text-Black-Mango-ExtraBold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug font-normal text-center">
          Tier 1 - Rose Quartz- Rejuvenation: <br />
          Gentle Awakening
        </h1>

        {/* Main Content Container */}
        <div className=" text-gtwalsheim w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side - Includes List */}
          <div className="flex-1 space-y-6">
            <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-4">INCLUDES:</h2>

            <div className="space-y-4 text-white font-light text-base sm:text-lg md:text-xl leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-white mt-1 text-lg font-bold">•</span>
                <p>Ayurvedic consultation (dosha & lifestyle assessment)</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-white mt-1 text-lg font-bold">•</span>
                <p>1x Abhyanga full-body oil massage</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-white mt-1 text-lg font-bold">•</span>
                <p>2x additional Ayurvedic therapies (Nasya, Herbal Foot Soak, Face Marma, or Steam)</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-white mt-1 text-lg font-bold">•</span>
                <p>Daily Yoga & Meditation</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-white mt-1 text-lg font-bold">•</span>
                <p>Ashram living, shared accommodation, sattvic meals</p>
              </div>
            </div>
          </div>

          {/* Right Side - Pricing Table */}
          <div className="flex-1 w-full max-w-md">
            <div className="border border-white/30 rounded-lg overflow-hidden bg-white/10">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-white/20">
                <div className="p-3 sm:p-4 border-r border-white/30 text-left font-semibold text-sm sm:text-base">
                  Duration
                </div>
                <div className="p-3 sm:p-4 border-r border-white/30 text-left font-semibold text-sm sm:text-base">
                  Shared Room
                </div>
                <div className="p-3 sm:p-4 text-left font-semibold text-sm sm:text-base">Private Room</div>
              </div>

              {/* Table Rows */}
              <div className="grid grid-cols-3 border-b border-white/30">
                <div className="p-3 sm:p-4 border-r border-white/30 text-left text-sm sm:text-base font-light">
                  3 Days
                </div>
                <div className="p-3 sm:p-4 border-r border-white/30 text-left text-sm sm:text-base font-light">
                  ₹18,000 + Tax
                </div>
                <div className="p-3 sm:p-4 text-left text-sm sm:text-base font-light">₹25,500 + Tax</div>
              </div>

              <div className="grid grid-cols-3">
                <div className="p-3 sm:p-4 border-r border-white/30 text-left text-sm sm:text-base font-light">
                  7 Days
                </div>
                <div className="p-3 sm:p-4 border-r border-white/30 text-left text-sm sm:text-base font-light">
                  ₹42,000 + Tax
                </div>
                <div className="p-3 sm:p-4 text-left text-sm sm:text-base font-light">₹59,500 + Tax</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-gtwalsheim w-full max-w-4xl mt-8">
          <p className="text-white font-light text-base sm:text-lg md:text-xl leading-relaxed text-center">
            Gently nurture your mind, body, and spirit with Rejuvenation. Through personalized Ayurvedic care, soothing
            therapies, and immersive Ashram living, find calm, clarity, and renewed balance—perfect for anyone seeking a
            peaceful reset.
          </p>
        </div>

        {/* Book Now Button */}
        <div className="w-full flex justify-center mt-8">
          <a
            href="mailto:ayurveda@akhandayoga.com?subject=Book Now - Tier 1 Rose Quartz Rejuvenation&body=Hello, I would like to book the Tier 1 Rose Quartz Rejuvenation package. Please provide me with more information about availability and booking process."
            className="bg-white text-[#ab6869] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            Book Now
          </a>
        </div>
        </MotionDiv>
      </div>
    </section>
  )
}
