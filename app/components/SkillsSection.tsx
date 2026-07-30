'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Database, Binary, Layers } from 'lucide-react';

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'data';
}

const skills: Skill[] = [
  { name: 'Java', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'TypeScript / JS', category: 'languages' },
  { name: 'C', category: 'languages' },
  { name: 'C#', category: 'languages' },
  { name: 'SQL', category: 'languages' },
  { name: 'OCaml', category: 'languages' },
  { name: 'MATLAB', category: 'languages' },
  { name: 'React.js', category: 'frameworks' },
  { name: 'Next.js', category: 'frameworks' },
  { name: 'Node.js', category: 'frameworks' },
  { name: 'Express.js', category: 'frameworks' },
  { name: 'React Native', category: 'frameworks' },
  { name: 'JUnit', category: 'frameworks' },
  { name: 'Swing / JavaFX', category: 'frameworks' },
  { name: 'Git / GitHub', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'PostgreSQL', category: 'tools' },
  { name: 'MongoDB', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'DigitalOcean', category: 'tools' },
  { name: 'Unity Engine', category: 'tools' },
  { name: 'Blender', category: 'tools' },
  { name: 'pandas', category: 'data' },
  { name: 'NumPy', category: 'data' },
  { name: 'Matplotlib', category: 'data' }
];

const categoryConfig = [
  { key: 'all', label: 'All Stack', icon: Layers },
  { key: 'languages', label: 'Languages', icon: Terminal },
  { key: 'frameworks', label: 'Frameworks', icon: Cpu },
  { key: 'tools', label: 'Cloud & Infrastructure', icon: Database },
  { key: 'data', label: 'AI & Data Science', icon: Binary }
] as const;

export default function SkillsSection(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    {
      key: 'languages',
      title: 'Programming Languages',
      icon: Terminal,
      skills: skills.filter((s) => s.category === 'languages')
    },
    {
      key: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: Cpu,
      skills: skills.filter((s) => s.category === 'frameworks')
    },
    {
      key: 'tools',
      title: 'Cloud, Databases & Tools',
      icon: Database,
      skills: skills.filter((s) => s.category === 'tools')
    },
    {
      key: 'data',
      title: 'AI & Data Analytics',
      icon: Binary,
      skills: skills.filter((s) => s.category === 'data')
    }
  ];

  const filteredCategories = categories.filter(
    (cat) => activeTab === 'all' || cat.key === activeTab
  );

  return (
    <section id="skills" className="relative bg-white px-6 py-24 border-t border-slate-100">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-teal-600 uppercase">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mt-1">
              Technical Expertise
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/80">
            {categoryConfig.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-teal-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredCategories.map((group) => {
              const GroupIcon = group.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={group.key}
                  className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-xl bg-indigo-950 text-teal-400">
                        <GroupIcon size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-950">
                        {group.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => (
                        <motion.span
                          key={skill.name}
                          whileHover={{ scale: 1.05 }}
                          className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium bg-slate-50 text-slate-800 border border-slate-200/80 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-colors duration-150 cursor-default"
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Category Proficiency</span>
                    <span>{group.skills.length} Technologies</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}