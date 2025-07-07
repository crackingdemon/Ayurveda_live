'use client';

import { motion } from 'framer-motion';

export default function ScheduleSection() {
  return (
    <section className="bg-white text-[#031059] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-20">

        {/* Mobile + Tablet View */}
        <div className="block md:hidden show-mobile-only show-tablet-only text-center space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-3xl text-roboxcrough font-bold leading-snug"
          >
            What to Expect: A Day in the Life
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
            className="space-y-6 text-base leading-relaxed px-2 text-gtwalsheim text-center"
          >
            <p>
              Your stay will be both nourishing and grounding. Here's a glimpse of what a typical day might look like:
            </p>

            <div className="space-y-2 text-left mx-auto w-fit">
              <p><strong>5:00 AM</strong> – Wake up bell</p>
              <p><strong>5:20 AM</strong> – Guided Meditation</p>
              <p><strong>6:00 AM</strong> – Akhanda Yoga Class (Asana, Pranayama, Mantra)</p>
              <p><strong>7:45 AM</strong> – Community Fire Ceremony</p>
              <p><strong>8:45 AM</strong> – Delicious Vegetarian Breakfast (Vegan/Gluten-free available)</p>
              <p><strong>9:15 AM</strong> – Free time: Karma Yoga, Self-study, Ganga Walks, Rishikesh exploration</p>
              <p><strong>12:30 PM</strong> – Light Lunch</p>
              <p><strong>1:00 PM</strong> – Free time, Rest, Wisdom Talks & Activities (as scheduled)</p>
              <p><strong>4:30 PM</strong> – Evening Yoga Class / Yoga Nidra</p>
              <p><strong>6:30 PM</strong> – Dinner</p>
              <p><strong>7:30 PM (Tues/Thurs)</strong> – Kirtan / Evening Community</p>
              <p><strong>9:00 PM</strong> – Lights Out / Personal Silence until after breakfast</p>
            </div>

            <div className="pt-6 space-y-4 text-center">
              <p><strong>Accommodation:</strong> Simple private or twin-share rooms with essential amenities.</p>
              <p><strong>Meals:</strong> Wholesome vegetarian meals prepared with fresh local and often organic ingredients.</p>
              <p><strong>Classes:</strong> Morning and evening sessions included in your stay, led by experienced Akhanda Yoga teachers.</p>
            </div>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block hide-tablet text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl lg:text-5xl text-roboxcrough font-bold leading-snug"
          >
            What to Expect: A Day in the Life
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
            className="space-y-8 text-lg leading-relaxed text-gtwalsheim max-w-4xl mx-auto text-center"
          >
            <p>
              Your stay will be both nourishing and grounding. Here's a glimpse of what a typical day might look like:
            </p>

            <div className="space-y-2 text-left mx-auto w-fit">
              <p><strong>5:00 AM</strong> – Wake up bell</p>
              <p><strong>5:20 AM</strong> – Guided Meditation</p>
              <p><strong>6:00 AM</strong> – Akhanda Yoga Class (Asana, Pranayama, Mantra)</p>
              <p><strong>7:45 AM</strong> – Community Fire Ceremony</p>
              <p><strong>8:45 AM</strong> – Delicious Vegetarian Breakfast (Vegan/Gluten-free available)</p>
              <p><strong>9:15 AM</strong> – Free time: Karma Yoga, Self-study, Ganga Walks, Rishikesh exploration</p>
              <p><strong>12:30 PM</strong> – Light Lunch</p>
              <p><strong>1:00 PM</strong> – Free time, Rest, Wisdom Talks & Activities (as scheduled)</p>
              <p><strong>4:30 PM</strong> – Evening Yoga Class / Yoga Nidra</p>
              <p><strong>6:30 PM</strong> – Dinner</p>
              <p><strong>7:30 PM (Tues/Thurs)</strong> – Kirtan / Evening Community</p>
              <p><strong>9:00 PM</strong> – Lights Out / Personal Silence until after breakfast</p>
            </div>

            <div className="pt-6 space-y-4">
              <p><strong>Accommodation: Simple private or twin-share rooms with essential amenities.</strong></p>
              <p><strong>Meals: Wholesome vegetarian meals prepared with fresh local and often organic ingredients.</strong></p>
              <p><strong>Classes: Morning and evening sessions included in your stay, led by experienced Akhanda Yoga teachers.</strong></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
