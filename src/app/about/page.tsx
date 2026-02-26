import React from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata = {
    title: "हमारे बारे में | About Us - Udlay Sugandhalay",
    description: "Learn more about Udlay Sugandhalay.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-x-hidden flex flex-col font-english text-[#4A2F1A]">
            {/* Background Texture & Mandalas */}
            <div className="absolute inset-0 bg-[#F4E7D3] -z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/60 via-transparent to-[#C6A75E]/10 -z-10" />

            {/* HERO TITLE */}
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 flex flex-col items-center text-center w-full z-10">
                <SectionWrapper className="flex flex-col items-center">
                    <p className="font-hindi text-[#8B5A2B] font-bold tracking-widest text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 uppercase">|| जय शंकर ||</p>
                    <h1 className="font-hindi text-4xl sm:text-6xl lg:text-8xl font-black text-[#7B1E1E] mb-6 sm:mb-8 drop-shadow-lg">हमारे बारे में</h1>
                    <div className="w-24 sm:w-32 lg:w-40 h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent rounded-full mb-8 sm:mb-10" />
                    <p className="text-xl sm:text-2xl lg:text-4xl font-light text-[#4A2F1A] max-w-4xl leading-relaxed italic px-4">
                        &quot;Experience the pure essence of spirituality through sacred, hand-crafted fragrances.&quot;
                    </p>
                </SectionWrapper>
            </section>

            {/* OUR STORY SECTION */}
            <section className="relative w-full py-16 lg:py-24 px-6 lg:px-12 z-10 overflow-hidden">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 xl:gap-24">

                        {/* Left Image Gallery - Stacks below on mobile if needed, but here we keep it first or second depending on design. Let's stack it below text for mobile for better flow. */}
                        <div className="w-full lg:w-1/2 flex justify-center perspective-1000 relative order-2 lg:order-1 pt-12 lg:pt-0">
                            <SectionWrapper className="relative w-[85%] sm:w-[70%] lg:w-[85%] aspect-[4/5] rounded-[2.5rem] sm:rounded-[3rem] p-3 sm:p-4 bg-white/40 backdrop-blur-xl shadow-2xl border border-white/60 z-10">
                                <div className="relative w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#4A2F1A]">
                                    <Image
                                        src="/images/new-incense-1.png"
                                        alt="Traditional Incense"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A2F1A]/80 via-transparent to-transparent opacity-60" />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper className="absolute -right-2 sm:-right-8 lg:-right-10 bottom-4 sm:bottom-10 w-[45%] max-w-[240px] aspect-[3/4] rounded-[1.5rem] sm:rounded-[2rem] p-2 sm:p-3 bg-white/50 backdrop-blur-2xl shadow-xl border border-white/60 z-20">
                                <div className="relative w-full h-full rounded-[1rem] sm:rounded-[1.5rem] overflow-hidden">
                                    <Image
                                        src="/images/new-incense-2.png"
                                        alt="Pure Ingredients"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 40vw, 20vw"
                                        loading="lazy"
                                    />
                                </div>
                            </SectionWrapper>
                        </div>

                        {/* Right Content Block - Placed FIRST on mobile for better story flow */}
                        <SectionWrapper className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
                            <h2 className="font-hindi text-4xl sm:text-5xl lg:text-7xl font-bold text-[#7B1E1E] mb-4 sm:mb-6">हमारी विरासत</h2>
                            <h3 className="text-base sm:text-lg lg:text-2xl text-[#8B5A2B] font-semibold mb-8 sm:mb-10 uppercase tracking-widest">A Legacy of Purity</h3>

                            <div className="space-y-6 sm:space-y-8 text-[#593b1d] text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-hindi">
                                <p>
                                    उदलय सुगंधालय की स्थापना केवल धूप बेचने के लिए नहीं, बल्कि हर घर में
                                    मंदिर जैसी पवित्रता और असीम शांति लाने के महान उद्देश्य से की गई थी।
                                </p>
                                <p>
                                    हम जानते हैं कि ध्यान और प्रार्थना के आध्यात्मिक पथ पर सही सुगंध अत्यंत महत्वपूर्ण है। इसलिए, हम केवल 100% प्राकृतिक सामग्री का उपयोग करते हैं।
                                </p>
                            </div>

                            <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-8 sm:gap-12 w-full border-t border-[#C6A75E]/40 pt-10">
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#8B5A2B] mb-2 sm:mb-3">100%</span>
                                    <span className="font-bold text-[#7B1E1E] text-xs sm:text-sm lg:text-lg uppercase tracking-widest">Natural</span>
                                </div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#8B5A2B] mb-2 sm:mb-3">0%</span>
                                    <span className="font-bold text-[#7B1E1E] text-xs sm:text-sm lg:text-lg uppercase tracking-widest">Chemicals</span>
                                </div>
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </section>

            {/* QUOTE BANNER */}
            <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#7B1E1E] flex flex-col items-center px-6 overflow-hidden z-10 shadow-2xl mt-12 sm:mt-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,167,94,0.15),_transparent_70%)] pointer-events-none" />
                <SectionWrapper className="relative z-10 flex flex-col items-center text-center">
                    <span className="text-[#C6A75E] text-5xl lg:text-7xl mb-6 lg:mb-8 opacity-60 font-serif leading-none">&ldquo;</span>
                    <h2 className="font-hindi text-3xl sm:text-4xl lg:text-6xl text-[#F4E7D3] font-light leading-relaxed max-w-4xl tracking-wide drop-shadow-md">
                        जहाँ शुद्धता है, वहीं साक्षात ईश्वर का वास है।
                    </h2>
                    <span className="text-[#C6A75E] text-5xl lg:text-7xl mt-4 lg:mt-6 opacity-60 font-serif leading-none rotate-180">&ldquo;</span>
                </SectionWrapper>
            </section>
        </main>
    );
}
