"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function WelcomeSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen w-full bg-[#fcf8ed] flex items-center justify-center text-white py-8">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="w-full flex flex-col items-center text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
      >
        {/* Title */}
        <h1 className="text-Black-Mango-ExtraBold text-[#031059] text-3xl sm:text-5xl md:text-6xl font-light mb-10 tracking-tight leading-tight">
          A Return to the Science of Life
        </h1>

        {/* First Paragraph */}
        <p className="text-gtwalsheim text-[#031059] font-light leading-relaxed max-w-4xl text-base sm:text-lg md:text-xl mb-10">
          At the confluence of Himalayan wisdom and Vedic healing lies Ayurveda —
          the Śāstra of Life, or the science of harmonious living. Rooted in over
          5,000 years of practice, Ayurveda is more than a system of medicine. It
          is a way of being — attuned to the cycles of nature, the constitution of
          the individual, and the deep interdependence between the inner and outer
          world.
        </p>

        {/* Second Paragraph */}
        <p className="text-gtwalsheim text-[#031059] font-light leading-relaxed max-w-4xl text-base sm:text-lg md:text-xl">
          Akhanda Ayurveda offers sincere seekers the opportunity to immerse in
          traditional Ayurvedic care and education, while residing in the sacred
          environment of an authentic Yoga Ashram. These programs are crafted to
          meet each guest where they are — allowing for personalization based on:
        </p>

        {/* Bullet Points */}
        <ul className="text-gtwalsheim text-[#031059] font-light text-base sm:text-lg md:text-xl mb-10 space-y-1">
          <li>Duration of stay</li>
          <li>Level of therapeutic support needed</li>
          <li>Financial investment and available resources</li>
        </ul>

        {/* Footer Line */}
        <p className="text-[#031059] font-medium text-center text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed">
          Offerings include a stay at Anand Prakash Ashram in Rishikesh — and is
          grounded in the combined wisdom of Yoga and Ayurveda, as taught by
          Himalayan Master Dr. Yogrishi Vishvketu.
        </p>
      </MotionDiv>
    </section>
  );
}
