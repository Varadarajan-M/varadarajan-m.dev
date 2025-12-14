import HeroSection from "@/app/(landing)/_components/HeroSection";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import ContactSection from "./_components/ContactSection";
import ExperienceSection from "./_components/ExperienceSection";
import ProjectSection from "./_components/ProjectSection";
import SkillSection from "./_components/SkillSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProjectSection />
        <ExperienceSection />
        <SkillSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
