"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const OfferingsSection = ({
  heading,
  offerings,
  bgColor,
  textColor,
  bottomText,
  fullScreen = false,
}) => {
  return (
    <section
      className={`${bgColor} ${fullScreen ? "min-h-screen" : ""} py-20 px-4 flex flex-col justify-center `}
    >
      {heading && (
        <h2
          className={`text-[10vw] md:text-5xl text-[#FFBA00] lg:text-6xl text-roboxcrough font-semibold text-center mb-20 ${textColor} font-cardo`}
        >
          {heading}
        </h2>
      )}

      <div className="grid grid-cols-1 tablet:grid-cols-1 md:grid-cols-2 gap-20 lg:gap-40 max-w-7xl mx-auto">
        {offerings.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-center flex flex-col items-center"
          >
            <div className="w-[320px] h-[400px] rounded-t-[48%] overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt || item.title}
                width={320}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className={`text-xl md:text-2xl lg:text-3xl text-gtwalsheim font-semibold mt-6 ${textColor}`}>
              {item.title}
            </h3>

            <p className={`mt-4 text-base md:text-lg lg:text-xl text-gtwalsheim max-w-md ${textColor}`}>
              {item.description}
            </p>

            <a
              href={item.buttonLink}
              className="mt-6 px-6 py-2 bg-[#03045E] text-gtwalsheim text-white rounded-full 
                         hover:bg-white hover:text-[#03045E] 
                         border border-white transition-all"
            >
              {item.buttonLabel}
            </a>
          </motion.div>
        ))}
      </div>

      {bottomText && (
        <p
          className={`mt-20 text-lg md:text-xl lg:text-4xl text-roboxcrough text-center max-w-4xl mx-auto ${textColor} font-cardo`}
        >
          {bottomText}
        </p>
      )}
    </section>
  );
};

export default OfferingsSection;
