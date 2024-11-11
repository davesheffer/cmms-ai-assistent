"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { useChat } from "ai/react";

import MarkdownRenderer from "./MarkdownRenderer";

export function AIAssistantChat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const lastChatLine = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (lastChatLine.current) {
			lastChatLine.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);
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
				className="fixed bottom-4 right-4 rounded-full py-3 px-5 md:py-6 md:px-10 shadow-lg z-10"
				onClick={() => setIsOpen(true)}
				aria-label="Open AI Assistant Chat">
				<span className="">AI Assistant</span>
				<MessageCircle className="h-6 w-6" />
			</Button>
			{isOpen && (
				<Card
					className="fixed bottom-20 right-4 w-96 h-[500px] md:h-[600px] shadow-xl flex flex-col"
					dir="ltr">
					<CardHeader className="flex flex-row items-center justify-between">
						<CardTitle>AI Assistant</CardTitle>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsOpen(false)}>
							<X className="h-4 w-4" />
							<span className="sr-only">Close</span>
						</Button>
					</CardHeader>
					<CardContent className="flex-grow overflow-auto">
						<div className={`justify-start mb-4`}>
							<div className={`rounded-lg p-2 max-w-[100%] bg-blue-300`}>I'm here to help you with our CMMS. Feel free to ask any questions, and I'll do my best to assist.</div>
						</div>
						<div className="space-y-4">
							{messages.map((message, index) => (
								<div
									key={index}
									className={`flex ${message.role === "user" ? "justify-start" : "justify-end"}`}>
									<div className={`rounded-lg p-2 max-w-[80%] ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}>
										<MarkdownRenderer content={message.content} />
									</div>
									<div ref={lastChatLine}></div>
								</div>
							))}
						</div>
					</CardContent>
					<CardFooter className="bg-green-100 shadow-neutral-100">
						<form
							onSubmit={handleSubmit}
							className="flex w-full items-center space-x-6 pt-4">
							<Input
								placeholder="Type your message..."
								value={input}
								onChange={handleInputChange}
								disabled={isLoading}
								className="flex-grow bg-white dark:bg-gray-800 border-none shadow-md"
							/>
							<Button
								type="submit"
								size="icon"
								className="cursor-pointer p-4 bg-green-500 text-white rounded-full"
								disabled={isLoading}>
								{isLoading ? <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div> : <Send className="h-4 w-4" />}
								<span className="sr-only">Send</span>
							</Button>
						</form>
					</CardFooter>
				</Card>
			)}
		</>
	);
}
