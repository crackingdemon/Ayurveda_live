'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const MotionDiv = dynamic(() =>
  import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
);

export default function AshramExperienceSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full bg-white py-24 px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-52">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Text */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-[#0b1663] font-serif text-center space-y-10"
        >
          <p className="text-gtwalsheim text-[clamp(1.2rem,2.5vw,2.2rem)] leading-relaxed max-w-3xl mx-auto font-medium">
            Rooted in ancient Yogic traditions and guided by the teachings of Himalayan Master,
            Dr. Yogrishi Vishvketu, our Ashrams offer immersive, authentic experiences in Yogic living.
          </p>
          <p className="text-gtwalsheim text-[clamp(1.2rem,2.5vw,2.2rem)] leading-relaxed max-w-3xl mx-auto font-medium">
            Whether you seek stillness, inspiration, or reconnection, the ashram lifestyle invites
            you to slow down, breathe deeply, and return to the Self.
          </p>
        </MotionDiv>

        {/* Right Image with arch shape */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex justify-center"
        >
          <div className="relative w-[90rem] aspect-[3/4] mask-arch overflow-hidden">
            <Image
              src="/primary/rishi.jpg"
              alt="Dr. Yogrishi Vishvketu"
              fill
              className="object-cover"
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
