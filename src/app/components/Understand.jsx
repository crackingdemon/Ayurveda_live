"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function AyurvedaSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen w-full bg-[#7f844d] flex items-center justify-center text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="w-full max-w-6xl flex flex-col items-center text-center space-y-8"
      >
        {/* Title */}
        <h1 className="text-Black-Mango-ExtraBold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug font-normal">
          Understanding Ayurveda: The Sacred <br /> Science of Balance
        </h1>

        {/* Subheading Paragraph */}
        <p className="text-gtwalsheim text-white font-light leading-relaxed max-w-4xl text-base sm:text-lg md:text-xl">
          Derived from the Sanskrit words āyuḥ (life) and veda (knowledge), Ayurveda is the comprehensive study of
          life itself — encompassing not only the physical body, but also the mind, senses, emotions, and spiritual
          constitution.
        </p>

        {/* Key principles title */}
        <h2 className="text-white font-semibold text-xl sm:text-2xl text-gtwalsheim md:text-2xl">
          Key principles include:
        </h2>

        {/* Key Bullet Points */}
        <div className="text-gtwalsheim text-white font-light text-base sm:text-lg md:text-xl leading-relaxed space-y-2 max-w-4xl">
          <p>
            The Three Doṣas: Vāta, Pitta, and Kapha — elemental energies that govern bodily function and mental tendencies.
          </p>
          <p>
            Prakṛti and Vikṛti: Your original constitution versus current imbalances
          </p>
          <p>
            Dinācārya and Ṛtucārya: Daily and seasonal routines to maintain vitality
          </p>
          <p>
            Rasāyana and Āhāra: Rejuvenation through food, herbs, and lifestyle alignment
          </p>
        </div>

        {/* Final Statement */}
        <p className="text-white font-semibold text-gtwalsheim text-lg sm:text-xl md:text-2xl max-w-5xl leading-relaxed pt-4">
          Through personalized assessment, diet, therapies, and subtle lifestyle interventions,
          <br />
          Ayurveda aims not merely to treat illness, but to restore wholeness.
        </p>
      </MotionDiv>
    </section>
  );
}
