import React, { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES, BANK_BULLETS, STEPS, TESTIMONIALS, FLEXI_FEATURES } from "../mock";
import { scrollToForm } from "./HeroSection";

const GoldCheck = ({ light }) => (
  <span
    className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center ${
      light ? "border-white/60" : "border-[#c6a03a]"
    }`}
  >
    <Check size={14} className={light ? "text-white" : "ifza-gold"} />
  </span>
);

const GoogleG = () => (
  <svg width="46" height="46" viewBox="0 0 48 48" className="flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.4 30.1 0 24 0 14.6 0 6.4 5.4 2.5 13.3l7.9 6.1C12.2 13.4 17.6 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.1 5.3-4.6 7l7.1 5.5c4.2-3.9 6.6-9.6 6.6-16.5z" />
    <path fill="#FBBC05" d="M10.4 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.5 10.7l7.9-6.1z" />
    <path fill="#34A853" d="M24 48c6.1 0 11.3-2 15-5.5l-7.1-5.5c-2 1.3-4.5 2.1-7.9 2.1-6.4 0-11.8-3.9-13.6-9.4l-7.9 6.1C6.4 42.6 14.6 48 24 48z" />
  </svg>
);

/* ---------- Global Bank ---------- */
export const BankSection = () => (
  <section className="section-container py-16 md:py-20">
    <div className="relative overflow-hidden">
      <img src={IMAGES.bank} alt="Global bank account" className="w-full h-[420px] md:h-[560px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="px-8 md:px-16 max-w-lg">
          <h2 className="ifza-heading text-white text-[38px] md:text-[52px] leading-[1.05]">
            Get Access to a Global Bank Account
          </h2>
          <ul className="mt-8 space-y-4">
            {BANK_BULLETS.map((b, i) => (
              <li key={i} className="flex items-center gap-4 text-white text-[16px]">
                <GoldCheck light /> {b}
              </li>
            ))}
          </ul>
          <button
            onClick={scrollToForm}
            className="mt-9 border border-white/70 text-white px-9 py-3.5 text-[13px] tracking-[0.15em] hover:bg-white hover:text-[#1c1c1c] transition-colors"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Testimonials (Swipeable on Mobile) ---------- */
export const Testimonials = () => {
  const scrollRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.85 : clientWidth * 0.85;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <section className="section-container py-14 md:py-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 md:mb-10">
        <div className="flex items-center gap-4 sm:gap-5">
          <GoogleG />
          <h2 className="ifza-heading text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] text-[#0a0e2a]">
            Trusted by Over 75,000<br className="hidden md:block" /> Entrepreneurs Globally
          </h2>
        </div>
        <div className="flex gap-2.5 self-end sm:self-auto">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full border border-[#d5d5d5] flex items-center justify-center disabled:opacity-30 hover:border-[#c6a03a] hover:text-[#c6a03a] transition-colors cursor-pointer"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={19} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full border border-[#d5d5d5] flex items-center justify-center disabled:opacity-30 hover:border-[#c6a03a] hover:text-[#c6a03a] transition-colors cursor-pointer"
            aria-label="Next reviews"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      {/* Swipeable row on phone/tablet, smooth scroll on desktop */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scroll gap-5 -mx-6 px-6 md:mx-0 md:px-0 pb-3"
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 w-[84%] sm:w-[50%] md:w-[calc(33.333%-14px)] bg-white border border-[#e5e5e5] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#c6a03a]/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-[#1c1c1c] text-[#c6a03a] flex items-center justify-center text-[17px] font-semibold flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[15px] text-[#1c1c1c]">{t.name}</p>
                  <p className="text-[#f0a500] text-[13px] tracking-wider">★★★★★</p>
                </div>
              </div>
              <p className="text-[13.5px] leading-relaxed text-[#4a4a4a]">
                {t.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------- Free UAE Visa ---------- */
export const FreeVisa = () => (
  <section className="section-container py-14 md:py-20">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      {/* Left text */}
      <div className="lg:col-span-5 relative">
        <div className="dot-pattern w-14 h-16 opacity-60 mb-5" />
        <h2 className="ifza-heading text-[32px] sm:text-[40px] md:text-[46px] leading-[1.08] text-[#1c1c1c] mb-6">
          Get a Free UAE Visa<br className="hidden sm:block" /> with New Business<br className="hidden sm:block" /> License
        </h2>
        <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#555] max-w-md">
          New business license packages include one or more visa allocations, with the added
          benefit of maintaining a free visa with every business license renewal.
        </p>
      </div>

      {/* Right: 3-Image Collage */}
      <div className="lg:col-span-7 grid grid-cols-12 gap-3.5 sm:gap-4 h-[440px] sm:h-[480px]">
        {/* Tall photo left (7 cols) */}
        <div className="col-span-7 h-full rounded-2xl overflow-hidden shadow-sm">
          <img
            src="https://ifza.com/wp-content/uploads/2026/07/free-uae-visa.webp"
            alt="Free UAE Visa Certificate"
            className="w-full h-full object-cover"
          />
        </div>
        {/* 2 stacked photos right (5 cols) */}
        <div className="col-span-5 flex flex-col gap-3.5 sm:gap-4 h-full">
          <div className="flex-1 rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://ifza.com/wp-content/uploads/2026/07/ifza-towers-dubai-silicon-oasis-1-710x1024.webp"
              alt="IFZA Dubai Headquarters"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              alt="Passport and contract signing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Process Steps (Wave Arches) ---------- */
export const ProcessSteps = () => (
  <section className="section-container py-16 md:py-24 text-center">
    <h2 className="ifza-heading text-[32px] sm:text-[40px] md:text-[46px] leading-[1.08] text-[#1c1c1c]">
      Simplified Company<br /> Formation process
    </h2>
    <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-[#555] max-w-md mx-auto leading-relaxed">
      Set up your business easily, with no stress. We guide you every step of the way.
    </p>

    {/* 4 Wave Arch Cards */}
    <div className="mt-14 sm:mt-16 flex overflow-x-auto snap-x snap-mandatory hide-scroll pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4 gap-4 md:gap-0 max-w-5xl mx-auto items-end">
      {/* 01. Consult - Inverted arch (bottom rounded dome) */}
      <div className="snap-center flex-shrink-0 w-[75%] sm:w-[50%] md:w-auto bg-white border border-[#e2d9c4] border-t-0 rounded-b-full p-8 pt-10 pb-12 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <span className="text-[36px] md:text-[40px] font-light text-[#1c1c1c] leading-none mb-3">01.</span>
        <h3 className="text-[17px] font-bold text-[#1c1c1c] mb-2">Consult</h3>
        <p className="text-[13px] text-[#555] leading-relaxed max-w-[155px]">Get a free customized plan to suit your needs</p>
      </div>

      {/* 02. Apply - Top dome arch (top rounded dome) */}
      <div className="snap-center flex-shrink-0 w-[75%] sm:w-[50%] md:w-auto bg-white border border-[#e2d9c4] border-b-0 rounded-t-full p-8 pt-12 pb-10 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <span className="text-[36px] md:text-[40px] font-light text-[#c6a03a] leading-none mb-3">02.</span>
        <h3 className="text-[17px] font-bold text-[#1c1c1c] mb-2">Apply</h3>
        <p className="text-[13px] text-[#555] leading-relaxed max-w-[155px]">Officials will process your documents</p>
      </div>

      {/* 03. Accept - Inverted arch (bottom rounded dome) */}
      <div className="snap-center flex-shrink-0 w-[75%] sm:w-[50%] md:w-auto bg-white border border-[#e2d9c4] border-t-0 rounded-b-full p-8 pt-10 pb-12 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <span className="text-[36px] md:text-[40px] font-light text-[#1c1c1c] leading-none mb-3">03.</span>
        <h3 className="text-[17px] font-bold text-[#1c1c1c] mb-2">Accept</h3>
        <p className="text-[13px] text-[#555] leading-relaxed max-w-[155px]">License (and visas if needed) get approved</p>
      </div>

      {/* 04. Launch - Top dome arch (top rounded dome) */}
      <div className="snap-center flex-shrink-0 w-[75%] sm:w-[50%] md:w-auto bg-white border border-[#e2d9c4] border-b-0 rounded-t-full p-8 pt-12 pb-10 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <span className="text-[36px] md:text-[40px] font-light text-[#c6a03a] leading-none mb-3">04.</span>
        <h3 className="text-[17px] font-bold text-[#1c1c1c] mb-2">Launch</h3>
        <p className="text-[13px] text-[#555] leading-relaxed max-w-[155px]">Unlock UAE business benefits & scale globally</p>
      </div>
    </div>
  </section>
);

/* ---------- Flexi Desk ---------- */
export const FlexiDesk = () => (
  <section className="section-container py-14 md:py-20">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      {/* Left: 4-Image 2x2 Grid Collage */}
      <div className="lg:col-span-6 grid grid-cols-2 gap-3.5 sm:gap-4 h-[440px] sm:h-[480px]">
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img src={IMAGES.gallery[0]} alt="Meeting room" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img src={IMAGES.gallery[2]} alt="IFZA lounge" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img src={IMAGES.gallery[1]} alt="IFZA Towers" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img src={IMAGES.gallery[3]} alt="Flexi desk workspace" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right text & checklist */}
      <div className="lg:col-span-6 relative">
        <div className="dot-pattern w-14 h-20 opacity-60 mb-5" />
        <h2 className="ifza-heading text-[32px] sm:text-[40px] md:text-[46px] leading-[1.08] text-[#1c1c1c] mb-6">
          Free Flexi Desk for the<br className="hidden sm:block" /> First Year of Your<br className="hidden sm:block" /> Business License*
        </h2>
        <ul className="space-y-4">
          {FLEXI_FEATURES.map((f, i) => (
            <li key={i} className="flex items-center gap-3.5 text-[15px] sm:text-[16px] text-[#2a2a2a] font-normal">
              <span className="w-6 h-6 rounded-full border border-[#c6a03a] flex items-center justify-center flex-shrink-0">
                <Check size={13} className="text-[#c6a03a]" />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
