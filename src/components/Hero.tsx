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
        <section className="relative w-full min-h-screen overflow-hidden bg-[#F4E7D3] pt-24 pb-16 lg:py-24 flex items-center">
            {/* Background Parallax Mandala Pattern */}
            <motion.div
                style={{ y: yParallax }}
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[150%] h-[150%] object-cover">
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
                    </g>
                </svg>
            </motion.div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left: Text Content - Placed FIRST on mobile */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1 w-full max-w-2xl mx-auto lg:mx-0">
                        {/* Top Spiritual Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#8B5A2B] font-hindi tracking-widest text-xs sm:text-sm lg:text-base font-semibold mb-4 sm:mb-6 uppercase"
                        >
                            || जय शंकर ||
                        </motion.p>

                        {/* Brand Title */}
                        <div className="relative mb-4 sm:mb-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="font-hindi text-4xl sm:text-5xl lg:text-7xl font-bold text-[#4A2F1A] leading-tight"
                            >
                                उदलय सुगंधालय
                            </motion.h1>
                            {/* Golden Underline */}
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.4, duration: 1 }}
                                className="absolute -bottom-2 h-[2px] lg:h-[3px] bg-[#C6A75E] rounded-full"
                                style={{ transformOrigin: "left" }}
                            />
                        </div>

                        {/* Tagline */}
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="font-english text-[#7B1E1E] text-xl sm:text-2xl lg:text-3xl font-medium italic mb-6 sm:mb-8"
                        >
                            &ldquo;हर सुगंध में श्रद्धा&rdquo;
                        </motion.h2>

                        {/* Description Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="font-hindi text-[#4A2F1A]/80 leading-7 sm:leading-8 lg:leading-9 mb-8 sm:mb-10 text-base sm:text-lg max-w-md lg:max-w-lg"
                        >
                            हमारे प्रीमियम धूप और अगरबत्ती के साथ एक दिव्य और शांतिपूर्ण वातावरण का अनुभव करें।
                            प्राकृतिक खुशबुओं के साथ आपके आध्यात्मिक क्षणों को और भी पवित्र बनाते हैं।
                        </motion.p>

                        {/* CTA Buttons - Full width on mobile */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <button
                                onClick={(e) => { handleRipple(e); setTimeout(() => router.push("/products"), 300); }}
                                className="font-hindi w-full sm:w-auto rounded-full border border-[#C6A75E] bg-white/20 px-8 lg:px-10 py-3.5 lg:py-4 text-lg lg:text-xl font-bold text-[#8B5A2B] shadow-lg transition-all active:scale-95"
                            >
                                हमारे उत्पाद देखें
                            </button>
                            <button
                                onClick={(e) => { handleRipple(e); setTimeout(() => router.push("/contact"), 300); }}
                                className="font-hindi w-full sm:w-auto rounded-full border border-[#C6A75E] bg-white/20 px-8 lg:px-10 py-3.5 lg:py-4 text-lg lg:text-xl font-bold text-[#7B1E1E] shadow-lg transition-all active:scale-95"
                            >
                                संपर्क करें
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Cinematic Image Visual - Placed BELOW text on mobile */}
                    <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[700px] w-full order-2 lg:order-2">
                        {/* Glow Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full sm:w-[80%] sm:h-[80%] rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-[#C6A75E]/30 via-[#8B5A2B]/10 to-transparent blur-3xl pointer-events-none" />

                        {/* Spinning Mandala (Reduced opacity for mobile) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[85%] lg:w-[100%] aspect-square opacity-[0.03] lg:opacity-[0.06] animate-[spin_60s_linear_infinite] pointer-events-none z-0">
                            <svg viewBox="0 0 100 100" fill="none" stroke="#8B5A2B" strokeWidth="0.5" className="w-full h-full">
                                {[...Array(24)].map((_, i) => (
                                    <path key={i} d="M50,50 Q60,10 50,0 Q40,10 50,50" transform={`rotate(${i * 15} 50 50)`} />
                                ))}
                            </svg>
                        </div>

                        {/* Main Floating Animation Container */}
                        <motion.div
                            animate={{
                                y: isMobile ? [0, -5, 0] : [0, -15, 0], // Reduced range for mobile
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative w-[80%] sm:w-[70%] lg:w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[440px] aspect-[10/13] z-10"
                        >
                            {/* Frame */}
                            <div className="absolute inset-0 rounded-t-[140px] lg:rounded-t-[180px] rounded-b-[30px] lg:rounded-b-[40px] bg-gradient-to-b from-[#C6A75E]/20 to-transparent backdrop-blur-md p-[1px] shadow-2xl">
                                <div className="relative w-full h-full rounded-t-[139px] lg:rounded-t-[179px] rounded-b-[29px] lg:rounded-b-[39px] overflow-hidden bg-[#4A2F1A] border-2 lg:border-4 border-white/10 shadow-inner">
                                    <Image
                                        src="/images/hero-incense.png"
                                        alt="Incense"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        priority
                                        fetchPriority="high"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A2F1A]/60 via-transparent to-transparent opacity-80" />
                                </div>
                            </div>

                            {/* Badge (Small scaled for mobile) */}
                            <div className="absolute -left-4 sm:-left-6 lg:-left-10 bottom-8 sm:bottom-12 w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-xl flex items-center justify-center p-1.5 z-20">
                                <div className="w-full h-full rounded-full border border-dashed border-[#C6A75E]/50 flex flex-col items-center justify-center">
                                    <span className="text-xl sm:text-2xl lg:text-4xl mb-0.5 sm:mb-1">🌿</span>
                                    <span className="font-english font-bold text-[#7B1E1E] text-[10px] sm:text-xs lg:text-sm tracking-widest text-center leading-tight">100%<br />PURE</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
