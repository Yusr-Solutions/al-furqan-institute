// components/Navbar.tsx
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, X, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
//import { AuthentificationCheck } from '@/lib/auth-check';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LandingNavbar() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //AuthentificationCheck({ setStatus: setUser });

    const navItems = [
        { name: 'What We Offer', href: '#program' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }
            }
            animate={{ y: 0, opacity: 1 }}
            className="fixed w-full bg-slate-800 backdrop-blur-sm border-b z-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="flex items-center justify-between h-16" >
                    {/* Logo Section */}
                    < div className="flex items-center gap-2" >
                        <Moon className="h-8 w-8 text-emerald-400" />
                        <span className="text-2xl font-bold text-emerald-400" > Al Hidaya Institute </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8" >
                        {
                            navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const target = document.querySelector(item.href);
                                        if (target) {
                                            target.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>

                    {/* Auth Buttons - Desktop 
                    <div className="hidden md:flex items-center gap-4" >
                        {
                            user ? (
                                <Button
                                    onClick={() => router.push('/dashboard')}
                                    className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white"
                                >
                                    Go to Dashboard
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        variant="outline"
                                        className="text-emerald-400 border-emerald-400 cursor-pointer"
                                        onClick={() => router.push('/')}>
                                        Login
                                    </Button>
                                    <Button
                                    className="bg-emerald-300 hover:bg-emerald-400 cursor-pointer"
                                    onClick={() => router.push('/')}>
                                        Sign Up
                                    </Button>
                                </>
                            )}
                    </div>*/}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-emerald-700"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }
                        }
                        className="md:hidden absolute w-full bg-white border-b"
                    >
                        <div className="px-4 pt-2 pb-3 space-y-4" >
                            <div className="flex items-center justify-between" >
                                <div className="flex items-center gap-2" >
                                    <Moon className="h-6 w-6 text-emerald-600" />
                                    <span className="text-xl font-bold text-emerald-400" > Al Hidaya Institute </span>
                                </div>
                                < button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 text-emerald-700"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            {
                                navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const target = document.querySelector(item.href);
                                            if (target) {
                                                target.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                ))
                            }

                            {/* <div className="pt-4 border-t" >
                                {
                                    user ? (
                                        <Button
                                            onClick={() => window.location.href = '/dashboard'
                                            }
                                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            Go to Dashboard
                                        </Button>
                                    ) : (
                                        <>
                                            <Button variant="outline" className="w-full mb-2 text-emerald-700 border-emerald-600" >
                                                Login
                                            </Button>
                                            < Button className="w-full bg-emerald-600 hover:bg-emerald-700" >
                                                Sign Up
                                            </Button>
                                        </>
                                    )}
                            </div>*/}
                        </div>
                    </motion.div>
                )}
        </motion.nav>
    );
}