"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";

export default function HeroSection() {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="hero section-shell">
      <div className="content-shell hero-grid">
        <motion.div initial={false} animate={{ y: 0 }} className="hero-copy">
          <p className="eyebrow hero-enter">
            <span className="status-dot" /> Open to software engineering roles
          </p>
          <h1 className="hero-name hero-enter">
            Abror
            <br />
            <span>
              Asralov<span className="accent-dot">.</span>
            </span>
          </h1>
          <p className="hero-role hero-enter">
            Software engineer.
            <br />
            <span className="text-muted">Curious by default.</span>
          </p>
          <p className="hero-description hero-enter">
            I build web applications and engineering tools — from interactive
            algorithms to understanding how systems perform.
          </p>
          <div className="flex flex-wrap gap-3 hero-enter mt-8">
            <a href="#projects" className="button-primary">
              Explore projects <ArrowDown size={17} />
            </a>
            <a
              href="/my_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              View resume <ArrowUpRight size={17} />
            </a>
            <a
              href="https://github.com/asralov"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
              aria-label="GitHub profile"
            >
              <Github size={21} />
            </a>
          </div>
        </motion.div>
        <motion.figure
          initial={false}
          whileHover={reduced ? undefined : { y: -4 }}
          transition={{ duration: 0.25 }}
          className="portrait-card"
        >
          <div className="portrait-topline">
            <span>THE PERSON BEHIND THE CODE</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="portrait-image">
            <Image
              src="/me.jpg"
              alt="Abror Asralov outdoors"
              fill
              sizes="(max-width: 767px) 85vw, 400px"
              className="object-cover"
              loading="eager"
            />
          </div>
          <figcaption>
            <span>
              Computer Science
              <br />
              <strong>University of Arizona</strong>
            </span>
            <span className="portrait-year">'26</span>
          </figcaption>
        </motion.figure>
        <div className="hero-bottom">
          <span>
            WEB APPLICATIONS <span aria-hidden="true">/</span> ENGINEERING TOOLS
          </span>
          <a href="#projects">
            Selected work below <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
