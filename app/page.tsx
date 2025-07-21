"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Moon, Sword, Shield, BookText, Quote, User } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import LandingNavbar from "@/components/landing-navbar";
import { useRouter } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StudentLeaderboard } from "@/components/student-leaderboard";
import { Keyboard } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PricingPlan from "@/components/pricing-plan";
import { pricingPlans } from "@/lib/pricing-plans";
import {
  Clock, Frown, TrendingDown, RefreshCw, Lightbulb,
  Rocket, Target, FastForward, MessageCircle, Award,
  Flag, Gauge, CheckCircle, Trophy, BarChart
} from 'lucide-react';
import ProfilePicturePlaceholder from "@/lib/profile-picture-placeholder.jpg";
import Link from "next/link";

const faqs = [
  {
    question: "How long does it take to complete the Quran course?",
    answer: "The duration varies based on your commitment and prior knowledge. Most students complete our foundational program in 6-9 months with regular study. We offer flexible pacing options to accommodate different schedules."
  },
  {
    question: "Are your instructors certified?",
    answer: "Yes, all our instructors hold traditional Ijazah (certification) in Quranic recitation and Tajweed. Many are graduates of prestigious institutions like Al-Azhar University and have extensive teaching experience."
  },
  {
    question: "What if I miss a class?",
    answer: "All sessions are recorded and available in your student portal. You can review missed classes at your convenience and schedule make-up sessions with your instructor if needed."
  },
  {
    question: "Do I need prior Arabic knowledge?",
    answer: "No, our courses are designed for all levels. We have specialized tracks for complete beginners that start with Arabic alphabet recognition and build up to fluent Quran recitation."
  },
  {
    question: "Can children enroll in these courses?",
    answer: "Absolutely! We have specialized programs for children aged 6+ with child-friendly teaching methods, interactive activities, and parental progress tracking. All our children's instructors are trained in child education."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function PrimaryLanding() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('traditional');
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'l' || e.key === 'L') {
        setShowLeaderboard(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen dark:bg-slate-900">
      <LandingNavbar />

      {/* Floating button */}
      <motion.button
        className="cursor-pointer fixed bottom-4 right-4 z-50 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setShowLeaderboard(!showLeaderboard)}
      >
        <Keyboard className="w-5 h-5 text-emerald-600" />
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-emerald-800">
            {showLeaderboard ? 'Press L to Close' : 'Press L to Open Leaderboard'}
          </span>
          <span className="text-emerald-500 text-xs">• Click</span>
        </div>
      </motion.button>

      <StudentLeaderboard
        open={showLeaderboard}
        onOpenChange={setShowLeaderboard}
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-100/80 via-emerald-150 to-slate-300/30 dark:bg-gradient-to-b dark:from-emerald-900/20 dark:via-slate-800 dark:to-slate-900"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-emerald-900 dark:text-white mb-6">
              Save Hours of Qu'ran Learning with Our <br />
              <span className="text-amber-600">Specialized Methods</span>
            </h1>
            <motion.p
              className="text-xl text-emerald-700 dark:text-slate-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Learn from certified instructors with traditional Ijazah
            </motion.p>
            <Link
              href='#program'
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#program');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
              <Button
                className="h-14 text-lg relative overflow-hidden group px-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute -inset-[10rem] animate-shine opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)'
                    }}
                  />
                </div>

                {/* Button content */}
                <motion.span
                  className="flex items-center font-bold tracking-wide text-gray-200"
                  initial={{ letterSpacing: '0.025em' }}
                  whileHover={{ letterSpacing: '0.05em' }}
                >
                  Start Learning
                  <motion.span
                    className="ml-3"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </motion.span>
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <Moon className="h-24 w-24 mt-16 sm:mt-0 text-emerald-400 lg:h-32 lg:w-32 z-10 relative" />
              <div className="absolute -inset-8 bg-emerald-200/40 dark:bg-emerald-900/20 rounded-full blur-xl z-0 animate-pulse"></div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8 max-w-3xl mx-auto mt-12 mb-12"
      >
        <div className="space-y-6 bg-emerald-900/10 p-6 rounded-2xl border border-emerald-800/30">
          <h3 className="text-2xl font-bold text-emerald-300 bg-gradient-to-r from-emerald-900/50 to-transparent p-3 rounded-lg border-l-4 border-emerald-500">
            {activeTab === 'struggle'
              ? "The Recitation Roadblocks"
              : activeTab === 'solution'
                ? "Our Transformative Approach"
                : "Your Progress Journey"}
          </h3>

          <div className="space-y-4">
            {[
              ...(activeTab === 'struggle' ? [
                { icon: <Clock className="w-5 h-5 text-amber-500" />, text: "Months stuck on basic letters without tangible progress" },
                { icon: <Frown className="w-5 h-5 text-rose-400" />, text: "Frustration from repetitive fundamental lessons" },
                { icon: <TrendingDown className="w-5 h-5 text-orange-400" />, text: "Dwindling motivation from invisible results" },
                { icon: <RefreshCw className="w-5 h-5 text-cyan-400" />, text: "Endless cycle restarting without completion" },
                { icon: <Lightbulb className="w-5 h-5 text-emerald-300" />, text: "Why 7 in 10 students abandon traditional classes" }
              ] : activeTab === 'solution' ? [
                { icon: <Rocket className="w-5 h-5 text-emerald-300" />, text: "Accelerated tajweed mastery in record time" },
                { icon: <Target className="w-5 h-5 text-emerald-300" />, text: "Laser-focused correction of YOUR specific errors" },
                { icon: <FastForward className="w-5 h-5 text-emerald-300" />, text: "Progress-driven curriculum skipping redundant basics" },
                { icon: <MessageCircle className="w-5 h-5 text-emerald-300" />, text: "Real-time feedback during actual recitation" },
                { icon: <Award className="w-5 h-5 text-amber-400" />, text: "90% complete Juz' Amma within first quarter" }
              ] : [
                { icon: <Flag className="w-5 h-5 text-emerald-300" />, text: "First week: Confidently recite 5 essential surahs" },
                { icon: <Gauge className="w-5 h-5 text-emerald-300" />, text: "Month one: Master core tajweed through practical application" },
                { icon: <CheckCircle className="w-5 h-5 text-emerald-300" />, text: "Quarter one: Fluency in daily prayers & short chapters" },
                { icon: <Trophy className="w-5 h-5 text-amber-400" />, text: "Major milestone: First Juz' perfected with certification" },
                { icon: <BarChart className="w-5 h-5 text-emerald-300" />, text: "Measurable improvement tracked weekly" }
              ])
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-3 hover:bg-emerald-900/20 rounded-lg transition-all duration-300"
              >
                <span className={`p-1.5 rounded-md ${index === 4 ? 'bg-emerald-900/40' : 'bg-emerald-900/20'}`}>
                  {item.icon}
                </span>
                <p className={`text-lg ${index === 4 ? 'font-semibold text-emerald-300' : 'text-gray-200'}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-emerald-800/30 text-center">
          <div className="inline-flex flex-col items-center p-5 bg-gradient-to-br from-emerald-900/30 to-teal-900/20 rounded-2xl max-w-md mx-auto border border-emerald-800/30">
            <div className="font-arabic text-4xl text-emerald-300 mb-3">﷽</div>
            <p className="text-emerald-200">
              <span className="block font-bold text-lg mb-1">Breakthrough Learning Guarantee</span>
              <span className="text-emerald-300 font-medium">Complete your first Juz' in 90 days</span>
              <span className="text-gray-300 text-sm block mt-2">or receive complimentary coaching until you do</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        id="program"
        className="py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 dark:text-white mb-4">
              Traditional Learning Reimagined
            </h2>
            <p className="text-emerald-700 dark:text-slate-300 max-w-2xl mx-auto text-lg">
              Spend your time learning what's important to your religion. Dodge modern doubts
              and focus on authentic Islamic knowledge with our structured curriculum.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-col sm:flex-row">
            {[
              {
                id: 'traditional',
                icon: BookText,
                label: 'Traditional Path',
                benefits: [
                  "Certified Traditional Scholars",
                  "Sanad-Verified Curriculum",
                  "Classical Teaching Methods",
                  "Direct Scholar Access",
                  "Ijazah Preparation"
                ]
              },
              {
                id: 'protection',
                icon: Shield,
                label: 'Doubts Protection',
                benefits: [
                  "Modern Doubt Analysis",
                  "Critical Thinking Framework",
                  "Comparative Religion Studies",
                  "Quranic Refutation Methods",
                  "Live Q&A Sessions"
                ]
              },
              {
                id: 'practice',
                icon: Sword,
                label: 'Practical Application',
                benefits: [
                  "Daily Practice Drills",
                  "Real-World Scenarios",
                  "Peer Review System",
                  "Progress Tracking",
                  "Community Challenges"
                ]
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer flex flex-col items-center gap-3 p-4 rounded-xl transition-all ${activeTab === tab.id
                  ? 'bg-emerald-900 border-2 border-emerald-200'
                  : 'border-2 border-transparent hover:bg-emerald-50/30'
                  }`}
              >
                <tab.icon className={`w-10 h-10 transition-colors ${activeTab === tab.id ? 'text-blue-300' : 'text-emerald-300'
                  }`} />
                <span className={`font-medium ${activeTab === tab.id ? 'text-blue-300' : 'text-emerald-300'
                  }`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-900">Key Benefits</h3>
              {[
                ...(activeTab === 'traditional' ? [
                  "Certified Traditional Scholars",
                  "Sanad-Verified Curriculum",
                  "Classical Teaching Methods",
                  "Direct Scholar Access",
                  "Ijazah Preparation"
                ] : activeTab === 'protection' ? [
                  "Modern Doubt Analysis",
                  "Critical Thinking Framework",
                  "Comparative Religion Studies",
                  "Quranic Refutation Methods",
                  "Live Q&A Sessions"
                ] : [
                  "Daily Practice Drills",
                  "Real-World Scenarios",
                  "Peer Review System",
                  "Progress Tracking",
                  "Community Challenges"
                ])
              ].map((benefit, index, arr) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 mt-1 ${index === arr.length - 1 ? 'text-emerald-400' : 'text-gray-300'
                    }`} />
                  <p className={`text-lg ${index === arr.length - 1 ? 'font-semibold text-emerald-300' : 'text-gray-200'
                    }`}>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-emerald-100 text-left mt-5">
              <div className="flex items-center gap-4">
                <div className="font-arabic text-3xl text-emerald-300">﷽</div>
                <p className="text-lg text-emerald-300">
                  Curriculum rooted in the Qur'an and Authentic Sunnah of the Prophet <span className='text-2xl'>(ﷺ)</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Teacher Profile */}
      <motion.section
        className="py-16 bg-emerald-50 dark:bg-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Teacher Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[350px] h-[350px] rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-100">
                <Image
                  src={ProfilePicturePlaceholder}
                  alt="Instructor John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Teacher Bio */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-4xl font-bold text-emerald-900 dark:text-white">
                  Assalamu Alaikum, I'm John Doe! 👋
                </h2>
              </div>

              <p className="text-lg text-emerald-700 dark:text-slate-300 leading-relaxed">
                With over 15 years of experience in traditional Islamic education,
                I've dedicated my life to preserving and teaching authentic Quranic
                sciences. Certified with Ijazah in multiple Qira'at, I bring:
              </p>

              <ul className="space-y-5 pl-2">
                {[
                  "10,000+ teaching hours in Tajweed and Quranic recitation",
                  "Traditional certification from Al-Azhar University",
                  "Modern teaching expertise developed through 5 years of online education"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group mt-5 mb-5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 opacity-100 transition-opacity z-20" />
                      </div>
                    </div>
                    <p className="text-lg text-emerald-700 dark:text-slate-300">
                      <span className="font-semibold text-emerald-800 dark:text-emerald-300">
                        {item.split(' ')[0]}
                      </span> {item.substring(item.indexOf(' ') + 1)}
                    </p>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-emerald-100 rounded-lg">
                <p className="text-emerald-800 italic">
                  "My goal is to make authentic Islamic knowledge accessible while
                  maintaining the highest standards of traditional learning."
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 dark:text-white mb-4">
              Our Student Testimonials!
            </h2>
            <p className="text-emerald-700 dark:text-slate-300 max-w-2xl mx-auto">
              See what our students actively say about our growing program.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Placeholder */}
            <div className="w-full lg:w-1/2 h-[500px] bg-emerald-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center">
              <span className="text-emerald-600 text-lg">Student Photo Placeholder</span>
            </div>

            {/* Testimonial Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <Quote className="h-16 w-16 text-emerald-600 opacity-50" />

              <blockquote className="text-2xl font-medium text-emerald-900 dark:text-white leading-relaxed">
                "This program transformed my understanding of Tajweed. The traditional approach combined with modern teaching methods made complex concepts easy to grasp."
              </blockquote>

              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="/images/student-avatar.jpg" />
                  <AvatarFallback className="bg-emerald-100">
                    <User className="h-6 w-6 text-emerald-600" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-900">A'isha</h3>
                  <p className="text-emerald-600">Student of Islamic Studies</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                      <Star className="h-4 w-4" />
                      New Student Program
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Message */}
          <div className="mt-12 text-center text-emerald-700">
            <p className="text-lg">
              Be the first to share your experience after joining our program.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="pricing"
        className="py-16 bg-white dark:bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 dark:text-white mb-4">
              Transform Your Learning
            </h2>
            <p className="text-emerald-600 dark:text-emerald-400 max-w-2xl mx-auto">
              Choose the path that fits your journey to Quranic mastery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch mb-20">
            {pricingPlans.map((plan, index) => (
              <PricingPlan key={index} plan={plan} />
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 dark:text-white mb-3">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-emerald-200 dark:border-slate-700"
                >
                  <AccordionTrigger className="text-lg font-medium text-emerald-500 dark:text-slate-200 hover:no-underline hover:text-emerald-700 dark:hover:text-emerald-300 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-emerald-700 dark:text-slate-300 pb-4 text-md leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-emerald-700 dark:text-slate-300">
                Still have questions?{" "}
                <a
                  href="/contact"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Contact our support team
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}