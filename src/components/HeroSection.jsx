import React, { useState } from "react";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { IMAGES, HERO_BULLETS, HERO_SUBTEXT, COUNTRIES, SETUP_TIMES } from "../mock";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "../hooks/use-toast";

const scrollToForm = () => {
  const forms = document.querySelectorAll("[data-form]");
  for (const f of forms) {
    if (f.offsetParent !== null) {
      f.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  }
};

const ConsultationForm = () => {
  React.useEffect(() => {
    const existing = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      data-form
      className="relative bg-white shadow-2xl p-0 w-full max-w-lg mx-auto lg:max-w-none rounded-xl overflow-hidden min-h-[780px]"
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/49bMXA9bSSp1aned7biq"
        style={{ width: "100%", height: "100%", minHeight: "780px", border: "none", borderRadius: "8px" }}
        id="inline-49bMXA9bSSp1aned7biq"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 3"
        data-height="807"
        data-layout-iframe-id="inline-49bMXA9bSSp1aned7biq"
        data-form-id="49bMXA9bSSp1aned7biq"
        title="Form 3"
      />
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-[560px]">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="Dubai business setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        </div>

        {/* Header */}
        <header className="relative z-20 section-container pt-6 md:pt-8">
          <Logo light />
        </header>

        <div className="relative z-10 section-container pt-8 md:pt-10 pb-12 md:pb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7 pt-2 lg:pt-4 max-w-xl">
              <h1 className="ifza-heading text-white text-[38px] sm:text-[46px] md:text-[56px] leading-[1.05]">
                Launch &amp; Scale Your Dubai Business{" "}
                <span className="font-bold">Remotely</span>
              </h1>
              <p className="mt-5 text-white/80 text-[15px] md:text-[16px] leading-relaxed max-w-md">
                {HERO_SUBTEXT}
              </p>
              <ul className="mt-7 md:mt-8 space-y-3.5 md:space-y-4">
                {HERO_BULLETS.map((b, i) => (
                  <li key={i} className="flex items-center gap-3.5 ifza-gold text-[15px] md:text-[16px]">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full border border-white/60 flex items-center justify-center">
                      <Check size={15} className="text-white" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form - desktop only */}
            <div className="hidden lg:block lg:col-span-5 relative z-10 w-full">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Form - mobile only */}
      <section className="lg:hidden section-container pt-8 pb-4">
        <ConsultationForm />
      </section>
    </>
  );
};

export { scrollToForm };
export default HeroSection;
