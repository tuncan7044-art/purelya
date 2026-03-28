 import { GoogleGenerativeAI } from "@google/generative-ai";
import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  });

  const result = await streamText({
    model: google("gemini-1.5-flash"),
    messages,
  });

  return result.toDataStreamResponse();
}
