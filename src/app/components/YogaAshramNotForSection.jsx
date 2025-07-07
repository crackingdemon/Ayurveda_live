'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() =>
  import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
);

export default function YogaAshramNotForSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <section className="w-full bg-[#031059] text-white py-24 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-52">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-center space-y-10"
      >
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl text-roboxcrough font-semibold text-[#f7b733] leading-snug">
         Who is a Yoga Ashram and Retreats Not For?
        </h2>

        {/* Intro text */}
        <p className="text-xl sm:text-2xl font-bold leading-relaxed text-gtwalsheim">
          Yoga Ashrams and Retreats are sacred space for growth, rest, and personal evolution. <br />
          <span className="block mt-4">It is not designed for:</span>
        </p>

        {/* List */}
        <div className="text-xl sm:text-2xl font-light leading-loose space-y-4 text-gtwalsheim">
          <p>Tourists seeking leisure and entertainment</p>
          <p>Those needing constant digital connectivity or nightlife</p>
          <p>Individuals resistant to group rhythms or quietude</p>
        </div>

        {/* Final Message */}
        <div className="text-xl sm:text-2xl font-bold leading-relaxed space-y-4 pt-4 text-gtwalsheim">
          <p>It is not about perfection—but sincerity.</p>
          <p>
            If you’re open to trying something new, unplugging, and engaging from the heart,
            <br />you are most welcome.
          </p>
        </div>
      </MotionDiv>
    </section>
  );
}
