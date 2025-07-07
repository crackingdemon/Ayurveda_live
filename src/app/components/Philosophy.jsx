'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="bg-[#003D3D] text-white min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-32 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="max-w-5xl mx-auto text-center space-y-12"
      >
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold text-white text-roboxcrough leading-tight">
          Our Philosophy
        </h2>

        <p className="text-[clamp(1.1rem,2.3vw,1.6rem)] font-light text-gtwalsheim leading-relaxed">
          At Akhanda Yoga, our Ashram and Retreats environments are spaces where ancient Yogic values meet intentional living. Rooted in the philosophy of holistic integration (Akhanda), we honour all paths and levels of practice, offering space for devotion, knowledge, discipline, and joy.

        </p>

        <p className="text-[clamp(1.1rem,2.3vw,1.6rem)] font-light text-gtwalsheim leading-relaxed">
         We believe in the power of collective spiritual intention: when a group of individuals come together with sincerity and presence, the environment becomes charged with healing energy.

        </p>

        <p className="text-[clamp(1.1rem,2.3vw,1.6rem)] font-light text-gtwalsheim leading-relaxed">
          Our free daily community Agni Hotra practice has been shared with thousands of global yoga practitioners, both online and in person. These sacred fire rituals uplift not only the individual but contribute to global energetic wellbeing.
        </p>
      </motion.div>
    </section>
  );
}
