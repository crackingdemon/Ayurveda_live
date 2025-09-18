'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RaviDr() {
  return (
    <section className="bg-[#880e4f] min-h-screen flex items-center py-20">
      <div className="w-full px-6 sm:px-10 lg:px-20 flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-20 lg:gap-28 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden flex-shrink-0"
        >
          <Image
            src="/ravidr.png"
            alt="Dr. Ravi Kaushal"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-white font-light text-lg sm:text-xl md:text-xl leading-relaxed max-w-lg"
        >
          <h2 className="text-4xl sm:text-5xl mb-6 md:mb-8 text-roboxcrough">Dr. Ravi Kaushal</h2>
          <p className="mb-4 md:mb-6 text-gtwalsheim font-semibold text-xl">
            Consultant Ayurvedic Physician
          </p>
          <p className="mb-4 md:mb-6 text-gtwalsheim">
            Dr. Ravi Kaushal is a 3rd generation Ayurvedic practitioner with over 40 years of experience in the field. He is a registered practitioner by the Uttarakhand Government and brings decades of expertise in traditional Ayurvedic medicine.
          </p>
          <p className="mb-4 md:mb-6 text-gtwalsheim">
            His distinguished career includes serving as the former Chief Medical Officer at Parmarth Niketan Hospital and holding executive positions in various medical associations. He has been the Executive Secretary of Ayush Medical Association India, Vice President of Arogya Bharti Uttarakhand, and former President of Rishikesh Ayurvedic Doctors Association.
          </p>
          <p className="mb-4 md:mb-6 text-gtwalsheim">
            Dr. Kaushal is also an active member of several prestigious organizations including the Executive Member of Ayush Chikitsak Association Uttarakhand, Executive Member of Ayurvedic Doctors Association India, and Executive Member of All India Ayurvedic Congress Delhi. He is the Founder Director of Wellzyn Healthcare Pvt Ltd and has served as the former President of Rotary Club Rishikesh and Additional District Secretary of Rotary International District 3080.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
