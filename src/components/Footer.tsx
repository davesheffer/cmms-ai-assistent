import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
			<p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CMMS System. All rights reserved.</p>
			<nav className="sm:mr-auto flex gap-4 sm:gap-6">
				<Link
					className="text-xs hover:underline underline-offset-4"
					href="/terms">
					Terms of Service
				</Link>
				<Link
					className="text-xs hover:underline underline-offset-4"
					href="/privacy">
					Privacy Policy
				</Link>
			</nav>
		</footer>
	);
}
