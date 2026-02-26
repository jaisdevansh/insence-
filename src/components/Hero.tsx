"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 1000], ["0%", "10%"]);
    const router = useRouter();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: "easeOut" }
    };

    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
        circle.classList.add("ripple");

        const ripple = btn.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }
        btn.appendChild(circle);
    };

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#F4E7D3] py-16 lg:py-24 flex items-center">
            {/* Background Parallax Mandala Pattern */}
            <motion.div
                style={{ y: yParallax }}
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[150%] h-[150%] object-cover">
                    {/* Simple representative mandala geometry so it's faint but present */}
                    <g transform="translate(100 100)">
                        {[...Array(12)].map((_, i) => (
                            <path
                                key={i}
                                d="M 0 0 C 20 -40, 40 -40, 0 -80 C -40 -40, -20 -40, 0 0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                transform={`rotate(${i * 30})`}
                            />
                        ))}
                        <circle cx="0" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </g>
                </svg>
            </motion.div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left: Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Top Spiritual Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-sandalwood font-hindi tracking-widest text-sm lg:text-base font-semibold mb-6 uppercase"
                        >
                            || जय शंकर ||
                        </motion.p>

                        {/* Brand Title */}
                        <div className="relative mb-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="font-hindi text-5xl lg:text-7xl font-bold text-foreground"
                            >
                                उदलय सुगंधालय
                            </motion.h1>
                            {/* Golden Underline */}
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                                className="absolute -bottom-2 lg:-bottom-4 left-0 h-[3px] bg-gold rounded-full"
                                style={{ transformOrigin: "left" }}
                            />
                        </div>

                        {/* Tagline */}
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="font-english text-maroon text-2xl lg:text-3xl font-medium italic mb-8"
                        >
                            “हर सुगंध में श्रद्धा”
                        </motion.h2>

                        {/* Description Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="font-hindi text-foreground/80 leading-8 lg:leading-9 max-w-lg mb-10 text-lg"
                        >
                            हमारे प्रीमियम धूप और अगरबत्ती के साथ एक दिव्य और शांतिपूर्ण वातावरण का अनुभव करें।
                            प्राकृतिक जड़ी-बूटियों और शुद्ध सुगंधों से निर्मित, हमारा हर एक उत्पाद आपके
                            आध्यात्मिक क्षणों को और भी अधिक पवित्र बनाता है।
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <button
                                onClick={(e) => { handleRipple(e); setTimeout(() => router.push("/products"), 300); }}
                                className="font-hindi relative overflow-hidden rounded-full border border-[#C6A75E] bg-white/20 px-10 py-4 text-xl font-bold text-[#8B5A2B] shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-[#C6A75E]/15 hover:shadow-[0_15px_30px_-5px_rgba(198,167,94,0.4)] active:scale-95 btn-ripple"
                            >
                                <span className="relative z-10">हमारे उत्पाद देखें</span>
                            </button>
                            <button
                                onClick={(e) => { handleRipple(e); setTimeout(() => router.push("/contact"), 300); }}
                                className="font-hindi relative overflow-hidden rounded-full border border-[#C6A75E] bg-white/20 px-10 py-4 text-xl font-bold text-[#7B1E1E] shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-[#C6A75E]/15 hover:shadow-[0_15px_30px_-5px_rgba(198,167,94,0.4)] active:scale-95 btn-ripple"
                            >
                                <span className="relative z-10">संपर्क करें</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Ultra-Premium Cinematic Visual */}
                    <div className="relative flex justify-center items-center h-[550px] lg:h-[750px] w-full mt-12 lg:mt-0 perspective-1000">
                        {/* Soft Deep Glow Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-[#C6A75E]/40 via-[#8B5A2B]/15 to-transparent blur-3xl pointer-events-none" />

                        {/* Spinning Background Golden Mandala */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[85%] lg:w-[100%] aspect-square opacity-[0.06] animate-[spin_60s_linear_infinite] pointer-events-none z-0">
                            <svg viewBox="0 0 100 100" fill="none" stroke="#8B5A2B" strokeWidth="0.5" className="w-full h-full drop-shadow-[0_0_15px_rgba(198,167,94,0.5)]">
                                {[...Array(24)].map((_, i) => (
                                    <path key={i} d="M50,50 Q60,10 50,0 Q40,10 50,50" transform={`rotate(${i * 15} 50 50)`} />
                                ))}
                                <circle cx="50" cy="50" r="48" />
                                <circle cx="50" cy="50" r="35" />
                                <circle cx="50" cy="50" r="22" />
                            </svg>
                        </div>

                        {/* Main Floating Animation Container */}
                        <motion.div
                            animate={{
                                y: isMobile ? [0, -10, 0] : [0, -18, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative w-[85%] md:w-[70%] lg:w-full max-w-[440px] aspect-[10/13] z-10"
                        >
                            {/* Outer Frame with Temple Arch Style */}
                            <div className="absolute inset-0 rounded-t-[180px] rounded-b-[40px] bg-gradient-to-b from-[#C6A75E]/30 to-white/5 backdrop-blur-xl p-[1px] shadow-[0_40px_80px_-20px_rgba(139,90,43,0.4)]">
                                {/* Inner Arch Image Container */}
                                <div className="relative w-full h-full rounded-t-[179px] rounded-b-[39px] overflow-hidden bg-[#4A2F1A] border-4 border-white/10 shadow-inner">
                                    <Image
                                        src="/images/hero-incense.png"
                                        alt="Temple Incense Experience"
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority
                                        fetchPriority="high"
                                    />
                                    {/* Luxurious Vignette Overlay */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,0,0,0.5)_120%)] pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A2F1A]/80 via-transparent to-transparent opacity-80 pointer-events-none" />
                                </div>
                            </div>

                            {/* Floating "100% Pure" Badge Overlapping the Bottom Left */}
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-6 lg:-left-10 bottom-12 w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-white/20 backdrop-blur-2xl border border-white/60 shadow-[0_15px_35px_rgba(139,90,43,0.2)] flex flex-col items-center justify-center p-2 z-20 group"
                            >
                                <div className="w-full h-full rounded-full border border-dashed border-[#C6A75E]/70 flex flex-col items-center justify-center group-hover:bg-[#C6A75E]/10 transition-colors duration-500">
                                    <span className="text-3xl lg:text-4xl mb-1">🌿</span>
                                    <span className="font-english font-bold text-[#7B1E1E] text-xs lg:text-sm tracking-widest text-center leading-tight">100%<br />PURE</span>
                                </div>
                            </motion.div>

                            {/* Decorative Gold Leaf Right Edge */}
                            <div className="absolute -right-4 lg:-right-6 top-1/4 w-8 h-24 lg:w-10 lg:h-32 bg-gradient-to-b from-[#C6A75E] to-[#8B5A2B] rounded-l-full blur-[2px] opacity-40 z-0 mix-blend-color-dodge" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
