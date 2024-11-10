import { createGroq } from "@ai-sdk/groq";
import { streamText } from "ai";

const groq = createGroq({
	apiKey: process.env.GROQ_API_KEY,
});

export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages: userMessages } = await req.json();

	const defaultMessage = {
		role: "system",
		content: " התמקד בנושא CMMS. ענה בעברית בצורה קצרה וממוקדת לא יותר מ20 מילים.",
	};

	const messages = [defaultMessage, ...userMessages];

	const result = await streamText({
		model: groq("gemma2-9b-it"),
		messages,
	});

	return result.toDataStreamResponse();
}
