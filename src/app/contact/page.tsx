import React from "react";

export const metadata = {
    title: "संपर्क | Contact - Udlay Sugandhalay",
    description: "Get in touch with Udlay Sugandhalay.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12 flex flex-col items-center relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-[#F4E7D3] to-[#F4E7D3] -z-20" />

            <h1 className="font-hindi text-6xl lg:text-7xl font-extrabold text-gradient-gold mb-6 text-center animate-fade-in-up drop-shadow-md">संपर्क करें</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent rounded-full mb-16 animate-fade-in-up-delay-1" />

            <div className="w-full max-w-3xl glass-card rounded-[2.5rem] p-10 lg:p-14 animate-fade-in-up-delay-2 relative">

                {/* Subtle internal glowing corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/30 blur-2xl rounded-full -mr-10 -mt-10" />

                <form className="flex flex-col gap-8 relative z-10" action="#">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-3 group">
                            <label className="font-hindi text-xl text-[#7B1E1E] font-semibold tracking-wide ml-2 transition-colors group-focus-within:text-[#C6A75E]">आपका नाम (Name)</label>
                            <input
                                type="text"
                                className="px-6 py-4 rounded-2xl border-2 border-[#C6A75E]/40 bg-white/20 hover:bg-white/40 focus:bg-white/60 focus:outline-none focus:ring-4 focus:ring-[#C6A75E]/30 focus:border-[#C6A75E] transition-all text-xl shadow-inner text-[#593b1d] placeholder-[#8B5A2B]/40"
                                placeholder="नाम..."
                            />
                        </div>
                        <div className="flex flex-col gap-3 group">
                            <label className="font-hindi text-xl text-[#7B1E1E] font-semibold tracking-wide ml-2 transition-colors group-focus-within:text-[#C6A75E]">ईमेल (Email)</label>
                            <input
                                type="email"
                                className="px-6 py-4 rounded-2xl border-2 border-[#C6A75E]/40 bg-white/20 hover:bg-white/40 focus:bg-white/60 focus:outline-none focus:ring-4 focus:ring-[#C6A75E]/30 focus:border-[#C6A75E] transition-all text-xl shadow-inner text-[#593b1d] placeholder-[#8B5A2B]/40"
                                placeholder="ईमेल..."
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 group">
                        <label className="font-hindi text-xl text-[#7B1E1E] font-semibold tracking-wide ml-2 transition-colors group-focus-within:text-[#C6A75E]">संदेश (Message)</label>
                        <textarea
                            rows={5}
                            className="px-6 py-5 rounded-3xl border-2 border-[#C6A75E]/40 bg-white/20 hover:bg-white/40 focus:bg-white/60 focus:outline-none focus:ring-4 focus:ring-[#C6A75E]/30 focus:border-[#C6A75E] transition-all text-xl shadow-inner resize-none text-[#593b1d] placeholder-[#8B5A2B]/40"
                            placeholder="आपका संदेश..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="font-hindi mt-6 py-4 rounded-full bg-gradient-to-r from-[#7B1E1E] to-[#641A1A] text-white hover:opacity-90 transition-opacity text-2xl font-bold shadow-[0_10px_30px_rgba(123,30,30,0.3)] hover:shadow-[0_15px_40px_rgba(123,30,30,0.4)] active:scale-[0.98]"
                    >
                        संदेश भेजें
                    </button>

                </form>
            </div>
        </main>
    );
}
