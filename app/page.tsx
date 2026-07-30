'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import { Analytics } from "@vercel/analytics/next";

export default function MinimalModernPortfolio(): React.JSX.Element {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 antialiased selection:bg-teal-100 selection:text-teal-900">
      
      {/* Main Page Sections */}
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      {/* Vercel Analytics */}
      <Analytics />

    </main>
  );
}