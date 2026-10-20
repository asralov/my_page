import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import { Analytics } from "@vercel/analytics/next";

export default function MinimalModernPortfolio(): React.JSX.Element {
  return (
    <>
      <Navigation />
      <main id="main-content" tabIndex={-1} className="relative min-h-screen">
        {/* Main Page Sections */}
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />

        {/* Vercel Analytics */}
        {process.env.VERCEL === "1" && <Analytics />}
      </main>
    </>
  );
}
