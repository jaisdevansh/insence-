"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const { scrollY, scrollYProgress } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 100) setHidden(true);
        else setHidden(false);

        if (latest > 20) setScrolled(true);
        else setScrolled(false);
    });

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-[#C6A75E] origin-left z-[60]"
                style={{ scaleX }}
            />

            <motion.nav
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-100%", opacity: 0 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-[#F4E7D3]/80 backdrop-blur-2xl border-b border-[#C6A75E]/40 shadow-xl py-3' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
                    <Link href="/" className="font-hindi text-4xl font-extrabold text-gradient-gold flex items-center tracking-wider hover:opacity-80 transition-opacity drop-shadow-sm">
                        उदलय
                    </Link>
                    <div className="hidden md:flex items-center gap-10">
                        {links.map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`font-english text-lg transition-all duration-300 relative group tracking-wider ${isActive ? "text-[#7B1E1E] font-semibold drop-shadow-sm" : "text-[#8B5A2B] hover:text-[#7B1E1E]"
                                        }`}
                                >
                                    {link.name}
                                    {isActive ? (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#C6A75E] rounded-full shadow-[0_0_8px_rgba(198,167,94,0.8)]"
                                        />
                                    ) : (
                                        <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#C6A75E]/50 rounded-full transition-all duration-300 group-hover:w-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                    {/* Mobile menu could go here, keeping it simple for now */}
                    <div className="md:hidden flex items-center">
                        <button className="text-[#8B5A2B] font-english text-lg px-5 py-2 rounded-full border border-[#C6A75E]/50 hover:bg-[#C6A75E]/10 transition-colors shadow-sm">Menu</button>
                    </div>
                </div>
            </motion.nav>
        </>
    );
}
