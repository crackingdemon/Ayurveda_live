'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const MotionDiv = dynamic(() =>
  import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
);

export default function JungleYogaSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style jsx>{`
        /* Tablet between 768px and 1024px: force single column layout */
        @media (min-width: 768px) and (max-width: 1024px) {
          .tablet-show-mobile-grid {
            display: block !important;
          }
          .tablet-hide-desktop-grid {
            display: none !important;
          }
        }
        /* Desktop 1025px and up: grid 2 columns */
        @media (min-width: 1025px) {
          .tablet-show-mobile-grid {
            display: none !important;
          }
          .tablet-hide-desktop-grid {
            display: grid !important;
          }
        }
      `}</style>

      <section
        className="w-full  py-24 px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-52"
        style={{ backgroundColor: '#fffdf3' }}
      >
        {/* Mobile + Tablet (forced mobile on tablet) */}
        <div className="block md:hidden tablet-show-mobile-grid space-y-10">
          {/* Text */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-[#0b1663] space-y-4 text-center mx-auto max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-roboxcrough">
              Akhanda Sri Jungle Yoga Ashram  Retreats
            </h2>

            <p className="text-sm font-normal text-gtwalsheim">
              Kodikhet, Pauri Garhwal
            </p>

            <p className="text-base sm:text-lg font-bold text-gtwalsheim">
             High in the forested hills of Uttarakhand, Akhanda Sri Jungle Ashram + Retreats offers something different: a return to nature, deep silence, and grounded living far from the crowds of town.
            </p>

            <p className="text-base sm:text-lg font-light text-gtwalsheim">
              This is an Ashram for those craving introspection, immersion in the elements, and space for contemplation, creativity, or simply being.
            </p>

            <p className="text-base sm:text-lg font-bold text-gtwalsheim">
              Perfect for long-term stays, writing sabbaticals, meditation intensives, or personal healing journeys—this space invites you to live simply, breathe deeply, and reconnect from the inside out.
            </p>

            <button
              type="button"
              className="mt-6 inline-block bg-[#0b3b3e] text-white px-6 py-3 rounded-md  hover:bg-[#141c77] transition"
            >
              Discover Sri Jungle Ashram
            </button>
          </MotionDiv>

          {/* Image below text */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="flex justify-center"
          >
            <div className="custom-image-wrapper relative overflow-hidden w-full max-w-lg h-80 sm:h-96 mx-auto">
              <Image
                src="/primary/jungleyoga.jpg"
                alt="Mala in hand"
                fill
                className="object-cover mask-arch pt-10"
                priority
              />
            </div>
          </MotionDiv>
        </div>

        {/* Desktop 2-column grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 items-center gap-16 tablet-hide-desktop-grid">
          {/* Left Text */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-[#0b1663] space-y-4 text-center mx-auto max-w-2xl"
          >
            <h2 className="text-3xl md:text-6xl sm:text-4xl font-semibold text-roboxcrough">
              Akhanda Sri Jungle Yoga Ashram  Retreats
            </h2>

            <p className="text-sm md:text-3xl font-normal text-gtwalsheim">
              Kodikhet, Pauri Garhwal
            </p>

            <p className="text-base md:text-3xl sm:text-lg font-bold text-gtwalsheim">
           High in the forested hills of Uttarakhand, Akhanda Sri Jungle Ashram + Retreats offers something different: a return to nature, deep silence, and grounded living far from the crowds of town.

            </p>

            <p className="text-base md:text-3xl sm:text-lg font-light text-gtwalsheim">
             This is an Ashram for those craving introspection, immersion in the elements, and space for contemplation, creativity, or simply being.

            </p>

            <p className="text-base md:text-3xl sm:text-lg font-bold text-gtwalsheim">
              Perfect for long-term stays, writing sabbaticals, meditation intensives, or personal healing journeys—this space invites you to live simply, breathe deeply, and reconnect from the inside out.
            </p>

            <button
              type="button"
              className="mt-6 inline-block bg-[#0b3b3e] text-gtwalsheim text-xl text-white px-6 py-3 rounded-4xl f hover:bg-[#141c77] transition"
            >
              Discover Sri Jungle Ashram
            </button>
          </MotionDiv>

          {/* Right Image */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="flex justify-center"
          >
            <div className="custom-image-wrapper relative overflow-hidden xl:scale-110  max-w-md h-100 sm:h-96">
              <Image
                src="/primary/jungleyoga.jpg"
                alt="Mala in hand"
                fill
                className="object-cover mask-arch  pt-10"
                priority
              />
            </div>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
