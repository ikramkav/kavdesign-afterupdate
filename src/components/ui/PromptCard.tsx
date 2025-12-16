// // "use client";
// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import LoadingOverlay from "./utils/LoadingOverlay";
// // import { setPromptData } from "@/app/store/redux/promptSlice";
// // import { useDispatch } from "react-redux";
// // import {
// //   useGenerateHeadingMutation,
// //   useGenerateParagraphMutation,
// //   useGenerateSubHeadingMutation,
// //   useGenerateSubParagraphMutation,
// // } from "@/app/store/redux/api/groqApi";
// // import { Sparkles } from "lucide-react"; // ✨ optional small icon

// // export interface Option {
// //   label: string;
// //   highlight?: boolean;
// //   route?: string;
// // }

// // interface PromptCardProps {
// //   placeholder?: string;
// //   options?: Option[];
// //   onSelect?: (data: {
// //     heading: string;
// //     subHeading: string;
// //     paragraph: string;
// //     option: Option;
// //   }) => void;
// // }

// // const PromptCard: React.FC<PromptCardProps> = ({
// //   placeholder = "I want to optimize my distribution journey..",
// //   options = [{ label: "Launch Idea", highlight: true, route: "/mvp" }],
// //   onSelect,
// // }) => {
// //   const [text, setText] = useState("");
// //   const [submitted, setSubmitted] = useState(false);
// //   const [navigating, setNavigating] = useState(false);

// //   const router = useRouter();
// //   const dispatch = useDispatch();

// //   const [generateHeading, { isLoading }] = useGenerateHeadingMutation();
// //   const [generateParagraph] = useGenerateParagraphMutation();
// //   const [generateSubHeading] = useGenerateSubHeadingMutation();
// //   const [generateSubParagraph] = useGenerateSubParagraphMutation();

// //   const handleSelect = async (option: Option) => {
// //     if (!text.trim()) return;
// //     setSubmitted(true);
// //     setNavigating(true);

// //     try {
// //       const headingData = await generateHeading({
// //         prompt: `Make an essay heading for "${text}" using a maximum of 65 characters.`,
// //       }).unwrap();
// //       const generatedHeading = headingData.generatedText
// //         ?.replace(/^"+|"+$/g, "")
// //         .replace(/\n/g, " ")
// //         .trim();

// //       const paragraphData = await generateParagraph({
// //         prompt: `Write a main idea for "${text}" using max 30 words`,
// //       }).unwrap();
// //       const generatedParagraph = paragraphData.generatedText
// //         ?.replace(/^"+|"+$/g, "")
// //         .replace(/\n/g, " ")
// //         .trim()
// //         .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

// //       const subHeadingData = await generateSubHeading({
// //         prompt: `Make an essay sub-heading for "${text}" using a maximum of 45 characters.`,
// //       }).unwrap();
// //       const generatedSubHeading = subHeadingData.generatedText
// //         ?.replace(/^"+|"+$/g, "")
// //         .replace(/\n/g, " ")
// //         .trim()
// //         .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

// //       const subParagraphData = await generateSubParagraph({
// //         prompt: `Write a supporting idea for "${text}" using max 30 words`,
// //       }).unwrap();
// //       const generatedSubParagraph = subParagraphData.generatedText
// //         ?.replace(/^"+|"+$/g, "")
// //         .replace(/\n/g, " ")
// //         .trim()
// //         .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

// //       dispatch(
// //         setPromptData({
// //           promptText: text,
// //           result: "",
// //           heading: generatedHeading,
// //           paragraph: generatedParagraph,
// //           subHeading: generatedSubHeading,
// //         })
// //       );

// //       onSelect?.({
// //         heading: generatedHeading,
// //         paragraph: generatedParagraph,
// //         subHeading: generatedSubHeading,
// //         option,
// //       });

// //       if (option.route) router.push(option.route);
// //     } catch (error) {
// //       console.error("API error:", error);
// //       setSubmitted(false);
// //     } finally {
// //       setNavigating(false);
// //     }
// //   };

// //   if (submitted) return <LoadingOverlay />;

// //   return (
// //     <div
// //       className="w-[620px] h-[64px] mx-auto flex items-center justify-between rounded-full relative transition-all px-3"
// //       style={{
// //         borderRadius: "999px",
// //         border: "2px solid rgba(193, 193, 193, 0.60)",
// //         background:
// //           "radial-gradient(193.33% 58.29% at 50% 50%, rgba(255, 255, 255, 0) 45%, rgba(255, 255, 255, 0.12) 100%), " +
// //           "linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), " +
// //           "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(139, 206, 255, 0.22) 100%)",
// //         boxShadow:
// //           "0 7px 15px -12px rgba(176, 194, 250, 0.20), 0 4px 10.3px 0 rgba(0, 0, 0, 0.03), 0 17px 25.8px -12px rgba(0, 0, 0, 0.06), 0 4px 6px 0 rgba(255, 255, 255, 0.32), 0 -1px 18px 0 rgba(255, 255, 255, 0.40) inset, 0 -1px 14px 0 rgba(255, 255, 255, 0.56) inset, 0 0 16px 0 rgba(0, 0, 0, 0.02) inset, 0 -4px 8px 0 rgba(0, 0, 0, 0.03) inset, 0 -1px 2px 0 rgba(0, 0, 0, 0.02) inset, 0 -0.5px 0.5px 0 rgba(0, 0, 0, 0.04) inset, 0 10px 12px 0 rgba(0, 0, 0, 0.04) inset",
// //         backdropFilter: "blur(16px)",
// //       }}
// //     >
// //       {(isLoading || navigating) && <LoadingOverlay />}

// //       {/* Left icon + input */}
// //       <div className="flex items-center gap-3 flex-1">
// //         {/* Custom SVG icon */}
// //         <svg
// //           xmlns="http://www.w3.org/2000/svg"
// //           width="24"
// //           height="24"
// //           viewBox="0 0 24 24"
// //           fill="none"
// //           className="flex-shrink-0"
// //           style={{
// //             width: "24px",
// //             height: "24px",
// //             aspectRatio: "1/1",
// //           }}
// //         >
// //           <path
// //             d="M10.4727 3.06445C10.2069 3.7215 10.0444 4.43157 10.0078 5.1748C8.84189 5.4497 7.76406 6.04258 6.90332 6.90332C5.68433 8.12231 5 9.77609 5 11.5L5.00781 11.8223C5.0875 13.4288 5.76051 14.9539 6.90332 16.0967C8.12231 17.3157 9.77609 18 11.5 18C13.2239 18 14.8777 17.3157 16.0967 16.0967C17.2388 14.9546 17.9109 13.4307 17.9912 11.8252C18.708 11.6569 19.378 11.3701 19.9814 10.9863C19.9918 11.1569 20 11.3281 20 11.5C20 13.4247 19.345 15.2803 18.1621 16.7744L20.6797 19.293C21.0702 19.6835 21.0702 20.3165 20.6797 20.707C20.2892 21.0974 19.6561 21.0975 19.2656 20.707L16.7441 18.1855C15.2552 19.3535 13.4118 20 11.5 20C9.24566 20 7.08332 19.1048 5.48926 17.5107C3.8952 15.9167 3 13.7543 3 11.5C3 9.24566 3.8952 7.08332 5.48926 5.48926C6.83918 4.13934 8.5969 3.29277 10.4727 3.06445Z"
// //             fill="#666F7F"
// //           />
// //           <path
// //             d="M20.7645 1.07573C20.6851 1.02624 20.5935 1 20.5 1C20.3957 0.999937 20.2939 1.03254 20.209 1.09324C20.1242 1.15394 20.0604 1.23968 20.0267 1.33846L19.8518 1.8519L19.339 2.02688L19.28 2.05087C19.1912 2.0944 19.1172 2.16334 19.0675 2.24896C19.0178 2.33457 18.9947 2.43301 19.001 2.5318C19.0073 2.63059 19.0428 2.72528 19.103 2.80387C19.1632 2.88246 19.2453 2.94142 19.339 2.97326L19.8523 3.14824L20.0272 3.66118L20.0512 3.71967C20.0947 3.80859 20.1635 3.88261 20.2491 3.93233C20.3347 3.98206 20.4331 4.00526 20.5318 3.999C20.6306 3.99273 20.7252 3.95728 20.8038 3.89715C20.8824 3.83701 20.9414 3.75488 20.9733 3.66118L21.1482 3.14774L21.661 2.97276L21.72 2.94876C21.8088 2.90524 21.8828 2.8363 21.9325 2.75068C21.9822 2.66506 22.0053 2.56662 21.999 2.46783C21.9927 2.36904 21.9572 2.27435 21.897 2.19576C21.8368 2.11717 21.7547 2.05822 21.661 2.02638L21.1477 1.8514L20.9728 1.33846L20.9488 1.27997C20.9077 1.19598 20.8438 1.12522 20.7645 1.07573Z"
// //             fill="#666F7F"
// //           />
// //           <path
// //             d="M15.2948 9.79806C15.5063 9.93004 15.7507 10 16 10C16.2782 10.0002 16.5495 9.91322 16.7759 9.75136C17.0022 9.5895 17.1722 9.36084 17.2621 9.09744L17.7286 7.72827L19.096 7.26167L19.2532 7.19767C19.4903 7.08161 19.6875 6.89777 19.8199 6.66945C19.9524 6.44114 20.0141 6.17863 19.9973 5.91519C19.9804 5.65175 19.8858 5.39924 19.7253 5.18967C19.5649 4.9801 19.3458 4.82289 19.096 4.73797L17.7272 4.27136L17.2608 2.90353L17.1968 2.74755C17.0809 2.51042 16.8972 2.31305 16.6691 2.18044C16.4409 2.04784 16.1785 1.98597 15.9152 2.00267C15.6518 2.01938 15.3994 2.11391 15.1898 2.27428C14.9802 2.43465 14.8229 2.65365 14.7379 2.90353L14.2714 4.27269L12.904 4.7393L12.7468 4.8033C12.5097 4.91936 12.3125 5.1032 12.1801 5.33152C12.0476 5.55983 11.9859 5.82234 12.0027 6.08578C12.0196 6.34922 12.1142 6.60172 12.2747 6.8113C12.4351 7.02087 12.6542 7.17808 12.904 7.263L14.2728 7.72961L14.7392 9.09744L14.8032 9.25342C14.9129 9.47739 15.0832 9.66609 15.2948 9.79806Z"
// //             fill="#666F7F"
// //           />
// //         </svg>

// //         {/* Textarea */}
// //         <textarea
// //           className="flex-1 bg-transparent text-gray-700 text-sm sm:text-base placeholder-gray-500 resize-none outline-none"
// //           placeholder={placeholder}
// //           rows={1}
// //           value={text}
// //           onChange={(e) => setText(e.target.value)}
// //         />
// //       </div>

// //       {/* Button */}
// //       <div className="flex  shrink-0 ml-3">
// //         {options.map((option, idx) => (
// //           <button
// //             key={idx}
// //             onClick={() => handleSelect(option)}
// //             disabled={!text.trim() || isLoading || navigating}
// //             className="flex justify-center items-center w-[130px] h-[44px] rounded-[39px] text-white text-sm sm:text-base transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 active:scale-[0.98]"
// //             style={{
// //               background:
// //                 "linear-gradient(315deg, #025ADC 0%, #3282FA 100%), #000",
// //               boxShadow:
// //                 "0 0.5px 0 0 rgba(255, 255, 255, 0.32) inset, 0 -1.5px 0 0 rgba(255, 255, 255, 0.32) inset",
// //             }}
// //           >
// //             {option.label}
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PromptCard;
// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import LoadingOverlay from "./utils/LoadingOverlay";
// import { setPromptData } from "@/app/store/redux/promptSlice";
// import { useDispatch } from "react-redux";
// import {
//   useGenerateHeadingMutation,
//   useGenerateParagraphMutation,
//   useGenerateSubHeadingMutation,
//   useGenerateSubParagraphMutation,
// } from "@/app/store/redux/api/groqApi";
// import { Sparkles } from "lucide-react"; // ✨ optional small icon

// export interface Option {
//   label: string;
//   highlight?: boolean;
//   route?: string;
// }

// interface PromptCardProps {
//   placeholder?: string;
//   options?: Option[];
//   onSelect?: (data: {
//     heading: string;
//     subHeading: string;
//     paragraph: string;
//     option: Option;
//   }) => void;
// }

// const PromptCard: React.FC<PromptCardProps> = ({
//   placeholder = "I want to optimize my distribution journey..",
//   options = [{ label: "Launch Idea", highlight: true, route: "/mvp" }],
//   onSelect,
// }) => {
//   const [text, setText] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [navigating, setNavigating] = useState(false);

//   const router = useRouter();
//   const dispatch = useDispatch();

//   const [generateHeading, { isLoading }] = useGenerateHeadingMutation();
//   const [generateParagraph] = useGenerateParagraphMutation();
//   const [generateSubHeading] = useGenerateSubHeadingMutation();
//   const [generateSubParagraph] = useGenerateSubParagraphMutation();

//   // Scope validation prompt with user text
//   const scopePromptHeading = `
// You are a strict scope-validation system.

// Your job is to classify whether the user’s input falls inside the allowed service scope.

// THE ALLOWED SCOPE (anything related to the following is considered IN-SCOPE):

// 1. Predictive Analytics & Data Science
//    - Predictive analytics
//    - Data science services
//    - BI dashboards
//    - Data engineering, pipelines
//    - Churn prediction, forecasting, fraud detection
//    - Demand planning algorithms
//    - Enterprise data strategy
//    - Data warehouse modernization

// 2. Machine Learning Development
//    - ML model development
//    - AI model training
//    - Supervised, unsupervised, reinforcement learning
//    - Anomaly detection
//    - MLOps, monitoring, lifecycle
//    - Scalable deployment
//    - Custom AI development

// 3. AI-Powered Communication & Automation
//    - AI chatbots
//    - Voice AI and call analytics
//    - AI dialers
//    - Sales enablement AI
//    - Lead conversion automation
//    - Speech analytics
//    - Customer support automation

// 4. AI 3D Virtual Real Estate Tours
//    - AI 3D property tours
//    - Virtual walkthroughs
//    - 3D visualization
//    - Computer vision for real estate
//    - Virtual staging automation
//    - Interactive property experiences

// 5. Augmented Reality (AR) & Unity Development
//    - AR apps
//    - Unity 3D development
//    - XR experiences
//    - Product visualization
//    - AR training simulations
//    - Spatial computing
//    - AI-powered AR

// 6. Data Visualization & Business Intelligence
//    - BI dashboards
//    - Interactive analytics
//    - KPI dashboards
//    - Power BI, Tableau, Sigma
//    - Data modeling, DAX, calculations
//    - Reporting systems

// ---

// TASK:
// Given this user input: **"${text}"**, determine ONLY:

// 1. If it is related to any part of the allowed scope → reply:
//    **IN_SCOPE**

// 2. If it is NOT related → reply:
//    **OUT_OF_SCOPE**

// RULES:
// - No matter what the input ALWAYS Reply with ONLY one word: IN_SCOPE or OUT_OF_SCOPE.
// - Do NOT explain your reasoning.
// - Do NOT generate anything else.
// - Be extremely strict. If the user input is not clearly connected to the allowed domains, classify it as OUT_OF_SCOPE.
// `;

//   const table = `You are an enterprise AI system that generates structured AI/ML capability modules in clean JSON format.

// Your job is to take the user input and produce a JSON object containing the most relevant 4–6 solution modules, each containing 2–3 features, with short descriptions.

// Follow these rules STRICTLY:

// -------------------------------------------------------------------

// SCOPE RULES (very important)

// -------------------------------------------------------------------

// Only generate modules/features/descriptions that belong to or are

// logically connected to THESE domain areas:

// 1. Predictive Analytics & Data Science

// 2. Machine Learning Development

// 3. AI-Powered Communication & Automation

// 4. AI Voice & Call Automation

// 5. Conversational AI & NLP

// 6. AI 3D Virtual Real Estate Tools

// 7. AR / XR / Unity Development

// 8. Data Engineering & Pipelines

// 9. Business Intelligence (Power BI, Tableau, Sigma)

// 10. Data Visualization & Reporting

// 11. MLOps, ML Deployment, Model Monitoring

// 12. Cloud-based data systems (ETL, streaming, data quality)

// 13. Fraud analytics, anomaly detection, forecasting models

// 14. Automation AI (sales automation, support automation, insights)

// You MAY generate new modules or new features ONLY if:

// - They logically belong to these domain areas

// - They sound like real enterprise AI / ML capabilities

// - They are professional and non-hallucinatory

// - They do NOT come from unrelated industries

// -------------------------------------------------------------------

// OUTPUT FORMAT RULES (EXTREMELY IMPORTANT)

// -------------------------------------------------------------------

// 1. Output must ALWAYS be a valid JSON object with this structure:

// {

//   "modules": [

//     {

//       "name": "Module Name",

//       "features": [

//         {

//           "name": "Feature Name",

//           "description": "Short description."

//         }

//       ]

//     }

//   ]

// }

// 2. You MUST generate:

//    - 4 to 6 modules

//    - Each module MUST contain 2 to 3 features

// 3. Module names must be dynamically generated based on user input.

//    - Do NOT copy the domain names directly.

//    - Create meaningful module names INSIDE those domains.

// 4. Feature descriptions must be:

//    - Clear

//    - Technical

//    - Enterprise-focused

//    - No fluff or marketing tone

// 5. DO NOT return anything outside of the JSON object.

//    - NO markdown

//    - NO code blocks

//    - NO explanations

//    - NO commentary

// -------------------------------------------------------------------

// INPUT TO PROCESS:

// "${text}"

// -------------------------------------------------------------------

// Now produce the JSON result following all rules above.

//  `;
//   const handleSelect = async (option: Option) => {
//     if (!text.trim()) return;
//     setSubmitted(true);
//     setNavigating(true);

//     try {
//       const headingData = await generateHeading({
//         // prompt: `${scopePromptHeading}`,
//         prompt: `${table}`,
//       }).unwrap();
//       const generatedHeading = headingData.generatedText
//         ?.replace(/^"+|"+$/g, "")
//         .replace(/\n/g, " ");
//       const paragraphData = await generateParagraph({
//         prompt: `Write a main idea for "${text}" using max 30 words`,
//       }).unwrap();
//       const generatedParagraph = paragraphData.generatedText
//         ?.replace(/^"+|"+$/g, "")
//         .replace(/\n/g, " ")
//         .trim()
//         .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

//       const subHeadingData = await generateSubHeading({
//         prompt: `Make an essay sub-heading for "${text}" using a maximum of 45 characters.`,
//       }).unwrap();
//       const generatedSubHeading = subHeadingData.generatedText
//         ?.replace(/^"+|"+$/g, "")
//         .replace(/\n/g, " ")
//         .trim()
//         .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

//       const subParagraphData = await generateSubParagraph({
//         prompt: `Write a supporting idea for "${text}" using max 30 words`,
//       }).unwrap();
//       const generatedSubParagraph = subParagraphData.generatedText
//         ?.replace(/^"+|"+$/g, "")
//         .replace(/\n/g, " ")
//         .trim()
//         .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

//       dispatch(
//         setPromptData({
//           promptText: text,
//           result: "",
//           heading: generatedHeading,
//           paragraph: generatedParagraph,
//           subHeading: generatedSubHeading,
//         })
//       );

//       onSelect?.({
//         heading: generatedHeading,
//         paragraph: generatedParagraph,
//         subHeading: generatedSubHeading,
//         option,
//       });

//       if (option.route) router.push(option.route);
//     } catch (error) {
//       console.error("API error:", error);
//       setSubmitted(false);
//     } finally {
//       setNavigating(false);
//     }
//   };

//   if (submitted) return <LoadingOverlay />;

//   return (
//     <div>
//       {/* Heading with scope prompt and user text */}

//       {/* Original PromptCard UI */}
//       <div
//         className="w-[620px] h-[64px] mx-auto flex items-center justify-between rounded-full relative transition-all px-3"
//         style={{
//           borderRadius: "999px",
//           border: "2px solid rgba(193, 193, 193, 0.60)",
//           background:
//             "radial-gradient(193.33% 58.29% at 50% 50%, rgba(255, 255, 255, 0) 45%, rgba(255, 255, 255, 0.12) 100%), " +
//             "linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), " +
//             "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(139, 206, 255, 0.22) 100%)",
//           boxShadow:
//             "0 7px 15px -12px rgba(176, 194, 250, 0.20), 0 4px 10.3px 0 rgba(0, 0, 0, 0.03), 0 17px 25.8px -12px rgba(0, 0, 0, 0.06), 0 4px 6px 0 rgba(255, 255, 255, 0.32), 0 -1px 18px 0 rgba(255, 255, 255, 0.40) inset, 0 -1px 14px 0 rgba(255, 255, 255, 0.56) inset, 0 0 16px 0 rgba(0, 0, 0, 0.02) inset, 0 -4px 8px 0 rgba(0, 0, 0, 0.03) inset, 0 -1px 2px 0 rgba(0, 0, 0, 0.02) inset, 0 -0.5px 0.5px 0 rgba(0, 0, 0, 0.04) inset, 0 10px 12px 0 rgba(0, 0, 0, 0.04) inset",
//           backdropFilter: "blur(16px)",
//         }}
//       >
//         {(isLoading || navigating) && <LoadingOverlay />}

//         {/* Left icon + input */}
//         <div className="flex items-center gap-3 flex-1">
//           {/* Custom SVG icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             className="flex-shrink-0"
//             style={{
//               width: "24px",
//               height: "24px",
//               aspectRatio: "1/1",
//             }}
//           >
//             {/* SVG path omitted for brevity */}
//           </svg>

//           {/* Textarea */}
//           <textarea
//             className="flex-1 bg-transparent text-gray-700 text-sm sm:text-base placeholder-gray-500 resize-none outline-none"
//             placeholder={placeholder}
//             rows={1}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//         </div>

//         {/* Button */}
//         <div className="flex shrink-0 ml-3">
//           {options.map((option, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleSelect(option)}
//               disabled={!text.trim() || isLoading || navigating}
//               className="flex justify-center items-center w-[130px] h-[44px] rounded-[39px] text-white text-sm sm:text-base transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 active:scale-[0.98]"
//               style={{
//                 background:
//                   "linear-gradient(315deg, #025ADC 0%, #3282FA 100%), #000",
//                 boxShadow:
//                   "0 0.5px 0 0 rgba(255, 255, 255, 0.32) inset, 0 -1.5px 0 0 rgba(255, 255, 255, 0.32) inset",
//               }}
//             >
//               {option.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromptCard;
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingOverlay from "./utils/LoadingOverlay";
import { setPromptData } from "@/app/store/redux/promptSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  useGenerateHeadingMutation,
  useGenerateParagraphMutation,
  useGenerateSubHeadingMutation,
  useGenerateSubParagraphMutation,
  useGenerateTableMutation,
  useGenerateValidationMutation,
} from "@/app/store/redux/api/groqApi";

export interface Option {
  label: string;
  highlight?: boolean;
  route?: string;
}

interface PromptCardProps {
  placeholder?: string;
  options?: Option[];
  onSelect?: (data: {
    heading: any;
    subHeading: string;
    paragraph: string;
    subParagraph: string;
    tableContent: string;

    option: Option;
  }) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({
  placeholder = "I want to optimize my distribution journey..",
  options = [{ label: "Launch Idea", highlight: true, route: "/mvp" }],
  onSelect,
}) => {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [navigating, setNavigating] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const [generateHeading, { isLoading }] = useGenerateHeadingMutation();
  const [generateTableContent] = useGenerateTableMutation();
  const [generateValidation] = useGenerateValidationMutation();
  const [generateParagraph] = useGenerateParagraphMutation();
  const [generateSubHeading] = useGenerateSubHeadingMutation();
  const [generateSubParagraph] = useGenerateSubParagraphMutation();
  const scopePromptHeading = `
You are a strict scope-validation system.

Your job is to classify whether the user’s input falls inside the allowed service scope.

THE ALLOWED SCOPE (anything related to the following is considered IN-SCOPE):

1. Predictive Analytics & Data Science
   - Predictive analytics
   - Data science services
   - BI dashboards
   - Data engineering, pipelines
   - Churn prediction, forecasting, fraud detection
   - Demand planning algorithms
   - Enterprise data strategy
   - Data warehouse modernization

2. Machine Learning Development
   - ML model development
   - AI model training
   - Supervised, unsupervised, reinforcement learning
   - Anomaly detection
   - MLOps, monitoring, lifecycle
   - Scalable deployment
   - Custom AI development

3. AI-Powered Communication & Automation
   - AI chatbots
   - Voice AI and call analytics
   - AI dialers
   - Sales enablement AI
   - Lead conversion automation
   - Speech analytics
   - Customer support automation

4. AI 3D Virtual Real Estate Tours
   - AI 3D property tours
   - Virtual walkthroughs
   - 3D visualization
   - Computer vision for real estate
   - Virtual staging automation
   - Interactive property experiences

5. Augmented Reality (AR) & Unity Development
   - AR apps
   - Unity 3D development
   - XR experiences
   - Product visualization
   - AR training simulations
   - Spatial computing
   - AI-powered AR

6. Data Visualization & Business Intelligence
   - BI dashboards
   - Interactive analytics
   - KPI dashboards
   - Power BI, Tableau, Sigma
   - Data modeling, DAX, calculations
   - Reporting systems

---

TASK:
Given this user input: **"${text}"**, determine ONLY:

1. If it is related to any part of the allowed scope → reply:
   **IN_SCOPE**

2. If it is NOT related → reply:
   **OUT_OF_SCOPE**

RULES:
- No matter what the input ALWAYS Reply with ONLY one word: IN_SCOPE or OUT_OF_SCOPE.
- Do NOT explain your reasoning.
- Do NOT generate anything else.
- Be extremely strict. If the user input is not clearly connected to the allowed domains, classify it as OUT_OF_SCOPE.
`;
  // -------------------------------------------------------------------
  // Prompt to send to backend for table generation
  // -------------------------------------------------------------------
  const table = `
You are an enterprise AI system that generates structured AI/ML capability modules in clean JSON format.

Your job is to take the user input and produce a JSON object containing the most relevant 4–6 solution modules, each containing 2–3 features, with short descriptions.

Follow these rules STRICTLY:

-------------------------------------------------------------------
SCOPE RULES
-------------------------------------------------------------------

Only generate modules/features/descriptions that belong to or are connected to these areas:

1. Predictive Analytics & Data Science  
2. Machine Learning Development  
3. AI-Powered Communication & Automation  
4. AI Voice & Call Automation  
5. Conversational AI & NLP  
6. AI 3D Virtual Real Estate Tools  
7. AR / XR / Unity Development  
8. Data Engineering & Pipelines  
9. Business Intelligence (Power BI, Tableau, Sigma)  
10. Data Visualization & Reporting  
11. MLOps, ML Deployment, Model Monitoring  
12. Cloud-based data systems (ETL, streaming, data quality)  
13. Fraud analytics, anomaly detection, forecasting models  
14. Automation AI (sales automation, support automation, insights)

-------------------------------------------------------------------
OUTPUT FORMAT RULES
-------------------------------------------------------------------

Output must ALWAYS be a valid JSON object:
{
  "modules": [
    {
      "name": "Module Name",
      "features": [
        {
          "name": "Feature Name",
          "description": "Short description."
        }
      ]
    }
  ]
}

You MUST generate 4–6 modules, each with 2–3 features.
Module names should be meaningful and enterprise-appropriate.
Feature descriptions must be concise and technical.

Do NOT include markdown, code blocks, or any explanation.

-------------------------------------------------------------------
INPUT TO PROCESS:
"${text}"
-------------------------------------------------------------------
Now produce ONLY the JSON result.
`;

  // -------------------------------------------------------------------
  // Handle Generate & Navigate
  // -------------------------------------------------------------------

  // const handleSelect = async (option: Option) => {
  //   if (!text.trim()) return;
  //   setSubmitted(true);
  //   setNavigating(true);

  //   try {
  //     // --- Generate Heading (JSON table) ---
  //     const validationData = await generateValidation({
  //       prompt: `${scopePromptHeading}`,
  //     }).unwrap();
  //     const generatedValidationText = validationData.generatedText
  //       ?.replace(/^"+|"+$/g, "")
  //       .replace(/\n/g, " ")
  //       .trim()
  //       .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");
  //     console.log("generatedValidation", generatedValidationText);
  //     const headingData = await generateHeading({
  //       prompt: `Make an essay heading for "${text}" using a maximum of 65 characters.`,
  //     }).unwrap();
  //     const generatedHeading = headingData.generatedText
  //       ?.replace(/^"+|"+$/g, "")
  //       .replace(/\n/g, " ")
  //       .trim();
  //     const tableContent = await generateTableContent({
  //       prompt: `${table}`,
  //     }).unwrap();

  //     let generatedTableContent: any;
  //     try {
  //       // Try parsing backend JSON response
  //       generatedTableContent = JSON.parse(tableContent.generatedText);
  //     } catch {
  //       console.warn("Generated heading is not valid JSON; storing as string");
  //       generatedTableContent = tableContent.generatedText;
  //     }
  //     console.log("promptcard data", tableContent);
  //     // --- Generate Supporting Texts ---
  //     const paragraphData = await generateParagraph({
  //       prompt: `Write a main idea for "${text}" using max 30 words`,
  //     }).unwrap();
  //     const generatedParagraph = paragraphData.generatedText
  //       ?.replace(/^"+|"+$/g, "")
  //       .replace(/\n/g, " ")
  //       .trim()
  //       .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

  //     const subHeadingData = await generateSubHeading({
  //       prompt: `Make an essay sub-heading for "${text}" using a maximum of 45 characters.`,
  //     }).unwrap();
  //     const generatedSubHeading = subHeadingData.generatedText
  //       ?.replace(/^"+|"+$/g, "")
  //       .replace(/\n/g, " ")
  //       .trim()
  //       .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

  //     const subParagraphData = await generateSubParagraph({
  //       prompt: `Write a supporting idea for "${text}" using max 30 words`,
  //     }).unwrap();
  //     const generatedSubParagraph = subParagraphData.generatedText
  //       ?.replace(/^"+|"+$/g, "")
  //       .replace(/\n/g, " ")
  //       .trim()
  //       .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

  //     // --- Dispatch all generated content to Redux ---
  //     dispatch(
  //       setPromptData({
  //         promptText: text,
  //         result: "",
  //         heading: generatedHeading,
  //         tableContent: generatedTableContent, // Now an object ✅
  //         paragraph: generatedParagraph,
  //         subHeading: generatedSubHeading,
  //         subParagraph: generatedSubParagraph,
  //       })
  //     );

  //     // --- Call onSelect callback (if provided) ---
  //     onSelect?.({
  //       heading: generatedHeading,
  //       tableContent: generatedTableContent,
  //       paragraph: generatedParagraph,
  //       subHeading: generatedSubHeading,
  //       option,
  //       subParagraph: generatedSubParagraph,
  //     });

  //     // --- Navigate if route exists ---
  //     if (option.route) router.push(option.route);
  //   } catch (error) {
  //     console.error("API error:", error);
  //     setSubmitted(false);
  //   } finally {
  //     setNavigating(false);
  //   }
  // };
  const handleSelect = async (option: Option) => {
    if (!text.trim()) return;
    setSubmitted(true);
    setNavigating(true);

    try {
      // 1️⃣ Validate scope first
      const validationData = await generateValidation({
        prompt: `${scopePromptHeading}`,
      }).unwrap();

      const validationResult = validationData.generatedText
        ?.trim()
        ?.toUpperCase();

      console.log("Validation result:", validationResult);

      if (validationResult !== "IN_SCOPE") {
        toast.error("Your request is out of scope 🚫");
        setSubmitted(false);
        setNavigating(false);
        return; // ❌ stop execution — no other API calls
      }

      // 2️⃣ Continue only if IN_SCOPE
      const headingData = await generateHeading({
        prompt: `Make an essay heading for "${text}" using a maximum of 65 characters.`,
      }).unwrap();
      const generatedHeading = headingData.generatedText
        ?.replace(/^"+|"+$/g, "")
        .replace(/\n/g, " ")
        .trim();

      const tableContent = await generateTableContent({
        prompt: `${table}`,
      }).unwrap();
      let generatedTableContent: any;

      try {
        generatedTableContent = JSON.parse(tableContent.generatedText);
      } catch {
        console.warn(
          "Generated table content not valid JSON; storing as string"
        );
        generatedTableContent = tableContent.generatedText;
      }

      const paragraphData = await generateParagraph({
        prompt: `Write a main idea for "${text}" using max 30 words`,
      }).unwrap();
      const generatedParagraph = paragraphData.generatedText
        ?.replace(/^"+|"+$/g, "")
        .replace(/\n/g, " ")
        .trim()
        .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

      const subHeadingData = await generateSubHeading({
        prompt: `Make an essay sub-heading for "${text}" using a maximum of 45 characters.`,
      }).unwrap();
      const generatedSubHeading = subHeadingData.generatedText
        ?.replace(/^"+|"+$/g, "")
        .replace(/\n/g, " ")
        .trim()
        .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

      const subParagraphData = await generateSubParagraph({
        prompt: `Write a supporting idea for "${text}" using max 30 words`,
      }).unwrap();
      const generatedSubParagraph = subParagraphData.generatedText
        ?.replace(/^"+|"+$/g, "")
        .replace(/\n/g, " ")
        .trim()
        .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

      // 3️⃣ Save to Redux
      dispatch(
        setPromptData({
          promptText: text,
          result: "",
          heading: generatedHeading,
          tableContent: generatedTableContent,
          paragraph: generatedParagraph,
          subHeading: generatedSubHeading,
          subParagraph: generatedSubParagraph,
        })
      );

      // 4️⃣ Optional callback
      onSelect?.({
        heading: generatedHeading,
        tableContent: generatedTableContent,
        paragraph: generatedParagraph,
        subHeading: generatedSubHeading,
        option,
        subParagraph: generatedSubParagraph,
      });

      // 5️⃣ Navigate if route exists
      if (option.route) router.push(option.route);
    } catch (error) {
      console.error("API error:", error);
      toast.error("Something went wrong 😢");
      setSubmitted(false);
    } finally {
      setNavigating(false);
    }
  };
  // -------------------------------------------------------------------
  // UI Rendering
  // -------------------------------------------------------------------
  if (submitted) return <LoadingOverlay />;

  return (
    <div>
      <div
        className="w-[620px] h-[64px] mx-auto flex items-center justify-between rounded-full relative transition-all px-3"
        style={{
          borderRadius: "999px",
          border: "2px solid rgba(193, 193, 193, 0.60)",
          background:
            "radial-gradient(193.33% 58.29% at 50% 50%, rgba(255, 255, 255, 0) 45%, rgba(255, 255, 255, 0.12) 100%), " +
            "linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), " +
            "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(139, 206, 255, 0.22) 100%)",
          boxShadow:
            "0 7px 15px -12px rgba(176, 194, 250, 0.20), 0 4px 10.3px 0 rgba(0, 0, 0, 0.03), 0 17px 25.8px -12px rgba(0, 0, 0, 0.06), 0 4px 6px 0 rgba(255, 255, 255, 0.32), 0 -1px 18px 0 rgba(255, 255, 255, 0.40) inset, 0 -1px 14px 0 rgba(255, 255, 255, 0.56) inset, 0 0 16px 0 rgba(0, 0, 0, 0.02) inset, 0 -4px 8px 0 rgba(0, 0, 0, 0.03) inset, 0 -1px 2px 0 rgba(0, 0, 0, 0.02) inset, 0 -0.5px 0.5px 0 rgba(0, 0, 0, 0.04) inset, 0 10px 12px 0 rgba(0, 0, 0, 0.04) inset",
          backdropFilter: "blur(16px)",
        }}
      >
        {(isLoading || navigating) && <LoadingOverlay />}

        {/* Left side: icon + textarea */}
        <div className="flex items-center gap-3 flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M12 2L15 8H9L12 2ZM12 22L9 16H15L12 22ZM2 12L8 15V9L2 12ZM22 12L16 9V15L22 12Z"
              fill="#3282FA"
            />
          </svg>

          <textarea
            className="flex-1 bg-transparent text-gray-700 text-sm sm:text-base placeholder-gray-500 resize-none outline-none"
            placeholder={placeholder}
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Right side: button */}
        <div className="flex shrink-0 ml-3">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              disabled={!text.trim() || isLoading || navigating}
              className="flex justify-center items-center w-[130px] h-[44px] rounded-[39px] text-white text-sm sm:text-base transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(315deg, #025ADC 0%, #3282FA 100%), #000",
                boxShadow:
                  "0 0.5px 0 0 rgba(255, 255, 255, 0.32) inset, 0 -1.5px 0 0 rgba(255, 255, 255, 0.32) inset",
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
