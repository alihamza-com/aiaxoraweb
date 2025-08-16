import { NextResponse, type NextRequest } from "next/server";
import { buildSystemPrompt } from "@/lib/ai";

// ✅ Securely load from environment variables
const API_KEY = process.env.GROQ_API_KEY!;
const API_URL = "https://api.groq.com/openai/v1/chat/completions";
const AI_MODEL = process.env.AI_MODEL || "llama3-8b-8192";

export async function POST(req: NextRequest) {
  try {
    console.log(req)
    const { prompt, type = "chatbot", temperature = 0.7, max_tokens = 800 } =
      await req.json();

    // 🔹 Validate required fields
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }
    if (!API_KEY) {
      return NextResponse.json({ error: "Missing GROQ_API_KEY" }, { status: 500 });
    }

    // 🔹 Build context-specific system prompt
    const systemPrompt = buildSystemPrompt(type);

    // 🔹 Call Groq API
    const upstream = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        temperature,
        max_tokens,
        top_p: 1,
        stream: false,
      }),
    });

    if (!upstream.ok) {
      const errorText = await upstream.text();
      console.error("AI upstream error:", upstream.status, errorText);
      return NextResponse.json(
        { error: "Groq API returned an error" },
        { status: upstream.status }
      );
    }

    const data = await upstream.json();
    const content =
      data?.choices?.[0]?.message?.content ||
      data?.choices?.[0]?.text ||
      "No content returned.";

    return NextResponse.json({
      content,
      model: AI_MODEL,
      provider: "Groq",
    });
  } catch (err) {
    console.error("AI Generation Error:", err);
    return NextResponse.json(
      { error: "Failed to generate AI content" },
      { status: 500 }
    );
  }
}
