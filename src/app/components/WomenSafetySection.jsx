"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AvailabilityBookingSection() {
  return (
    <section className="bg-[#0b3b3e] min-h-screen flex items-center py-16 sm:py-20">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        {/* Heading Centered Above Everything */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-Black-Mango-ExtraBold font-light text-[10vw] sm:text-[48px] md:text-[7vw] lg:text-[5vw] 2xl:text-[5vw] leading-tight text-center serif mb-12 text-white"
        >
          Availability & Booking
        </motion.h1>

        {/* Content and Image */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="w-full lg:w-1/2 flex flex-col items-center text-white font-light text-[3.5vw] sm:text-lg md:text-xl lg:text-[1.2vw] space-y-6"
          >
            {/* Subheading */}
            <h2 className="text-gtwalsheim font-light text-center w-full text-[4vw] sm:text-[24px] md:text-[2vw] lg:text-[1.5vw] leading-relaxed">
              Your next step is to email us.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gtwalsheim font-light text-center w-full max-w-3xl mx-auto text-[3.5vw] sm:text-lg md:text-xl lg:text-[1.2vw] leading-relaxed">
              These offerings are available on an individual basis, year-round, with limited space to ensure personalized care.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gtwalsheim font-light text-center w-full max-w-3xl mx-auto text-[3.5vw] sm:text-lg md:text-xl lg:text-[1.2vw] leading-relaxed">
              All immersions require an application and intake process to ensure appropriateness and readiness. Placements are
              available at both Anand Prakash Ashram (Tapovan, Rishikesh) and Sri Jungle Ashram (Kodikhet) depending on season,
              preference, and practitioner availability.
            </p>

            {/* Button Section */}
            <div className="text-gtwalsheim text-center pt-4 w-full flex flex-col items-center">
              <h3 className="font-light text-[4vw] sm:text-[24px] md:text-[2vw] lg:text-[1.5vw] leading-relaxed mb-6">
                Begin Your Application
              </h3>

              <button
                className="px-8 py-4 border-2 rounded-full border-white text-white hover:bg-white hover:text-[#2d5a5a] transition-all duration-300 font-light text-base sm:text-lg cursor-pointer"
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
            className="relative w-full lg:w-1/2 max-w-[500px] 2xl:max-w-[600px] aspect-square rounded-t-full overflow-hidden shadow-xl"
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
