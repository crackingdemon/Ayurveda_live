"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AvailabilityBookingSection() {
  return (
    <section className="bg-[#0b3b3e] min-h-screen flex items-center py-16 sm:py-20">
      <div className="px-4 sm:px-10 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className=" w-full flex flex-col items-start text-left text-white font-light space-y-6 px-2 md:px-0"
          >
            <h1 className="text-Black-Mango-ExtraBold font-light text-[12vw] sm:text-[48px] md:text-[8vw] lg:text-[5vw] leading-tight serif">
              Availability & Booking
            </h1>

            <h2 className="text-gtwalsheim font-light ml-30 text-center text-[4vw] sm:text-[24px] md:text-[2.5vw] lg:text-[2vw] leading-relaxed">
              Your next step is to email us.
            </h2>

            <p className="text-gtwalsheim text-center font-light text-[3.5vw] sm:text-lg md:text-xl lg:text-[1.3vw] leading-relaxed max-w-2xl">
              These offerings are available on an individual basis, year-round, with limited space to ensure
              personalized care.
            </p>

            <p className="text-gtwalsheim text-center font-light text-[3.5vw] sm:text-lg md:text-xl lg:text-[1.3vw] leading-relaxed max-w-2xl">
              All immersions require an application and intake process to ensure appropriateness and readiness.
              Placements are available at both Anand Prakash Ashram (Tapovan, Rishikesh) and Sri Jungle Ashram
              (Kodikhet) depending on season, preference, and practitioner availability.
            </p>

            <div className="text-gtwalsheim text-center pt-4">
              <h3 className="font-light text-[4vw] sm:text-[24px] md:text-[2.5vw] lg:text-[2vw] leading-relaxed mb-6">
                Begin Your Application
              </h3>

              <button
                className="text-center ml-20 px-8 py-4 border-2 rounded-full border-white text-white hover:bg-white hover:text-[#2d5a5a] transition-all duration-300 font-light text-base sm:text-lg cursor-pointer"
                onClick={() => (window.location.href = "mailto:retreat@khandayoga.com")}
              >
                Contact Us for Availability and Tier Guidance
              </button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="relative w-full lg:w-1/2 max-w-md aspect-square rounded-t-full overflow-hidden shadow-xl"
          >
            <Image
              src="/primary/massage.png"
              alt="Ayurvedic treatment - oil therapy session"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
