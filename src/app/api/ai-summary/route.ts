import { GoogleGenAI } from "@google/genai";
import { dummyData } from "@/data/dummy";
import { NextRequest } from "next/server";

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const prompt = `
You are an advanced Google Search summarizer. Given the following structured data about a user, generate a concise, well-written summary of the user's background, experience, skills, projects, education, and interests. The summary should read naturally as a single paragraph, without any formatting, lists, or bullet points. Do not include headings or special characters. Ensure the summary is informative and engaging, capturing the essence of the user's professional and personal profile. The summary must be greater than 150 words and less than 200 words. Use only the information provided in the data below and do not make up any details. Write in a neutral, third-person tone suitable for a Google search result.


${JSON.stringify(dummyData, null, 2)}
    `;

    const result = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const text =
      result.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No summary generated.";

    return new Response(JSON.stringify({ summary: text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("AI Summary Error:", err);
    return new Response(
      JSON.stringify({ summary: "Error generating AI summary." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
