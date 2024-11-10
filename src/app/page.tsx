"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Wrench, ClipboardList, Bell, BarChart, Send } from "lucide-react";
import Link from "next/link";
import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const groq = createGroq({
	apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

export default function Home() {
	const [messages, setMessages] = useState([{ role: "assistant", content: "שלום! כיצד אוכל לעזור לך עם מערכת ה-CMMS שלנו היום?" }]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [currentText, setCurrentText] = useState(""); // For typewriter effect
	const chatContainerRef = useRef<HTMLDivElement>(null);

	// Typewriter effect
	useEffect(() => {
		const latestMessage = messages[messages.length - 1];
		if (latestMessage.role === "assistant" && latestMessage.content) {
			let charIndex = -1;
			const typeWriter = setInterval(() => {
				if (charIndex < latestMessage.content.length - 1) {
					setCurrentText((prev) => prev + latestMessage.content[charIndex]);
					charIndex++;
				} else {
					clearInterval(typeWriter);
				}
			});

			return () => clearInterval(typeWriter);
		}
	}, [messages]);

	// Smooth scroll effect
	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTo({
				top: chatContainerRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	}, [messages, currentText]);

	const handleSend = async () => {
		if (input.trim() && !isLoading) {
			setIsLoading(true);
			const userMessage = { role: "user", content: `"answer in hebrew with no exceptions" ${input}` };
			setMessages((prev) => [...prev, userMessage]);
			setInput("");

			try {
				const { text } = await generateText({
					model: groq("gemma2-9b-it"),
					prompt: input,
				});
				setMessages((prev: any) => [...prev, { role: "assistant", content: text }]);
				setCurrentText(""); // Reset for the next typewriter effect
			} catch (error) {
				console.error("Error calling GROQ:", error);
				setMessages((prev) => [...prev, { role: "assistant", content: "An error occurred. Please try again later." }]);
			}

			setIsLoading(false);
		}
	};

	return (
		<div
			className="flex flex-col min-h-screen"
			dir="rtl">
			<main className="flex-1">
				<section
					className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
					style={{ backgroundImage: 'url("/back.jpeg")', backgroundPosition: "center", backgroundSize: "cover" }}>
					<div className="container m-auto px-4 md:px-6">
						<div className="flex flex-col items-center space-y-16  text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">ייעל את התחזוקה שלך עם מערכת ה-CMMS שלנו</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">יעילה. אינטואיטיבית. עוצמתית. קח שליטה על פעולות התחזוקה שלך עם פתרון ה-CMMS המתקדם שלנו.</p>
							</div>
							<div className="space-x-4 flex gap-6">
								<Button className="px-10 py-6">התחל עכשיו</Button>
								<Button
									variant="outline"
									className="px-10 py-6">
									למד עוד
								</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container m-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">תכונות מרכזיות</h2>
						<div className="grid gap-6 items-center md:grid-cols-2 lg:grid-cols-2">
							<Card>
								<CardHeader>
									<CardTitle>ניהול נכסים</CardTitle>
									<ClipboardList className="w-8 h-8 mb-2" />
								</CardHeader>
								<CardContent>
									<p>עקוב ונהל את כל הנכסים שלך במקום אחד.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>מערכת הזמנות עבודה</CardTitle>
									<Wrench className="w-8 h-8 mb-2" />
								</CardHeader>
								<CardContent>
									<p>ייעל משימות תחזוקה ותהליכי עבודה.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>תחזוקה מונעת</CardTitle>
									<Bell className="w-8 h-8 mb-2" />
								</CardHeader>
								<CardContent>
									<p>תזמן ואוטומט תחזוקה שגרתית.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>דיווח ואנליטיקה</CardTitle>
									<BarChart className="w-8 h-8 mb-2" />
								</CardHeader>
								<CardContent>
									<p>קבל תובנות עם כלי דיווח עוצמתיים.</p>
								</CardContent>
							</Card>
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
