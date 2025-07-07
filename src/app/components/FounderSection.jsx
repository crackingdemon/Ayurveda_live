'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FounderSection() {
  return (
    <section className="bg-white min-h-screen flex items-center py-20">
      <div className="w-full px-6  sm:px-10 lg:px-20 flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-20 lg:gap-28 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] xl:w-[500px] xl:h-[500px] rounded-t-full overflow-hidden flex-shrink-0"
        >
          <Image
            src="/primary/lady.png"
            alt="Ayurveda Immersion"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-[#031059] font-light text-lg sm:text-xl md:text-xl leading-relaxed max-w-lg"
        >
          <h2 className="text-4xl sm:text-4xl mb-6 md:mb-8 text-Black-Mango-ExtraBold">Akhanda Ayurveda Immersion Offerings</h2>
         <p className="font-montserrat font-semibold text-lg sm:text-xl md:text-2xl mb-6 subtitle-text">
              Each tier below includes:
            </p>
            {/* Changed <ul> to <div> and <li> to <p> */}
            <div className="space-y-1 font-montserrat font-light text-base sm:text-lg md:text-xl paragraph-text">
              <p className="paragraph-item">Residential stay at the Ashram</p>
              <p className="paragraph-item">Wholesome, sattvic vegetarian meals</p>
              <p className="paragraph-item">
                Access to all daily Ashram practices: morning meditation,
                āsana, prāṇāyāma, fire ceremonies, and occasional evening activities
              </p>
              <p className="paragraph-item">
                Initial Ayurvedic consultation with an experienced practitioner
              </p>
              <p className="paragraph-item">
                Access to the supportive container of sacred rhythm and
                intentional community
              </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
}


