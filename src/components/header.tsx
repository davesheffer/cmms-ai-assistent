"use client";

import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { Wrench, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const headerRef = useRef<HTMLDivElement>(null);
	const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

	useEffect(() => {
		const handleScroll = () => {
			if (headerRef.current) {
				if (window.scrollY > 100) {
					headerRef.current.classList.add("bg-white", "shadow-md");
				} else {
					headerRef.current.classList.remove("bg-white", "shadow-md");
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/features", label: "Features" },
		{ href: "/plans", label: "Pricing" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<div
			className="fixed w-full z-10 transition-colors duration-300"
			ref={headerRef}>
			<div className="container mx-auto">
				<header className="px-4 lg:px-6 h-14 flex items-center justify-between w-full">
					<Link
						className="flex items-center justify-center gap-2"
						href="/">
						<Wrench className="h-6 w-6" />
						<span className="text-2xl font-bold">BuiltIn</span>
					</Link>
					{isMobile ? (
						<Sheet
							open={isMobileMenuOpen}
							onOpenChange={setIsMobileMenuOpen}>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon">
									<Menu className="h-6 w-6" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="w-[240px] sm:w-[300px]">
								<nav className="flex flex-col gap-4">
									{navItems.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className="text-lg font-medium hover:underline underline-offset-4"
											onClick={() => setIsMobileMenuOpen(false)}>
											{item.label}
										</Link>
									))}
								</nav>
							</SheetContent>
						</Sheet>
					) : (
						<nav className="ml-auto flex gap-4 sm:gap-6">
							{navItems.map((item) => (
								<Link
									key={item.href}
									className="text-sm font-medium hover:underline underline-offset-4"
									href={item.href}>
									{item.label}
								</Link>
							))}
						</nav>
					)}
				</header>
			</div>
		</div>
	);
}
