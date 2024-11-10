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
			dir="rtl">
			<main className="flex-1">
				<AnimatedSection
					pageName="תכונות מערכת ה-CMMS שלנו"
					paragraph="גלה כיצד הפתרון שלנו יכול לשפר את יעילות התחזוקה ולהפחית זמני השבתה"
				/>

				<section
					id="asset-management"
					className="w-full py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">ניהול נכסים</h2>
						<Card>
							<CardHeader>
								<CardTitle>מעקב מקיף אחר נכסים</CardTitle>
								<ClipboardList className="w-8 h-8 mb-2" />
							</CardHeader>
							<CardContent>
								<p>המערכת שלנו מאפשרת לך לנהל ולעקוב אחר כל הנכסים שלך במקום אחד מרכזי. תכונות כוללות:</p>
								<ul className="list-disc list-inside mt-4 space-y-2">
									<li>ניהול מלאי מפורט</li>
									<li>מעקב אחר מיקום נכסים</li>
									<li>היסטוריית תחזוקה לכל נכס</li>
									<li>מעקב אחר אחריות וחוזי שירות</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>
				<section
					id="work-orders"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">מערכת הזמנות עבודה</h2>
						<Card>
							<CardHeader>
								<CardTitle>ניהול משימות תחזוקה יעיל</CardTitle>
								<Wrench className="w-8 h-8 mb-2" />
							</CardHeader>
							<CardContent>
								<p>מערכת הזמנות העבודה שלנו מייעלת את תהליכי התחזוקה שלך:</p>
								<ul className="list-disc list-inside mt-4 space-y-2">
									<li>יצירה וניהול קלים של הזמנות עבודה</li>
									<li>הקצאת משימות אוטומטית לצוותים או טכנאים</li>
									<li>מעקב אחר סטטוס בזמן אמת</li>
									<li>תיעוד של חלקי חילוף ועבודה</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>
				<section
					id="preventive-maintenance"
					className="w-full py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">תחזוקה מונעת</h2>
						<Card>
							<CardHeader>
								<CardTitle>תזמון ואוטומציה של תחזוקה</CardTitle>
								<Bell className="w-8 h-8 mb-2" />
							</CardHeader>
							<CardContent>
								<p>מערכת התחזוקה המונעת שלנו עוזרת לך למנוע תקלות לפני שהן מתרחשות:</p>
								<ul className="list-disc list-inside mt-4 space-y-2">
									<li>תזמון אוטומטי של משימות תחזוקה שגרתיות</li>
									<li>התראות ותזכורות לפעילויות תחזוקה קרובות</li>
									<li>מעקב אחר מחזורי חיים של ציוד</li>
									<li>ניתוח מגמות לזיהוי בעיות פוטנציאליות</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>
				<section
					id="reporting"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">דיווח ואנליטיקה</h2>
						<Card>
							<CardHeader>
								<CardTitle>תובנות עסקיות מעמיקות</CardTitle>
								<BarChart className="w-8 h-8 mb-2" />
							</CardHeader>
							<CardContent>
								<p>כלי הדיווח והאנליטיקה שלנו מספקים תובנות חיוניות לביצועי התחזוקה שלך:</p>
								<ul className="list-disc list-inside mt-4 space-y-2">
									<li>דוחות מותאמים אישית וניתנים להתאמה</li>
									<li>לוחות מחוונים בזמן אמת</li>
									<li>ניתוח מגמות וחיזוי</li>
									<li>מדדי KPI לביצועי תחזוקה</li>
								</ul>
							</CardContent>
						</Card>
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
