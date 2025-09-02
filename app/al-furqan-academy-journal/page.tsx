'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
    FileText, Wrench
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CommonFooter } from '@/components/common-footer';
import LandingNavbar from '@/components/landing-navbar';
import { containerVariants } from "@/lib/motionVariants";
import Link from 'next/link';

export default function ResourcesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50 transition-colors duration-300">
            <LandingNavbar />

            <motion.main
                className="w-full flex flex-col items-center gap-12 py-12 mt-16 px-4 sm:px-6 md:px-8 flex-1"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Header Section */}
                <motion.section
                    className="mx-auto flex flex-col gap-8 py-0 px-4 w-full"
                    variants={containerVariants}
                    aria-labelledby="main-heading"
                >
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl leading=[3] py-2 md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500"
                        >
                            Our Academy Journal
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                                Dive into a world of knowledge and inspiration. Our articles cover everything from essential learning tips to profound spiritual insights, all designed to support your journey with the Quran.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Section: Blog Posts */}
                    <motion.section
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <Card className="bg-white text-slate-900 border border-indigo-100">
                            <CardHeader className="flex flex-row items-center gap-8">
                                <FileText className="h-12 w-12 text-blue-600" />
                                <div>
                                    <CardTitle className="text-2xl font-bold">Blog Posts</CardTitle>
                                    <CardDescription className="text-gray-400 mt-1">
                                        Learn about SEO, marketing, and business growth with our expert guides.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                        {/* You can list your blog posts here with descriptions */}
                        <ul className="flex flex-col gap-5 text-slate-700 relative mt-5">
                            <li>
                                <Link href="/al-furqan-academy-journal/silent-struggle-finding-quran-teacher" className="text-lg text-blue-700 hover:text-blue-500 transition-colors">
                                    The Silent Struggle: Why Finding a Quran Teacher is More Than Just a Google Search
                                </Link>
                                <p className="text-sm text-slate-500 mt-1">A candid look at the emotional and spiritual journey of finding a Quran teacher and why you're not alone in the struggle.</p>
                            </li>
                            <li>
                                <Link href="/al-furqan-academy-journal/hopeless-to-hopeful-quran-journey" className="text-lg text-blue-700 hover:text-blue-500 transition-colors">
                                    From Hopeless to Hopeful: Your Guide to a Meaningful Quran Learning Journey (Even Without a 'Perfect' Teacher)
                                </Link>
                                <p className="text-sm text-slate-500 mt-1">Discover how to empower your self-study and find a deep connection to the Quran using the resources you already have.</p>
                            </li>
                            {/* Add more list items for your blog posts */}
                        </ul>
                    </motion.section>

                    {/* Right Section: Tools */}
                    <motion.section
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="space-y-6"
                    >
                        <Card className="bg-white text-slate-900 border border-indigo-100">
                            <CardHeader className="flex flex-row items-center gap-8">
                                <Wrench className="h-12 w-12 text-emerald-600" />
                                <div>
                                    <CardTitle className="text-2xl font-bold">Tools</CardTitle>
                                    <CardDescription className="text-gray-400 mt-1">
                                        Use free tools to enhance your Umrah business operations and marketing strategies.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                        {/* You can list your tools here with descriptions */}
                        <ul className="space-y-6 text-slate-700 relative mt-5">
                            <li>
                                <p className="text-sm text-slate-500 mt-1">Not available at the moment. Stay tuned!</p>
                            </li>
                            {/* Add more list items for your tools */}
                        </ul>
                    </motion.section>
                </div>
            </motion.main>

            <CommonFooter />
        </div>
    );
};