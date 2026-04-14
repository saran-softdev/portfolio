import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import TechStackSection from "./_components/TechStackSection";
import SuperpowersSection from "./_components/SuperpowersSection";
import ExperienceSection from "./_components/ExperienceSection";
import ProjectsSection from "./_components/ProjectsSection";

import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <SuperpowersSection />
        <ExperienceSection />
        <ProjectsSection />

        <ContactSection />
      </main>
    </div>
  );
}
