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
        <main className="min-h-screen pt-24 lg:pt-32 pb-20 lg:pb-24 px-6 lg:px-12 flex flex-col items-center relative overflow-x-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[#F4E7D3] -z-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[#C6A75E]/20 -z-10" />

            <div className="container max-w-screen-xl mx-auto flex flex-col items-center text-center">
                <h1 className="font-hindi text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gradient-gold mb-4 sm:mb-6 drop-shadow-md">हमारे प्रीमियम उत्पाद</h1>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent rounded-full mb-12 sm:mb-16" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 w-full">
                    {products.map((item, id) => (
                        <div key={id} className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-8 lg:p-10 flex flex-col group relative transition-all duration-500 lg:hover:-translate-y-2 border border-[#C6A75E]/10 shadow-sm lg:hover:shadow-xl overflow-hidden text-center items-center">

                            <div className="relative w-full aspect-[4/5] bg-[#8B5A2B]/10 rounded-2xl mb-6 sm:mb-8 overflow-hidden shadow-inner">
                                <Image
                                    src={item.image}
                                    fill
                                    alt={item.name}
                                    className="object-cover lg:group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                            </div>

                            <h3 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7B1E1E] mb-4 sm:mb-6">{item.name}</h3>
                            <p className="font-hindi text-lg sm:text-xl text-[#593b1d] mb-8 sm:mb-10 leading-relaxed flex-grow">
                                {item.desc}
                            </p>

                            <button className="relative w-full py-4 rounded-full border-2 border-[#C6A75E]/40 text-[#8B5A2B] bg-white/50 hover:bg-[#C6A75E]/10 font-bold text-lg sm:text-xl transition-all shadow-sm active:scale-95">
                                <span className="font-hindi">अभी खरीदें</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
