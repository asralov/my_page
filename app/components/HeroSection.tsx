'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
	return (
		
		<section className="h-screen flex items-center justify-center relative overflow-hidden bg-black/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-1">
			{/*[#0f172a] */}
			{/* Background gradient
			<div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]" />

			
			<div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
			<div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" /> */}

			<div className="relative z-10 text-center px-6">
				
				{/* Profile Image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					className="mb-6 flex justify-center"
				>
					<div className="relative w-32 h-32 md:w-40 md:h-40">
						<Image
							src="/profile.jpg" // <-- put your image in /public
							alt="Abror Asralov"
							fill
							className="rounded-full object-cover border-4 border-white/10 shadow-xl"
						/>
					</div>
				</motion.div>

				{/* Name */}
				<motion.h1
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
					style={{ fontFamily: 'Inter, sans-serif' }}
				>
					Abror Asralov
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto"
				>
					Computer Science Student with minor in Artificial Intelligence 
			    	at University of Arizona. Focused on building scalable systems 
					and clean user experiences
				</motion.p>

				{/* Optional: small highlight badge */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					className="mt-6"
				>
					<span className="px-4 py-2 text-sm bg-white/10 text-gray-200 rounded-full backdrop-blur-md border border-white/10">
						Open to full-time SWE positions
					</span>
				</motion.div>

			</div>
		</section>
	);
}