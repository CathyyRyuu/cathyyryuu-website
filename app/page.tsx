import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection"
import HowIWorkSection from "./components/HowIWorkSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-ink">
      <Navbar />
      <div className="section-shell pt-28 sm:pt-32">
        <HeroSection />
        <AchievementsSection />
        <HowIWorkSection />
      </div>
      <div className="section-shell py-12 lg:py-20">
        <AboutSection />
        <ProjectsSection />
      </div>
      <div className="border-y-2 border-dashed border-line bg-paper-deep/40">
        <div className="section-shell">
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}
