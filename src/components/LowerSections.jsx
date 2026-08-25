import React from "react";
import { Plus, ArrowRight } from "lucide-react";
import { IMAGES, FAQ_GROUPS } from "../mock";
import { scrollToForm } from "./HeroSection";
import Logo from "./Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

/* ---------- 09: Grouped FAQ (Compact & Tabbed) ---------- */
const FAQSection = () => {
  const [activeTab, setActiveTab] = React.useState("all");

  const categories = [
    { id: "all", label: "All Questions" },
    ...FAQ_GROUPS.map((g, idx) => ({ id: `grp-${idx}`, label: g.group, group: g })),
  ];

  const displayedItems =
    activeTab === "all"
      ? FAQ_GROUPS.flatMap((g, gi) =>
          g.items.map((item, ii) => ({ ...item, groupName: g.group, id: `all-${gi}-${ii}` }))
        )
      : (FAQ_GROUPS[parseInt(activeTab.replace("grp-", ""), 10)]?.items || []).map(
          (item, ii) => ({ ...item, id: `tab-${ii}` })
        );

  // Split into 2 columns for a compact, balanced grid
  const col1 = displayedItems.filter((_, idx) => idx % 2 === 0);
  const col2 = displayedItems.filter((_, idx) => idx % 2 === 1);

  return (
    <section className="section-container py-14 md:py-20">
      <div className="max-w-3xl mb-8 md:mb-10">
        <h2 className="ifza-heading text-[32px] sm:text-[40px] md:text-[46px] leading-[1.08] text-[#0a0e2a]">
          Questions Worth Asking <span className="ifza-gold font-normal">Before You Set Up</span>
        </h2>
        <p className="mt-3 text-[14.5px] md:text-[15.5px] text-[#666] leading-relaxed">
          Find fast answers to common questions about Dubai company formation, residency, taxes, and free zones.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto hide-scroll pb-2 mb-8 -mx-6 px-6 md:mx-0 md:px-0 flex-nowrap md:flex-wrap">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer flex-shrink-0 ${
                isActive
                  ? "bg-[#0a0e2a] text-white shadow-sm"
                  : "bg-[#f4f0e6] text-[#555] hover:bg-[#eae4d5] hover:text-[#111]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* 2-Column Compact Accordion Grid */}
      <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
        {/* Column 1 */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {col1.map((f) => (
            <AccordionItem
              key={f.id}
              value={f.id}
              className="bg-white border border-[#e8e3d8] rounded-xl px-5 py-0.5 hover:border-[#c6a03a]/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all"
            >
              <AccordionTrigger className="text-left text-[14.5px] sm:text-[15.5px] font-medium py-3.5 hover:no-underline [&>svg]:hidden group text-[#1c1c1c]">
                <span className="flex-1 pr-3">{f.q}</span>
                <Plus
                  size={18}
                  className="flex-shrink-0 text-[#c6a03a] transition-transform duration-300 group-data-[state=open]:rotate-45"
                />
              </AccordionTrigger>
              <AccordionContent className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#5a5a5a] pb-4 pr-3 border-t border-[#f0ece3] pt-3 mt-1">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Column 2 */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {col2.map((f) => (
            <AccordionItem
              key={f.id}
              value={f.id}
              className="bg-white border border-[#e8e3d8] rounded-xl px-5 py-0.5 hover:border-[#c6a03a]/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all"
            >
              <AccordionTrigger className="text-left text-[14.5px] sm:text-[15.5px] font-medium py-3.5 hover:no-underline [&>svg]:hidden group text-[#1c1c1c]">
                <span className="flex-1 pr-3">{f.q}</span>
                <Plus
                  size={18}
                  className="flex-shrink-0 text-[#c6a03a] transition-transform duration-300 group-data-[state=open]:rotate-45"
                />
              </AccordionTrigger>
              <AccordionContent className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#5a5a5a] pb-4 pr-3 border-t border-[#f0ece3] pt-3 mt-1">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

/* ---------- 10: Final CTA ---------- */
const FinalCTA = () => (
  <section className="relative w-full">
    <img src={IMAGES.cta} alt="Start your Dubai business" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-[#0a0e2a]/85" />
    <div className="relative z-10 section-container py-24 md:py-32 text-center flex flex-col items-center">
      <h2 className="ifza-heading text-white text-[36px] md:text-[56px] leading-[1.08] max-w-3xl">
        Don't Choose a Free Zone Yet.<br />
        <span className="ifza-gold font-normal">Choose the Right Starting Point.</span>
      </h2>
      <p className="mt-6 text-white/75 text-[16px] md:text-[18px] max-w-xl leading-relaxed">
        Tell us what you're building. We'll help you find the UAE setup that makes sense for it.
      </p>
      <button
        onClick={scrollToForm}
        className="group mt-10 inline-flex items-center gap-3 bg-[#c6a03a] text-[#0a0e2a] px-10 py-4.5 text-[14px] tracking-[0.14em] font-semibold hover:bg-[#d4b04a] transition-colors"
        style={{ paddingTop: "1.1rem", paddingBottom: "1.1rem" }}
      >
        BOOK YOUR FREE CONSULTATION
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
      <p className="mt-8 text-white/50 text-[14px] italic">
        Your business. Your ambitions. A setup built around both.
      </p>
    </div>
  </section>
);

/* ---------- Footer ---------- */
const Footer = () => (
  <footer className="bg-[#070a1e] text-white/60">
    <div className="section-container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        <Logo />
        <span className="text-[13px]">©Thrive 2026&nbsp;&nbsp; All Rights Reserved</span>
      </div>
      <div className="flex gap-8 text-[13px]">
        <a href="#form" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#form" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
      </div>
    </div>
  </footer>
);

const LowerSections = () => (
  <>
    <FAQSection />
    <FinalCTA />
    <Footer />
  </>
);

export default LowerSections;
