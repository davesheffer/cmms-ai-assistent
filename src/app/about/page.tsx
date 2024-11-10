"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Users, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

export default function About() {
	return (
		<div
			className="flex flex-col min-h-screen"
			dir="ltr">
			<main className="flex-1">
				<AnimatedSection
					pageName="About Our CMMS"
					paragraph="Our CMMS is designed to simplify and streamline maintenance management in organizations. With an intuitive interface and advanced tools for managing equipment, tasks, and reminders, we enable you to maintain smooth and controlled operations. The system offers flexibility to adapt to the unique needs of any organization and provides comprehensive visibility into all maintenance processes, anytime and anywhere."
				/>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container m-auto px-4 md:px-6">
						<div className="grid gap-10 sm:grid-cols-2 md:gap-16">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Who We Are</h2>
								<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									We are a team of dedicated engineers and software experts united with the mission to tackle the complex challenges of maintenance management in modern industries. With years of experience, we have developed an advanced CMMS solution that transforms how organizations manage their assets and maintenance activities.
								</p>
							</div>
							<div className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
								<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Our mission is to empower organizations with smart maintenance management tools that increase efficiency, reduce downtime, and extend asset lifespans. We believe that with the right technology, any organization can achieve smoother, safer, and more cost-effective operations.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container m-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Us</h2>
						<div className="grid gap-6 items-center md:grid-cols-2 lg:grid-cols-4">
							<Card>
								<CardHeader>
									<Users className="w-8 h-8 mb-2" />
									<CardTitle>Industry Expertise</CardTitle>
								</CardHeader>
								<CardContent>
									<p>A team of experts with extensive experience in industry and software development.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<TrendingUp className="w-8 h-8 mb-2" />
									<CardTitle>Advanced Technology</CardTitle>
								</CardHeader>
								<CardContent>
									<p>Utilizing the latest technologies for optimal performance and reliability.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Shield className="w-8 h-8 mb-2" />
									<CardTitle>Uncompromised Security</CardTitle>
								</CardHeader>
								<CardContent>
									<p>Advanced data protection with industry-leading security measures.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Wrench className="w-8 h-8 mb-2" />
									<CardTitle>Comprehensive Support</CardTitle>
								</CardHeader>
								<CardContent>
									<p>A dedicated support team ready to assist you every step of the way.</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container m-auto px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
								<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Join thousands of our satisfied customers and start experiencing the benefits of smart maintenance management.</p>
							</div>
							<div className="space-x-4">
								<Button size="lg">Schedule a Demo</Button>
								<Button
									variant="outline"
									size="lg">
									Contact Us
								</Button>
							</div>
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
