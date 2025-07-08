import AshramExperienceSection from "./components/AshramExperienceSection";
import ChoosePathwaySection from "./components/ChoosePathwaySection";
import FounderSection from "./components/FounderSection";
import Hero from "./components/Hero";
import History from "./components/History";
import LineageGuruSection from "./components/LineageGuruSection";
import LivingAkhandaWaySection from "./components/LivingAkhandaWaySection";
import Philosophy from "./components/Philosophy";
import WelcomeSection from "./components/WelcomeSection";
import WhatIsAshramSection from "./components/WhatIsAshramSection";
import WomenSafetySection from "./components/WomenSafetySection";
import YogaAshramNotForSection from "./components/YogaAshramNotForSection";
import ScheduleSection from "./components/ScheduleSection";
import Experience from "./components/Experience";
import JungleYogaSection from "./components/JungleYogaSection";
import FullImageSection from "./components/FullImageSection";
import QuoteSection from "./components/QuoteSection";
import FooterSection from "./components/Footer";
import Carousel from "./components/Carousel";
import OfferingsSection from "./components/OfferingsSection";
import AkhandYogaVideo from "./components/AkhandYogaVideo";
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
      {/* <ChoosePathwaySection /> */}
      {/* <OfferingsSection
        heading="Choose Your Pathway"
        offerings={pathwayData}
        bgColor="bg-[#03045E]"
        textColor="#FFBA00"
        // fullScreen={true}

      />
      <OfferingsSection
        offerings={onlineAndTrustData}
        bgColor="bg-[#FDB813]"
        textColor="text-[#03045E]"
        bottomText="Explore each of these unique spaces and find the rhythm of practice that suits your needs"
        // fullScreen={true}

      /> */}

      {/* <AshramExperienceSection /> */}

      {/* <History /> */}
      
      {/* <LivingAkhandaWaySection />
      <YogaAshramNotForSection />

      <LineageGuruSection />
      <ScheduleSection />
      <AkhandYogaVideo />
      <Experience />
      <JungleYogaSection />
      <FullImageSection src="/primary/fullimage.jpg" alt="view" />
      <QuoteSection x />
      <Carousel /> */}
      {/* <FooterSection /> */}
    </div>
  );
}
