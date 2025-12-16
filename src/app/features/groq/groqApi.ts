import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groqApi = createApi({
  reducerPath: "groqApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.groq.com/openai/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`
      );
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    generateText: builder.mutation({
      query: (prompt: string) => ({
        url: "/chat/completions",
        method: "POST",
        body: {
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: prompt }],
          max_completion_tokens: 1660,
          n: 3,
        },
      }),
    }),
  }),
});

export const { useGenerateTextMutation } = groqApi;
