'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function ContactSection(): React.JSX.Element {
  const [copied, setCopied] = useState(false);
  const email = 'asrolovabror@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="relative bg-white px-6 py-24 border-t border-slate-100 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold tracking-wider text-teal-600 uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mt-1"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            I'm currently actively exploring full-time Software Engineering roles. 
            Whether you have an open opportunity or just want to chat tech, feel free to reach out!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12 p-8 rounded-3xl bg-indigo-950 text-white shadow-xl relative overflow-hidden"
        >
          <div aria-hidden="true" className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-teal-400 font-medium">Direct Email</span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-white">{email}</h3>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={`mailto:${email}`}
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-teal-600 hover:bg-teal-500 text-white transition-all duration-200"
              >
                <Mail size={16} />
                Send Email
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check size={18} className="text-teal-400" /> : <Copy size={18} />}
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
        >
          <a
            href="https://github.com/asralov"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-teal-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-indigo-950 group-hover:text-teal-400 transition-colors">
                <Github size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">GitHub</p>
                <p className="text-sm font-bold text-slate-900">/asralov</p>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-slate-400 group-hover:text-teal-600 transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/abrorjon-asralov/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-teal-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-indigo-950 group-hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">LinkedIn</p>
                <p className="text-sm font-bold text-slate-900">/abrorjon-asralov</p>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-slate-400 group-hover:text-teal-600 transition-colors" />
          </a>

          <div className="flex items-center gap-3.5 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">Location</p>
              <p className="text-sm font-bold text-slate-900">United States</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-slate-50 border-l-4 border-teal-500 text-slate-700 text-sm leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            <strong className="text-slate-950 font-semibold">Beyond the Code:</strong> I enjoy collaborating with high-performing teams, solving challenging algorithmic problems, and bringing structured design into complex products. Outside of engineering, I play the guitar and explore creative art to stay curious and inspired.
          </p>
        </motion.div>

        <footer className="mt-20 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>&copy; 2026 Abror Asralov. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-teal-600 transition-colors cursor-pointer"
          >
            Back to Top ↑
          </button>
        </footer>
      </div>
    </section>
  );
}