import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import HeroSection from "./components/HeroSection";
import { Testimonials, BankSection } from "./components/MidSections";
import {
  StatsBar, QuickBenefits, KeyBenefits, FreeZones, BusinessActivities,
} from "./components/SectionsA";
import { ThriveServices, HowItWorks, WhyThrive } from "./components/SectionsB";
import LowerSections from "./components/LowerSections";

const Landing = () => {
  useEffect(() => {
    document.title = "Thrive Consultant";
    const links = document.querySelectorAll("link[rel*='icon']");
    links.forEach((l) => {
      l.href = "/favicon.png";
      l.type = "image/png";
    });
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <StatsBar />
      <QuickBenefits />
      <KeyBenefits />
      <FreeZones />
      <BusinessActivities />
      <ThriveServices />
      <BankSection />
      <HowItWorks />
      <WhyThrive />
      <Testimonials />
      <LowerSections />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
