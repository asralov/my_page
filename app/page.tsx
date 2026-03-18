'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import { Analytics } from "@vercel/analytics/next";
import { motion } from 'framer-motion';

export default function MinimalModernPortfolio() {
	return (
		<div className="relative min-h-screen text-black overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
			
			{/* 🌌 GLOBAL BACKGROUND */}
			<div className="fixed inset-0 -z-10">
				
				{/* base dark gradient */}
				<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

				{/* subtle grid / texture (optional but nice) */}
				<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

				{/* floating blobs */}
				<motion.div
					className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]"
					animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
					transition={{ duration: 20, repeat: Infinity }}
				/>

				<motion.div
					className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"
					animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
					transition={{ duration: 25, repeat: Infinity }}
				/>
			</div>

			{/* 🌐 CONTENT */}
			<div className="relative z-10">
				<HeroSection />
				<ProjectsSection />
				<SkillsSection />
				<ContactSection />
			</div>

			<Analytics />
		</div>
	);
}