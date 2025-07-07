'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const images = [
  '/car1_img/1.png',
  '/car1_img/2.png',
  '/car1_img/3.png',
  '/car1_img/4.png',
  '/car1_img/5.png',
  '/car1_img/6.png',
  '/car1_img/7.png',
  '/car1_img/8.png',
  '/car1_img/9.png',
  '/car1_img/10.png',
  '/car1_img/11.png',
  '/car1_img/12.png',
  '/car1_img/13.png',
  '/car1_img/14.png',
  '/car1_img/15.png',
  '/car1_img/16.png',
  '/car1_img/17.png',
  '/car1_img/18.png',
  '/car1_img/19.png',

  
];

export default function Carousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const intervalRef = useRef(null);

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width <= 785) return 1;     // mobile
    if (width <= 1025) return 2;    // tablet
    return 4;                       // desktop
  };

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = images.length - visibleCount;

  const goToNext = () => {
    setStartIndex(prev => (prev < maxIndex ? prev + 1 : 0));
  };

  const goToPrev = () => {
    setStartIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
  };

  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 3000);
    return () => clearInterval(intervalRef.current);
  }, [visibleCount]);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNext, 3000);
  };

  return (
    <div className="relative w-full overflow-hidden px-4">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(images.length * 100) / visibleCount}%`,
            transform: `translateX(-${(startIndex * 100) / images.length}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                width: `${100 / images.length}%`,
              }}
              className="box-border px-2 py-4"
            >
              <div className="relative w-full h-[60vh] overflow-hidden rounded-xl shadow-lg bg-black">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => {
          goToPrev();
          resetInterval();
        }}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full backdrop-blur"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => {
          goToNext();
          resetInterval();
        }}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full backdrop-blur"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
