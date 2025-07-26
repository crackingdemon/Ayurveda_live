'use client';

import { motion } from 'framer-motion';

export default function FooterSection() {
    return (
        <footer className="bg-[#730a43] text-white py-16 px-6 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto w-full">

                {/* Mobile & Tablet */}
                <div className="block md:hidden space-y-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                        className="space-y-4"
                    >
                        {/* Logo instead of text */}
                        <div className="mx-auto w-40 h-20">
                            <img
                                src="/logoB.png"
                                alt="Anand Prakash Ashram Logo"
                                className="object-contain w-full h-full"
                            />
                        </div>

                        <div className="space-y-2 text-sm sm:text-base  text-gtwalsheim">
                            <p>📍 Akhanda Ayurveda , Uma Kutir, near bhumi cafe, Shivananda Nagar Tapovan, Rishikesh, Uttrakhand, 249192</p>
                            <p>📞 +91 9286378671</p>
                            <p>✉️ <a href="mailto:Ayurveda@akhandayoga.com" className="underline hover:text-[#f4b400] font-sans">Retreats@akhandayoga.com</a></p>
                        </div>
                        <div className="flex justify-center space-x-6 mt-6">
                            {/* Social icons */}
                            <a href="https://www.facebook.com/AnandPrakashYogaAshram" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#f4b400]">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3v-2.3c0-3 1.8-4.7 4.6-4.7 1.3 0 2.6.2 2.6.2v3h-1.5c-1.5 0-2 1-2 2v2.3h3.4l-.5 3h-2.9v7A10 10 0 0 0 22 12" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/akhandayoga_institute" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#f4b400]">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm10 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 9z" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@AkhandaYogaOfficial" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-[#f4b400]">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a2.965 2.965 0 0 0-2.086-2.093C19.42 3.5 12 3.5 12 3.5s-7.42 0-9.412.593a2.965 2.965 0 0 0-2.086 2.093A31.07 31.07 0 0 0 0 12a31.07 31.07 0 0 0 .502 5.814 2.965 2.965 0 0 0 2.086 2.093c1.992.593 9.412.593 9.412.593s7.42 0 9.412-.593a2.965 2.965 0 0 0 2.086-2.093A31.07 31.07 0 0 0 24 12a31.07 31.07 0 0 0-.502-5.814zM9.75 15.568v-7.137L15.5 12l-5.75 3.568z" />
                                </svg>
                            </a>

                        </div>
                        <p className="mt-10 text-xs sm:text-sm font-sans opacity-70 font-sans">&copy; {new Date().getFullYear()} Anand Prakash Ashram. All rights reserved.</p>
                    </motion.div>
                </div>

                {/* Desktop */}
                <div className="hidden md:grid grid-cols-3 gap-20 items-start text-left">
                    {/* Logo block instead of About text */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <div className="w-48 h-24">
                            <img
                                src="/logoB.png"
                                alt="Anand Prakash Ashram Logo"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <p className="mt-8 font-sans mb-1 text-gtwalsheim">📍 Akhanda Ayurveda , Uma Kutir, near bhumi cafe, Shivananda Nagar Tapovan, Rishikesh, Uttrakhand, 249192</p>
                        <p className="font-sans mb-1">📞 +91 9286378671</p>
                        <p className="font-sans">
                            ✉️ <a href="mailto:ayurveda@akhandayoga.com" className="underline hover:text-[#f4b400]">Ayurveda@akhandayoga.com</a>
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="space-y-4 font-sans"
                    >
                        <h3 className="text-2xl text-gtwalsheim font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#retreats" className="hover:text-[#f4b400] text-gtwalsheim">Retreats</a></li>
                            <li><a href="mailto:ayurveda@akhandayoga.com" className="hover:text-[#f4b400] text-gtwalsheim">Contact</a></li>

                        </ul>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                        className="space-y-4 font-sans"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gtwalsheim">Connect with Us</h3>
                        <div className="flex space-x-6">
                            <a href="https://www.facebook.com/AnandPrakashYogaAshram" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#f4b400]">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3v-2.3c0-3 1.8-4.7 4.6-4.7 1.3 0 2.6.2 2.6.2v3h-1.5c-1.5 0-2 1-2 2v2.3h3.4l-.5 3h-2.9v7A10 10 0 0 0 22 12" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/akhandayoga_institute/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#f4b400]">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm10 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 9z" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@AkhandaYogaOfficial" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-[#f4b400]">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a2.965 2.965 0 0 0-2.086-2.093C19.42 3.5 12 3.5 12 3.5s-7.42 0-9.412.593a2.965 2.965 0 0 0-2.086 2.093A31.07 31.07 0 0 0 0 12a31.07 31.07 0 0 0 .502 5.814 2.965 2.965 0 0 0 2.086 2.093c1.992.593 9.412.593 9.412.593s7.42 0 9.412-.593a2.965 2.965 0 0 0 2.086-2.093A31.07 31.07 0 0 0 24 12a31.07 31.07 0 0 0-.502-5.814zM9.75 15.568v-7.137L15.5 12l-5.75 3.568z" />
                                </svg>
                            </a>

                        </div>
                        <p className=" text-gtwalsheim mt-10 text-xs font-sans opacity-70">&copy; {new Date().getFullYear()} Anand Prakash Ashram. All rights reserved.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}