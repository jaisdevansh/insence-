import Hero from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import Image from "next/image";
import { MoveRight, Phone, MessageCircle } from "lucide-react"; // Wait what if Lucide isn't installed? Just use SVGs, wait they are installed, I ran npm install lucide-react earlier.

const products = [
  { name: "Henna Masala", desc: "A deep, earthy aroma rooted in ancient henna traditions.", img: "/images/new-incense-1.png" },
  { name: "Block Kastori", desc: "Rich musk notes for intense and profound meditation.", img: "/images/new-incense-2.png" },
  { name: "Special Dawana", desc: "A sweet, herbaceous fragrance derived from pure Davana.", img: "/images/new-incense-1.png" },
  { name: "Jai Shankar Bhrut", desc: "Our signature devotional blend for pure sacred spaces.", img: "/images/new-incense-2.png" },
  { name: "Rose Musk", desc: "The divine sweetness of rose harmonized with grounding musk.", img: "/images/new-incense-1.png" },
  { name: "Amar Uad", desc: "A woody, extremely premium Oudh profile for kings and temples.", img: "/images/new-incense-2.png" },
];

const features = [
  { title: "Long-lasting fragrance", icon: "✨" },
  { title: "Premium masala blend", icon: "🌿" },
  { title: "Handmade quality", icon: "✋" },
  { title: "Temple-grade purity", icon: "🛕" },
  { title: "Bulk & distributor supply", icon: "📦" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-english bg-background overflow-x-hidden relative">

      {/* HERO SECTION */}
      <Hero />

      {/* SECTION 2: SCROLL REVEAL STATEMENT */}
      <section className="w-full py-20 lg:py-48 flex items-center justify-center bg-background relative overflow-hidden">
        <SectionWrapper className="flex flex-col items-center text-center px-6">
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-6xl text-[#4A2F1A] font-light leading-relaxed tracking-wider mb-8 max-w-2xl lg:max-w-4xl mx-auto opacity-90">
            &ldquo;सुगंध केवल खुशबू नहीं,<br className="hidden md:block" />
            एक आध्यात्मिक अनुभव है।&rdquo;
          </h2>
          <div className="w-20 lg:w-24 h-[1px] bg-[#C6A75E] opacity-70" />
        </SectionWrapper>
      </section>

      {/* SECTION 3: PREMIUM PRODUCT SHOWCASE */}
      <section className="w-full py-20 lg:py-40 bg-background relative z-10" id="products">
        <div className="container max-w-screen-xl mx-auto px-6 lg:px-12">
          <SectionWrapper className="flex flex-col items-center mb-16 lg:mb-24 text-center">
            <h2 className="font-hindi text-4xl sm:text-5xl lg:text-7xl font-bold text-[#4A2F1A] mb-4 lg:mb-8">हमारी सुगंध श्रृंखला</h2>
            <div className="w-32 lg:w-48 h-[2px] bg-[#C6A75E]/60 rounded-full" />
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {products.map((prod, idx) => (
              <div key={idx} className="group transition-all duration-500 lg:hover:-translate-y-2">
                <SectionWrapper className="h-full bg-[#EBD8C3]/20 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-[#C6A75E]/10 flex flex-col items-center text-center shadow-sm lg:hover:shadow-2xl transition-all duration-500">
                  <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 sm:mb-8 bg-[#8B5A2B]/10">
                    <Image
                      src={prod.img}
                      fill
                      alt={prod.name}
                      className="object-cover lg:group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A2F1A]/20 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7B1E1E] mb-3">{prod.name}</h3>
                  <p className="text-[#4A2F1A]/80 mb-6 flex-grow text-base sm:text-lg leading-relaxed">{prod.desc}</p>

                  <div className="flex w-full items-center justify-between gap-3 mb-6">
                    <div className="flex bg-[#EBD8C3]/30 rounded-full p-1 w-full">
                      <button className="flex-1 text-[#4A2F1A] text-sm font-semibold py-2.5 rounded-full bg-white shadow-sm transition-all text-center">50g</button>
                      <button className="flex-1 text-[#4A2F1A]/60 text-sm font-semibold py-2.5 rounded-full hover:bg-white/50 transition-all text-center">100g</button>
                    </div>
                  </div>

                  <button className="w-full border-2 border-[#C6A75E]/40 text-[#8B5A2B] bg-white/40 hover:bg-[#C6A75E]/10 font-bold py-3.5 sm:py-4 rounded-full transition-all flex items-center justify-center gap-3 text-lg">
                    Order Now
                    <MoveRight className="w-5 h-5" />
                  </button>
                </SectionWrapper>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY WE ARE DIFFERENT */}
      <section className="w-full py-20 lg:py-24 bg-[#EBD8C3]/50 relative z-0">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionWrapper className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2F1A] mb-4 sm:mb-6">हमारी शुद्धता, हमारी पहचान</h2>
            <div className="w-20 lg:w-24 h-[2px] bg-[#C6A75E]/60 rounded-full" />
          </SectionWrapper>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
            {features.map((feat, idx) => (
              <SectionWrapper key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-[#C6A75E]/20 shadow-sm flex items-center justify-center text-2xl sm:text-3xl mb-4 text-[#8B5A2B]">
                  {feat.icon}
                </div>
                <h3 className="text-[#4A2F1A] font-semibold text-base sm:text-lg text-center leading-tight">{feat.title}</h3>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR TRADITION STORY */}
      <section className="w-full py-20 lg:py-32 bg-background relative overflow-x-hidden" id="about">
        <div className="absolute inset-0 opacity-[0.02] z-0 flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[150%] h-[150%] object-cover animate-[spin_180s_linear_infinite]">
            <g transform="translate(100 100)">
              {[...Array(24)].map((_, i) => (
                <path key={i} d="M 0 0 C 10 -40, 20 -60, 0 -90 C -20 -60, -10 -40, 0 0" fill="none" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${i * 15})`} />
              ))}
            </g>
          </svg>
        </div>

        <div className="container max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <SectionWrapper className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
              <h2 className="font-hindi text-4xl sm:text-5xl font-bold text-[#4A2F1A] mb-4 lg:mb-6 flex items-center gap-3">
                हमारी परंपरा
                <span className="text-2xl sm:text-3xl animate-pulse">🪔</span>
              </h2>
              <div className="w-20 lg:w-24 h-[2px] bg-[#C6A75E]/60 rounded-full mb-6 lg:mb-8" />

              <p className="font-hindi text-lg sm:text-xl text-[#4A2F1A]/80 leading-relaxed mb-6">
                हमारे यहाँ धूप सिर्फ एक वस्तु नहीं है, यह पीढ़ियों से चली आ रही एक पवित्र साधना है।
                हमने प्राचीन ग्रंथों और आयुर्वेद के सिद्धांतों के अनुसार अपनी विधियों को संरक्षित रखा है।
              </p>
              <p className="text-base sm:text-lg text-[#4A2F1A]/70 leading-relaxed">
                Each sticks is rolled by hand, prioritizing absolute purity and deep devotion.
                We source the rarest woods, purest resins, and most sacred herbs to bring the temple aura directly into your home.
              </p>
            </SectionWrapper>

            <SectionWrapper className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image src="/images/product-tube.png" fill alt="Preparation" className="object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7B1E1E]/10 to-transparent" />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT & WHOLESALE CTA */}
      <section className="w-full py-20 lg:py-24 bg-[#EBD8C3]/30 relative z-10 flex flex-col items-center" id="contact">
        <SectionWrapper className="w-full max-w-2xl px-6 flex flex-col items-center text-center">
          <h2 className="font-hindi text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A2F1A] mb-4">हमारे साथ जुड़ें</h2>
          <p className="text-lg sm:text-xl text-[#8B5A2B] font-medium flex items-center justify-center gap-2 mb-10 sm:mb-12">
            <Phone className="w-5 h-5 shrink-0" /> 75888 19117
          </p>

          <form className="w-full bg-white/60 backdrop-blur-xl p-6 sm:p-10 lg:p-12 rounded-[2.5rem] border border-[#C6A75E]/20 shadow-xl text-left flex flex-col gap-6 sm:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[#7B1E1E] font-bold text-xs sm:text-sm tracking-widest uppercase">Name</label>
                <input type="text" className="bg-transparent border-b border-[#C6A75E]/30 h-[48px] sm:h-[56px] px-0 focus:outline-none focus:border-[#C6A75E] transition-all text-[16px] text-[#4A2F1A] placeholder-[#8B5A2B]/40" placeholder="Your full name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#7B1E1E] font-bold text-xs sm:text-sm tracking-widest uppercase">Phone</label>
                <input type="tel" className="bg-transparent border-b border-[#C6A75E]/30 h-[48px] sm:h-[56px] px-0 focus:outline-none focus:border-[#C6A75E] transition-all text-[16px] text-[#4A2F1A] placeholder-[#8B5A2B]/40" placeholder="Mobile number" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#7B1E1E] font-bold text-xs sm:text-sm tracking-widest uppercase">Your Message</label>
              <textarea rows={4} className="bg-transparent border-b border-[#C6A75E]/30 pt-3 focus:outline-none focus:border-[#C6A75E] transition-all resize-none text-[16px] text-[#4A2F1A] placeholder-[#8B5A2B]/40 leading-relaxed" placeholder="Tell us how we can help..." />
            </div>

            <div className="flex items-start gap-3 mt-2">
              <input type="checkbox" id="wholesale" className="w-5 h-5 shrink-0 accent-[#C6A75E] rounded border-[#C6A75E]" />
              <label htmlFor="wholesale" className="text-[#4A2F1A]/80 text-sm sm:text-base font-medium cursor-pointer leading-snug">Inquiring about wholesale or retail distribution</label>
            </div>

            <button type="button" className="w-full py-4 sm:py-5 rounded-full bg-[#7B1E1E] text-white font-bold text-lg hover:bg-[#5a1414] shadow-lg transition-all active:scale-95 mt-4">
              Send Message
            </button>
          </form>
        </SectionWrapper>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#7B1E1E] py-16 lg:py-20 flex flex-col items-center justify-center text-center px-6 relative">
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-3xl lg:text-4xl mb-6">🪔</span>
          <h3 className="font-hindi text-2xl sm:text-3xl font-bold text-[#F4E7D3] tracking-wider mb-2">उदलय सुगंधालय © 2026</h3>
          <p className="font-hindi text-[#C6A75E] font-medium tracking-widest mt-2 uppercase text-sm sm:text-base">|| जय शंकर ||</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a href="https://wa.me/917588819117" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-green-600 transition-all z-[100] hover:scale-110 active:scale-90">
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>

    </main>
  );
}
