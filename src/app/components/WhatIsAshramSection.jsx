"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function WhyAshramAyurveda() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <style jsx>{`
        /* Responsive adjustments */
        @media (max-width: 767px) {
          .section-title {
            font-size: 2rem;
            line-height: 1.2;
          }
          .intro-paragraph, .benefit-item, .conclusion-paragraph {
            font-size: 0.9rem;
            text-align: center;
          }
          .benefit-list {
            padding-left: 0;
          }
          .benefit-item {
            margin-left: auto;
            margin-right: auto;
            max-width: 300px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .section-title {
            font-size: 3rem;
          }
          .intro-paragraph, .benefit-item, .conclusion-paragraph {
            font-size: 1rem;
          }
        }
      `}</style>
      <section className="min-h-screen w-max-[100vw] bg-[#fffdf3] flex flex-col items-center justify-center  py-12 px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-Black-Mango-ExtraBold text-[#031059] 2xl:text-[4vw] text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-12 section-title font-normal"
        >
          Why Ayurveda Within the Ashram <br /> Context?
        </motion.h1>

        <div className="text-gtwalsheim w-full text-[#031059] flex flex-col items-center text-center">
          {/* Introductory Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className=" font-bold text-base sm:text-lg md:text-2xl 2xl:text-[1.5vw] leading-relaxed mb-8 intro-paragraph"
          >
            Unlike many clinical or commercial wellness centres, Akhanda Ayurveda is held within the sacred context of
            Ashram life. This provides a uniquely supportive environment for healing:
          </motion.p>

          {/* Benefit List */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-3 font-light text-base sm:text-lg md:text-xl 2xl:text-[1.5vw] leading-relaxed mb-8 benefit-list"
          >
            <li className="benefit-item">Daily rituals that anchor the nervous system</li>
            <li className="benefit-item">Silence and spiritual rhythm to amplify integration</li>
            <li className="benefit-item">Sattvic meals prepared with intentionality</li>
            <li className="benefit-item">A community of like-hearted seekers</li>
            <li className="benefit-item">Teachings from a living Yogic lineage</li>
          </motion.ul>

          {/* Concluding Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className=" font-bold text-base sm:text-lg md:text-2xl leading-relaxed 2xl:text-[1.5vw] conclusion-paragraph"
          >
            This container strengthens not only the body but the inner resolve – allowing healing to take root at the
            deepest levels of being.
          </motion.p>
        </div>
      </section>
    </>
  )
}
