import React from "react";
import {
  BadgeCheck, Globe, Blocks, Headset, Compass, Route, LifeBuoy, Lightbulb,
  ShoppingCart, Briefcase, TrendingUp, Cpu, Palette, ArrowRight,
  Target, Layers, Sparkles, ArrowUpRight,
} from "lucide-react";
import {
  QUICK_BENEFITS, KEY_BENEFITS, FREE_ZONES, BUSINESS_CATEGORIES,
} from "../mock";
import { scrollToForm } from "./HeroSection";

const ICONS = {
  BadgeCheck, Globe, Blocks, Headset, Compass, Route, LifeBuoy, Lightbulb,
  ShoppingCart, Briefcase, TrendingUp, Cpu, Palette,
  Target, Layers, Sparkles, ArrowUpRight,
};
const Icon = ({ name, ...p }) => {
  const C = ICONS[name] || BadgeCheck;
  return <C {...p} />;
};

/* shared swipe helpers */
const swipeRow = "flex overflow-x-auto snap-x snap-mandatory hide-scroll pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible";
const swipeItem = "snap-center flex-shrink-0 w-[78%] sm:w-[45%] md:w-auto";

/* ---------- Train Marquee / Moving Stats Strip ---------- */
const MARQUEE_ITEMS = [
  { prefix: "Fast-Track", text: "Licensing" },
  { prefix: "75,000+", text: "Entrepreneurs Served", highlight: true },
  { prefix: "UAE", text: "Residency Pathways" },
  { prefix: "100%", text: "Foreign Ownership", highlight: true },
  { prefix: "0%", text: "Personal Income Tax", highlight: true },
  { prefix: "Strategic", text: "Global Location" },
  { prefix: "Remote", text: "Company Setup" },
  { prefix: "50+", text: "Free Zones Explored", highlight: true },
  { prefix: "100%", text: "Capital & Profit Repatriation", highlight: true },
  { prefix: "Corporate", text: "Banking Assistance" },
  { prefix: "Multi-Year", text: "License Savings" },
];

export const StatsBar = () => {
  // Duplicated for continuous smooth looping
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="bg-[#0a0e2a] border-y border-white/10 py-3.5 md:py-4.5 overflow-hidden marquee-mask relative select-none">
      <div className="animate-train flex items-center whitespace-nowrap">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3.5 md:space-x-5 mx-3 md:mx-4 shrink-0">
            <span className="text-[13px] sm:text-[14px] md:text-[15px] font-normal tracking-wide">
              {item.highlight ? (
                <>
                  <strong className="text-[#c6a03a] font-semibold">{item.prefix}</strong>{" "}
                  <span className="text-white/80">{item.text}</span>
                </>
              ) : (
                <span className="text-white/85">
                  <span className="text-white font-medium">{item.prefix}</span> {item.text}
                </span>
              )}
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c6a03a]/75 shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------- 02: Four Quick Benefits ---------- */
export const QuickBenefits = () => (
  <section className="section-container pt-10 md:pt-24 pb-8 md:pb-16">
    {/* Mobile: compact text-only 2-col grid */}
    <div className="grid grid-cols-2 gap-x-5 gap-y-6 md:hidden">
      {QUICK_BENEFITS.map((b, i) => (
        <div key={i}>
          <h3 className="text-[15px] font-bold ifza-gold mb-1 leading-snug">{b.title}</h3>
          <p className="text-[12px] leading-relaxed text-[#3a3a3a]">{b.desc}</p>
          <div className="w-8 h-[2px] bg-[#c6a03a] mt-3" />
        </div>
      ))}
    </div>

    {/* Desktop: full layout with icons */}
    <div className="hidden md:grid md:grid-cols-4 md:gap-8">
      {QUICK_BENEFITS.map((b, i) => (
        <div key={i} className="group">
          <div className="w-14 h-14 rounded-full bg-[#faf6ee] flex items-center justify-center mb-5 group-hover:bg-[#c6a03a] transition-colors duration-300">
            <Icon name={b.icon} size={26} className="ifza-gold group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-[19px] font-medium text-[#0a0e2a] mb-2.5">{b.title}</h3>
          <p className="text-[14px] leading-relaxed text-[#5a5a5a]">{b.desc}</p>
        </div>
      ))}
    </div>

    <p className="text-[11px] md:text-[12px] text-[#9a9a9a] mt-5 md:mt-10">Eligibility and service scope apply.</p>
  </section>
);

/* ---------- 03: Key Benefits (2x2 / swipe) ---------- */
export const KeyBenefits = () => (
  <section className="relative bg-[#faf7f2] py-14 md:py-24 overflow-hidden">
    {/* Dubai landmarks & skyline background vector artwork */}
    <div className="absolute right-0 top-0 w-full md:w-7/12 h-full pointer-events-none opacity-45 overflow-hidden select-none hidden sm:block">
      <svg
        viewBox="0 0 600 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-right"
      >
        {/* Subtle concentric sun / radial arch */}
        <circle cx="500" cy="180" r="180" stroke="#c6a03a" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
        <circle cx="500" cy="180" r="120" stroke="#c6a03a" strokeWidth="0.8" opacity="0.25" />

        {/* Dot matrix pattern */}
        <g opacity="0.35" fill="#c6a03a">
          {[...Array(6)].map((_, r) =>
            [...Array(8)].map((_, c) => (
              <circle key={`${r}-${c}`} cx={440 + c * 14} cy={50 + r * 14} r="1.2" />
            ))
          )}
        </g>

        {/* Burj Khalifa silhouette */}
        <path
          d="M480 380 L480 260 L483 260 L483 200 L485 200 L485 140 L487 140 L487 80 L488 40 L489 80 L489 140 L491 140 L491 200 L493 200 L493 260 L496 260 L496 380 Z"
          stroke="#c6a03a"
          strokeWidth="1.2"
          fill="none"
          opacity="0.65"
        />
        <line x1="480" y1="300" x2="496" y2="300" stroke="#c6a03a" strokeWidth="0.8" opacity="0.5" />
        <line x1="483" y1="230" x2="493" y2="230" stroke="#c6a03a" strokeWidth="0.8" opacity="0.5" />
        <line x1="485" y1="170" x2="491" y2="170" stroke="#c6a03a" strokeWidth="0.8" opacity="0.5" />

        {/* Burj Al Arab sail silhouette */}
        <path
          d="M540 380 L540 180 C540 180 575 230 575 310 C575 350 565 380 565 380 Z"
          stroke="#c6a03a"
          strokeWidth="1.2"
          fill="none"
          opacity="0.65"
        />
        <path d="M540 220 L565 240 M540 260 L570 285 M540 300 L574 330 M540 340 L570 365" stroke="#c6a03a" strokeWidth="0.8" opacity="0.45" />
        <line x1="535" y1="380" x2="580" y2="380" stroke="#c6a03a" strokeWidth="1" opacity="0.5" />

        {/* Distant skyline towers */}
        <rect x="380" y="240" width="22" height="140" stroke="#c6a03a" strokeWidth="0.9" fill="none" opacity="0.4" />
        <rect x="408" y="200" width="18" height="180" stroke="#c6a03a" strokeWidth="0.9" fill="none" opacity="0.45" />
        <polygon points="408,200 417,175 426,200" stroke="#c6a03a" strokeWidth="0.9" fill="none" opacity="0.45" />
        <rect x="432" y="260" width="16" height="120" stroke="#c6a03a" strokeWidth="0.9" fill="none" opacity="0.35" />

        {/* Palm trees */}
        <g opacity="0.55" stroke="#c6a03a" strokeWidth="1" fill="none">
          <path d="M340 380 Q342 330 345 290" />
          <path d="M345 290 Q330 270 315 285" />
          <path d="M345 290 Q335 260 330 275" />
          <path d="M345 290 Q350 260 360 275" />
          <path d="M345 290 Q365 270 375 290" />

          <path d="M590 380 Q588 340 585 300" />
          <path d="M585 300 Q570 280 560 295" />
          <path d="M585 300 Q575 270 570 285" />
          <path d="M585 300 Q590 270 600 285" />
          <path d="M585 300 Q605 280 610 300" />
        </g>
      </svg>
    </div>

    <div className="section-container relative z-10">
      <div className="max-w-3xl">
        {/* Top Tag */}
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="w-6 h-0.5 bg-[#c6a03a]" />
          <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#c6a03a]">
            Smart Choices Today. Stronger Tomorrow.
          </span>
        </div>

        <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-bold leading-[1.08] text-[#0a0e2a] tracking-tight">
          Setting Up Is Easy. <span className="text-[#c6a03a]">Choosing Right Is Harder.</span>
        </h2>

        <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[#5a5a5a] max-w-2xl">
          A UAE company can unlock exciting opportunities—but the decisions you make at the
          beginning can affect what comes next.{" "}
          <strong className="text-[#c6a03a] font-semibold">Thrive</strong> helps you think
          beyond simply getting a license issued.
        </p>
      </div>

      {/* Mobile: 2-col compact box cards */}
      <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
        {KEY_BENEFITS.map((b, i) => (
          <div
            key={i}
            onClick={scrollToForm}
            className="bg-white rounded-xl p-4 border border-[#e5e7eb] shadow-sm flex flex-col cursor-pointer active:scale-[0.98] transition-transform"
          >
            {/* Icon & arrow row */}
            <div className="flex items-center justify-between mb-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${b.bg}`}
              >
                <Icon name={b.icon} size={18} className={b.color} />
              </div>
              <ArrowUpRight size={15} className="text-[#9ca3af]" />
            </div>
            <h3 className="text-[13.5px] font-bold text-[#111827] leading-snug mb-1.5">
              {b.title}
            </h3>
            <p className="text-[11px] leading-relaxed text-[#4b5563]">
              {b.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: 2x2 full cards */}
      <div className="mt-10 md:mt-14 hidden md:grid md:grid-cols-2 md:gap-6">
        {KEY_BENEFITS.map((b, i) => (
          <div
            key={i}
            onClick={scrollToForm}
            className="relative bg-white rounded-2xl p-7 sm:p-8 border border-[#e5e7eb] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#c6a03a]/40 md:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            {/* Top row: pastel rounded squircle icon container & top-right arrow */}
            <div className="flex items-center justify-between mb-5">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${b.bg} group-hover:scale-105 transition-transform duration-300`}
              >
                <Icon name={b.icon} size={22} className={b.color} />
              </div>
              <ArrowUpRight
                size={19}
                className="text-[#9ca3af] group-hover:text-[#111827] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-[19px] sm:text-[21px] font-bold text-[#111827] leading-snug mb-2.5">
                {b.title}
              </h3>
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#4b5563]">
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- 04: Free Zone Selection (swipe) ---------- */
export const FreeZones = () => (
  <section className="section-container py-14 md:py-24">
    <div className="max-w-3xl">
      <h2 className="ifza-heading text-[30px] md:text-[48px] leading-[1.08] text-[#0a0e2a]">
        Different Businesses. Different Starting Points.
      </h2>
      <p className="mt-5 md:mt-6 text-[15px] md:text-[16px] leading-relaxed text-[#5a5a5a]">
        Not every founder needs the same free zone&mdash;or the most expensive one. We help you find
        the setup that makes sense for what you're building.
      </p>
      <p className="mt-4 text-[14px] font-medium text-[#0a0e2a]">
        Three starting points we often explore:
      </p>
    </div>

    <div className={`mt-10 md:mt-12 ${swipeRow} gap-6 md:grid md:grid-cols-3 md:gap-6`}>
      {FREE_ZONES.map((z, i) => (
        <div
          key={i}
          className={`${swipeItem} group flex flex-col bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden hover:shadow-xl md:hover:-translate-y-1 transition-all duration-300`}
        >
          {/* Top Image with floating badge */}
          <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
            <img
              src={z.image}
              alt={z.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-semibold text-[#1c1c1c] flex items-center gap-1.5 shadow-sm">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: z.badgeColor }}
              />
              <span>{z.name}</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-7 flex flex-col flex-1">
            <h3 className="text-[20px] sm:text-[22px] font-bold text-[#111827] leading-snug mb-3">
              {z.tagline}
            </h3>
            <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#4b5563] mb-6 flex-1">
              {z.desc}
            </p>

            <div className="mt-auto">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af] mb-2.5">
                OFTEN CONSIDERED FOR
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {z.activities.map((a, j) => (
                  <span
                    key={j}
                    className="text-[12px] font-medium bg-[#f4efe6] text-[#4a4a4a] px-3 py-1.5 rounded-full"
                  >
                    {a}
                  </span>
                ))}
              </div>

              <button
                onClick={scrollToForm}
                className="flex items-center gap-1.5 text-[14px] font-semibold transition-all group-hover:gap-2.5 cursor-pointer"
                style={{ color: z.textColor }}
              >
                <span>{z.linkText}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Callout Banner */}
    <div className="mt-10 md:mt-12 bg-[#f6f2ea] border border-[#ebe5d8] rounded-2xl p-5 sm:p-6 md:px-8 md:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <p className="text-[15px] sm:text-[16px] text-[#1c1c1c] font-normal leading-relaxed max-w-2xl">
        Not sure which one fits? That's the point. You don't have to decide before speaking to us.
      </p>
      <button
        onClick={scrollToForm}
        className="group inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white px-6 py-3 rounded-full text-[14px] font-semibold transition-all whitespace-nowrap shadow-sm cursor-pointer self-start sm:self-auto"
      >
        <span>Help Me Choose</span>
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </section>
);

/* ---------- 05: Business Activities (swipe) ---------- */
export const BusinessActivities = () => (
  <section className="bg-[#0a0e2a] py-14 md:py-24">
    <div className="section-container">
      <div className="max-w-3xl">
        <h2 className="ifza-heading text-[30px] md:text-[48px] leading-[1.08] text-white">
          Your Business Doesn't Have to Fit Into One Box.
        </h2>
        <p className="mt-5 md:mt-6 text-[15px] md:text-[16px] leading-relaxed text-white/70">
          Your company structure should reflect what your business actually does. Depending on your
          chosen free zone and approved activities, we help you explore a structure that makes
          practical sense today and leaves room for where you're headed.
        </p>
      </div>

      <p className="text-[13px] uppercase tracking-[0.2em] ifza-gold mt-10 md:mt-12 mb-6">Popular Business Categories</p>
      <div className={`${swipeRow} gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3`}>
        {BUSINESS_CATEGORIES.map((c, i) => (
          <div key={i} className={`${swipeItem} flex items-start gap-4 bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.08] hover:border-[#c6a03a]/50 transition-all duration-300`}>
            <div className="w-11 h-11 flex-shrink-0 rounded-lg bg-[#c6a03a] flex items-center justify-center">
              <Icon name={c.icon} size={20} className="text-[#0a0e2a]" />
            </div>
            <div>
              <h3 className="text-white text-[16px] font-medium mb-1">{c.title}</h3>
              <p className="text-[13.5px] text-white/60 leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[14px] text-white/50 mt-8 italic">Your business is more specific than a dropdown menu.</p>

      <button
        onClick={scrollToForm}
        className="group mt-8 md:mt-10 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#c6a03a] text-[#0a0e2a] px-8 py-4 text-[13px] tracking-[0.14em] font-semibold hover:bg-[#d4b04a] transition-colors"
      >
        FIND YOUR STRUCTURE
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </section>
);
