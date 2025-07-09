"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

export default function Tier4Section() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen w-full bg-[#dacbb2] flex items-center text-[#683900] py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="w-full max-w-6xl flex flex-col items-center 2xl:scale-125 space-y-8"
      >
        {/* Title */}
        <h1 className="text-Black-Mango-ExtraBold text-[#683900] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-light text-center tracking-wide serif">
          Tier 4: Tulsi - Sacred <br />
          Conception Preparation
        </h1>

        {/* Main Content Container */}
        <div className="w-full flex flex-col items-start max-w-4xl">
          {/* Includes Section */}
          <div className="text-gtwalsheim w-full space-y-6">
            <h2 className="text-[#683900] font-bold text-lg sm:text-xl md:text-2xl mb-4 tracking-wide">INCLUDES:</h2>

            <div className="space-y-4 text-[#683900] font-light text-base sm:text-lg md:text-xl leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-[#683900] mt-1 text-lg font-bold">•</span>
                <p>Full Ayurvedic intake with fertility & cycle focus</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] mt-1 text-lg font-bold">•</span>
                <p>5-7 tailored therapies (e.g., Abhyanga, Nabhi Basti, Netra Tarpana, Pichu, herbal steam)</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] mt-1 text-lg font-bold">•</span>
                <p>Fertility-enhancing rasāyana and hormone-balancing herbal support</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] mt-1 text-lg font-bold">•</span>
                <p>Ayurvedic fertility nutrition guidance & sattvic diet</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] mt-1 text-lg font-bold">•</span>
                <p>Daily Yoga & womb meditation practices</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] mt-1 text-lg font-bold">•</span>
                <p>Guided journaling and mantra for śakti activation</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] mt-1 text-lg font-bold">•</span>
                <p>Emotional clearing & sacred intention rituals</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] mt-1 text-lg font-bold">•</span>
                <p>Optional partner support track (see below)</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] mt-1 text-lg font-bold">•</span>
                <p>Private or shared Ashram accommodation & sattvic meals</p>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}
