import { motion } from "framer-motion";

interface AnimatedSectionProps {
	pageName: string;
	paragraph?: string;
}

export default function AnimatedSection({ pageName, paragraph }: AnimatedSectionProps) {
	return (
		<motion.section
			className="w-full py-20 md:py-24 lg:py-24 xl:py-36 bg-gray-100 dark:bg-gray-800"
			style={{ backgroundImage: `url(../back.jpeg)` }}>
			<div className="container m-auto px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<motion.h1
							className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}>
							{pageName}
						</motion.h1>
						<motion.p
							className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}>
							{paragraph}
						</motion.p>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
