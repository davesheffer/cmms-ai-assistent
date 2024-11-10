// components/MarkdownRenderer.js
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Choose a theme or replace with your own CSS

export default function MarkdownRenderer({ content }: any) {
	return (
		<ReactMarkdown
			children={content}
			rehypePlugins={[rehypeHighlight]}
			className="prose prose-lg mx-auto dark:prose-dark" // Tailwind CSS classes for styling
		/>
	);
}
