'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { redirect } from 'next/navigation';

export default function Experience() {
  return (
    <section className="bg-[#fffdf3] w-full min-h-screen flex items-center py-20">
      <div className="mx-auto px-4  sm:px-10 lg:px-16 w-full">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex   justify-center md:justify-center flex-wrap items-center  gap-6 md:gap-[4rem]"
        >
          {/* Left Circular Image */}
          <div className="relative w-2/3 md:w-[30vw] md:h-1/3   rounded-full overflow-hidden aspect-square">
            <Image
              src="/primary/experience.jpg"
              alt="Ashram Experience"
              fill
              
              // style={{ objectFit: 'cover' }}
              
              className="object-cover "
            />
          </div>

          {/* Right Centered Text */}
          <div className="text-[#1c1f4c] md:w-1/2 text-center space-y-6 font-sans md:text-center">
            <h2 className=" text-3xl md:text-5xl text-roboxcrough font-semibold leading-snug">
              Two Unique Experiences
            </h2>

            <p className="md:text-2xl  font-light leading-relaxed text-gtwalsheim">
              We invite you to explore two distinct ashram spaces, each offering its own flavor of Yogic living:
            </p>

            <p className="md:text-2xl  font-semibold leading-tight text-gtwalsheim">
              Akhanda Anand Prakash Yoga Retreats
            </p>

            <p className="md:text-2xl  font-light mt-1 text-gtwalsheim">
              Tapovan, Rishikesh
            </p>

            <p className="md:text-2xl  font-light leading-relaxed text-gtwalsheim">
              Where the mountains meet the holy Ganga, Anand Prakash Yoga Ashram has stood since 2007 as a beacon for modern Yogic living in Rishikesh. Founded by Dr. Yogrishi Vishvketu, the ashram pulses with energy—offering daily Akhanda Yoga classes, Kirtan, Fire Ceremonies, and Satsang.
            </p>

            <p className="md:text-2xl  font-light leading-relaxed text-gtwalsheim">
              Whether you're arriving for self-study, rest, or deep Yogic immersion, Anand Prakash offers a vibrant, Ganga-side container to reconnect with yourself and the ancient wisdom of Yoga.
            </p>

            <button
              type="button"
              className="mt-6 inline-block bg-[#e49820] text-white px-10 py-4 rounded-md font-semibold hover:bg-[#141c77] transition"
              onClick={() => redirect('https://retreat.akhandayoga.com/')}
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


