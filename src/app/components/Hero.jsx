"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import dynamic from "next/dynamic"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <style jsx>{`
        /* Mobile only (max-width: 767px) overrides */
        @media (max-width: 767px) {
          /* Center the main heading text */
          .hero-heading {
            text-align: center !important;
            max-width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
            line-height: 1.2 !important;
          }
          /* Adjust the subtitle positioning on mobile */
          .hero-subtitle {
            font-size: 1.25rem !important;
            line-height: 1.4 !important;
            padding: 0 1rem !important;
          }
          /* Reduce padding on the container */
          .hero-content-container {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
      <section
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-x-hidden"
        style={{
          backgroundImage: "url('/primary/hero.png')",
          backgroundPosition: "55% center",
        }}
      >
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 flex justify-between items-center backdrop-blur-md bg-white/10 text-white">
          <div className="relative w-32 h-10">
            <Image src="/logoB.png" alt="Anand Prakash Logo" fill className="object-contain" priority />
          </div>
          <ul className="hidden md:flex space-x-6 text-base font-light">
            <li>
              <a href="#home" className="hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="#retreats" className="hover:text-blue-200">
                Retreats
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>
          <div className="hidden md:block">
            <a
              href="https://bookings.akhandayogawellbeing.com/guestbookinglink"
              target="_blank"
              className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition text-sm"
              rel="noreferrer"
            >
              Book Now
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full bg-white/10 backdrop-blur-md text-white px-6 py-4 space-y-4 text-center z-40">
            <a href="#home" className="block hover:text-blue-200">
              Home
            </a>
            <a href="#retreats" className="block hover:text-blue-200">
              Retreats
            </a>
            <a href="#contact" className="block hover:text-blue-200">
              Contact
            </a>
            <a
              href="https://bookings.akhandayogawellbeing.com/guestbookinglink"
              target="_blank"
              className="inline-block mt-2 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition"
              rel="noreferrer"
            >
              Book Now
            </a>
          </div>
        )}

        {/* Hero Content */}
        <MotionDiv
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="relative z-10 h-full flex flex-col justify-between px-6 sm:px-10 md:px-20 hero-content-container"
        >
          {/* Main Title - Positioned in upper center */}
          <div className="flex-1 flex items-center justify-center pt-10">
            <h1 className="text-6xl sm:text-7xl md:text-6xl lg:text-8xl xl:text-[7vw] font-light text-center text-Black-Mango-ExtraBold text-white hero-heading">
              AKHANDA AYURVEDA
            </h1>
          </div>

          {/* Subtitle - Positioned at bottom with proper margin */}
          <div className="pb-12 sm:pb-16 md:pb-20">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center font-medium text-BaskervilleItalicBT text-white hero-subtitle">
              Traditional Healing Immersions in the Yogic Heartland of Rishikesh
            </p>
          </div>
        </MotionDiv>
      </section>
    </>
  )
}
