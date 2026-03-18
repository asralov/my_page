'use client';

import { motion } from 'framer-motion';

const skills = [
	{ name: 'Java', category: 'Language' },
	{ name: 'Python', category: 'Language' },
	{ name: 'C', category: 'Language' },
	{ name: 'JavaScript/TypeScript', category: 'Language' },
	{ name: 'OCaml', category: 'Language' },
	{ name: 'C#', category: 'Language' },
	{ name: 'Matlab', category: 'Language' },
	{ name: 'SQL', category: 'Language'},
	{ name: 'React.js', category: 'Framework' },
	{ name: 'React Native', category: 'Framework' },
	{ name: 'Node.js', category: 'Framework' },
	{ name: 'Express.js', category: 'Framework' },
	{ name: 'Next.js', category: 'Framework' },
	{ name: 'JUnit', category: 'Framework' },
	{ name: 'Swing', category: 'Framework' },
	{ name: 'JavaFX', category: 'Framework' },
	{ name: 'Git', category: 'Tool' },
	{ name: 'Docker', category: 'Tool' },
	{ name: 'MongoDB', category: 'Tool' },
	{ name: 'PostgreSQL', category: 'Tool'},
	{ name: 'AWS', category: 'Tool' },
	{ name: 'Digital Ocean', category: 'Tool' },
	{ name: 'Unity', category: 'Tool' },
	{ name: 'Blender', category: 'Tool' },
	{ name: 'pandas', category: 'Data Tool' },
	{ name: 'NumPy', category: 'Data Tool' },
	{ name: 'Matplotlib', category: 'Data Tool' }
];

export default function SkillsSection() {
	return (
		<section className="py-16 px-4 bg-black/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-1">
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
				>
					Technical Skills
				</motion.h2>

				{/* Glass / Blur Container */}
				<div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
					<div className="flex flex-wrap gap-4 justify-center">
						{skills.map((skill, index) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								whileHover={{ scale: 1.1, y: -2 }}
								className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-sm md:text-base cursor-default shadow-sm hover:shadow-lg transition-all"
							>
								{skill.name}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}