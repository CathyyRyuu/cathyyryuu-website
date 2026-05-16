import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection"
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b] text-white">
      <Navbar />
      <div className="section-shell pt-28 sm:pt-32">
        <HeroSection />
        <AchievementsSection />
      </div>
      <div className="section-shell py-12 lg:py-20">
        <AboutSection />
        <ProjectsSection />
      </div>
      <div className="border-y border-white/10 bg-white/[0.025]">
        <div className="section-shell">
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}
