"use client";

import { Wrench } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
export const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (headerRef.current) {
			window.addEventListener("scroll", () => {
				if (window.scrollY > 100) {
					headerRef.current?.classList.add("bg-white");
					headerRef.current?.classList.add("shadow-md");
				} else {
					headerRef.current?.classList.remove("bg-white");
				}
			});
		}
	}, []);
	return (
		<div
			className="fixed  w-full"
			ref={headerRef}>
			<div className="container m-auto">
				<header className="px-4 lg:px-6 h-14 flex items-center justify-between w-full">
					<Link
						className="flex items-center justify-center gap-2"
						href="/">
						<Wrench className="h-6 w-6" />
						<span className="text-2xl">בילטאין</span>
					</Link>
					<nav className="mr-auto flex gap-4 sm:gap-6">
						<Link
							className="text-sm font-medium hover:underline underline-offset-4"
							href="/">
							דף הבית
						</Link>
						<Link
							className="text-sm font-medium hover:underline underline-offset-4"
							href="/about">
							אודות
						</Link>
						<Link
							className="text-sm font-medium hover:underline underline-offset-4"
							href="#">
							תכונות
						</Link>
						<Link
							className="text-sm font-medium hover:underline underline-offset-4"
							href="/plans">
							תמחור
						</Link>
						<Link
							className="text-sm font-medium hover:underline underline-offset-4"
							href="/contact">
							צרו קשר
						</Link>
					</nav>
				</header>
			</div>
		</div>
	);
};
