import React from "react";
import {
  FileText, MapPin, Landmark, Calculator, Gift, Check, ArrowRight,
} from "lucide-react";
import { SERVICES, HOW_STEPS, WHY_QUESTIONS, IMAGES } from "../mock";
import { scrollToForm } from "./HeroSection";

const ICONS = { FileText, MapPin, Landmark, Calculator };
const Icon = ({ name, ...p }) => {
  const C = ICONS[name] || FileText;
  return <C {...p} />;
};

/* ---------- 06: Thrive Value / Services + Featured Offer ---------- */
export const ThriveServices = () => (
  <section className="section-container py-16 md:py-24">
    <div className="max-w-3xl">
      <h2 className="ifza-heading text-[34px] md:text-[48px] leading-[1.08] text-[#0a0e2a]">
        Your License Is Just the Beginning.
      </h2>
      <p className="mt-6 text-[16px] leading-relaxed text-[#5a5a5a]">
        Setting up a company is one part of the journey. Running it is another. Thrive supports your
        business beyond incorporation.
      </p>
    </div>

    {/* Mobile: 2-col box cards with icons and gold border */}
    <div className="mt-8 grid grid-cols-2 gap-3.5 md:hidden">
      {SERVICES.map((s, i) => (
        <div
          key={i}
          className="border border-[#c6a03a] p-5 text-center flex flex-col items-center"
        >
          <div className="w-14 h-14 rounded-full bg-[#c6a03a] flex items-center justify-center mb-4">
            <Icon name={s.icon} size={24} className="text-white" />
          </div>
          <h3 className="text-[14px] font-bold text-[#0a0e2a] mb-1.5 leading-snug">{s.title}</h3>
          <p className="text-[11.5px] leading-relaxed text-[#5a5a5a]">{s.desc}</p>
        </div>
      ))}
    </div>

    {/* Desktop: 4-col with icons and hover */}
    <div className="mt-10 md:mt-14 hidden md:grid lg:grid-cols-4 md:grid-cols-2 md:gap-6">
      {SERVICES.map((s, i) => (
        <div key={i} className="group text-center px-6 py-10 border border-[#eee] hover:border-[#c6a03a] hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#faf6ee] flex items-center justify-center mb-5 group-hover:bg-[#c6a03a] transition-colors duration-300">
            <Icon name={s.icon} size={26} className="ifza-gold group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-[17px] font-medium text-[#0a0e2a] mb-2.5">{s.title}</h3>
          <p className="text-[13.5px] leading-relaxed text-[#5a5a5a]">{s.desc}</p>
        </div>
      ))}
    </div>

    {/* Featured Offer Card */}
    <div className="mt-14 md:mt-20 bg-[#111319] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl grid lg:grid-cols-12">
      {/* Left Column: Content */}
      <div className="lg:col-span-6 p-7 sm:p-9 md:p-11 lg:p-12 flex flex-col justify-between">
        <div>
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-wider text-white/90 uppercase mb-5 self-start">
            <Gift size={15} className="text-[#c6a03a]" />
            <span>FEATURED THRIVE OFFER</span>
          </div>

          {/* Headline */}
          <h3 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-white leading-[1.12] mb-3.5">
            A Little More for<br />
            Businesses Starting With<br />
            Thrive
          </h3>

          <p className="text-white/75 text-[14px] sm:text-[15px] leading-relaxed mb-6">
            Set up your UAE business with Thrive—and get more than just a license.
          </p>

          {/* Highlight Box */}
          <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5 sm:p-6 mb-6">
            <p className="text-white/60 text-[12px] sm:text-[12.5px] mb-2 font-normal">
              For a limited number of qualifying businesses, we're offering:
            </p>
            <h4 className="text-white text-[15.5px] sm:text-[17px] font-bold leading-snug mb-3.5">
              Complimentary accounting, bookkeeping and tax filing support
            </h4>
            <p className="text-white/60 text-[11px] sm:text-[11.5px] mb-1 font-normal">
              for the first
            </p>
            <div className="flex items-baseline gap-2.5">
              <span className="text-[34px] sm:text-[40px] font-extrabold text-[#c6a03a] leading-none">
                100
              </span>
              <span className="text-white font-bold text-[13px] sm:text-[14px] tracking-wider uppercase">
                COMPANY SETUPS
              </span>
            </div>
          </div>

          {/* Checkmark List */}
          <ul className="space-y-2.5 mb-7 text-[13px] sm:text-[14px] text-white/85">
            <li className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-white" />
              </span>
              <span>Complimentary accounting support</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-white" />
              </span>
              <span>Bookkeeping handled from day one</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-white" />
              </span>
              <span>Tax filing support included</span>
            </li>
          </ul>

          {/* Action Button */}
          <button
            onClick={scrollToForm}
            className="group inline-flex items-center gap-2 bg-white hover:bg-[#faf7f2] text-[#0a0e2a] px-7 py-3.5 rounded-full font-semibold text-[14px] transition-all shadow-md self-start cursor-pointer"
          >
            <span>Claim This Offer</span>
            <ArrowRight size={16} className="text-[#c6a03a] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-white/40 text-[11px] mt-6">
          *Terms and service scope apply.
        </p>
      </div>

      {/* Right Column: Image with floating badge */}
      <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
          alt="Thrive business setup collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Floating badge bottom-right */}
        <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-5 py-3.5 shadow-2xl border border-black/5 text-center select-none">
          <p className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#8a8a8a] mb-0.5">
            VALUE INCLUDED
          </p>
          <p className="text-[15px] sm:text-[17px] font-extrabold text-[#c6a03a] leading-tight">
            Year 1 support
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- 07: How It Works / Simplified Company Formation Process ---------- */
export const HowItWorks = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="section-container">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="ifza-heading text-[32px] sm:text-[40px] md:text-[46px] leading-[1.12] text-[#1c1c1c]">
          Simplified Company<br />Formation process
        </h2>
        <p className="mt-4 text-[14.5px] sm:text-[16px] text-[#4b5563] leading-relaxed">
          Set up your business easily, with no stress. We guide you every step of the way.
        </p>
      </div>

      {/* ---- MOBILE: Vertical Timeline ---- */}
      <div className="md:hidden relative pl-10">
        {/* Vertical dotted line */}
        <div className="absolute left-[15px] top-0 bottom-0 w-px border-l border-dashed border-[#c6c6c6]" />

        {HOW_STEPS.map((s, i) => (
          <div key={i} className="relative pb-10 last:pb-0">
            {/* Dot on the line */}
            <div
              className={`absolute left-[-25px] top-1 w-[21px] h-[21px] rounded-full border-2 flex items-center justify-center bg-white ${
                s.isGold ? "border-[#c6a03a]" : "border-[#1c1c1c]"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  s.isGold ? "bg-[#c6a03a]" : "bg-[#1c1c1c]"
                }`}
              />
            </div>

            <span
              className={`text-[32px] font-light leading-none mb-1 block ${
                s.isGold ? "text-[#c6a03a]" : "text-[#1c1c1c]"
              }`}
            >
              {s.num}
            </span>
            <h3 className="text-[18px] font-bold text-[#1c1c1c] mb-1">
              {s.title}
            </h3>
            <p className="text-[13.5px] text-[#4b5563] leading-relaxed max-w-xs">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ---- DESKTOP: Horizontal 4-column with connecting lines ---- */}
      <div className="hidden md:block max-w-5xl mx-auto">
        <div className="grid grid-cols-4 gap-0">
          {HOW_STEPS.map((s, i) => (
            <div key={i} className="relative text-center px-5">
              {/* Step Number */}
              <span
                className={`text-[42px] lg:text-[48px] font-light leading-none mb-1 block select-none ${
                  s.isGold ? "text-[#c6a03a]" : "text-[#1c1c1c]"
                }`}
              >
                {s.num}
              </span>

              {/* Horizontal connector line with dot */}
              <div className="flex items-center my-4">
                <span className="flex-1 h-px bg-[#d4d4d4]" />
                <span
                  className={`w-2.5 h-2.5 rounded-full mx-1 flex-shrink-0 ${
                    s.isGold ? "bg-[#c6a03a]" : "bg-[#1c1c1c]"
                  }`}
                />
                <span className="flex-1 h-px bg-[#d4d4d4]" />
              </div>

              {/* Title & Description */}
              <h3 className="text-[19px] lg:text-[20px] font-bold text-[#1c1c1c] mb-1.5 leading-snug">
                {s.title}
              </h3>
              <p className="text-[13px] lg:text-[14px] text-[#4b5563] leading-relaxed max-w-[180px] mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- 08: Why Thrive (Contained Rounded Card) ---------- */
export const WhyThrive = () => (
  <section className="section-container py-14 md:py-20">
    <div className="bg-[#0a0e2a] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-white/10 grid lg:grid-cols-12">
      {/* Left image */}
      <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[380px] lg:min-h-full overflow-hidden">
        <img
          src={IMAGES.gallery[0]}
          alt="Thrive team consultation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0e2a]/10 to-[#0a0e2a]/40 hidden lg:block" />
      </div>

      {/* Right content */}
      <div className="lg:col-span-7 p-7 sm:p-9 md:p-11 lg:p-14 flex flex-col justify-center">
        <h2 className="ifza-heading text-white text-[28px] sm:text-[34px] md:text-[40px] leading-[1.12] tracking-tight">
          We Don't Start With a Package.<br />
          <span className="ifza-gold font-normal">We Start With Your Business.</span>
        </h2>

        <p className="mt-4 sm:mt-5 text-white/60 text-[13px] sm:text-[14px] leading-relaxed">
          Before recommending a free zone, we look at what actually matters:
        </p>

        <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-3.5">
          {WHY_QUESTIONS.map((q, i) => (
            <li key={i} className="flex items-center gap-3 sm:gap-3.5 text-white text-[14px] sm:text-[15.5px]">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#c6a03a] flex items-center justify-center">
                <Check size={12} className="ifza-gold" />
              </span>
              <span>{q}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-white/60 text-[12.5px] sm:text-[13px] leading-relaxed max-w-lg">
          Because the best setup isn't necessarily the cheapest or the most premium.{" "}
          <strong className="text-white font-semibold">It's the one that fits</strong>—and that's
          what we're here to help you find.
        </p>

        <button
          onClick={scrollToForm}
          className="group mt-7 self-start inline-flex items-center gap-2.5 border border-[#c6a03a] text-[#c6a03a] hover:bg-[#c6a03a] hover:text-[#0a0e2a] px-7 py-3 rounded-full text-[12px] sm:text-[12.5px] tracking-[0.14em] font-semibold transition-all cursor-pointer shadow-sm"
        >
          <span>FIND MY FIT</span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
);
