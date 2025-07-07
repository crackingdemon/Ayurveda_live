'use client';

export default function QuoteSection() {
  return (
    <section className="w-full bg-[#ffba00] py-36 px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-52">
      <div className="w-full flex flex-col items-center justify-center text-center space-y-20">
        {/* Main Quote */}
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug text-roboxcrough text-[#0b1663] max-w-6xl">
          Whether you seek the spiritual pulse of Rishikesh or the profound quiet of the forest, <br />
          the Ashram and Retreats of Akhanda Yoga await you.
        </p>

        {/* Emphasis Line */}
        <p className="text-4xl sm:text-3xl md:text-5xl font-light text-gtwalsheim text-[#0b1663]">
          Stay. Heal. Reconnect.
        </p>
      </div>
    </section>
  );
}
