'use client'

import { motion } from 'framer-motion';
import {
    CalendarDays, Lightbulb, TrendingUp, Handshake, ShieldCheck,
    Search, Users, Star, BookOpenText, ThumbsUp, Heart, Sparkles, Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CommonFooter } from '@/components/common-footer';
import { containerVariants } from "@/lib/motionVariants";
import LandingNavbar from '@/components/landing-navbar';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import AuthorDate from '@/components/ui/author-date';
import { TeachingCTA } from '@/components/ui/teaching-cta';
import Image from 'next/image';
import bookShelfImage from '@/lib/images/bookshelf.jpg'
import brainConnectionImage from '@/lib/images/brain_connection.jpg'
import longRoadImage from '@/lib/images/long_road.jpg'

export default function HopelessToHopefulBlogPage() {
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
                    className="mx-auto flex flex-col gap-8 py-0 px-4 max-w-3xl"
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
                            From Hopeless to Hopeful: Your Guide to a Meaningful Quran Learning Journey (Even Without a 'Perfect' Teacher)
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                                Feeling stuck in your Quran journey without a traditional teacher? Discover empowering strategies and resources to ignite your learning and find profound connection.
                            </p>
                        </motion.div>

                        <AuthorDate dateTime="2024-03-17" dateText="March 17, 2024" />
                    </div>
                </motion.section>

                <Separator className="w-full max-w-2xl bg-indigo-100 opacity-50" />

                <div className='text-slate-900 max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-8'>
                    <p>
                        The desire to learn the Quran is a beautiful one, a yearning to draw closer to Allah's words. Yet, for many, the path to learning feels blocked without a dedicated, in-person teacher. We hear the emphasis on proper Tajweed and the importance of a living chain of transmission, and without immediate access to this, it's easy to fall into despair or put our learning on hold.
                    </p>
                    <p>
                        But what if your journey doesn't need to wait for a "perfect" teacher to appear? What if you could cultivate a rich, meaningful Quranic learning experience right now, with the resources available at your fingertips? This guide is for those who feel hopeless in their search, offering a new perspective and practical steps to transform your outlook to one of hope and proactive learning.
                    </p>

                    <h2 className="text-3xl font-bold mt-10 mb-4 text-blue-700">Redefining "Teacher": The Resources All Around You</h2>
                    <p>
                        While a qualified human teacher is invaluable, the concept of a "teacher" in the digital age can be broader. Think of anyone or anything that aids your understanding and connection to the Quran as a facilitator of knowledge.
                    </p>
                    <div className="flex justify-center my-8">
                        {/* Placeholder for an image depicting a person with various learning tools around them: books, tablet with an app, headphones, etc. */}
                        <Image
                            src={bookShelfImage}
                            alt="Diverse Quran learning resources"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                            />
                    </div>

                    <h2 className="text-3xl font-bold mt-10 mb-4 text-emerald-700">Empowering Your Self-Study Journey</h2>
                    <ul className="space-y-6 text-slate-700">
                        <li className="flex items-start gap-3">
                            <BookOpenText size={20} className="flex-shrink-0 mt-1 text-blue-500" />
                            <div>
                                <span className='font-bold'>Utilize Reputable Translations & Tafsir:</span> Start by understanding the meaning. Read different reputable translations (e.g., Saheeh International, M.A.S. Abdel Haleem) and simple tafsir (commentary) to grasp the context and lessons of the verses. Websites like Quran.com offer multiple options.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Lightbulb size={20} className="flex-shrink-0 mt-1 text-yellow-500" />
                            <div>
                                <span className='font-bold'>Leverage Quranic Apps & Software:</span> Many apps (e.g., Quran Explorer, Quranic) offer features like verse-by-verse recitation with highlighting, Tajweed rules explanations, and even quizzes. These can be excellent for memorization and improving pronunciation.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Users size={20} className="flex-shrink-0 mt-1 text-green-500" />
                            <div>
                                <span className='font-bold'>Join Online Communities:</span> Engage with other learners! Forums, Facebook groups, or Discord servers dedicated to Quran study can provide motivation, answer questions, and offer accountability.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <TrendingUp size={20} className="flex-shrink-0 mt-1 text-red-500" />
                            <div>
                                <span className='font-bold'>Consistent Listening & Imitation:</span> Listen to professional Qaris (reciters) like Mishary Alafasy, Abdul Basit Abdus Samad, or Hudaify. Repeated listening helps attune your ear to proper pronunciation and rhythm. Try to imitate their recitation.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Sparkles size={20} className="flex-shrink-0 mt-1 text-purple-500" />
                            <div>
                                <span className='font-bold'>Focus on a Small, Manageable Amount:</span> Instead of feeling overwhelmed by the entire Quran, commit to learning one ayah, one surah, or even just a few words daily. Consistency is key.
                            </div>
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold mt-10 mb-4 text-purple-700">Cultivating a Meaningful Connection</h2>
                    <p>
                        Beyond the technicalities of recitation, the goal is to foster a living relationship with Allah's book.
                    </p>
                    <div className="flex justify-center my-8">
                        {/* Placeholder for an image illustrating a deep, personal connection to the Quran, perhaps hands gently holding a Mushaf with light emanating from it */}
                        <Image
                            src={brainConnectionImage}
                            alt="Diverse Quran learning resources"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                            />
                    </div>
                    <ul className="space-y-6 text-slate-700">
                        <li className="flex items-start gap-3">
                            <Heart size={20} className="flex-shrink-0 mt-1 text-pink-500" />
                            <div>
                                <span className='font-bold'>Reflect (Taddabur) Deeply:</span> Read the translation of a verse, then ponder its meaning. How does it apply to your life? What lesson can you draw from it? Journaling your reflections can be incredibly powerful.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Compass size={20} className="flex-shrink-0 mt-1 text-indigo-500" />
                            <div>
                                <span className='font-bold'>Integrate into Daily Life:</span> Try to implement the teachings of the Quran in your actions and character. This is the ultimate goal of learning.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <ThumbsUp size={20} className="flex-shrink-0 mt-1 text-teal-500" />
                            <div>
                                <span className='font-bold'>Seek Feedback (When Possible):</span> Even if you don't have a regular teacher, occasionally ask a knowledgeable friend or an Imam to listen to your recitation and offer gentle corrections.
                            </div>
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold mt-10 mb-4 text-teal-700">Your Journey, Your Pace, Your Reward</h2>
                    <p>
                        Allah rewards intention and effort. The very act of striving to learn His book, even when facing challenges, is beloved by Him. Don't let the absence of a "perfect" teacher deter you. Instead, use it as an opportunity to be resourceful, innovative, and deeply connected to your learning process.
                    </p>
                    <p>
                        Every ayah you learn, every word you understand, every moment you spend in reflection with the Quran brings you closer to Allah. Embrace your journey with hope, knowing that even without a traditional teacher, a meaningful and blessed learning experience is well within your reach. Start today, with what you have, and watch how Allah opens doors for you.
                    </p>
                    <div className="flex justify-center my-8">
                        {/* Placeholder for an image depicting a sunrise or a clear path, symbolizing hope and new beginnings in learning */}
                        <Image
                            src={longRoadImage}
                            alt="Diverse Quran learning resources"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                            />
                    </div>
                </div>

                {/* Call to Action Section */}
                <TeachingCTA />
            </motion.main>

            <CommonFooter />
        </div>
    );
};