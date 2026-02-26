import React from "react";
import Image from "next/image";

export const metadata = {
    title: "उत्पाद | Products - Udlay Sugandhalay",
    description: "Explore our premium spiritual incense sticks.",
};

const products = [
    {
        name: "चंदन धूप (Sandalwood)",
        desc: "प्राकृतिक चंदन की लकड़ी से निर्मित शुद्ध और शांत सुगंध।",
        image: "/images/new-incense-1.png"
    },
    {
        name: "गुलाब अगरबत्ती (Rose)",
        desc: "ताज़ा गुलाब की पंखुड़ियों से बनी मीठी और मनमोहक खुशबू।",
        image: "/images/new-incense-2.png"
    },
    {
        name: "लैवेंडर धूप (Lavender)",
        desc: "ध्यान और मानसिक शांति के लिए अत्यंत लाभकारी और कोमल महक।",
        image: "/images/new-incense-1.png"
    },
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12 flex flex-col items-center relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[#F4E7D3] -z-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[#C6A75E]/20 -z-10" />

            <h1 className="font-hindi text-6xl lg:text-7xl font-extrabold text-gradient-gold mb-6 animate-fade-in-up drop-shadow-md">हमारे प्रीमियम उत्पाद</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent rounded-full mb-16 animate-fade-in-up-delay-1" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-16 w-full max-w-[1500px] animate-fade-in-up-delay-2">
                {products.map((item, id) => (
                    <div key={id} className="glass-card rounded-[2.5rem] p-8 lg:p-10 flex flex-col group relative hover:-translate-y-3 transition-transform duration-500 ease-out hover:shadow-[0_30px_60px_-12px_rgba(139,90,43,0.3)] overflow-hidden">

                        {/* Hover glow inside card */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#C6A75E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                        <div className="relative w-full aspect-[4/5] bg-[#8B5A2B]/20 rounded-2xl mb-8 overflow-hidden z-10 shadow-inner">
                            <Image
                                src={item.image}
                                fill
                                alt={item.name}
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        <h3 className="font-hindi text-4xl xl:text-5xl font-bold text-[#7B1E1E] mb-6 relative z-10 group-hover:text-[#8B5A2B] transition-colors">{item.name}</h3>
                        <p className="font-hindi text-xl xl:text-2xl text-[#593b1d] mb-10 leading-relaxed relative z-10 flex-grow">
                            {item.desc}
                        </p>

                        <button className="relative w-full py-4 rounded-full border-2 border-[#C6A75E] text-[#8B5A2B] font-bold text-xl overflow-hidden group/btn z-10 transition-colors shadow-sm">
                            <span className="relative z-10 font-hindi">अभी खरीदें</span>
                            <div className="absolute inset-0 bg-[#C6A75E]/20 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}
