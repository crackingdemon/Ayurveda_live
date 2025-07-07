"use client";
import React, { useEffect, useState } from 'react';

const AkhandYogaVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = Math.min(window.innerHeight, width * 0.5625); // Maintain 16:9 aspect ratio
      setWindowSize({ width, height });
    };

    updateSize(); 
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative">
      {!isPlaying && (
        <h1 className="text-roboxcrough absolute top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[3vw] text-center">
          A Day in the Life at the Ashram
        </h1>
      )}
      <iframe
        width={windowSize.width}
        height={windowSize.height}
        src="https://www.youtube.com/embed/rVzrzyZYOqM"
        title="Welcome to Akhanda Yoga Institute | An Introduction By Yogrishi Vishvketu"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AkhandYogaVideo;

