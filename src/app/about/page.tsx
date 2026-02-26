import React from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata = {
    title: "हमारे बारे में | About Us - Udlay Sugandhalay",
    description: "Learn more about Udlay Sugandhalay.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden flex flex-col font-english text-[#4A2F1A]">
            {/* Background Texture & Mandalas */}
            <div className="absolute inset-0 bg-[#F4E7D3] -z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/60 via-transparent to-[#C6A75E]/10 -z-10" />

            <div className="absolute top-[10%] left-[-15%] w-[60%] aspect-square opacity-[0.03] animate-[spin_120s_linear_infinite] pointer-events-none -z-10">
                <svg viewBox="0 0 100 100" fill="none" stroke="#8B5A2B" strokeWidth="0.5" className="w-full h-full">
                    {[...Array(24)].map((_, i) => (
                        <path key={i} d="M50,50 Q60,10 50,0 Q40,10 50,50" transform={`rotate(${i * 15} 50 50)`} />
                    ))}
                    <circle cx="50" cy="50" r="48" />
                </svg>
            </div>

            {/* HERO TITLE */}
            <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 flex flex-col items-center text-center w-full z-10">
                <SectionWrapper className="flex flex-col items-center">
                    <p className="font-hindi text-[#8B5A2B] font-bold tracking-widest text-lg lg:text-xl mb-6 uppercase drop-shadow-sm">|| जय शंकर ||</p>
                    <h1 className="font-hindi text-6xl lg:text-8xl font-black text-[#7B1E1E] mb-8 drop-shadow-xl" style={{ textShadow: "0 10px 30px rgba(123,30,30,0.15)" }}>हमारे बारे में</h1>
                    <div className="w-32 lg:w-40 h-[3px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent rounded-full mb-10" />
                    <p className="text-2xl lg:text-4xl font-light text-[#4A2F1A] max-w-4xl leading-relaxed italic">
                        &quot;Experience the pure essence of spirituality through sacred, hand-crafted fragrances.&quot;
                    </p>
                </SectionWrapper>
            </section>

            {/* OUR STORY SECTION */}
            <section className="relative w-full py-24 px-6 lg:px-12 z-10">
                <div className="container mx-auto max-w-[1500px]">
                    <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

                        {/* Interactive Left Image Gallery */}
                        <div className="w-full lg:w-1/2 flex justify-center perspective-1000 relative">
                            {/* Main Image Base Frame */}
                            <SectionWrapper className="relative w-[85%] md:w-[70%] lg:w-[80%] max-w-[500px] aspect-[4/5] rounded-[3rem] p-4 bg-white/40 backdrop-blur-xl shadow-[0_40px_80px_-20px_rgba(139,90,43,0.3)] border border-white/60 z-10 group">
                                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#4A2F1A] border-4 border-white/10 shadow-inner">
                                    <Image
                                        src="/images/new-incense-1.png"
                                        alt="Traditional Incense Design"
                                        fill
                                        className="object-cover object-center transform transition-transform duration-[15s] group-hover:scale-110 ease-out"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority
                                    />
                                    {/* Luxe vignette */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A2F1A]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
                                </div>
                            </SectionWrapper>

                            {/* Floating Accent Background Card */}
                            <SectionWrapper className="absolute right-0 lg:-right-10 bottom-10 w-[50%] max-w-[300px] aspect-[3/4] rounded-[2rem] p-3 bg-white/50 backdrop-blur-2xl shadow-2xl border border-white/60 z-20 translate-y-16 hover:translate-y-10 transition-transform duration-700 ease-in-out">
                                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-[#8B5A2B]/20">
                                    <Image
                                        src="/images/new-incense-2.png"
                                        alt="Pure Ingredients"
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 1024px) 50vw, 30vw"
                                    />
                                </div>
                            </SectionWrapper>
                        </div>

                        {/* Right Content Block - The Heritage */}
                        <SectionWrapper className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-12 lg:pt-0">
                            <h2 className="font-hindi text-5xl lg:text-7xl font-bold text-[#7B1E1E] mb-6">हमारी विरासत</h2>
                            <h3 className="text-xl lg:text-3xl text-[#8B5A2B] font-semibold mb-10 uppercase tracking-widest opacity-90">A Legacy of Purity</h3>

                            <div className="space-y-8 text-[#593b1d] text-xl lg:text-2xl leading-relaxed max-w-2xl font-hindi drop-shadow-sm">
                                <p>
                                    उदलय सुगंधालय की स्थापना केवल धूप बेचने के लिए नहीं, बल्कि हर घर में
                                    मंदिर जैसी पवित्रता और असीम शांति लाने के महान उद्देश्य से की गई थी।
                                </p>
                                <p>
                                    हम मानते हैं कि प्रार्थना और ध्यान की गहराई में सही सुगंध का जादुई प्रभाव होता है।
                                    इसलिए, हमारे सभी उत्पाद 100% प्राकृतिक जड़ी-बूटियों, शुद्ध चंदन, और पवित्र
                                    वनस्पतियों से अत्यधिक निष्ठा के साथ तैयार किए जाते हैं।
                                </p>
                                <p>
                                    हमारे कारीगर सदियों पुरानी आयुर्वेदिक विधियों का कठोरता से पालन करते हुए, हर एक अगरबत्ती
                                    को अपने हाथों से प्राणवान बनाते हैं। यह केवल एक उत्पाद नहीं, हमारी अगाध श्रद्धा का प्रतीक है।
                                </p>
                            </div>

                            <div className="mt-16 grid grid-cols-2 gap-12 w-full max-w-xl border-t border-[#C6A75E]/40 pt-10">
                                <div className="flex flex-col items-center lg:items-start group">
                                    <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#C6A75E] mb-3 group-hover:scale-110 transition-transform">100%</span>
                                    <span className="font-bold text-[#7B1E1E] text-xl uppercase tracking-widest">Natural</span>
                                </div>
                                <div className="flex flex-col items-center lg:items-start group">
                                    <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#C6A75E] mb-3 group-hover:scale-110 transition-transform">0%</span>
                                    <span className="font-bold text-[#7B1E1E] text-xl uppercase tracking-widest">Chemicals</span>
                                </div>
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </section>

            {/* FULL WIDTH QUOTE BANNER */}
            <section className="relative w-full py-40 mt-32 bg-[#7B1E1E] flex flex-col items-center px-6 overflow-hidden z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
                {/* Spiritual Glowing Mandala inside red section */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,167,94,0.2),_transparent_70%)] pointer-events-none" />
                <div className="absolute right-[-10%] bottom-[-20%] w-[60%] aspect-square opacity-10 animate-[spin_100s_linear_infinite] pointer-events-none">
                    <svg viewBox="0 0 100 100" fill="none" stroke="#C6A75E" strokeWidth="0.5" className="w-full h-full">
                        {[...Array(24)].map((_, i) => (
                            <path key={i} d="M50,50 Q60,10 50,0 Q40,10 50,50" transform={`rotate(${i * 15} 50 50)`} />
                        ))}
                    </svg>
                </div>

                <SectionWrapper className="relative z-10 flex flex-col items-center text-center">
                    <span className="text-[#C6A75E] text-7xl lg:text-outline mb-8 opacity-90 drop-shadow-xl">&quot;</span>
                    <h2 className="font-hindi text-5xl lg:text-7xl text-[#F4E7D3] font-light leading-relaxed max-w-5xl tracking-wide drop-shadow-md">
                        जहाँ शुद्धता है, वहीं साक्षात ईश्वर का वास है।
                    </h2>
                    <span className="text-[#C6A75E] text-7xl mt-6 opacity-90 transform rotate-180 drop-shadow-xl">&quot;</span>
                </SectionWrapper>
            </section>

        </main>
    );
}
