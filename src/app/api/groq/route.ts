// // // // // import { NextResponse } from "next/server";

// // // // // export async function POST(req: Request) {
// // // // //   try {
// // // // //     const { prompt } = await req.json();

// // // // //     // Call Groq API
// // // // //     const response = await fetch(
// // // // //       "https://api.groq.com/openai/v1/chat/completions",
// // // // //       {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`, // Secure your key in .env.local
// // // // //           "Content-Type": "application/json",
// // // // //         },
// // // // //         body: JSON.stringify({
// // // // //           model: "llama-3.1-8b-instant",
// // // // //           messages: [{ role: "user", content: prompt }],
// // // // //           max_completion_tokens: 10, // limit to ~30 words
// // // // //         }),
// // // // //       }
// // // // //     );

// // // // //     const data = await response.json();

// // // // //     // Return text back to frontend
// // // // //     return NextResponse.json({
// // // // //       generatedText: data?.choices?.[0]?.message?.content ?? "No response",
// // // // //     });
// // // // //   } catch (error) {
// // // // //     console.error("Groq API error:", error);
// // // // //     return NextResponse.json(
// // // // //       { error: "Something went wrong" },
// // // // //       { status: 500 }
// // // // //     );
// // // // //   }
// // // // // }

// // // // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // // // export const groqApi = createApi({
// // // //   reducerPath: "groqApi",
// // // //   baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Call your local Next.js API
// // // //   endpoints: (builder) => ({
// // // //     generateHeading: builder.mutation<
// // // //       { generatedText: string },
// // // //       { prompt: string }
// // // //     >({
// // // //       query: (body) => ({
// // // //         url: "groq", // still hitting your heading API
// // // //         method: "POST",
// // // //         body,
// // // //       }),
// // // //     }),
// // // //     generateParagraph: builder.mutation<
// // // //       { generatedText: string },
// // // //       { prompt: string }
// // // //     >({
// // // //       query: (body) => ({
// // // //         url: "paragraph", // hits the server route
// // // //         method: "POST",
// // // //         body,
// // // //       }),
// // // //     }),
// // // //   }),
// // // // });

// // // // export const { useGenerateHeadingMutation, useGenerateParagraphMutation } =
// // // //   groqApi;

// // // import { NextResponse } from "next/server";

// // // export async function POST(req: Request) {
// // //   try {
// // //     const { prompt } = await req.json();

// // //     const response = await fetch(
// // //       "https://api.groq.com/openai/v1/chat/completions",
// // //       {
// // //         method: "POST",
// // //         headers: {
// // //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`, // server-side key if safe
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({
// // //           model: "llama-3.1-8b-instant",
// // //           messages: [{ role: "user", content: prompt }],
// // //           max_completion_tokens: 65536,
// // //         }),
// // //       }
// // //     );

// // //     const data = await response.json();

// // //     return NextResponse.json({
// // //       generatedText: data?.choices?.[0]?.message?.content ?? "No response",
// // //     });
// // //   } catch (error) {
// // //     console.error("Groq API error:", error);
// // //     return NextResponse.json(
// // //       { error: "Something went wrong" },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }
// // // import { NextResponse } from "next/server";
// // // import fs from "fs";
// // // import path from "path";

// // // const CACHE_DIR = path.join(process.cwd(), "cache");

// // // // ✅ Ensure cache folder exists
// // // if (!fs.existsSync(CACHE_DIR)) {
// // //   fs.mkdirSync(CACHE_DIR);
// // // }

// // // // ✅ Helper: make filename from prompt
// // // function getCacheFilePath(prompt: string) {
// // //   const safeName = prompt
// // //     .trim()
// // //     .toLowerCase()
// // //     .replace(/[^a-z0-9]+/g, "_");
// // //   return path.join(CACHE_DIR, `${safeName}.json`);
// // // }

// // // export async function POST(req: Request) {
// // //   try {
// // //     const { prompt } = await req.json();
// // //     if (!prompt || !prompt.trim()) {
// // //       return NextResponse.json(
// // //         { error: "Prompt text is required" },
// // //         { status: 400 }
// // //       );
// // //     }

// // //     const filePath = getCacheFilePath(prompt);

// // //     // 1️⃣ Check cache first
// // //     if (fs.existsSync(filePath)) {
// // //       console.log("✅ Cache hit:", filePath);
// // //       const cached = fs.readFileSync(filePath, "utf8");
// // //       return NextResponse.json(JSON.parse(cached));
// // //     }

// // //     // 2️⃣ No cache found → call Groq API
// // //     console.log("🧠 Cache miss → calling Groq API...");
// // //     const response = await fetch(
// // //       "https://api.groq.com/openai/v1/chat/completions",
// // //       {
// // //         method: "POST",
// // //         headers: {
// // //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({
// // //           model: "llama-3.1-8b-instant",
// // //           messages: [{ role: "user", content: prompt }],
// // //           max_completion_tokens: 65536,
// // //         }),
// // //       }
// // //     );

// // //     const data = await response.json();
// // //     const generatedText = data?.choices?.[0]?.message?.content ?? "No response";

// // //     const result = { generatedText };

// // //     // 3️⃣ Save to cache for next time
// // //     fs.writeFileSync(filePath, JSON.stringify(result, null, 2), "utf8");
// // //     console.log("💾 Saved to cache:", filePath);

// // //     // 4️⃣ Return to client
// // //     return NextResponse.json(result);
// // //   } catch (error) {
// // //     console.error("Groq API or cache error:", error);
// // //     return NextResponse.json(
// // //       { error: "Something went wrong" },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }
// // import { NextResponse } from "next/server";
// // import fs from "fs";
// // import path from "path";
// // import crypto from "crypto";

// // const CACHE_DIR = path.join(process.cwd(), "cache");

// // // Ensure cache folder exists
// // if (!fs.existsSync(CACHE_DIR)) {
// //   fs.mkdirSync(CACHE_DIR);
// // }

// // // Helper: make filename from prompt using a hash
// // function getCacheFilePath(prompt: string) {
// //   const hash = crypto.createHash("md5").update(prompt.trim()).digest("hex");
// //   return path.join(CACHE_DIR, `${hash}.json`);
// // }

// // export async function POST(req: Request) {
// //   try {
// //     const { prompt } = await req.json();
// //     if (!prompt || !prompt.trim()) {
// //       return NextResponse.json(
// //         { error: "Prompt text is required" },
// //         { status: 400 }
// //       );
// //     }

// //     const filePath = getCacheFilePath(prompt);

// //     // Check cache first
// //     if (fs.existsSync(filePath)) {
// //       console.log("✅ Cache hit:", filePath);
// //       const cached = fs.readFileSync(filePath, "utf8");
// //       return NextResponse.json(JSON.parse(cached));
// //     }

// //     // No cache → call Groq API
// //     console.log("🧠 Cache miss → calling Groq API...");
// //     const response = await fetch(
// //       "https://api.groq.com/openai/v1/chat/completions",
// //       {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           model: "llama-3.1-8b-instant",
// //           messages: [{ role: "user", content: prompt }],
// //           max_completion_tokens: 65536,
// //         }),
// //       }
// //     );

// //     const data = await response.json();
// //     const generatedText = data?.choices?.[0]?.message?.content ?? "No response";

// //     const result = { generatedText };

// //     // Save to cache for next time
// //     fs.writeFileSync(filePath, JSON.stringify(result, null, 2), "utf8");
// //     console.log("💾 Saved to cache:", filePath);

// //     // Return to client
// //     return NextResponse.json(result);
// //   } catch (error) {
// //     console.error("Groq API or cache error:", error);
// //     return NextResponse.json(
// //       { error: "Something went wrong" },
// //       { status: 500 }
// //     );
// //   }
// // }

// // import { NextResponse } from "next/server";
// // import fs from "fs";
// // import path from "path";
// // import crypto from "crypto";

// // const CACHE_DIR = path.join(process.cwd(), "cache");

// // // Ensure cache folder exists
// // if (!fs.existsSync(CACHE_DIR)) {
// //   fs.mkdirSync(CACHE_DIR);
// // }

// // // Normalize the prompt: trim, lowercase, collapse multiple spaces
// // function normalizePrompt(prompt: string) {
// //   return prompt
// //     .toLowerCase()
// //     .replace(/\s+/g, " ") // collapse multiple spaces/tabs/newlines
// //     .replace(/\u00A0/g, " ") // convert non-breaking spaces to normal space
// //     .trim();
// // }

// // // Helper: make filename from normalized prompt using a hash
// // function getCacheFilePath(prompt: string) {
// //   const normalized = normalizePrompt(prompt);
// //   const hash = crypto.createHash("md5").update(normalized).digest("hex");
// //   return path.join(CACHE_DIR, `${hash}.json`);
// // }

// // export async function POST(req: Request) {
// //   try {
// //     const { prompt } = await req.json();
// //     if (!prompt || !prompt.trim()) {
// //       return NextResponse.json(
// //         { error: "Prompt text is required" },
// //         { status: 400 }
// //       );
// //     }

// //     const filePath = getCacheFilePath(prompt);

// //     // Check cache first
// //     if (fs.existsSync(filePath)) {
// //       console.log("✅ Cache hit:", filePath);
// //       const cached = fs.readFileSync(filePath, "utf8");
// //       return NextResponse.json(JSON.parse(cached));
// //     }

// //     // No cache → call Groq API
// //     console.log("🧠 Cache miss → calling Groq API...");
// //     const response = await fetch(
// //       "https://api.groq.com/openai/v1/chat/completions",
// //       {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           model: "llama-3.1-8b-instant",
// //           messages: [{ role: "user", content: prompt }],
// //           max_completion_tokens: 65536,
// //         }),
// //       }
// //     );

// //     const data = await response.json();
// //     const generatedText = data?.choices?.[0]?.message?.content ?? "No response";

// //     const result = { generatedText };

// //     // Save to cache for next time
// //     fs.writeFileSync(filePath, JSON.stringify(result, null, 2), "utf8");
// //     console.log("💾 Saved to cache:", filePath);

// //     // Return to client
// //     return NextResponse.json(result);
// //   } catch (error) {
// //     console.error("Groq API or cache error:", error);
// //     return NextResponse.json(
// //       { error: "Something went wrong" },
// //       { status: 500 }
// //     );
// //   }
// // }
// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";
// import crypto from "crypto";

// const CACHE_DIR = path.join(process.cwd(), "cache");

// // Ensure cache folder exists
// if (!fs.existsSync(CACHE_DIR)) {
//   fs.mkdirSync(CACHE_DIR);
// }

// // Normalize the prompt: trim, lowercase, collapse multiple spaces
// function normalizePrompt(prompt: string) {
//   if (!prompt) return "";
//   // replace all whitespace characters (normal + non-breaking + tabs + newlines) with a single space
//   const replaced = prompt
//     .toLowerCase()
//     // replace every Unicode space, tab, newline, non-breaking, zero-width, etc. with a single normal space
//     .replace(/[\s\u00A0\u200B\u202F\u3000\uFEFF\u2000-\u200A]+/g, " ")
//     .trim();
//   return replaced;
// }

// // Helper: make filename from normalized prompt using a hash
// function getCacheFilePath(normalizedPrompt: string) {
//   const hash = crypto.createHash("md5").update(normalizedPrompt).digest("hex");
//   return path.join(CACHE_DIR, `${hash}.json`);
// }

// export async function POST(req: Request) {
//   try {
//     const { prompt: rawPrompt } = await req.json();
//     const prompt = normalizePrompt(rawPrompt); // normalize once at start

//     if (!prompt) {
//       return NextResponse.json(
//         { error: "Prompt text is required" },
//         { status: 400 }
//       );
//     }

//     const filePath = getCacheFilePath(prompt);

//     // Check cache first
//     if (fs.existsSync(filePath)) {
//       console.log("✅ Cache hit:", filePath);
//       const cached = fs.readFileSync(filePath, "utf8");
//       return NextResponse.json(JSON.parse(cached));
//     }

//     // No cache → call Groq API with normalized prompt
//     console.log("🧠 Cache miss → calling Groq API...");
//     const response = await fetch(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: "llama-3.1-8b-instant",
//           messages: [{ role: "user", content: prompt }], // use normalized prompt
//           max_completion_tokens: 65536,
//         }),
//       }
//     );

//     const data = await response.json();
//     const generatedText = data?.choices?.[0]?.message?.content ?? "No response";

//     const result = { generatedText };

//     // Save normalized prompt result to cache
//     fs.writeFileSync(filePath, JSON.stringify(result, null, 2), "utf8");
//     console.log("💾 Saved to cache:", filePath);

//     // Return to client
//     return NextResponse.json(result);
//   } catch (error) {
//     console.error("Groq API or cache error:", error);
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const CACHE_DIR = path.join(process.cwd(), "cache");

// Ensure cache folder exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR);
}

// ✅ Normalize prompt: lowercase, collapse *all* whitespace, remove non-breaking, trim once
function normalizePrompt(prompt: string): string {
  if (!prompt) return "";

  return prompt
    .toLowerCase()
    .normalize("NFKC") // handles weird Unicode too
    .replace(/[\s\u00A0\u2000-\u200F\u202F\u3000\uFEFF]+/g, " ")
    .trim();
}

// ✅ Create hash path (only accepts ALREADY normalized text)
function getCacheFilePath(normalizedPrompt: string) {
  const hash = crypto.createHash("md5").update(normalizedPrompt).digest("hex");
  return path.join(CACHE_DIR, `${hash}.json`);
}

export async function POST(req: Request) {
  try {
    const { prompt: rawPrompt } = await req.json();

    // ⚠️ Normalize ONCE and use everywhere
    const normalizedPrompt = normalizePrompt(rawPrompt);

    if (!normalizedPrompt) {
      return NextResponse.json(
        { error: "Prompt text is required" },
        { status: 400 }
      );
    }

    // ⚙️ Use normalized prompt for both cache + API
    const filePath = getCacheFilePath(normalizedPrompt);

    // 1️⃣ Check cache
    if (fs.existsSync(filePath)) {
      console.log("✅ Cache hit for:", normalizedPrompt);
      const cached = fs.readFileSync(filePath, "utf8");
      return NextResponse.json(JSON.parse(cached));
    }

    // 2️⃣ Cache miss → call API with normalized prompt
    console.log("🧠 Cache miss → calling Groq API...");
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: normalizedPrompt }],
          max_completion_tokens: 65536,
        }),
      }
    );

    const data = await response.json();
    const generatedText = data?.choices?.[0]?.message?.content ?? "No response";
    const result = { generatedText };

    // 3️⃣ Save normalized prompt result
    fs.writeFileSync(filePath, JSON.stringify(result, null, 2), "utf8");
    console.log("💾 Saved cache for:", normalizedPrompt);

    // 4️⃣ Return response
    return NextResponse.json(result);
  } catch (error) {
    console.error("Groq API or cache error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
