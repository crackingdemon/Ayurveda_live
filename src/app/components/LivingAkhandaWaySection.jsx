'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const MotionDiv = dynamic(() =>
  import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
);

export default function LivingAkhandaWaySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full  bg-white py-24 px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-52">
      <div className="custom-grid items-center gap-16">
        {/* Left Image */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex justify-center"
        >
          <div className="relative w-[90vw] md:w-[40vw] max-w-[500px] aspect-[3/4] mask-arch overflow-hidden">
            <Image
              src="/primary/mala.jpg"
              alt="Mala in hand"
              fill
              
              className="object-cover "
            />
          </div>
        </MotionDiv>

        {/* Right Text */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-[#0b1663] custom-text space-y-6 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-roboxcrough text-center">
            Living Akhanda Way: Holding a <br /> Collective Sanctuary
          </h2>

          <p className="text-base sm:text-lg md:text-3xl font-bold text-gtwalsheim text-center">
            To maintain the Ashrams and Retreats as a sacred and supportive space for all, guests are kindly asked to follow simple behavioural guidelines:
          </p>

          <div className="text-base sm:text-lg font-light  md:text-2xl space-y-2 text-gtwalsheim">
            <p className="text-center">Observe silence during morning and evening practices</p>
            <p className="text-center">Refrain from the use of intoxicants, smoking, or disruptive behaviour</p>
            <p className="text-center">Respect shared spaces and keep them clean</p>
            <p className="text-center">Dress modestly and mindfully</p>
            <p className="text-center">Participate in Karma Yoga and group practices as a way to support harmony</p>
          </div>

          <p className="text-base sm:text-lg font-bold md:text-2xl text-gtwalsheim text-center">
            These guidelines are not rules for control, but principles that uphold the purity and potential of your time here—and help everyone feel safe, focused, and inspired.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
