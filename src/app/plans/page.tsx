"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Wrench } from "lucide-react";
import Link from "next/link";

export default function Component() {
	return (
		<div
			className="flex flex-col min-h-screen"
			dir="ltr">
			<main className="flex-1">
				<AnimatedSection
					pageName="Our Plans and Pricing"
					paragraph="Choose the plan that's right for you and get maximum value and support."
				/>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container m-auto px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-3">
							<Card>
								<CardHeader>
									<CardTitle>Basic</CardTitle>
									<CardDescription>For small to medium businesses</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="text-4xl font-bold">$199</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">per month</div>
									<ul className="mt-4 space-y-2">
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Up to 500 assets
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Work order management
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Basic preventive maintenance
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Standard reports
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Link
										href="/contact"
										passHref>
										<Button className="w-full">Choose Plan</Button>
									</Link>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Professional</CardTitle>
									<CardDescription>For large organizations</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="text-4xl font-bold">$499</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">per month</div>
									<ul className="mt-4 space-y-2">
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Unlimited assets
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Advanced work order management
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Advanced preventive maintenance
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Custom reports
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											ERP integration
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Link
										href="/contact"
										passHref>
										<Button className="w-full">Choose Plan</Button>
									</Link>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Enterprise</CardTitle>
									<CardDescription>For large, multi-site corporations</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="text-4xl font-bold">Custom Pricing</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">Contact us for a quote</div>
									<ul className="mt-4 space-y-2">
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											All features of the Professional plan
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Custom solutions
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											24/7 support
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Dedicated account manager
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											Comprehensive training and implementation
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Link
										href="/contact"
										passHref>
										<Button className="w-full">Contact Us</Button>
									</Link>
								</CardFooter>
							</Card>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container m-auto px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Still Unsure?</h2>
								<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Our team of experts is happy to help you choose the best plan for your organization's needs.</p>
							</div>
							<div className="space-x-4">
								<Link
									href="/contact"
									passHref>
									<Button size="lg">Schedule a Consultation</Button>
								</Link>
								<Link
									href="/contact"
									passHref>
									<Button
										variant="outline"
										size="lg">
										View Demo
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
