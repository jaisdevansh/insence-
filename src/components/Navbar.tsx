"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const { scrollY, scrollYProgress } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 100 && !isOpen) setHidden(true);
        else setHidden(false);

        if (latest > 20) setScrolled(true);
        else setScrolled(false);
    });

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [isOpen]);

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
                className="fixed top-0 left-0 right-0 h-[3px] bg-[#C6A75E] origin-left z-[70]"
                style={{ scaleX }}
            />

            <motion.nav
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-100%", opacity: 0 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${scrolled || isOpen ? 'bg-[#F4E7D3]/95 backdrop-blur-xl border-b border-[#C6A75E]/20 shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-12 flex h-20 items-center justify-between">
                    <Link
                        href="/"
                        className="font-hindi text-3xl lg:text-4xl font-extrabold text-gradient-gold drop-shadow-sm z-[70]"
                        onClick={() => setIsOpen(false)}
                    >
                        उदलय
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {links.map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`font-english text-lg transition-all duration-300 relative group tracking-wider ${isActive ? "text-[#7B1E1E] font-semibold" : "text-[#8B5A2B] hover:text-[#7B1E1E]"
                                        }`}
                                >
                                    {link.name}
                                    {isActive ? (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#C6A75E] rounded-full"
                                        />
                                    ) : (
                                        <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#C6A75E]/50 rounded-full transition-all duration-300 group-hover:w-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-[70] p-2 text-[#8B5A2B] hover:text-[#7B1E1E] transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Slide-down Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "100vh", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full bg-[#F4E7D3] z-[65] overflow-hidden md:hidden pt-24"
                        >
                            <div className="flex flex-col px-6 gap-2">
                                {links.map((link, idx) => {
                                    const isActive = pathname === link.path;
                                    return (
                                        <motion.div
                                            key={link.path}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 * idx }}
                                        >
                                            <Link
                                                href={link.path}
                                                className={`flex items-center h-[56px] text-2xl font-english tracking-wide transition-colors ${isActive ? "text-[#7B1E1E] font-bold" : "text-[#8B5A2B]"
                                                    }`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
