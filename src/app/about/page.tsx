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
			dir="rtl">
			<main className="flex-1">
				<AnimatedSection
					pageName="אודות מערכת ה-CMMS שלנו"
					paragraph="מערכת ה-CMMS שלנו נועדה לפשט ולייעל את ניהול התחזוקה בארגון. עם ממשק אינטואיטיבי וכלים מתקדמים לניהול ציוד, משימות ותזכורות, אנו מאפשרים לך לשמור על פעילות רציפה ומבוקרת. המערכת מעניקה גמישות בהתאמה לצרכים הייחודיים של כל ארגון, ומספקת נראות מקיפה על כל תהליכי התחזוקה, בכל זמן ומקום"
				/>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container m-auto px-4 md:px-6">
						<div className="grid gap-10 sm:grid-cols-2 md:gap-16">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">מי אנחנו</h2>
								<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">אנחנו צוות של מהנדסים ומומחי תוכנה מסורים שהתאחדו במטרה לפתור את האתגרים המורכבים של ניהול תחזוקה בתעשייה המודרנית. עם שנים של ניסיון בתחום, פיתחנו פתרון CMMS מתקדם שמשנה את הדרך בה ארגונים מנהלים את נכסיהם ופעולות התחזוקה שלהם.</p>
							</div>
							<div className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">המשימה שלנו</h2>
								<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">המשימה שלנו היא להעצים ארגונים עם כלים חכמים לניהול תחזוקה, שמגבירים את היעילות, מפחיתים זמני השבתה, ומאריכים את חיי הנכסים. אנו מאמינים שעם הטכנולוגיה הנכונה, כל ארגון יכול להשיג תפעול חלק יותר, בטוח יותר, וחסכוני יותר.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container m-auto  px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">למה לבחור בנו</h2>
						<div className="grid gap-6 items-center md:grid-cols-2 lg:grid-cols-4">
							<Card>
								<CardHeader>
									<Users className="w-8 h-8 mb-2" />
									<CardTitle>מומחיות בתחום</CardTitle>
								</CardHeader>
								<CardContent>
									<p>צוות של מומחים עם ניסיון עשיר בתעשייה ובפיתוח תוכנה.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<TrendingUp className="w-8 h-8 mb-2" />
									<CardTitle>טכנולוגיה מתקדמת</CardTitle>
								</CardHeader>
								<CardContent>
									<p>שימוש בטכנולוגיות החדישות ביותר לביצועים מיטביים ואמינות.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Shield className="w-8 h-8 mb-2" />
									<CardTitle>אבטחה ללא פשרות</CardTitle>
								</CardHeader>
								<CardContent>
									<p>הגנה מתקדמת על הנתונים שלך עם אמצעי אבטחה מהמובילים בתעשייה.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Wrench className="w-8 h-8 mb-2" />
									<CardTitle>תמיכה מקיפה</CardTitle>
								</CardHeader>
								<CardContent>
									<p>צוות תמיכה מסור שכאן כדי לעזור לך בכל שלב בדרך.</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container m-auto  px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">מוכנים להתחיל?</h2>
								<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">הצטרפו לאלפי הלקוחות המרוצים שלנו והתחילו לחוות את היתרונות של ניהול תחזוקה חכם.</p>
							</div>
							<div className="space-x-4">
								<Button size="lg">קבע הדגמה</Button>
								<Button
									variant="outline"
									size="lg">
									צור קשר
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
