import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const CACHE_DIR = path.join(process.cwd(), "cache");

// Ensure cache folder exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR);
}

// Normalize prompt: trim, lowercase, collapse all whitespace
function normalizePrompt(prompt: string) {
  if (!prompt) return "";
  return prompt
    .toLowerCase()
    .replace(/[\s\u00A0\u200B\u202F\u3000]+/g, " ")

    .trim();
}

// Generate a unique hash filename from normalized prompt
function getCacheFilePath(normalizedPrompt: string) {
  const hash = crypto.createHash("md5").update(normalizedPrompt).digest("hex");
  return path.join(CACHE_DIR, `${hash}.json`);
}

export async function POST(req: Request) {
  try {
    const { prompt: rawPrompt } = await req.json();
    const prompt = normalizePrompt(rawPrompt); // normalize at start

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt text is required" },
        { status: 400 }
      );
    }

    const filePath = getCacheFilePath(prompt);

    // 1️⃣ Check cache first
    if (fs.existsSync(filePath)) {
      console.log("✅ Cache hit:", filePath);
      const cached = fs.readFileSync(filePath, "utf8");
      return NextResponse.json(JSON.parse(cached));
    }

    // 2️⃣ No cache → call Groq API with normalized prompt
    console.log("🧠 Cache miss → calling Groq API...");
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY_Validation}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: prompt }],
          max_completion_tokens: 65536,
        }),
      }
    );

    const data = await response.json();
    const generatedText = data?.choices?.[0]?.message?.content ?? "No response";

    const result = { generatedText };

    // 3️⃣ Save normalized prompt result to cache
    fs.writeFileSync(filePath, JSON.stringify(result, null, 2), "utf8");
    console.log("💾 Saved to cache:", filePath);

    // 4️⃣ Return to client
    return NextResponse.json(result);
  } catch (error) {
    console.error("Groq API or cache error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
