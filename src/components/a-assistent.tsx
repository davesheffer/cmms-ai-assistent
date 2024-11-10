"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";
import MarkdownRenderer from "./MarkdownRenderer";

const groq = createGroq({
	apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

export function AIAssistantChat() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([{ role: "assistant", content: "שלום! כיצד אוכל לעזור לך היום?" }]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSend = async () => {
		if (input.trim() && !isLoading) {
			setIsLoading(true);
			const userMessage = { role: "user", content: input };
			setMessages((prev) => [...prev, userMessage]);
			setInput("");

			try {
				const { text } = await generateText({
					model: groq("gemma2-9b-it"),
					prompt: input,
				});
				const assistantMessage = { role: "assistant", content: text };
				setMessages((prev) => [...prev, assistantMessage]);
			} catch (error) {
				console.error("שגיאה בקריאה ל-Groq:", error);
				setMessages((prev) => [...prev, { role: "assistant", content: "אני מתנצל, אך נתקלתי בשגיאה. אנא נסה שוב מאוחר יותר." }]);
			}

			setIsLoading(false);
		}
	};

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, []);

	return (
		<>
			<Button
				className="fixed bottom-4 right-4 rounded-full py-6 px-10  shadow-lg "
				onClick={() => setIsOpen(true)}
				aria-label="פתח צ'אט עם עוזר AI">
				עוזר AI
				<MessageCircle className="h-6 w-6" />
			</Button>
			{isOpen && (
				<Card
					className="fixed bottom-20 right-4 w-96  h-[600px] shadow-xl flex flex-col"
					dir="rtl">
					<CardHeader className="flex flex-row items-center justify-between">
						<CardTitle>עוזר AI</CardTitle>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsOpen(false)}>
							<X className="h-4 w-4" />
							<span className="sr-only">סגור</span>
						</Button>
					</CardHeader>
					<CardContent className="flex-grow overflow-auto">
						<div className="space-y-4">
							{messages.map((message, index) => (
								<div
									key={index}
									className={`flex ${message.role === "user" ? "justify-start" : "justify-end"}`}>
									<div className={`rounded-lg p-2 max-w-[80%] ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}>
										<MarkdownRenderer content={message.content} />
									</div>
								</div>
							))}
						</div>
					</CardContent>
					<CardFooter>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								handleSend();
							}}
							className="flex w-full items-center space-x-2">
							<Input
								placeholder="הקלד את הודעתך..."
								value={input}
								onChange={(e) => setInput(e.target.value)}
								disabled={isLoading}
								className="flex-grow"
							/>
							<Button
								type="submit"
								size="icon"
								disabled={isLoading}>
								{isLoading ? <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div> : <Send className="h-4 w-4" />}
								<span className="sr-only">שלח</span>
							</Button>
						</form>
					</CardFooter>
				</Card>
			)}
		</>
	);
}
