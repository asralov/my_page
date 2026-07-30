'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Cpu, Gamepad2, Layers } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'web' | 'algo' | 'game';
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hasty Judgement',
    category: 'game',
    description: 'Fast-paced multiplayer game where decisions directly impact outcomes. Built with responsive networking logic.',
    tags: ['Unity', 'C#', 'Multiplayer'],
    link: 'https://asralov.itch.io/hasty-judgement'
  },
  {
    id: 2,
    title: 'Algo Playground',
    category: 'algo',
    description: 'Interactive educational web application visualizing complex data structures and step-by-step algorithmic execution.',
    tags: ['JavaScript', 'HTML5/CSS3', 'Algorithms'],
    link: 'https://asralov.github.io/algo_playground/'
  },
  {
    id: 3,
    title: 'GPU Sales & Value Tracker',
    category: 'web',
    description: 'Data extraction and pipeline project utilizing SerpAPI to scrape, clean, and visualize real-time GPU hardware pricing.',
    tags: ['Python', 'NumPy', 'Pandas', 'SerpAPI'],
    link: 'https://colab.research.google.com/drive/1RWs8o2DybkxKADhrAwubLUsLkBbf0zre?usp=sharing'
  },
  {
    id: 4,
    title: 'Lose The Bias',
    category: 'web',
    description: 'AI-assisted full-stack news platform synthesizing multi-perspective news feeds and automating key summaries.',
    tags: ['Node.js', 'Express', 'AI/LLM API', 'MongoDB'],
    link: 'https://github.com/asralov/csc337-final-project'
  },
  {
    id: 5,
    title: 'Trie Data Structure Engine',
    category: 'algo',
    description: 'High-performance Java implementation of a Trie, optimized for ultra-fast prefix searches and memory efficiency.',
    tags: ['Java', 'Data Structures', 'OOP'],
    link: 'https://github.com/asralov/CSC-345-Group-Project'
  },
  {
    id: 6,
    title: 'Interactive Word Search Engine',
    category: 'algo',
    description: 'Text-based word processing engine featuring recursive grid matching and real-time hint mechanisms.',
    tags: ['Java', 'Algorithms', 'CLI'],
    link: 'https://github.com/asralov/wordSearchGame'
  },
  {
    id: 7,
    title: 'From Bud To Bloom',
    category: 'game',
    description: 'Award-winning Unity environmental simulation game featuring custom shader effects and physical interaction mechanics.',
    tags: ['Unity', 'C#', 'Shaders'],
    link: 'https://pulyau.itch.io/from-bud-to-bloom'
  },
  {
    id: 8,
    title: 'Fishing Simulator 2D',
    category: 'game',
    description: 'Physics-driven ocean exploration title with responsive custom player controllers and collision systems.',
    tags: ['Unity', 'C#', '2D Physics'],
    link: 'https://pulyau.itch.io/fishing-simulator-2d'
  },
  {
    id: 9,
    title: 'Before The Flush',
    category: 'game',
    description: 'Arcade-style 3D runner built around time-critical obstacle generation and dynamic speed escalations.',
    tags: ['Unity', '3D Graphics', 'C#'],
    link: 'https://asralov.itch.io/before-the-flush'
  },
  {
    id: 10,
    title: 'The Last Hero',
    category: 'game',
    description: '2D boss encounter game inspired by classic synthwave tracks, featuring custom state-machine boss AI.',
    tags: ['Unity', 'State Machine AI', 'C#'],
    link: 'https://pulyau.itch.io/the-last-hero'
  },
  {
    id: 11,
    title: 'Checkers Engine & Graphical UI',
    category: 'web',
    description: 'Full Checkers desktop application featuring standard rule engine validation and automated AI minimax opponent.',
    tags: ['Java', 'Swing/GUI', 'Minimax AI'],
    link: 'https://github.com/asralov/CS335-Final-Project'
  }
];

const categories = [
  { key: 'all', label: 'All Work', icon: Layers },
  { key: 'web', label: 'Web & Systems', icon: Code2 },
  { key: 'algo', label: 'Algorithms & AI', icon: Cpu },
  { key: 'game', label: 'Game Dev', icon: Gamepad2 }
] as const;

export default function ProjectsSection(): React.JSX.Element {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="projects" className="relative bg-white px-6 py-24 border-t border-slate-100">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-teal-600 uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mt-1">
              Featured Work
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/80">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = filter === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setFilter(cat.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-teal-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-950 text-teal-400">
                      {project.category === 'game' ? (
                        <Gamepad2 size={18} />
                      ) : project.category === 'algo' ? (
                        <Cpu size={18} />
                      ) : (
                        <Code2 size={18} />
                      )}
                    </div>

                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-400 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </Link>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-teal-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-950 hover:text-teal-600 transition-colors"
                  >
                    View Details
                    <span className="text-xs">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}