"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Wrench, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function Component() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the form data to your backend
		console.log("Form submitted:", formData);
		// Reset form after submission
		setFormData({ name: "", email: "", subject: "", message: "" });
		// You might want to show a success message to the user here
	};

	return (
		<div
			className="flex flex-col min-h-screen"
			dir="rtl">
			<main className="flex-1">
				<AnimatedSection
					pageName="צרו קשר"
					paragraph="אם יש לכם שאלות, צריכים תמיכה טכנית, או מעוניינים במידע נוסף על מערכת ניהול התחזוקה שלנו, נשמח לעמוד לשירותכם. אנא מלאו את הטופס למטה או התקשרו אלינו, ואחד מנציגינו יחזור אליכם בהקדם האפשרי."
				/>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container m-auto  px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2">
							<Card>
								<CardHeader>
									<CardTitle>שלח לנו הודעה</CardTitle>
									<CardDescription>מלא את הטופס ונחזור אליך בהקדם האפשרי.</CardDescription>
								</CardHeader>
								<CardContent>
									<form onSubmit={handleSubmit}>
										<div className="grid gap-4">
											<div className="grid gap-2">
												<Label htmlFor="name">שם מלא</Label>
												<Input
													id="name"
													name="name"
													placeholder="ישראל ישראלי"
													value={formData.name}
													onChange={handleInputChange}
													required
												/>
											</div>
											<div className="grid gap-2">
												<Label htmlFor="email">כתובת אימייל</Label>
												<Input
													id="email"
													name="email"
													placeholder="you@example.com"
													type="email"
													value={formData.email}
													onChange={handleInputChange}
													required
												/>
											</div>
											<div className="grid gap-2">
												<Label htmlFor="subject">נושא</Label>
												<Input
													id="subject"
													name="subject"
													placeholder="במה נוכל לעזור?"
													value={formData.subject}
													onChange={handleInputChange}
													required
												/>
											</div>
											<div className="grid gap-2">
												<Label htmlFor="message">הודעה</Label>
												<Textarea
													id="message"
													name="message"
													placeholder="פרט את שאלתך או בקשתך כאן"
													value={formData.message}
													onChange={handleInputChange}
													required
												/>
											</div>
										</div>
										<Button
											className="mt-4 w-full"
											type="submit">
											שלח הודעה
										</Button>
									</form>
								</CardContent>
							</Card>
							<div className="space-y-4">
								<Card>
									<CardHeader>
										<CardTitle>פרטי התקשרות</CardTitle>
										<CardDescription>דרכים נוספות ליצירת קשר איתנו</CardDescription>
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
												<span>רחוב הרצל 123, תל אביב</span>
											</div>
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>שעות פעילות</CardTitle>
									</CardHeader>
									<CardContent>
										<p>ימים א'-ה': 9:00 - 18:00</p>
										<p>יום ו': 9:00 - 13:00</p>
										<p>שבת: סגור</p>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container m-auto  px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">מוכנים להתחיל?</h2>
								<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">הצוות המומחה שלנו כאן כדי לענות על כל שאלה ולעזור לך להפיק את המקסימום ממערכת ה-CMMS – כי הצלחה מתחילה בתמיכה נכונה.</p>
							</div>
							<div className="space-x-4">
								<Button size="lg">קבע הדגמה</Button>
								<Button
									variant="outline"
									size="lg">
									התחל ניסיון בחינם
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">© 2024 מערכת CMMS. כל הזכויות שמורות.</p>
				<nav className="sm:mr-auto flex gap-4 sm:gap-6">
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#">
						תנאי שימוש
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#">
						פרטיות
					</Link>
				</nav>
			</footer>
		</div>
	);
}
