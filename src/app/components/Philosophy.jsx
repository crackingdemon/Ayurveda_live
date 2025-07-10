"use client"
import { motion } from "framer-motion"

export default function Philosophy() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-32 py-20"
      style={{
        backgroundImage: "url('/primary/last.png')",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="relative z-10 max-w-5xl 2xl:scale-125 mx-auto text-center space-y-12"
      >
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-light text-white text-Black-Mango-ExtraBold leading-tight serif">
          A Sacred Path of Healing
        </h2>

        <p className="text-[clamp(1.1rem,2.3vw,1.6rem)] font-light text-gtwalsheim leading-relaxed max-w-4xl mx-auto">
          Akhanda Ayurveda invites you not only to receive treatment, but to remember the intelligence of your body, the
          rhythm of the earth, and the sacred simplicity of balanced living.
        </p>

        <p className="text-[clamp(1.1rem,2.3vw,1.6rem)] font-light text-gtwalsheim leading-relaxed max-w-4xl mx-auto">
          Whether you come for rest, learning, or transformation, you are welcomed into a lineage of compassionate care,
          time-honored knowledge, and integrated practice.
        </p>

        <div className="pt-8">
          <button
            className="px-8 py-4 border-2 rounded-full border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-light text-base sm:text-lg cursor-pointer"
            onClick={() => (window.location.href = "mailto:retreat@khandayoga.com")}
          >
            Apply Now – Begin Your Ayurvedic Journey
          </button>
        </div>
      </motion.div>
    </section>
  )
}
