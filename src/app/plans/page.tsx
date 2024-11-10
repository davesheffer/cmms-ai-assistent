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
			dir="rtl">
			<main className="flex-1">
				<AnimatedSection
					pageName="התוכניות והמחירים שלנו"
					paragraph="בחר את התוכנית המותאמת לך, וקבל מקסימום ערך ותמיכה."
				/>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container m-auto  px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-3">
							<Card>
								<CardHeader>
									<CardTitle>בסיסי</CardTitle>
									<CardDescription>לעסקים קטנים ובינוניים</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="text-4xl font-bold">₪199</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">לחודש</div>
									<ul className="mt-4 space-y-2">
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											עד 500 נכסים
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											ניהול הזמנות עבודה
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											תחזוקה מונעת בסיסית
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											דוחות סטנדרטיים
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Button className="w-full">בחר תוכנית</Button>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>מקצועי</CardTitle>
									<CardDescription>לארגונים גדולים</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="text-4xl font-bold">₪499</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">לחודש</div>
									<ul className="mt-4 space-y-2">
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											נכסים ללא הגבלה
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											ניהול הזמנות עבודה מתקדם
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											תחזוקה מונעת מתקדמת
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											דוחות מותאמים אישית
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											אינטגרציה עם מערכות ERP
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Button className="w-full">בחר תוכנית</Button>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>ארגוני</CardTitle>
									<CardDescription>לתאגידים גדולים ורב-אתריים</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="text-4xl font-bold">התאמה אישית</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">צור קשר לקבלת הצעת מחיר</div>
									<ul className="mt-4 space-y-2">
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											כל התכונות של התוכנית המקצועית
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											פתרונות מותאמים אישית
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											תמיכה 24/7
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											מנהל חשבון ייעודי
										</li>
										<li className="flex items-center">
											<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
											הדרכה והטמעה מקיפה
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Button className="w-full">צור קשר</Button>
								</CardFooter>
							</Card>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container m-auto px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">עדיין לא בטוח?</h2>
								<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">צוות המומחים שלנו ישמח לעזור לך לבחור את התוכנית המתאימה ביותר לצרכי הארגון שלך.</p>
							</div>
							<div className="space-x-4">
								<Button size="lg">תאם שיחת ייעוץ</Button>
								<Button
									variant="outline"
									size="lg">
									צפה בהדגמה
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
