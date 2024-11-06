import { createOpenAI } from "@ai-sdk/openai";
import { streamText, Message } from "ai";
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: Message[] };

  const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    messages,
  });

  return result.toDataStreamResponse();
}
