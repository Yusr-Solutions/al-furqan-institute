"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function LandingNavbar() {
    const pathname = usePathname();
    const router = useRouter(); // Use useRouter to navigate
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // This effect runs whenever the URL's hash changes
        // and handles the smooth scroll.
        if (typeof window !== 'undefined' && window.location.hash) {
            const hash = window.location.hash;
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname]);

    const navItems = [
        { name: 'Academy Journal (Our Blog)', href: '/al-furqan-academy-journal' },
        { name: 'What We Offer', href: '/#program' },
        { name: 'Testimonials', href: '/#testimonials' },
    ];

    const handleScrollOrRedirect = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        const hash = href.split('#')[1];
        if (pathname === '/') {
            // We are on the homepage, so just scroll
            e.preventDefault(); // Prevent default link behavior
            const target = document.getElementById(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // We are not on the homepage, redirect first
            router.push(`/${href}`);
        }
        setIsMenuOpen(false); // Close mobile menu after click
    };

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed w-full bg-transparent backdrop-blur-lg border-b border-indigo-100 z-50 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <GraduationCap className="h-8 w-8 z-20 text-violet-600" />
                            <span className="text-2xl font-bold bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tight">
                                Al Furqan Institute
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href.startsWith('/#')) {
                                        handleScrollOrRedirect(e, item.href);
                                    } else {
                                        setIsMenuOpen(false);
                                    }
                                }}
                                className={`relative group font-medium transition-all transform ${
                                    item.name === 'Academy Journal (Our Blog)'
                                        ? 'bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 hover:scale-[1.01]'
                                        : 'text-indigo-700 hover:text-indigo-900'
                                }`}
                            >
                                {item.name}
                                {item.name !== 'Academy Journal (Our Blog)' && (
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all group-hover:w-full"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden w-full bg-white border-b shadow-lg"
                >
                    <div className="px-4 pt-2 pb-5 space-y-3">
                        <div className="flex items-center justify-between py-3">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        if (item.href.startsWith('/#')) {
                                            handleScrollOrRedirect(e, item.href);
                                        } else {
                                            setIsMenuOpen(false);
                                        }
                                    }}
                                    className={`block px-4 py-3 rounded-lg transition-colors ${
                                        item.name === 'Academy Journal (Our Blog)'
                                            ? 'bg-violet-600 text-white hover:bg-violet-700'
                                            : 'text-indigo-900 hover:bg-indigo-50'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}