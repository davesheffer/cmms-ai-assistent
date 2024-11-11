"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wrench, ClipboardList, Bell, BarChart, Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div
			className="flex flex-col min-h-screen"
			dir="ltr">
			<main className="flex-1">
				<section
					className="w-full py-24 md:py-24 lg:py-32 xl:py-48"
					style={{ backgroundImage: 'url("/back.jpeg")', backgroundPosition: "center", backgroundSize: "cover" }}>
					<div className="container m-auto px-4 md:px-6">
						<div className="flex flex-col items-center space-y-16 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Optimize Your Maintenance with Our CMMS</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">Efficient. Intuitive. Powerful. Take control of your maintenance operations with our advanced CMMS solution.</p>
							</div>
							<div className="space-x-4 flex gap-6">
								<Link
									href="/contact"
									passHref>
									<Button className="px-10 py-6">Get Started</Button>
								</Link>
								<Link
									href="/about"
									passHref>
									<Button
										variant="outline"
										className="px-10 py-6">
										Learn More
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container m-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
						<div className="grid gap-6 items-center md:grid-cols-2 lg:grid-cols-2">
							<Card>
								<CardHeader>
									<CardTitle>Asset Management</CardTitle>
									<ClipboardList className="w-8 h-8 mb-2" />
								</CardHeader>
								<CardContent>
									<p>Track and manage all your assets in one place.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Work Order System</CardTitle>
									<Wrench className="w-8 h-8 mb-2" />
								</CardHeader>
								<CardContent>
									<p>Streamline maintenance tasks and workflows.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Preventive Maintenance</CardTitle>
									<Bell className="w-8 h-8 mb-2" />
								</CardHeader>
								<CardContent>
									<p>Schedule and automate routine maintenance.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Reporting & Analytics</CardTitle>
									<BarChart className="w-8 h-8 mb-2" />
								</CardHeader>
								<CardContent>
									<p>Gain insights with powerful reporting tools.</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CMMS System. All rights reserved.</p>
				<nav className="sm:mr-auto flex gap-4 sm:gap-6">
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#">
						Terms of Service
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#">
						Privacy Policy
					</Link>
				</nav>
			</footer>
		</div>
	);
}
