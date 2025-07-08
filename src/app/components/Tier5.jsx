"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Tier5Section() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen w-full bg-[#683900] flex items-center justify-center text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="w-full max-w-6xl flex flex-col items-center space-y-8"
      >
        {/* Title */}
        <h1 className="text-Black-Mango-ExtraBold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-light text-center tracking-wide serif">
          Tier 5: Rudraksha - <br />
          Pañchakarma
        </h1>

        {/* Main Content Container */}
        <div className="text-gtwalsheim w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side - Includes List */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[#ffba00] font-bold text-lg sm:text-xl md:text-2xl mb-2">
              INCLUDES:
            </h2>

            <div className="space-y-1 text-white font-light text-base sm:text-lg md:text-xl leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-[white] mt-1 text-lg font-bold">•</span>
                <p>Private accommodation only</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[white] mt-1 text-lg font-bold">•</span>
                <p>Full Ayurvedic intake: pulse & tongue diagnosis</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[white] mt-1 text-lg font-bold">•</span>
                <p>Structured 21-day process:</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[white] mt-1 text-lg font-bold">•</span>
                <p>Pre-cleanse (3-5 days): Snehana (oleation), light diet</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[white] mt-1 text-lg font-bold">•</span>
                <p>
                  14-day Pañchakarma core (Vamana, Virechana, Basti, Nasya,
                  tailored)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[white] mt-1 text-lg font-bold">•</span>
                <p>
                  Post-cleanse integration (3-5 days): rasayana, lifestyle
                  planning, meditative rest
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[white] mt-1 text-lg font-bold">•</span>
                <p>Unlimited Ayurvedic treatments under supervision</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[white] mt-1 text-lg font-bold">•</span>
                <p>Daily yoga, mantra, journaling, sattvic meals</p>
              </div>
            </div>
          </div>

          {/* Right Side - Pricing Table */}
          <div className="flex-1 w-full max-w-md">
            <div className="border border-white/40 rounded-lg overflow-hidden bg-[#683900] shadow-sm">
              {/* Table Header */}
              <div className="grid grid-cols-3">
                <div className="p-3 sm:p-4 border-r border-white/40 text-left font-semibold text-sm sm:text-base text-white]">
                  Duration
                </div>
                <div className="p-3 sm:p-4 border-r border-white/40 text-left font-semibold text-sm sm:text-base text-white">
                  Accommodation
                </div>
                <div className="p-3 sm:p-4 text-left font-semibold text-sm sm:text-base text-white">
                  Price
                </div>
              </div>

              {/* Table Row */}
              <div className="grid grid-cols-3">
                <div className="p-3 sm:p-4 border-r border-white/40 text-left text-sm sm:text-base text-white font-light">
                  21 Days
                </div>
                <div className="p-3 sm:p-4 border-r border-white/40 text-left text-sm sm:text-base text-white font-light">
                  Private only
                </div>
                <div className="p-3 sm:p-4 text-left text-sm sm:text-base text-white font-light">
                  ₹2,83,500
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-gtwalsheim w-full mt-4">
          <p className="text-[#ffba00] font-light text-base sm:text-lg md:text-xl leading-relaxed text-center">
            Experience profound renewal with Rudraksha – Pañchakarma. This
            21-day journey delivers a complete cleanse—preparation, core detox,
            and reintegration—under private care. Designed for deep purification
            and spiritual clarity, it offers transformation that resonates long
            after the retreat ends.
          </p>
        </div>
      </MotionDiv>
    </section>
  );
}
