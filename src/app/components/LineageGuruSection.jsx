'use client';

import React from 'react';  // optional, but safe to add
import { motion } from 'framer-motion';

export default function LineageGuruSection() {
  return (
    <section className="bg-[#730a4e] text-white py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24">

        {/* Mobile + Tablet View */}
        <div className="block md:hidden text-center space-y-14">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl text-roboxcrough font-semibold leading-snug"
          >
            Lineages, Teachers <span className='text-gtwalsheim'>&</span> the Role of the Guru
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
            className="space-y-8 text-lg leading-relaxed px-3 text-gtwalsheim"
          >
            <p>
            
              Ashrams often hold space for the lineage of a living tradition. At Akhanda Yoga, <br /> we honour the teachings passed down through Himalayan Master Yogrishi Vishvketu.

            </p>
            <p>
              But is it required to have a Guru to stay at an ashram or retreats? Not at all. While many <br /> people are called to deepen their relationship with a teacher, the we welcomes all sincere seekers.  <br /> You may simply come for rest, retreat, or curiosity—and still leave transformed.

            </p>
            <p>
            
              Lineage is not about hierarchy—it’s about connection, integrity, and carrying <br /> forward timeless knowledge with respect and responsibility.

            </p>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block text-center space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-5xl lg:text-6xl text-roboxcrough font-semibold leading-snug"
          >
            Lineages, Teachers <span className='text-gtwalsheim'>&</span> the Role of the Guru
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
            className="space-y-10 sm:text-2xl text-[1.3vw] leading-relaxed text-gtwalsheim max-w-4xl mx-auto"
          >
            <p>
              Ashrams often hold space for the lineage of a living tradition. At Akhanda Yoga, <br />
              we honour the teachings passed down through Himalayan Master Yogrishi Vishvketu.
            </p>
            <p>
              But is it required to have a Guru to stay at an ashram? Not at all. While many <br />
              people are called to deepen their relationship with a teacher, the Ashram <br />
              welcomes all sincere seekers. You may simply come for rest, retreat, or curiosity—<br />
              and still leave transformed.
            </p>
            <p>
              Lineage is not about hierarchy—it’s about connection, integrity, and carrying <br />
              forward timeless knowledge with respect and responsibility.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
