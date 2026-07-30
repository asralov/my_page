'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Terminal, FileText } from 'lucide-react';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionP = motion.p;

export default function HeroSection(): React.JSX.Element {
  // Smooth scroll handler without altering URL hash
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-white px-6 py-20 md:py-28 overflow-hidden font-sans"
    >
      
      {/* 🚀 Ultra-Lightweight Background Grid (No Blurs, No Animation Overhead) */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ----------------- LEFT COLUMN: TEXT CONTENT ----------------- */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          
          {/* Availability Badge */}
          <MotionDiv
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-teal-50 text-teal-800 border border-teal-200/60 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Full-Time SWE Roles</span>
              <Sparkles size={12} className="text-teal-600 ml-0.5" />
            </div>
          </MotionDiv>

          {/* Main Name Heading */}
          <MotionH1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.08]"
          >
            Abror Asralov
          </MotionH1>

          {/* Subtitle / Role */}
          <MotionH2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-teal-600 flex items-center gap-2.5"
          >
            <Terminal size={24} className="text-indigo-950 hidden sm:inline-block" />
            <span>Software Engineer &amp; AI Specialist</span>
          </MotionH2>

          {/* Bio Narrative - Enhanced Typography */}
          <MotionP
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
			className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal tracking-normal"          >
            University of Arizona Computer Science Graduate. Architecting scalable full-stack platforms, high-throughput distributed systems, and practical AI applications tailored for real-world impact.
          </MotionP>

          {/* CTA Button Group */}
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-start gap-4"
          >
            {/* Primary CTA Button */}
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Secondary CTA Button */}
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-indigo-950 hover:bg-slate-900 text-white shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Let's Connect</span>
            </button>

            {/* Resume CTA Button */}
            <a
              href="/resume_updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-mono font-medium text-slate-600 hover:text-teal-700 hover:bg-slate-50 transition-all duration-200"
            >
              <FileText size={16} />
              <span>Resume.pdf</span>
            </a>
          </MotionDiv>

          {/* Tech Summary Bar */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500"
          >
            <div className="flex items-center gap-2">
              <Code2 size={15} className="text-teal-600" />
              <span>Full-Stack Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span>Distributed Computing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span>Applied Machine Learning</span>
            </div>
          </MotionDiv>

        </div>

        {/* ----------------- RIGHT COLUMN: AVATAR / PROFILE CARD ----------------- */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            
            {/* Crisp Avatar Frame */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl p-2 bg-white border border-slate-200/90 shadow-xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src="/me.jpg"
                  alt="Abror Asralov"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 300px, 400px"
                  className="object-cover"
                />
              </div>

              {/* Corrected Year Micro Badge */}
              <div className="absolute -bottom-3 -right-3 bg-indigo-950 text-white px-3.5 py-1.5 rounded-xl shadow-md border border-slate-800 text-[11px] font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span>CS '26 Alumni</span>
              </div>
            </div>

          </div>
        </MotionDiv>

      </div>
    </section>
  );
}