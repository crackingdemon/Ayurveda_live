"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

export default function Tier2Section() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen w-full bg-[#6141ac] flex items-center justify-center text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="w-full max-w-6xl flex flex-col items-center 2xl:scale-125 space-y-8"
      >
        {/* Title */}
        <h1 className="text-Black-Mango-ExtraBold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug font-normal text-center">
          Tier 2: Amethyst - Ārogya Healing
        </h1>

        {/* Main Content Container */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side - Treatment List */}
          <div className="flex-1 space-y-4">
            <h2 className="text-yellow-300 text-gtwalsheim font-semibold text-xl sm:text-2xl md:text-2xl mb-4">
              INCLUDES EVERYTHING IN TIER 1, PLUS:
            </h2>
            <h3 className="text-white text-gtwalsheim font-light text-lg sm:text-xl md:text-2xl mb-6">
              Daily therapeutic treatments (5 total):
            </h3>
            <div className="space-y-1 text-gtwalsheim text-white font-light text-base sm:text-lg md:text-xl leading-relaxed">
              <p>1× Shirodhara (oil stream therapy)</p>
              <p>1× Abhyanga</p>
              <p>1× Herbal Steam</p>
              <p>2× practitioner-selected therapies (e.g.,</p>
              <p className="ml-4">Udvartana, Pinda Sweda, Nasya)</p>
            </div>
          </div>

          {/* Right Side - Pricing Table */}
          <div className="flex-1 w-full">
            <div className="border border-white/30 rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="grid text-gtwalsheim text-yellow-300 grid-cols-3 bg-white/10">
                <div className="p-4 border-r border-white/30 text-center font-semibold">Duration</div>
                <div className="p-4 border-r border-white/30 text-center font-semibold">Shared Room</div>
                <div className="p-4 text-center font-semibold">Private Room</div>
              </div>

              {/* Table Rows */}
              <div className="grid text-gtwalsheim grid-cols-3 border-b border-white/30">
                <div className="p-4 border-r border-white/30 text-center">3 Days</div>
                <div className="p-4 border-r border-white/30 text-center">₹27,000 + Tax</div>
                <div className="p-4 text-center">₹34,500 + Tax</div>
              </div>

              <div className="grid text-gtwalsheim grid-cols-3 border-b border-white/30">
                <div className="p-4 border-r border-white/30 text-center">7 Days</div>
                <div className="p-4 border-r border-white/30 text-center">₹63,000 + Tax</div>
                <div className="p-4 text-center">₹80,500 + Tax</div>
              </div>

              <div className="grid text-gtwalsheim grid-cols-3 border-b border-white/30">
                <div className="p-4 border-r border-white/30 text-center">10 Days</div>
                <div className="p-4 border-r border-white/30 text-center">₹90,000 + Tax</div>
                <div className="p-4 text-center">₹1,15,000 + Tax</div>
              </div>

              <div className="grid text-gtwalsheim grid-cols-3">
                <div className="p-4 border-r border-white/30 text-center">14 Days</div>
                <div className="p-4 border-r border-white/30 text-center">₹1,26,000 + Tax</div>
                <div className="p-4 text-center">₹1,61,000 + Tax</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="w-full max-w-5xl mt-8">
          <p className="text-white font-light text-base sm:text-lg md:text-xl text-gtwalsheim leading-relaxed text-center">
            Step deeper into healing with— Ārogya Healing. This immersive retreat clears energetic and physical
            blockages through a full range of therapeutic treatments—Shirodhara, Abhyanga, Herbal Steam, and more
            —within the nurturing flow of Ashram life. Ideal for those seeking release, renewal, and a realignment of
            intuition, this tier supports profound restoration and inner clarity.
          </p>
        </div>
      </MotionDiv>
    </section>
  )
}
