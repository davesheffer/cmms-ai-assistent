"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bell, ClipboardList, Home, Wrench } from "lucide-react";
import Link from "next/link";

export default function Features() {
	return (
		<div
			className="flex flex-col min-h-screen"
			dir="ltr">
			<main className="flex-1">
				<AnimatedSection
					pageName="Features of Our CMMS"
					paragraph="Discover how our solution can enhance maintenance efficiency and reduce downtime."
				/>

				<section
					id="asset-management"
					className="w-full py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Asset Management</h2>
						<Card>
							<CardHeader>
								<CardTitle>Comprehensive Asset Tracking</CardTitle>
								<ClipboardList className="w-8 h-8 mb-2" />
							</CardHeader>
							<CardContent>
								<p>Our system allows you to manage and track all your assets in one central place. Features include:</p>
								<ul className="list-disc list-inside mt-4 space-y-2">
									<li>Detailed inventory management</li>
									<li>Asset location tracking</li>
									<li>Maintenance history for each asset</li>
									<li>Warranty and service contract tracking</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>
				<section
					id="work-orders"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Work Order System</h2>
						<Card>
							<CardHeader>
								<CardTitle>Efficient Maintenance Task Management</CardTitle>
								<Wrench className="w-8 h-8 mb-2" />
							</CardHeader>
							<CardContent>
								<p>Our work order system streamlines your maintenance processes:</p>
								<ul className="list-disc list-inside mt-4 space-y-2">
									<li>Easy creation and management of work orders</li>
									<li>Automatic task assignment to teams or technicians</li>
									<li>Real-time status tracking</li>
									<li>Documentation of spare parts and labor</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>
				<section
					id="preventive-maintenance"
					className="w-full py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Preventive Maintenance</h2>
						<Card>
							<CardHeader>
								<CardTitle>Maintenance Scheduling and Automation</CardTitle>
								<Bell className="w-8 h-8 mb-2" />
							</CardHeader>
							<CardContent>
								<p>Our preventive maintenance system helps you prevent breakdowns before they occur:</p>
								<ul className="list-disc list-inside mt-4 space-y-2">
									<li>Automatic scheduling of routine maintenance tasks</li>
									<li>Alerts and reminders for upcoming maintenance activities</li>
									<li>Equipment lifecycle tracking</li>
									<li>Trend analysis to identify potential issues</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>
				<section
					id="reporting"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Reporting & Analytics</h2>
						<Card>
							<CardHeader>
								<CardTitle>In-depth Business Insights</CardTitle>
								<BarChart className="w-8 h-8 mb-2" />
							</CardHeader>
							<CardContent>
								<p>Our reporting and analytics tools provide essential insights into your maintenance performance:</p>
								<ul className="list-disc list-inside mt-4 space-y-2">
									<li>Customizable reports</li>
									<li>Real-time dashboards</li>
									<li>Trend analysis and forecasting</li>
									<li>Maintenance performance KPIs</li>
								</ul>
							</CardContent>
						</Card>
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
