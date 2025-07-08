import FounderSection from "./components/FounderSection";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import WelcomeSection from "./components/WelcomeSection";
import WhatIsAshramSection from "./components/WhatIsAshramSection";
import WomenSafetySection from "./components/WomenSafetySection";
import FullImageSection from "./components/FullImageSection";
import Understand from "./components/Understand.jsx";
import TierSection from "./components/TierSection";
import Tier2 from "./components/Tier2";
import Tier3 from "./components/Tier3";
import Tier4 from "./components/Tier4";
import Couples from "./components/Couples.jsx";
import Tier5 from "./components/Tier5.jsx";

// pages/index.tsx
export default function Home() {
  const onlineAndTrustData = [
    {
      title: "Akhanda Online Ashram",
      description:
        "A global live, virtual sanctuary to support your practice from anywhere in the world",
      image: "/primary/2h.png", // update with real image path
      buttonLabel: "Learn More",
      buttonLink: "https://akhandayoga.com/pages/ashram-online",
    },
    {
      title: "Anand Prakash Yoga Ashram Trust",
      description:
        "A Sacred Urban Ashram in Rishikesh for Self Healing, Sādhanā, and Community",
      image: "/primary/4h.png",
      buttonLabel: "Learn More",
      buttonLink: "https://ashram.akhandayoga.com/",
    },
  ];

  const pathwayData = [
    {
      title: "Akhanda Anand Prakash Yoga Retreats",
      description: "Our vibrant Retreat based Rishikesh beside the Ganga",
      image: "/primary/5h.png", // update with real image path
      buttonLabel: "Learn More",
      buttonLink: "https://retreat.akhandayoga.com/",
    },
    {
      title: "Akhanda Sri Jungle Yoga Ashram & Retreat",
      description: "A serene forest retreat in Kodikhet for deep immersion",
      image: "/primary/3h.png", // update with real image path
      buttonLabel: "Learn More",
      buttonLink: "#",
    },
  ];
  return (
    <div>
      <Hero />
      <WelcomeSection />
      <Understand />
      <FounderSection />
      <TierSection />
      <Tier2 />
      <Tier3 />
      <Tier4 />
      <Couples />
      <Tier5 />
      <FullImageSection src="/primary/hawan.png" alt="view" />
      <WhatIsAshramSection />
      <WomenSafetySection />
      <Philosophy />
    </div>
  );
}
