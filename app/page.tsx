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
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="w-full bg-[url('/images/space_bg_1.avif')] bg-cover bg-center bg-no-repeat">
        <div className="container mt-24 mx-auto px-12 py-4 mb-12">
          <HeroSection />
          <AchievementsSection />
        </div>
      </div>
      <div className="container mt-4 mx-auto px-12 py-4">
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
