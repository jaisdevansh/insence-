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
    <main className="flex min-h-screen flex-col items-center justify-between font-english bg-background overflow-hidden relative">

      {/* HERO SECTION */}
      <Hero />

      {/* SECTION 2: SCROLL REVEAL STATEMENT */}
      <section className="w-full py-32 lg:py-48 flex items-center justify-center bg-background relative overflow-hidden">
        <SectionWrapper className="flex flex-col items-center text-center px-6">
          <h2 className="font-hindi text-4xl lg:text-6xl text-[#4A2F1A] font-light leading-relaxed tracking-wider mb-8 max-w-4xl mx-auto opacity-90">
            “सुगंध केवल खुशबू नहीं,<br className="hidden md:block" />
            एक आध्यात्मिक अनुभव है।”
          </h2>
          <div className="w-24 h-[1px] bg-[#C6A75E] opacity-70" />
        </SectionWrapper>
      </section>

      {/* SECTION 3: PREMIUM PRODUCT SHOWCASE */}
      <section className="w-full py-32 lg:py-40 bg-background relative z-10" id="products">
        <div className="container max-w-[1500px] mx-auto px-6 lg:px-12">
          <SectionWrapper className="flex flex-col items-center mb-24 text-center">
            <h2 className="font-hindi text-6xl lg:text-7xl font-bold text-[#4A2F1A] mb-8">हमारी सुगंध श्रृंखला</h2>
            <div className="w-48 h-[2px] bg-[#C6A75E]/60 rounded-full" />
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-16">
            {products.map((prod, idx) => (
              <div key={idx} className="group hover:-translate-y-3 transition-all duration-500 will-change-transform">
                <SectionWrapper className={`h-full bg-[#EBD8C3]/30 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(139,90,43,0.15)] hover:border-[#C6A75E]/50 border border-transparent transition-all duration-500 ease-out flex flex-col items-center text-center`}>
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-8 bg-[#8B5A2B]/10 shadow-inner">
                    <Image src={prod.img} fill alt={prod.name} className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                    {/* Soft gradient overlay so images don't look completely raw */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#7B1E1E]/5 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="text-3xl xl:text-4xl font-bold text-[#7B1E1E] mb-4">{prod.name}</h3>
                  <p className="text-[#4A2F1A]/80 mb-8 flex-grow text-lg xl:text-xl leading-relaxed">{prod.desc}</p>

                  <div className="flex w-full items-center justify-between gap-4 mb-8">
                    <div className="flex bg-[#EBD8C3] rounded-full p-1.5 w-full relative">
                      <button className="flex-1 text-[#4A2F1A] text-sm lg:text-base font-semibold py-3 rounded-full bg-white shadow-sm transition-all text-center">50g</button>
                      <button className="flex-1 text-[#4A2F1A]/60 text-sm lg:text-base font-semibold py-3 rounded-full hover:bg-white/50 transition-all text-center">100g</button>
                    </div>
                  </div>

                  <button className="w-full border-2 border-[#C6A75E] text-[#8B5A2B] bg-white/50 hover:bg-[#C6A75E]/10 font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-3 group/btn text-lg xl:text-xl">
                    Order Now
                    <MoveRight className="w-5 h-5 xl:w-6 xl:h-6 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </SectionWrapper>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY WE ARE DIFFERENT */}
      <section className="w-full py-24 bg-[#EBD8C3] relative z-0">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionWrapper className="flex flex-col items-center text-center mb-16">
            <h2 className="font-hindi text-4xl lg:text-5xl font-bold text-[#4A2F1A] mb-6">हमारी शुद्धता, हमारी पहचान</h2>
            <div className="w-24 h-[2px] bg-[#C6A75E]/60 rounded-full" />
          </SectionWrapper>

          <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
            {features.map((feat, idx) => (
              <SectionWrapper key={idx} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white border border-[#C6A75E]/30 shadow-sm flex items-center justify-center text-3xl mb-4 text-[#8B5A2B] group hover:scale-110 transition-transform duration-500 will-change-transform">
                  {feat.icon}
                </div>
                <h3 className="text-[#4A2F1A] font-semibold text-lg max-w-[150px] text-center">{feat.title}</h3>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR TRADITION STORY */}
      <section className="w-full py-24 lg:py-32 bg-background relative overflow-hidden" id="about">
        {/* Parallax Background using pseudo element approach for brevity, could also use framer */}
        <div className="absolute inset-0 opacity-[0.03] z-0 flex items-center justify-center pointer-events-none transform translate-y-[5%]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-[120%] object-cover animate-[spin_120s_linear_infinite]">
            <g transform="translate(100 100)">
              {[...Array(24)].map((_, i) => (
                <path
                  key={i}
                  d="M 0 0 C 10 -40, 20 -60, 0 -90 C -20 -60, -10 -40, 0 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  transform={`rotate(${i * 15})`}
                />
              ))}
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <SectionWrapper className="w-full lg:w-1/2">
              <h2 className="font-hindi text-5xl font-bold text-[#4A2F1A] mb-6 flex items-center gap-4">
                हमारी परंपरा
                <span className="relative inline-block text-3xl text-orange-600 animate-pulse drop-shadow-[0_0_8px_rgba(234,88,12,0.6)]">🪔</span>
              </h2>
              <div className="w-24 h-[2px] bg-[#C6A75E]/60 rounded-full mb-8" />

              <p className="font-hindi text-xl text-[#4A2F1A]/80 leading-relaxed mb-6">
                हमारे यहाँ धूप सिर्फ एक वस्तु नहीं है, यह पीढ़ियों से चली आ रही एक पवित्र साधना है।
                हमने प्राचीन ग्रंथों और आयुर्वेद के सिद्धांतों के अनुसार अपनी विधियों को संरक्षित रखा है।
              </p>
              <p className="text-lg text-[#4A2F1A]/70 leading-relaxed font-english">
                Each sticks is rolled by hand, prioritizing absolute purity and deep devotion.
                We source the rarest woods, purest resins, and most sacred herbs to bring the temple aura directly into your home.
              </p>
            </SectionWrapper>

            <SectionWrapper className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(139,90,43,0.15)] group">
                <Image
                  src="/images/product-tube.png"
                  fill
                  alt="Preparation"
                  className="object-cover group-hover:scale-105 transition-transform duration-[10s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7B1E1E]/20 to-transparent mix-blend-multiply" />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT & WHOLESALE CTA */}
      <section className="w-full py-24 bg-[#EBD8C3] relative z-10 flex flex-col items-center" id="contact">
        <SectionWrapper className="w-full max-w-4xl px-6 lg:px-0 flex flex-col items-center text-center">
          <h2 className="font-hindi text-5xl lg:text-6xl font-bold text-[#4A2F1A] mb-4">हमारे साथ जुड़ें</h2>
          <p className="text-xl text-[#8B5A2B] font-medium flex items-center justify-center gap-2 mb-12">
            <Phone className="w-5 h-5" /> 75888 19117
          </p>

          <form className="w-full bg-background/60 backdrop-blur-xl p-8 lg:p-12 rounded-[2rem] border border-[#C6A75E]/30 shadow-[0_15px_40px_rgba(139,90,43,0.1)] text-left flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#7B1E1E] font-semibold text-sm tracking-widest uppercase">Name</label>
                <input type="text" className="bg-transparent border-b-2 border-[#C6A75E]/30 px-4 py-3 focus:outline-none focus:border-[#C6A75E] focus:bg-white/40 transition-all rounded-t-lg text-[#4A2F1A] placeholder-[#8B5A2B]/40" placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#7B1E1E] font-semibold text-sm tracking-widest uppercase">Phone</label>
                <input type="tel" className="bg-transparent border-b-2 border-[#C6A75E]/30 px-4 py-3 focus:outline-none focus:border-[#C6A75E] focus:bg-white/40 transition-all rounded-t-lg text-[#4A2F1A] placeholder-[#8B5A2B]/40" placeholder="Your number" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#7B1E1E] font-semibold text-sm tracking-widest uppercase">Message</label>
              <textarea rows={4} className="bg-transparent border-b-2 border-[#C6A75E]/30 px-4 py-3 focus:outline-none focus:border-[#C6A75E] focus:bg-white/40 transition-all rounded-t-lg resize-none text-[#4A2F1A] placeholder-[#8B5A2B]/40" placeholder="How can we help you?" />
            </div>

            <div className="flex items-center gap-3 mt-2">
              <input type="checkbox" id="wholesale" className="w-5 h-5 accent-[#C6A75E] bg-white border-[#C6A75E] rounded" />
              <label htmlFor="wholesale" className="text-[#4A2F1A]/80 font-medium cursor-pointer">I am inquiring about wholesale/distributor supply</label>
            </div>

            <button type="button" className="mt-6 w-full py-4 rounded-full bg-gradient-to-r from-[#7B1E1E] to-[#5a1414] text-white font-bold text-lg hover:shadow-[0_10px_30px_rgba(123,30,30,0.3)] hover:-translate-y-1 transition-all duration-300">
              Send Message
            </button>
          </form>
        </SectionWrapper>
      </section>

      {/* FOOTER - ROYAL FINISH */}
      <footer className="w-full bg-[#7B1E1E] py-16 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,167,94,0.15),_transparent_60%)] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-4xl text-[#C6A75E] animate-pulse drop-shadow-[0_0_15px_rgba(198,167,94,0.6)] mb-6">🪔</span>
          <h3 className="font-hindi text-3xl font-bold text-[#F4E7D3] tracking-wider mb-2">उदलय सुगंधालय © 2026</h3>
          <p className="font-hindi text-[#C6A75E] font-medium tracking-widest mt-2">|| जय शंकर ||</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a href="#" className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 hover:bg-green-400 transition-all duration-300 z-50 animate-bounce cursor-pointer group">
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </a>

    </main>
  );
}
