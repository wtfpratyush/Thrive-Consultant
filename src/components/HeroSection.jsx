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
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    nationality: "",
    email: "",
    dialCode: "+1",
    phone: "",
    setupTime: "",
    c1: false,
    c2: false,
    c3: false,
  });

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.c1 || !form.c2) {
      toast({
        title: "Please complete the form",
        description: "First name, email and required consents are needed.",
      });
      return;
    }
    const saved = JSON.parse(localStorage.getItem("ifza_leads") || "[]");
    saved.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("ifza_leads", JSON.stringify(saved));
    toast({
      title: "Thank you!",
      description: "Our team will contact you shortly to book your free consultation.",
    });
    setForm({
      firstName: "", lastName: "", nationality: "", email: "",
      dialCode: "+1", phone: "", setupTime: "", c1: false, c2: false, c3: false,
    });
  };

  const inputCls =
    "w-full bg-transparent border-b border-[#d5d5d5] py-2 text-[14px] text-[#1c1c1c] placeholder-[#8a8a8a] outline-none focus:border-[#c6a03a] transition-colors";

  return (
    <form
      data-form
      onSubmit={handleSubmit}
      className="relative bg-white shadow-2xl p-6 sm:p-7 md:p-8 w-full max-w-lg mx-auto lg:max-w-none rounded-sm"
    >
      <div className="dot-pattern absolute top-6 left-6 w-14 h-10 opacity-60 hidden md:block" />
      <h2 className="ifza-heading text-[26px] md:text-[30px] text-[#1c1c1c] mb-5 md:pl-14 relative z-10 leading-tight">
        Get Business<br className="hidden md:block" /> Setup Advice
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-3.5">
        <input
          className={inputCls}
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) => set("firstName", e.target.value)}
        />
        <input
          className={inputCls}
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => set("lastName", e.target.value)}
        />
      </div>

      <div className="mb-3.5">
        <input
          className={inputCls}
          placeholder="What is your nationality?"
          value={form.nationality}
          onChange={(e) => set("nationality", e.target.value)}
        />
      </div>

      <div className="mb-3.5">
        <input
          className={inputCls}
          placeholder="Email Address"
          type="email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </div>

      <div className="mb-3.5 flex items-end gap-2.5 border-b border-[#d5d5d5] focus-within:border-[#c6a03a] transition-colors">
        <select
          value={form.dialCode}
          onChange={(e) => set("dialCode", e.target.value)}
          className="bg-transparent py-2 text-[14px] outline-none cursor-pointer"
        >
          {COUNTRIES.map((c, i) => (
            <option key={i} value={c.code}>
              {c.flag} {c.code}
            </option>
          ))}
        </select>
        <input
          className="flex-1 bg-transparent py-2 text-[14px] outline-none placeholder-[#8a8a8a]"
          placeholder="(201) 555-0123"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <Select value={form.setupTime} onValueChange={(v) => set("setupTime", v)}>
          <SelectTrigger className="w-full bg-transparent border-0 border-b border-[#d5d5d5] rounded-none px-0 py-2 h-auto text-[14px] text-[#5a5a5a] focus:ring-0 focus:border-[#c6a03a]">
            <SelectValue placeholder="When would you like to setup a Dubai company?" />
          </SelectTrigger>
          <SelectContent>
            {SETUP_TIMES.map((t, i) => (
              <SelectItem key={i} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2.5 mb-5 text-[12px] leading-tight text-[#4a4a4a]">
        <label className="flex gap-2.5 items-start cursor-pointer">
          <Checkbox checked={form.c1} onCheckedChange={(v) => set("c1", !!v)} className="mt-0.5 rounded-none data-[state=checked]:bg-[#0a0e2a] data-[state=checked]:border-[#0a0e2a]" />
          <span>I understand this is strictly for business setup enquiries, no other requests will be processed.</span>
        </label>
        <label className="flex gap-2.5 items-start cursor-pointer">
          <Checkbox checked={form.c2} onCheckedChange={(v) => set("c2", !!v)} className="mt-0.5 rounded-none data-[state=checked]:bg-[#0a0e2a] data-[state=checked]:border-[#0a0e2a]" />
          <span>I consent to the processing of my personal data as outlined in the <span className="font-semibold underline">Privacy Policy</span>.</span>
        </label>
        <label className="flex gap-2.5 items-start cursor-pointer">
          <Checkbox checked={form.c3} onCheckedChange={(v) => set("c3", !!v)} className="mt-0.5 rounded-none data-[state=checked]:bg-[#0a0e2a] data-[state=checked]:border-[#0a0e2a]" />
          <span>I consent to receiving marketing communications as outlined in the <span className="font-semibold underline">Privacy Policy</span> (Optional).</span>
        </label>
      </div>

      <button
        type="submit"
        className="group w-full bg-[#0a0e2a] text-white py-3.5 flex items-center justify-center gap-2.5 text-[13.5px] tracking-[0.12em] font-medium hover:bg-[#161c48] transition-colors"
      >
        BOOK FREE CONSULTATION
        <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
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
