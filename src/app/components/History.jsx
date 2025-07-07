'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function History() {
  return (
    <section className="bg-white min-h-screen flex items-center py-20">
      <div className=" mx-auto px-6 sm:px-10 lg:px-20 w-full">

        {/* Mobile & Tablet View */}
        <div className="block md:hidden text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="relative mx-auto mb-10 rounded-full overflow-hidden aspect-square w-[clamp(280px,80vw,360px)]"
          >
            <Image
              src="/history.png"
              alt="Ashram Blessing"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-[#1c1f4c] space-y-6 font-sans"
          >
            <h2 className="text-[10vw] font-semibold  text-roboxcrough leading-snug">
              A Brief History of Ashrams<br />in India
            </h2>

            <p className="text-[clamp(1rem,2.8vw,1.2rem)] font-light text-gtwalsheim leading-relaxed">
              Ashrams have long been part of India’s spiritual and cultural fabric. In the Vedic period, sages and students gathered in gurukuls—forest-based schools where teachings were shared orally in sacred settings. Mentioned in the Upanishads, Mahabharata, and Ramayana, ashrams were places of wisdom, healing, and divine encounters. Beyond meditation, they served as centres for Ayurveda, astronomy, ecology, arts, and service. Today’s ashrams carry forward this legacy, bridging ancient values with modern seekers from around the world.
            </p>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-[#1c1f4c] space-y-8 font-sans text-center"
          >
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-roboxcrough leading-snug">
              A Brief History of Ashrams<br />in India
            </h2>

            <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] font-light leading-relaxed text-gtwalsheim">
              Ashrams have long been part of India’s spiritual and cultural fabric. In the Vedic period, sages and students gathered in gurukuls—forest-based schools where teachings were shared orally in sacred settings. Mentioned in the Upanishads, Mahabharata, and Ramayana, ashrams were places of wisdom, healing, and divine encounters. Beyond meditation, they served as centres for Ayurveda, astronomy, ecology, arts, and service. Today’s ashrams carry forward this legacy, bridging ancient values with modern seekers from around the world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="relative mx-auto rounded-full overflow-hidden aspect-square w-[clamp(360px,40vw,600px)]"
          >
            <Image
              src="/history.png"
              alt="Ashram Blessing"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
