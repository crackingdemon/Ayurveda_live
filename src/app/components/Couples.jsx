"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import Image from "next/image"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

export default function CouplesOptionSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen w-full bg-[#dacbb2] flex items-center justify-center text-[#683900] py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="w-full max-w-7xl flex flex-col 2xl:scale-150 space-y-8"
      >
        {/* Title */}
        <h1 className="text-Black-Mango-ExtraBold text-[#683900] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-light tracking-wide serif">
          Couples Option (Add-On):
        </h1>

        {/* Main Content Container */}
        <div className="text-gtwalsheim w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className="flex-1 space-y-2">
            {/* Subheading */}
            <h2 className="text-[#683900] font-semibold text-xl sm:text-2xl md:text-3xl">
              For those preparing together:
            </h2>

            {/* Services List */}
            <div className="space-y-1 text-[#683900] font-light text-base sm:text-lg md:text-xl leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-[#683900] text-lg font-bold">•</span>
                <p>Joint Ayurvedic consultation</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] text-lg font-bold">•</span>
                <p>Male fertility protocols (ojas support, massage, herbs)</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] text-lg font-bold">•</span>
                <p>Partner Yoga & conscious communication sessions</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#683900] text-lg font-bold">•</span>
                <p>Joint journaling prompts and intention setting</p>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="w-full max-w-2xl">
              <div className="border border-[#683900]/40 rounded-lg overflow-hidden bg-[#dacbb2] shadow-sm">
                {/* Table Header */}
                <div className="grid grid-cols-3 bg-[#683900]/10">
                  <div className="p-3 sm:p-4 border-r border-[#683900]/40 text-left font-semibold text-sm sm:text-base text-[#683900]">
                    Duration
                  </div>
                  <div className="p-3 sm:p-4 border-r border-[#683900]/40 text-left font-semibold text-sm sm:text-base text-[#683900]">
                    Shared Room
                  </div>
                  <div className="p-3 sm:p-4 text-left font-semibold text-sm sm:text-base text-[#683900]">
                    Private Room
                  </div>
                </div>

                {/* Table Rows */}
                <div className="grid grid-cols-3 border-b border-[#683900]/40">
                  <div className="p-3 sm:p-4 border-r border-[#683900]/40 text-left text-sm sm:text-base text-[#683900] font-light">
                    3 Days
                  </div>
                  <div className="p-3 sm:p-4 border-r border-[#683900]/40 text-left text-sm sm:text-base text-[#683900] font-light">
                    ₹33,000 + Tax
                  </div>
                  <div className="p-3 sm:p-4 text-left text-sm sm:text-base text-[#683900] font-light">
                    ₹40,500 + Tax
                  </div>
                </div>

                <div className="grid grid-cols-3 border-b border-[#683900]/40">
                  <div className="p-3 sm:p-4 border-r border-[#683900]/40 text-left text-sm sm:text-base text-[#683900] font-light">
                    7 Days
                  </div>
                  <div className="p-3 sm:p-4 border-r border-[#683900]/40 text-left text-sm sm:text-base text-[#683900] font-light">
                    ₹77,000 + Tax
                  </div>
                  <div className="p-3 sm:p-4 text-left text-sm sm:text-base text-[#683900] font-light">
                    ₹94,500+ Tax
                  </div>
                </div>

                <div className="grid grid-cols-3 border-b border-[#683900]/40">
                  <div className="p-3 sm:p-4 border-r border-[#683900]/40 text-left text-sm sm:text-base text-[#683900] font-light">
                    10 Days
                  </div>
                  <div className="p-3 sm:p-4 border-r border-[#683900]/40 text-left text-sm sm:text-base text-[#683900] font-light">
                    ₹1,10,000 + Tax
                  </div>
                  <div className="p-3 sm:p-4 text-left text-sm sm:text-base text-[#683900] font-light">
                    ₹1,35,000 + Tax
                  </div>
                </div>

                <div className="grid grid-cols-3">
                  <div className="p-3 sm:p-4 border-r border-[#683900]/40 text-left text-sm sm:text-base text-[#683900] font-light">
                    14 Days
                  </div>
                  <div className="p-3 sm:p-4 border-r border-[#683900]/40 text-left text-sm sm:text-base text-[#683900] font-light">
                    ₹1,54,000 + Tax
                  </div>
                  <div className="p-3 sm:p-4 text-left text-sm sm:text-base text-[#683900] font-light">
                    ₹1,89,000 + Tax
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 self-center">
              <Image
                src="/primary/baby.png"
                alt="Pregnant woman with hands on belly representing couples preparing for conception"
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
              />
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-gtwalsheim w-full mt-4">
          <p className="text-[#683900] font-light text-base sm:text-lg md:text-xl leading-relaxed">
            This nurturing Ayurvedic immersion is designed for women—and optionally, couples—who wish to
            <br></br> consciously prepare for conception.
          </p>
          <p className="text-[#683900] font-light text-base sm:text-lg md:text-xl leading-relaxed">
            Rooted in ancient Vedic fertility wisdom, this retreat focuses on physical detoxification, hormonal{" "}
            <br></br> balance, and emotional-spiritual alignment to create a sacred inner environment for new life.
          </p>
        </div>
      </MotionDiv>
    </section>
  )
}
