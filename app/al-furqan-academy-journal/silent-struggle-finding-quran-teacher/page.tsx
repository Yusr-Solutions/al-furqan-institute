'use client'

import { motion } from 'framer-motion';
import {
    CalendarDays, Lightbulb, TrendingUp, Handshake, ShieldCheck,
    Search, Users, Star, BookOpenText, ThumbsUp, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CommonFooter } from '@/components/common-footer';
import LandingNavbar from '@/components/landing-navbar';
import { containerVariants } from "@/lib/motionVariants";
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import AuthorDate from '@/components/ui/author-date';
import { TeachingCTA } from '@/components/ui/teaching-cta';
import Image from 'next/image';
import stressImage from '@/lib/images/stress.jpg'
import hourGlassImage from '@/lib/images/hourglass.jpg'
import varietyImage from '@/lib/images/variety.jpg'

export default function SilentStruggleBlogPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50 transition-colors duration-300">
            <LandingNavbar />

            <motion.main
                className="w-full flex flex-col items-center gap-12 py-12 mt-12 px-4 sm:px-6 md:px-8 flex-1"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Header Section */}
                <motion.section
                    className="mx-auto flex flex-col gap-8 py-0 px-4  max-w-3xl"
                    variants={containerVariants}
                    aria-labelledby="main-heading"
                >
                    <div className="flex flex-col items-center text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl leading=[3] py-2 md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500"
                        >
                            The Silent Struggle: Why Finding a Quran Teacher is More Than Just a Google Search
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                                Beyond the search bar, there's an unspoken journey of hope, frustration, and perseverance. Discover why connecting with the right Quran teacher is a profound spiritual quest.
                            </p>
                        </motion.div>

                        <AuthorDate dateTime="2024-03-10" dateText="March 10, 2024" />
                    </div>
                </motion.section>

                <Separator className="w-full max-w-2xl bg-indigo-100 opacity-50" />

                <div className='text-slate-900 max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-8'>
                    <p>
                        You've felt that pull, that deep desire to connect with the Quran. To understand its verses, to perfect its recitation, to feel its words resonate within your soul. So, you open your browser, type "Quran teacher near me," and hit enter. Sounds simple, right? For many, this is just the beginning of a journey filled with unexpected turns, a journey we're calling "The Silent Struggle."
                    </p>
                    <p>
                        It's a struggle often kept quiet, laced with feelings of inadequacy, the fear of judgment, or the simple exhaustion of searching. But you are not alone. This post isn't just about finding a teacher; it's about acknowledging the profound spiritual and emotional landscape of that search.
                    </p>

                    <h2 className="text-3xl font-bold mt-10 mb-4 text-blue-700">More Than Just a Skill: It's a Sacred Connection</h2>
                    <p>
                        Learning the Quran isn't like learning to code or play an instrument. It's a deeply spiritual endeavor. You're not just seeking an instructor; you're often searching for a mentor, a guide who can not only teach you the rules of Tajweed but also inspire your heart and deepen your faith. This adds an extra layer of complexity and emotional weight to the search.
                    </p>
                    <div className="flex justify-center my-8">
                        {/* Placeholder for an image depicting someone contemplating or searching, perhaps with a faint glow of Quranic text */}
                        <Image
                            src={stressImage}
                            alt="Person struggling to find Quran teacher"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                            />
                    </div>

                    <h2 className="text-3xl font-bold mt-10 mb-4 text-emerald-700">The Unspoken Challenges We Face</h2>
                    <ul className="space-y-6 text-slate-700">
                        <li className="flex items-start gap-3">
                            <Users size={20} className="flex-shrink-0 mt-1 text-blue-500" />
                            <div>
                                <span className='font-bold'>The "Perfect Fit" Dilemma:</span> You might find many teachers, but is their teaching style compatible with yours? Do they understand your learning pace, your cultural background, your specific goals? The search for that ideal match can be draining.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Search size={20} className="flex-shrink-0 mt-1 text-green-500" />
                            <div>
                                <span className='font-bold'>Geographical Barriers:</span> Especially in regions with smaller Muslim communities (like Edmonton, Alberta!), finding a local teacher can be incredibly difficult, pushing many towards online options, which come with their own set of challenges.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Handshake size={20} className="flex-shrink-0 mt-1 text-purple-500" />
                            <div>
                                <span className='font-bold'>Financial Considerations:</span> Quality Quranic education often comes at a cost, and for many, balancing this with other life expenses is a significant hurdle.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CalendarDays size={20} className="flex-shrink-0 mt-1 text-red-500" />
                            <div>
                                <span className='font-bold'>Time Constraints:</span> Juggling work, family, and other commitments makes finding a consistent slot for lessons a logistical puzzle.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <ShieldCheck size={20} className="flex-shrink-0 mt-1 text-teal-500" />
                            <div>
                                <span className='font-bold'>Fear of Judgment:</span> For those who feel their recitation isn't "good enough" or worry about making mistakes, the idea of presenting themselves to a new teacher can be intimidating.
                            </div>
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold mt-10 mb-4 text-purple-700">Embracing the Journey, Not Just the Destination</h2>
                    <p>
                        What if we reframed this "struggle" not as a barrier, but as part of the spiritual journey itself? The very act of seeking knowledge is an act of worship. The patience, the perseverance, the hope you cling to – these are all qualities cherished in Islam.
                    </p>
                    <div className="flex justify-center my-8">
                        {/* Placeholder for an image symbolizing patience and spiritual journey, perhaps a winding path leading to a glowing book */}
                        <Image
                            src={hourGlassImage}
                            alt="Spiritual journey and patience"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                            />
                    </div>
                    <p>
                        Every "dead end" in your search is a lesson in reliance on Allah. Every moment of frustration is an opportunity to strengthen your resolve.
                    </p>

                    <h2 className="text-3xl font-bold mt-10 mb-4 text-teal-700">Finding Solace and Moving Forward</h2>
                    <p>
                        Here's how to navigate this silent struggle with renewed hope and perspective:
                    </p>
                    <ul className="space-y-6 text-slate-700">
                        <li className="flex items-start gap-3">
                            <Heart size={20} className="flex-shrink-0 mt-1 text-pink-500" />
                            <div>
                                <span className='font-bold'>Make Du'a (Supplication):</span> Turn to Allah. Ask Him to open doors, to guide you to the right teacher, and to ease your path to learning His words.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Users size={20} className="flex-shrink-0 mt-1 text-green-500" />
                            <div>
                                <span className='font-bold'>Network Within Your Community:</span> Speak to trusted imams, community elders, or even other sisters and brothers at the mosque. Word-of-mouth recommendations are often invaluable.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Search size={20} className="flex-shrink-0 mt-1 text-blue-500" />
                            <div>
                                <span className='font-bold'>Explore Online Platforms (Strategically):</span> Don't just pick the first result. Read reviews, watch introductory videos, and even try a trial lesson if offered. Look for platforms that prioritize student-teacher compatibility.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Lightbulb size={20} className="flex-shrink-0 mt-1 text-yellow-500" />
                            <div>
                                <span className='font-bold'>Be Open to Different Formats:</span> Maybe a one-on-one isn't available, but a group class online or in-person might be. Sometimes flexibility in format can open up new opportunities.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CalendarDays size={20} className="flex-shrink-0 mt-1 text-red-500" />
                            <div>
                                <span className='font-bold'>Focus on the "Now":</span> While searching, don't stop learning! Listen to beautiful recitations, read translations, or use simple apps. Every small step is progress.
                            </div>
                        </li>
                    </ul>
                    <div className="flex justify-center my-8">
                        {/* Placeholder for an image depicting a diverse group of people learning online or a hand holding a digital device with Quranic text */}
                        <Image
                            src={varietyImage}
                            alt="Diverse online Quran learning"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                            />
                    </div>
                    <p>
                        The journey to connect with the Quran is deeply personal and rarely linear. If you're currently in "The Silent Struggle," know that your efforts are seen, and your intention is rewarded. Keep seeking, keep praying, and know that the path will eventually unfold.
                    </p>
                </div>

                {/* Call to Action Section */}
                <TeachingCTA />
            </motion.main>

            <CommonFooter />
        </div>
    );
};