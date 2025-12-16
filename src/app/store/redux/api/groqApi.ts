// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const groqApi = createApi({
//   reducerPath: "groqApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
//   endpoints: (builder) => ({
//     generatePrompt: builder.mutation<
//       { generatedText: string },
//       { prompt: string }
//     >({
//       query: (body) => ({
//         url: "groq",
//         method: "POST",
//         body,
//       }),
//     }),

//     generateParagraph: builder.mutation<
//       { generatedHeading: string },
//       { text: string }
//     >({
//       query: (body) => ({
//         url: "paragraph",
//         method: "POST",
//         body,
//       }),
//     }),
//   }),
// });

// export const { useGeneratePromptMutation, useGenerateParagraphMutation } =
//   groqApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groqApi = createApi({
  reducerPath: "groqApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // call local server route
  endpoints: (builder) => ({
    generateHeading: builder.mutation<
      { generatedText: string },
      { prompt: string }
    >({
      query: (body) => ({ url: "groq", method: "POST", body }),
    }),
    generateParagraph: builder.mutation<
      { generatedText: string },
      { prompt: string }
    >({
      query: (body) => ({ url: "paragraph", method: "POST", body }),
    }),

    generateSubHeading: builder.mutation<
      { generatedText: string },
      { prompt: string }
    >({
      query: (body) => ({ url: "subHeading", method: "POST", body }),
    }),

    generateSubParagraph: builder.mutation<
      { generatedText: string },
      { prompt: string }
    >({
      query: (body) => ({ url: "subParagraph", method: "POST", body }),
    }),

    generateTable: builder.mutation<
      { generatedText: string },
      { prompt: string }
    >({
      query: (body) => ({ url: "table", method: "POST", body }),
    }),

    generateValidation: builder.mutation<
      { generatedText: string },
      { prompt: string }
    >({
      query: (body) => ({ url: "validation", method: "POST", body }),
    }),
  }),
});

export const {
  useGenerateHeadingMutation,
  useGenerateParagraphMutation,
  useGenerateSubHeadingMutation,
  useGenerateSubParagraphMutation,
  useGenerateTableMutation,
  useGenerateValidationMutation,
} = groqApi;
