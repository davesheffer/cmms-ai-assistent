"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendMail } from "@/lib/send-mail";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const contactFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(1, "Subject is required"),
	message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactUs() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		const mailText = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;
		const response = await sendMail({
			email: data.email,
			subject: data.subject,
			text: mailText,
		});
		if (response?.messageId) {
			toast.success("Message sent successfully.");
			reset(); // Reset form fields after successful submission
		} else {
			toast.error("Failed to send message.");
		}
	};

	return (
		<div
			className="flex flex-col min-h-screen"
			dir="ltr">
			<main className="flex-1">
				<AnimatedSection
					pageName="Contact Us"
					paragraph="If you have questions, need technical support, or want more information about our maintenance management system, we’re here to help. Please fill out the form below or call us, and one of our representatives will get back to you as soon as possible."
				/>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container m-auto px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2">
							<Card>
								<CardHeader>
									<CardTitle>Send Us a Message</CardTitle>
									<CardDescription>Fill out the form, and we'll get back to you as soon as possible.</CardDescription>
								</CardHeader>
								<CardContent>
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className="grid gap-4">
											<div className="grid gap-2">
												<Label htmlFor="name">Full Name</Label>
												<Input
													id="name"
													placeholder="John Doe"
													{...register("name")}
												/>
												<p className="text-red-500 text-sm">{errors.name?.message}</p>
											</div>
											<div className="grid gap-2">
												<Label htmlFor="email">Email Address</Label>
												<Input
													id="email"
													type="email"
													placeholder="you@example.com"
													{...register("email")}
												/>
												<p className="text-red-500 text-sm">{errors.email?.message}</p>
											</div>
											<div className="grid gap-2">
												<Label htmlFor="subject">Subject</Label>
												<Input
													id="subject"
													placeholder="How can we help?"
													{...register("subject")}
												/>
												<p className="text-red-500 text-sm">{errors.subject?.message}</p>
											</div>
											<div className="grid gap-2">
												<Label htmlFor="message">Message</Label>
												<Textarea
													id="message"
													placeholder="Provide your question or request here"
													{...register("message")}
												/>
												<p className="text-red-500 text-sm">{errors.message?.message}</p>
											</div>
										</div>
										<Button
											className="mt-4 w-full"
											type="submit">
											Send Message
										</Button>
									</form>
								</CardContent>
							</Card>
							<div className="space-y-4">
								<Card>
									<CardHeader>
										<CardTitle>Contact Information</CardTitle>
										<CardDescription>Additional ways to reach us</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div className="flex items-center">
												<Phone className="mr-2 h-4 w-4" />
												<span>072-123-4567</span>
											</div>
											<div className="flex items-center">
												<Mail className="mr-2 h-4 w-4" />
												<span>info@cmms-example.com</span>
											</div>
											<div className="flex items-center">
												<MapPin className="mr-2 h-4 w-4" />
												<span>123 Herzl St, Tel Aviv</span>
											</div>
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Working Hours</CardTitle>
									</CardHeader>
									<CardContent>
										<p>Sunday - Thursday: 9:00 - 18:00</p>
										<p>Friday: 9:00 - 13:00</p>
										<p>Saturday: Closed</p>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container m-auto px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
								<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">Our expert team is here to answer any questions and help you get the most out of your CMMS system—because success starts with the right support.</p>
							</div>
							<div className="space-x-4">
								<Button size="lg">Schedule a Demo</Button>
								<Button
									variant="outline"
									size="lg">
									Start Free Trial
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
