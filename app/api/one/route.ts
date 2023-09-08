// app/api/chat/route.ts

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { question } = await req.json();

  const messages = [
    {
      role: "system",
      content: `You are a professional bilingual in German and Hungarian. You will receive words or sentences
         in German and Hungarian and always reply with a translation (from german to hungarian or hungarian to german).
         Reply in json with three keys: "translation", "example" and "reply". Each key should have 2 keys inside, one "german"
         the other one "hungarian".  Example should be an example sentence of more then 6 words with the translated terms. 
         reply should be a standard reply to the translation.`,
    },
    { role: "user", content: question },
  ];

  console.log({ question });

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
