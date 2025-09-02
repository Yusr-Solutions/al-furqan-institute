import { containerVariants } from "@/lib/motionVariants"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "./button"
import { Lightbulb } from "lucide-react"

export function TeachingCTA() {
    return (
        <motion.section
            className="mx-auto flex flex-col gap-3 px-4 max-w-5xl text-center mt-10 bg-purple-50 rounded-2xl py-10"
            variants={containerVariants}
            aria-labelledby="main-heading"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl leading=[3] py-2 md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"
            >
                Start Your Quran Learning Journey Today!
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className="text-xl font-semibold text-slate-700 max-w-2xl mx-auto">
                    Unlock the beauty of the Quran with experienced teachers and a structured curriculum.
                </p>
            </motion.div>

            <Link href="/#program">
                <Button
                    className='relative mt-10 px-8 cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-purple-600 to-teal-500 text-white hover:from-purple-700 hover:to-teal-600 h-11 py-3'
                >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Explore What We Offer
                </Button>
            </Link>
        </motion.section>
    )
}