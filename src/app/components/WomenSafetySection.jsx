'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WomenSafetySection() {
  return (
    <section className="bg-[#ffffff] min-h-screen flex items-center py-16 sm:py-24">
      <div className="px-4 sm:px-10 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full">

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="w-full lg:w-1/2 flex flex-col items-center text-center text-[#1c1f4c] font-sans font-light space-y-6 px-2 md:px-0"
          >
            <h2 className="text-roboxcrough font-bold text-[10vw] sm:text-[36px] md:text-[3vw] leading-tight">
              Is it Safe for <br /> Women Travellers?
            </h2>

            <p className="font-light text-[3.5vw] flex flex-col gap-1 sm:text-lg md:text-2xl leading-relaxed ">
              <span className='font-bold'>Yes. Both our Ashrams offer a safe, welcoming environment for solo women travellers.</span><br />
              <span className='font-bold'>We provide:</span><br />
              <span >24/7 staff presence and secure, gated premises</span><br />
              <span>Clear communication about transportation and arrivals</span><br />
              <span>Respectful staff and co-guests committed to wellbeing</span>
            </p>

            <p className="font-bold text-base sm:text-lg md:text-2xl max-w-md">
              Many women from around the world have experienced empowerment, peace, and transformation during their Ashram and Retreat stays.
            </p>

            <button
              className="mt-4 px-8 py-3 border-2 rounded-full border-[#1c1f4c] text-[#1c1f4c] hover:bg-[#f5f5f5] transition font-medium cursor-pointer"
              onClick={() => window.location.href = "mailto:retreat@khandayoga.com"}
            >
              Book Now!
            </button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="relative w-full lg:w-1/2 aspect-square rounded-t-[50%] bg-amber-200 overflow-hidden shadow-xl"
          >
            <Image
              src="/primary/DSC07539.jpg"
              alt="Women Safe"
              fill
              className="object-cover object-center"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
