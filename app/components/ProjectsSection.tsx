'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const projects = [
	{
		id: 1,
		title: 'Algo Playground',
		description: 'A non-profit educational platform that helps users learn algorithms and data structures through interactive visualizations.',
		image: '/algo_playground.png',
		link: 'https://asralov.github.io/algo_playground/',
	},
	{
		id: 2,
		title: 'GPU Sales and Value Tracker',
		description: 'A Python-based data analysis project using NumPy and Pandas, leveraging SerpAPI to track real-time GPU prices from eBay.',
		image: '/gpu_image.jpg',
		link: 'https://colab.research.google.com/drive/1RWs8o2DybkxKADhrAwubLUsLkBbf0zre?usp=sharing'
	},
	{
		id: 3,
		title: 'Lose The Bias',
		description: 'A personalized news platform powered by AI, featuring summaries and user engagement tools.',
		image: '/chatgpt.jpg',
		link: "https://github.com/asralov/csc337-final-project"
	},
	{
		id: 4,
		title: 'Trie Data Structure',
		description: 'A Java implementation of a Trie for efficient string storage and fast lookup operations.',
		image: '/trie.jpg',
		link: "https://github.com/asralov/CSC-345-Group-Project"
	},
	{
		id: 5,
		title: 'Word Search Game',
		description: 'A text-based word search game with interactive gameplay and built-in hint mechanics.',
		image: '/word_search.png',
		link: "https://github.com/asralov/wordSearchGame"
	},
	{
		id: 6,
		title: 'From Bud To Bloom',
		description: 'An award-winning Unity game focused on plant growth and interactive environments.',
		image: '/bud_bloom.png',
		link: "https://pulyau.itch.io/from-bud-to-bloom"
	},
	{
		id: 7,
		title: "Fishing Simulator 2D",
		description: 'A Unity-based fishing game featuring ocean exploration and responsive mechanics.',
		image: '/fishing.png',
		link: "https://pulyau.itch.io/fishing-simulator-2d"
	},
	{
		id: 8,
		title: "Before The Flush",
		description: 'A fast-paced 3D runner with humorous gameplay and time-based challenges.',
		image: '/before_flush.png',
		link: 'https://asralov.itch.io/before-the-flush'
	},
	{
		id: 9,
		title: 'The Last Hero',
		description: 'A 2D boss fight game inspired by Viktor Tsoys song The Last Hero.',
		image: '/lh.png',
		link: 'https://pulyau.itch.io/the-last-hero'
	},
	{
		id: 10,
		title: 'Checkers',
		description: 'A complete Checkers game with a graphical interface and AI opponent.',
		image: '/checkers.png',
		link: 'https://github.com/asralov/CS335-Final-Project'
	}
];

export default function ProjectsSection() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [index, setIndex] = useState(0);

	const GAP = 24; // matches gap-6

	const loopedProjects = projects;

	const scroll = (dir: 'left' | 'right') => {
		const container = scrollRef.current;
		if (!container) return;

		const card = container.children[0];
		if (!card) return;

		const cardWidth = card.clientWidth + GAP;

		let newIndex = dir === 'left' ? index - 1 : index + 1;

		// infinite looping bounds
		if (newIndex < 0) newIndex = projects.length - 1;
		if (newIndex >= projects.length) newIndex = 0;

		container.scrollTo({
			left: newIndex * cardWidth,
			behavior: 'smooth'
		});

		setIndex(newIndex);
	};

	useEffect(() => {
		if (isHovered) return;

		const interval = setInterval(() => {
			scroll('right');
		}, 4000);

		return () => clearInterval(interval);
	}, [isHovered, index]);

	useEffect(() => {
		const container = scrollRef.current;
		if (!container) return;

		const card = container.children[0];
		if (!card) return;

		const cardWidth = card.clientWidth + GAP;

		// start in middle of duplicated array
		container.scrollLeft = projects.length * cardWidth;
		setIndex(projects.length);
	}, []);

	return (
		<section className="relative py-20 overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-1">

			<div className="relative z-10 max-w-7xl mx-auto px-6">

				{/* HEADER + BUTTONS */}
				<div className="flex justify-between items-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
						Projects
					</h2>

					<div className="flex gap-3">
						<button
							onClick={() => scroll('left')}
							className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/10 backdrop-blur-md transition"
						>
							<ChevronLeft size={20} />
						</button>

						<button
							onClick={() => scroll('right')}
							className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/10 backdrop-blur-md transition"
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>

				{/* SCROLL */}
				{/* SCROLL CONTAINER WITH LEFT/RIGHT BARS */}
				<div className="relative">
					{/* Left Bar */}
					<div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-white/20 to-transparent pointer-events-none z-20 rounded-l-xl"></div>
					{/* Right Bar */}
					<div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-white/20 to-transparent pointer-events-none z-20 rounded-r-xl"></div>

					<div
						ref={scrollRef}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className="flex gap-6 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth pl-2 pr-2"
					>
						{loopedProjects.map((project, i) => (
							<motion.div
								key={i}
								className="
									flex-shrink-0
									w-full
									sm:w-[calc((100%-24px)/2)]
									lg:w-[calc((100%-48px)/3)]
								"
							>
								<div className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:scale-[1.02] transition">
									<div className="relative h-56 w-full">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover group-hover:scale-110 transition-transform duration-500"
										/>
									</div>

									<div className="p-6">
										<h3 className="text-xl font-semibold text-white mb-2">
											{project.title}
										</h3>

										<p className="text-gray-400 text-sm mb-4">
											{project.description}
										</p>

										<Link
											href={project.link}
											target="_blank"
											className="inline-block text-sm px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
										>
											View Project
										</Link>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

			</div>
		</section>
	);
}