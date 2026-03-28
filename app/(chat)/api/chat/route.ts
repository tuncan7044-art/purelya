 import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 60;
// Vercel Gateway'i zorla kapatıyoruz
export const runtime = 'edge'; 

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'), // Direkt Google'a gidiyor
    messages,
  });

  return result.toDataStreamResponse();
}
