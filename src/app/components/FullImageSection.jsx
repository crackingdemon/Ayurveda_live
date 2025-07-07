'use client';

import Image from 'next/image';

export default function FullImageSection({
  src,
  alt = 'Full Image Section',
}) {
  return (
    <section className="w-full h-screen relative">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}
