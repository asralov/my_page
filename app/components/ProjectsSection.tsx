'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'Lose The Bias',
		description: `We created a web app that shows ChatGPT news summaries, lets users personalize topics, and engage through likes and comments.`,
		image: '/chatgpt.jpg',
		link: "https://github.com/asralov/csc337-final-project"
	},
	{
		id: 2,
		title: 'Trie Data Structure',
		description: 'We implemented a Trie data structure in Java, designed for fast string storage and retrieval, commonly used in tasks like autocomplete and dictionaries.',
		image: '/trie.jpg',
		link: "https://github.com/asralov/CSC-345-Group-Project"
	},
	{
		id: 3,
		title: 'Word Search Game',
		description: 'This project is a text-based word search game where users find hidden words in a grid, use hints if needed, and play until they exit.',
		image: '/word_search.png',
		link: "https://github.com/asralov/wordSearchGame"
	},
	{
		id: 4,
		title: 'From Bud To Bloom',
		description: 'From Bud to Bloom is a 2D Unity game about plant growth and interactive environments, winning first place in the \'Bloom into the New\' Game Jam.',
		image: '/bud_bloom.png',
		link: "https://pulyau.itch.io/from-bud-to-bloom"
	},
	{
		id: 5,
		title: "Fishing Simulator 2D",
		description: 'Fishing Simulator 2D is a Unity game jam project where players catch fish and explore ocean environments, featuring responsive fishing mechanics and hand-drawn assets.',
		image: '/fishing.png',
		link: "https://pulyau.itch.io/fishing-simulator-2d"
	},
	{
		id: 6,
		title: "Before The Flush",
		description: 'Before The Flush is a humorous 3D Unity runner where a desperate boy races through maze-like environments, racing the clock to reach the restroom.',
		image: '/before_flush.png',
		link: 'https://asralov.itch.io/before-the-flush'
	},
	{
		id: 7,
		title: 'The Last Hero',
		description: 'A 2D game inspired by the song The Last Hero by Viktor Tsoi, where the final hero must face off against a witch in a dramatic showdown.',
		image: '/lh.png',
		link: 'https://pulyau.itch.io/the-last-hero'
	},
	{
		id: 8,
		title: 'Checkers',
		description: 'We created a Checkers game with PvP and PvC modes, featuring a GUI and standard Checkers rules.',
		image: '/checkers.png',
		link: 'https://github.com/asralov/CS335-Final-Project'
	}
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800"
			>
				Personal Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
						<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 group-hover:to-black/95 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
							<p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
							<div className="flex gap-4">
								{/* <Link
									href="#"
									className="text-sm px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
								>
									View Project
								</Link> */}
								<Link
									href={project.link}
									className="text-sm px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-full transition-all duration-300 backdrop-blur-sm"
								>
									Check it
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
