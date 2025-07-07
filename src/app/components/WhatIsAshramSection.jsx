"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function YogaAshramNotForSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full bg-[#8ebfb4] text-wrap text-[#0b3b3e] py-24 px-[3vw]">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-center space-y-10 mb-10" // Added margin bottom here
      >
        <h2 className="text-4xl sm:text-5xl text-roboxcrough font-semibold leading-tight">
          What is a Yoga Ashram?
        </h2>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-center"
      >
        <p className=" text-xl md:text-2xl sm:text-2xl  font-light text-gtwalsheim leading-tight">
          A Yoga Ashram is a spiritual sanctuary, traditionally located in nature,
          where individuals live, practice, and study the Yogic way of life.
          <br className="hidden sm:block" />
          Unlike retreats or resorts, an Ashram is not a getaway—it is a coming home
          to simplicity, discipline, and conscious community.
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: false }}
        className="text-center text-gtwalsheim text-xl sm:text-2xl leading-loose  mt-4"
      >
        <p className="font-extrabold sm:text-xl md:text-[2vw]  stroke-3">
          The rhythm of Ashram life supports the mind, body, and soul through:
        </p>
        <p className="font-light">
          Daily sadhana (spiritual practice) including meditation, pranayama, mantra, and asana
        </p>
        <p className="font-light">Sacred rituals, such as Fire Ceremonies (Agni Hotra)</p>
        <p className="font-light">
          Sattvic vegetarian meals, often prepared in accordance with Ayurvedic principles
        </p>
        <p className="font-light">Karma Yoga, the practice of selfless service</p>
        <p className="font-light">Periods of silence and reflection, offering space for inner clarity</p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: false }}
        className="text-center text-gtwalsheim font-extrabold text-xl sm:text-2xl leading-relaxed space-y-4 pt-10"
      >
        <p>
          Our Akhanda Ashrams welcome guests into this timeless rhythm with loving guidance and modern accessibility.
          <br />
          They are inclusive sanctuaries for all seekers—regardless of experience level or background.
          <br />
          Guests are encouraged to engage fully in the scheduled practices and activities for the deepest support of their wellbeing and to honour the collective sanctuary space.
        </p>
        
      </MotionDiv>
    </section>
  );
}
