// // // "use client";
// // // import React, { useState } from "react";

// // // export default function FeatureMatrixMap() {
// // //   const [query, setQuery] = useState("");
// // //   const [suggestions, setSuggestions] = useState<string[]>([]);
// // //   const [selectedKeyword, setSelectedKeyword] = useState<any>(null);

// // //   // --- MAIN DATASET (From your SmartSearch component) ---
// // //   // const dataMap = {
// // //   //   "Predictive Analytics & Data Science": {
// // //   //     keywords: [
// // //   //       "predictive analytics",
// // //   //       "data science services",
// // //   //       "business intelligence dashboards",
// // //   //       "sales forecasting",
// // //   //       "fraud detection",
// // //   //     ],
// // //   //     modules: [
// // //   //       {
// // //   //         name: "Data Engineering & Pipelines",
// // //   //         features: [
// // //   //           {
// // //   //             name: "Automated ETL",
// // //   //             description: "Extract, clean & transform data automatically.",
// // //   //           },
// // //   //           {
// // //   //             name: "Real-time Streaming",
// // //   //             description: "Stream live data from apps, sensors & sources.",
// // //   //           },
// // //   //         ],
// // //   //       },
// // //   //       {
// // //   //         name: "Business Intelligence",
// // //   //         features: [
// // //   //           {
// // //   //             name: "KPI Dashboards",
// // //   //             description: "Interactive dashboards for decision-making.",
// // //   //           },
// // //   //           {
// // //   //             name: "Self-Service Analytics",
// // //   //             description: "Allow users to explore and segment data.",
// // //   //           },
// // //   //         ],
// // //   //       },
// // //   //     ],
// // //   //   },

// // //   //   "Machine Learning Development": {
// // //   //     keywords: [
// // //   //       "ml model development",
// // //   //       "ai model training",
// // //   //       "supervised learning",
// // //   //       "model deployment",
// // //   //     ],
// // //   //     modules: [
// // //   //       {
// // //   //         name: "Model Development",
// // //   //         features: [
// // //   //           {
// // //   //             name: "Multi-Algorithm Modeling",
// // //   //             description:
// // //   //               "Build supervised, unsupervised, or deep learning models.",
// // //   //           },
// // //   //           {
// // //   //             name: "Hyperparameter Tuning",
// // //   //             description: "Optimize model performance via auto-search.",
// // //   //           },
// // //   //         ],
// // //   //       },
// // //   //       {
// // //   //         name: "Deployment & ML Ops",
// // //   //         features: [
// // //   //           {
// // //   //             name: "API Deployment",
// // //   //             description: "Serve trained models as live API endpoints.",
// // //   //           },
// // //   //           {
// // //   //             name: "Monitoring & Logging",
// // //   //             description: "Track model drift, latency, and accuracy.",
// // //   //           },
// // //   //         ],
// // //   //       },
// // //   //     ],
// // //   //   },

// // //   //   "Data Visualization & BI (Power BI, Tableau, Sigma)": {
// // //   //     keywords: [
// // //   //       "data visualization",
// // //   //       "power bi dashboards",
// // //   //       "tableau reports",
// // //   //       "sigma analytics",
// // //   //       "embedded bi",
// // //   //     ],
// // //   //     modules: [
// // //   //       {
// // //   //         name: "Dashboards & Visuals",
// // //   //         features: [
// // //   //           {
// // //   //             name: "Interactive Dashboards",
// // //   //             description: "Real-time and drill-down BI dashboards.",
// // //   //           },
// // //   //           {
// // //   //             name: "Data Storytelling",
// // //   //             description: "Narrative-driven insights for business users.",
// // //   //           },
// // //   //         ],
// // //   //       },
// // //   //       {
// // //   //         name: "Security & Governance",
// // //   //         features: [
// // //   //           {
// // //   //             name: "Row-Level Security",
// // //   //             description: "Restrict data visibility dynamically per user.",
// // //   //           },
// // //   //           {
// // //   //             name: "Audit & Compliance",
// // //   //             description: "Ensure data lineage and workspace tracking.",
// // //   //           },
// // //   //         ],
// // //   //       },
// // //   //     ],
// // //   //   },
// // //   // };
// // //   const dataMap = {
// // //     "Predictive Analytics & Data Science": {
// // //       keywords: [
// // //         "predictive analytics",
// // //         "data science services",
// // //         "business intelligence dashboards",
// // //         "sales forecasting",
// // //         "fraud detection",
// // //         "customer churn prediction",
// // //         "data engineering",
// // //         "demand planning",
// // //         "enterprise data strategy",
// // //         "data warehouse modernization",
// // //       ],
// // //       modules: [
// // //         {
// // //           name: "Data Engineering & Pipelines",
// // //           features: [
// // //             {
// // //               name: "Automated ETL",
// // //               description: "Extract, clean & transform data automatically.",
// // //             },
// // //             {
// // //               name: "Real-time Streaming",
// // //               description: "Stream live data from apps, sensors & sources.",
// // //             },
// // //             {
// // //               name: "Data Quality Monitoring",
// // //               description:
// // //                 "Monitor data anomalies, missing values, and schema drift.",
// // //             },
// // //           ],
// // //         },
// // //         {
// // //           name: "Business Intelligence",
// // //           features: [
// // //             {
// // //               name: "KPI Dashboards",
// // //               description: "Interactive dashboards for decision-making.",
// // //             },
// // //             {
// // //               name: "Self-Service Analytics",
// // //               description: "Allow users to explore and segment data.",
// // //             },
// // //             {
// // //               name: "Multi-Department BI",
// // //               description: "Unified analytics across business functions.",
// // //             },
// // //           ],
// // //         },
// // //         {
// // //           name: "Predictive Modeling",
// // //           features: [
// // //             {
// // //               name: "Forecasting Models",
// // //               description: "Sales, demand, revenue, inventory forecasting.",
// // //             },
// // //             {
// // //               name: "Churn & Behavior Prediction",
// // //               description:
// // //                 "Identify customer intent, risk, and behavior patterns.",
// // //             },
// // //             {
// // //               name: "Risk & Fraud Analytics",
// // //               description:
// // //                 "Detect anomalies, fraud attempts, and risky patterns.",
// // //             },
// // //           ],
// // //         },
// // //         {
// // //           name: "Governance & Security",
// // //           features: [
// // //             {
// // //               name: "Access Control",
// // //               description: "Role-based permissions and dataset rules.",
// // //             },
// // //             {
// // //               name: "Compliance Layer",
// // //               description:
// // //                 "Align analytics with enterprise compliance standards.",
// // //             },
// // //             {
// // //               name: "Audit Logs",
// // //               description: "Track model usage, access, and actions.",
// // //             },
// // //           ],
// // //         },
// // //       ],
// // //     },

// // //     "Machine Learning Development": {
// // //       keywords: [
// // //         "ml model development",
// // //         "ai model training",
// // //         "supervised learning",
// // //         "unsupervised clustering",
// // //         "reinforcement learning",
// // //         "anomaly detection",
// // //         "model lifecycle management",
// // //         "ml ops",
// // //         "model deployment",
// // //         "custom ai development",
// // //       ],
// // //       modules: [
// // //         {
// // //           name: "Model Development",
// // //           features: [
// // //             {
// // //               name: "Multi-Algorithm Modeling",
// // //               description:
// // //                 "Build supervised, unsupervised, or deep learning models.",
// // //             },
// // //             {
// // //               name: "Experimentation Framework",
// // //               description: "Compare thousands of model variations.",
// // //             },
// // //             {
// // //               name: "Hyperparameter Tuning",
// // //               description: "Optimize model performance via auto-search.",
// // //             },
// // //           ],
// // //         },
// // //         {
// // //           name: "Deployment & ML Ops",
// // //           features: [
// // //             {
// // //               name: "API Deployment",
// // //               description: "Serve trained models as live API endpoints.",
// // //             },
// // //             {
// // //               name: "CI/CD for Models",
// // //               description: "Automated deployment for ML pipelines.",
// // //             },
// // //             {
// // //               name: "Monitoring & Logging",
// // //               description: "Track model drift, latency, and accuracy.",
// // //             },
// // //           ],
// // //         },
// // //         {
// // //           name: "Maintenance",
// // //           features: [
// // //             {
// // //               name: "Drift Detection",
// // //               description: "Identify when model performance declines.",
// // //             },
// // //             {
// // //               name: "Auto Retraining",
// // //               description: "Automatic model refresh based on new data.",
// // //             },
// // //             {
// // //               name: "Continuous Learning",
// // //               description: "Models that adapt and evolve over time.",
// // //             },
// // //           ],
// // //         },
// // //       ],
// // //     },

// // //     "AI-Powered Communication & Automation": {
// // //       keywords: [
// // //         "ai chatbot development",
// // //         "conversational ai",
// // //         "ai dialer software",
// // //         "speech analytics",
// // //         "automated call grading",
// // //         "voice ai",
// // //         "lead conversion automation",
// // //         "sales enablement ai",
// // //         "interaction analytics",
// // //         "customer support automation",
// // //       ],
// // //       modules: [
// // //         {
// // //           name: "Conversational AI",
// // //           features: [
// // //             {
// // //               name: "Chatbot Development",
// // //               description: "AI chatbots for support, sales, onboarding.",
// // //             },
// // //             {
// // //               name: "Multi-turn Conversations",
// // //               description: "Maintain context across complex dialogues.",
// // //             },
// // //             {
// // //               name: "NLP Understanding",
// // //               description: "Extract intent, sentiment, and meaning.",
// // //             },
// // //           ],
// // //         },
// // //         {
// // //           name: "Voice & Call Automation",
// // //           features: [
// // //             {
// // //               name: "AI Dialers",
// // //               description: "Intelligent outbound calling engines.",
// // //             },
// // //             {
// // //               name: "Voice AI Agents",
// // //               description: "Automated voice agents for calls.",
// // //             },
// // //             {
// // //               name: "Call Grading",
// // //               description:
// // //                 "Score calls automatically based on quality and outcome.",
// // //             },
// // //           ],
// // //         },
// // //         {
// // //           name: "Speech Analytics",
// // //           features: [
// // //             {
// // //               name: "Transcription Engine",
// // //               description: "Convert calls to searchable text.",
// // //             },
// // //             {
// // //               name: "Keyword Detection",
// // //               description: "Identify terms related to compliance or intent.",
// // //             },
// // //             {
// // //               name: "Behavioral Metrics",
// // //               description: "Track tone, interruptions, talk-time, engagement.",
// // //             },
// // //           ],
// // //         },
// // //         {
// // //           name: "Performance & Conversion",
// // //           features: [
// // //             {
// // //               name: "Conversion Tracking",
// // //               description: "Measure lead success rates.",
// // //             },
// // //             {
// // //               name: "Funnel Intelligence",
// // //               description: "Identify drop-offs in the customer journey.",
// // //             },
// // //             {
// // //               name: "Automated Insights",
// // //               description: "AI-generated suggestions to improve conversions.",
// // //             },
// // //           ],
// // //         },
// // //       ],
// // //     },

// // //     "Data Visualization & BI (Power BI, Tableau, Sigma)": {
// // //       keywords: [
// // //         "data visualization",
// // //         "power bi dashboards",
// // //         "tableau reports",
// // //         "sigma analytics",
// // //         "embedded bi",
// // //         "real-time reporting",
// // //         "kpi dashboards",
// // //         "business intelligence",
// // //       ],
// // //       modules: [
// // //         {
// // //           name: "Dashboards & Visuals",
// // //           features: [
// // //             {
// // //               name: "Interactive Dashboards",
// // //               description: "Real-time and drill-down BI dashboards.",
// // //             },
// // //             {
// // //               name: "Data Storytelling",
// // //               description: "Narrative-driven insights for business users.",
// // //             },
// // //           ],
// // //         },
// // //         {
// // //           name: "Security & Governance",
// // //           features: [
// // //             {
// // //               name: "Row-Level Security",
// // //               description: "Restrict data visibility dynamically per user.",
// // //             },
// // //             {
// // //               name: "Audit & Compliance",
// // //               description: "Ensure data lineage and workspace tracking.",
// // //             },
// // //           ],
// // //         },
// // //       ],
// // //     },
// // //   };
// // //   // --- All keywords for search suggestions ---
// // //   const allKeywords = Object.entries(dataMap).flatMap(([category, data]) =>
// // //     data.keywords.map((kw) => ({ keyword: kw, category }))
// // //   );

// // //   // --- Handle Search ---
// // //   const handleSearch = (val: string) => {
// // //     setQuery(val);
// // //     if (!val.trim()) {
// // //       setSuggestions([]);
// // //       return;
// // //     }

// // //     const filtered = allKeywords
// // //       .filter((item) => item.keyword.toLowerCase().includes(val.toLowerCase()))
// // //       .map((item) => item.keyword);
// // //     setSuggestions(filtered);
// // //   };

// // //   // --- Handle Select ---
// // //   const handleSelect = (kw: string) => {
// // //     setQuery(kw);
// // //     setSuggestions([]);
// // //     const found = allKeywords.find((item) => item.keyword === kw);
// // //     if (found) setSelectedKeyword(dataMap[found.category]);
// // //   };

// // //   // --- Generate random readiness data for realism ---
// // //   const generateStatus = () => ({
// // //     readyInMVP: Math.random() > 0.4,
// // //     readyToShip: Math.floor(Math.random() * 40) * 2 + 60,
// // //     exactMatchEffort: {
// // //       customization: Math.floor(Math.random() * 30),
// // //       effort: ["No effort", "1 week", "2 weeks", "3 weeks"][
// // //         Math.floor(Math.random() * 4)
// // //       ],
// // //     },
// // //   });

// // //   // --- Build feature list for the selected dataset ---
// // //   const features =
// // //     selectedKeyword?.modules.flatMap((mod) =>
// // //       mod.features.map((f) => ({
// // //         module: mod.name,
// // //         feature: f.name,
// // //         description: f.description,
// // //         ...generateStatus(),
// // //       }))
// // //     ) || [];

// // //   // --- Group features by module ---
// // //   const grouped = features.reduce((acc, curr) => {
// // //     if (!acc[curr.module]) acc[curr.module] = [];
// // //     acc[curr.module].push(curr);
// // //     return acc;
// // //   }, {} as Record<string, any[]>);

// // //   return (
// // //     <div
// // //       className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-[#ffff]"
// // //       style={{ fontFamily: "SF Pro, ui-sans-serif, system-ui" }}
// // //     >
// // //       <div className="flex flex-col w-[1440px] rounded-[40px] bg-white p-10 text-[#000]">
// // //         {/* Header */}
// // //         <div className="text-center mb-10">
// // //           <h2 className="text-[72px] leading-[80px] font-[400] tracking-[-1.44px] text-black">
// // //             Feature Matrix Map
// // //           </h2>
// // //           <p className="text-black text-[20px] mt-4 w-[80%] mx-auto">
// // //             Type a keyword like “data science”, “AI model training”, or “Power
// // //             BI dashboards” to explore the features.
// // //           </p>
// // //         </div>

// // //         {/* Search Bar */}
// // //         <div className="relative mb-10 w-[60%] mx-auto">
// // //           <input
// // //             value={query}
// // //             onChange={(e) => handleSearch(e.target.value)}
// // //             placeholder="Search any AI / BI / Analytics keyword..."
// // //             className="w-full border border-gray-300 rounded-xl px-5 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#4FABFF]"
// // //           />
// // //           {suggestions.length > 0 && (
// // //             <ul className="absolute z-10 bg-white border border-gray-200 rounded-xl mt-2 w-full shadow-lg">
// // //               {suggestions.map((s, i) => (
// // //                 <li
// // //                   key={i}
// // //                   onClick={() => handleSelect(s)}
// // //                   className="px-4 py-2 hover:bg-[#EFF6FF] cursor-pointer text-black"
// // //                 >
// // //                   {s}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           )}
// // //         </div>

// // //         {/* Table */}
// // //         {selectedKeyword ? (
// // //           <div
// // //             className="flex flex-col items-start gap-[10px] p-[48px] rounded-[48px]
// // //             [background:linear-gradient(270deg,_#EFF6FF_0%,_#FAFFF5_100%)]
// // //             overflow-x-auto"
// // //           >
// // //             <h3 className="text-2xl font-semibold text-[#4FABFF] mb-6">
// // //               Showing results for category:{" "}
// // //               {
// // //                 Object.entries(dataMap).find(
// // //                   ([_, v]) => v === selectedKeyword
// // //                 )?.[0]
// // //               }
// // //             </h3>
// // //             <table className="w-full text-sm border-collapse">
// // //               <thead>
// // //                 <tr className="text-[#888D93] border-b border-[#2B1100]/40 text-left">
// // //                   <th className="pb-3 font-normal text-[16px] text-black">
// // //                     Module
// // //                   </th>
// // //                   <th className="pb-3 font-normal text-[16px] text-black">
// // //                     Feature
// // //                   </th>
// // //                   <th className="pb-3 font-normal text-[16px] text-black w-[320px]">
// // //                     Description
// // //                   </th>
// // //                   <th className="pb-3 font-normal text-[16px] text-black text-center">
// // //                     Ready in MVP
// // //                   </th>
// // //                   <th className="pb-3 font-normal text-[16px] text-[#4FABFF] text-center">
// // //                     Ready to Ship
// // //                   </th>
// // //                   <th className="pb-3 font-normal text-[16px] text-[#4FABFF] text-left">
// // //                     Exact Match Effort
// // //                   </th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {Object.entries(grouped).map(
// // //                   ([moduleName, moduleFeatures], groupIdx, arr) => (
// // //                     <React.Fragment key={moduleName}>
// // //                       {moduleFeatures.map((f, idx) => (
// // //                         <tr key={f.feature}>
// // //                           {idx === 0 && (
// // //                             <td
// // //                               className="py-8 align-top text-black font-medium"
// // //                               rowSpan={moduleFeatures.length}
// // //                             >
// // //                               {moduleName}
// // //                             </td>
// // //                           )}

// // //                           <td className="py-6 font-semibold text-black">
// // //                             {f.feature}
// // //                           </td>
// // //                           <td className="py-6 text-[#000]">{f.description}</td>

// // //                           <td className="py-6 text-center">
// // //                             {f.readyInMVP ? (
// // //                               <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[12px] bg-[rgba(95,192,100,0.20)] mx-auto">
// // //                                 <svg
// // //                                   xmlns="http://www.w3.org/2000/svg"
// // //                                   fill="none"
// // //                                   stroke="#5FC064"
// // //                                   strokeWidth="2"
// // //                                   className="w-5 h-5"
// // //                                 >
// // //                                   <path d="M5 13l4 4L19 7" />
// // //                                 </svg>
// // //                               </div>
// // //                             ) : (
// // //                               <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[12px] bg-[rgba(205,62,71,0.20)] mx-auto">
// // //                                 <svg
// // //                                   xmlns="http://www.w3.org/2000/svg"
// // //                                   fill="none"
// // //                                   stroke="#CD3E47"
// // //                                   strokeWidth="2"
// // //                                   className="w-5 h-5"
// // //                                 >
// // //                                   <path d="M6 6l12 12M6 18L18 6" />
// // //                                 </svg>
// // //                               </div>
// // //                             )}
// // //                           </td>

// // //                           <td className="py-6 text-center text-[#4FABFF] font-semibold">
// // //                             {f.readyToShip}%
// // //                           </td>

// // //                           <td className="py-6 text-left">
// // //                             {f.exactMatchEffort.customization}% customization
// // //                             <p className="text-sm text-[#888D93]">
// // //                               {f.exactMatchEffort.effort}
// // //                             </p>
// // //                           </td>
// // //                         </tr>
// // //                       ))}
// // //                       {groupIdx < arr.length - 1 && (
// // //                         <tr>
// // //                           <td colSpan={6}>
// // //                             <div className="border-b border-[#888D93]/40 w-full"></div>
// // //                           </td>
// // //                         </tr>
// // //                       )}
// // //                     </React.Fragment>
// // //                   )
// // //                 )}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         ) : (
// // //           <p className="text-gray-500 text-center mt-10">
// // //             Start typing a keyword above to view feature details.
// // //           </p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { RootState } from "@/app/store/redux/store";

// // export default function FeatureMatrixMap() {
// //   const { promptText, heading, paragraph } = useSelector(
// //     (state: RootState) => state.prompt
// //   );
// //   // --- Your new static data ---
// // const data = {
// //   modules: [
// //     {
// //       name: "Data Pipeline Optimization",
// //       features: [
// //         {
// //           name: "Streaming Data Processing",
// //           description:
// //             "Automates the processing of high-volume data streams from various sources for immediate insights.",
// //         },
// //         {
// //           name: "Data Quality Framework",
// //           description:
// //             "Ensures data accuracy and consistency by implementing a robust quality framework across all data systems.",
// //         },
// //       ],
// //     },
// //     {
// //       name: "Cloud-Native Data Integration",
// //       features: [
// //         {
// //           name: "Automated Data ETL",
// //           description:
// //             "Streamlines the extraction, transformation, and loading of data from multiple sources into cloud-based data warehouses.",
// //         },
// //         {
// //           name: "Real-time Data Ingestion",
// //           description:
// //             "Enables seamless integration of real-time data feeds into cloud-based data systems for up-to-the-minute analysis.",
// //         },
// //       ],
// //     },
// //     {
// //       name: "Data Orchestration and Cataloging",
// //       features: [
// //         {
// //           name: "Automated Data Discovery",
// //           description:
// //             "Facilitates discovery and cataloging of data assets across the organization, ensuring easy access and metadata management.",
// //         },
// //       ],
// //     },
// //     {
// //       name: "DevOps for Data Engineers",
// //       features: [
// //         {
// //           name: "Continuous Integration for Data",
// //           description:
// //             "Guarantees continuous integration and automated testing of data pipelines, ensuring swift deployment and minimizing data downtime.",
// //         },
// //         {
// //           name: "Data Environment Management",
// //           description:
// //             "Standardizes and streamlines data environment management, ensuring data consistency and quality across development, testing, and production.",
// //         },
// //       ],
// //     },
// //     {
// //       name: "Data Security and Governance",
// //       features: [
// //         {
// //           name: "Data Access Control and Auditing",
// //           description:
// //             "Enforces role-based access control and provides granular auditing to ensure sensitive data is protected and compliant with regulatory requirements.",
// //         },
// //       ],
// //     },
// //   ],
// // };

// //   // --- Random status generator ---
// //   const generateStatus = () => ({
// //     readyInMVP: Math.random() > 0.4,
// //     readyToShip: Math.floor(Math.random() * 40) * 2 + 60,
// //     exactMatchEffort: {
// //       customization: Math.floor(Math.random() * 30),
// //       effort: ["No effort", "1 week", "2 weeks", "3 weeks"][
// //         Math.floor(Math.random() * 4)
// //       ],
// //     },
// //   });

// //   // --- Build features array ---
// //   const features = data.modules.flatMap((mod) =>
// //     mod.features.map((f) => ({
// //       module: mod.name,
// //       feature: f.name,
// //       description: f.description,
// //       ...generateStatus(),
// //     }))
// //   );

// //   // --- Group features by module ---
// //   const grouped = features.reduce((acc, curr) => {
// //     if (!acc[curr.module]) acc[curr.module] = [];
// //     acc[curr.module].push(curr);
// //     return acc;
// //   }, {} as Record<string, any[]>);

// //   return (
// //     <div
// //       className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-[#ffff]"
// //       style={{ fontFamily: "SF Pro, ui-sans-serif, system-ui" }}
// //     >
// //       <div className="flex flex-col w-[1440px] rounded-[40px] bg-white p-10 text-[#000]">
// //         {/* Header */}
// //         <div className="text-center mb-10">
// //           <h2 className="text-[72px] leading-[80px] font-[400] tracking-[-1.44px] text-black">
// //             Feature Matrix Map
// //           </h2>
// //           <p className="text-black text-[20px] mt-4 w-[80%] mx-auto">
// //             Explore the AI modules, their features, and readiness status.
// //           </p>
// //         </div>

// //         {/* Table */}
// //         <div
// //           className="flex flex-col items-start gap-[10px] p-[48px] rounded-[48px]
// //           [background:linear-gradient(270deg,_#EFF6FF_0%,_#FAFFF5_100%)]
// //           overflow-x-auto"
// //         >
// //           <table className="w-full text-sm border-collapse">
// //             <thead>
// //               <tr className="text-[#888D93] border-b border-[#2B1100]/40 text-left">
// //                 <th className="pb-3 font-normal text-[16px] text-black">
// //                   Module
// //                 </th>
// //                 <th className="pb-3 font-normal text-[16px] text-black">
// //                   Feature
// //                 </th>
// //                 <th className="pb-3 font-normal text-[16px] text-black w-[320px]">
// //                   Description
// //                 </th>
// //                 <th className="pb-3 font-normal text-[16px] text-black text-center">
// //                   Ready in MVP
// //                 </th>
// //                 <th className="pb-3 font-normal text-[16px] text-[#4FABFF] text-center">
// //                   Ready to Ship
// //                 </th>
// //                 <th className="pb-3 font-normal text-[16px] text-[#4FABFF] text-left">
// //                   Exact Match Effort
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {Object.entries(grouped).map(
// //                 ([moduleName, moduleFeatures], groupIdx, arr) => (
// //                   <React.Fragment key={moduleName}>
// //                     {moduleFeatures.map((f, idx) => (
// //                       <tr key={f.feature}>
// //                         {idx === 0 && (
// //                           <td
// //                             className="py-8 align-top text-black font-medium"
// //                             rowSpan={moduleFeatures.length}
// //                           >
// //                             {moduleName}
// //                           </td>
// //                         )}

// //                         <td className="py-6 font-semibold text-black">
// //                           {f.feature}
// //                         </td>
// //                         <td className="py-6 text-[#000]">{f.description}</td>

// //                         <td className="py-6 text-center">
// //                           {f.readyInMVP ? (
// //                             <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[12px] bg-[rgba(95,192,100,0.20)] mx-auto">
// //                               <svg
// //                                 xmlns="http://www.w3.org/2000/svg"
// //                                 fill="none"
// //                                 stroke="#5FC064"
// //                                 strokeWidth="2"
// //                                 className="w-5 h-5"
// //                               >
// //                                 <path d="M5 13l4 4L19 7" />
// //                               </svg>
// //                             </div>
// //                           ) : (
// //                             <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[12px] bg-[rgba(205,62,71,0.20)] mx-auto">
// //                               <svg
// //                                 xmlns="http://www.w3.org/2000/svg"
// //                                 fill="none"
// //                                 stroke="#CD3E47"
// //                                 strokeWidth="2"
// //                                 className="w-5 h-5"
// //                               >
// //                                 <path d="M6 6l12 12M6 18L18 6" />
// //                               </svg>
// //                             </div>
// //                           )}
// //                         </td>

// //                         <td className="py-6 text-center text-[#4FABFF] font-semibold">
// //                           {f.readyToShip}%
// //                         </td>

// //                         <td className="py-6 text-left">
// //                           {f.exactMatchEffort.customization}% customization
// //                           <p className="text-sm text-[#888D93]">
// //                             {f.exactMatchEffort.effort}
// //                           </p>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                     {groupIdx < arr.length - 1 && (
// //                       <tr>
// //                         <td colSpan={6}>
// //                           <div className="border-b border-[#888D93]/40 w-full"></div>
// //                         </td>
// //                       </tr>
// //                     )}
// //                   </React.Fragment>
// //                 )
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/app/store/redux/store";

// export default function FeatureMatrixMap() {
//   const { heading } = useSelector((state: RootState) => state.prompt);

//   console.log("data from feature matrix", heading);
//   // --- Parse heading as JSON data ---
//   let data;
//   try {
//     // Expecting heading to contain JSON like { "modules": [ ... ] }
//     data = typeof heading === "string" ? JSON.parse(heading) : heading;
//   } catch (err) {
//     console.error("Invalid JSON format in heading:", err);
//     data = { modules: [] };
//   }

//   // --- If no data found ---
//   if (!data?.modules || data.modules.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
//         No feature data available. Please provide valid JSON in heading.
//       </div>
//     );
//   }

//   // --- Random status generator ---
//   const generateStatus = () => ({
//     readyInMVP: Math.random() > 0.4,
//     readyToShip: Math.floor(Math.random() * 40) * 2 + 60,
//     exactMatchEffort: {
//       customization: Math.floor(Math.random() * 30),
//       effort: ["No effort", "1 week", "2 weeks", "3 weeks"][
//         Math.floor(Math.random() * 4)
//       ],
//     },
//   });

//   // --- Build features array ---
//   const features = data.modules.flatMap((mod: any) =>
//     mod.features.map((f: any) => ({
//       module: mod.name,
//       feature: f.name,
//       description: f.description,
//       ...generateStatus(),
//     }))
//   );

//   // --- Group features by module ---
//   const grouped = features.reduce((acc: Record<string, any[]>, curr) => {
//     if (!acc[curr.module]) acc[curr.module] = [];
//     acc[curr.module].push(curr);
//     return acc;
//   }, {});

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-[#ffff]"
//       style={{ fontFamily: "SF Pro, ui-sans-serif, system-ui" }}
//     >
//       <div className="flex flex-col w-[1440px] rounded-[40px] bg-white p-10 text-[#000]">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-[72px] leading-[80px] font-[400] tracking-[-1.44px] text-black">
//             Feature Matrix Map
//           </h2>
//           <p className="text-black text-[20px] mt-4 w-[80%] mx-auto">
//             Explore the dynamically loaded AI modules and features.
//           </p>
//         </div>

//         {/* Table */}
//         <div
//           className="flex flex-col items-start gap-[10px] p-[48px] rounded-[48px]
//           [background:linear-gradient(270deg,_#EFF6FF_0%,_#FAFFF5_100%)]
//           overflow-x-auto"
//         >
//           <table className="w-full text-sm border-collapse">
//             <thead>
//               <tr className="text-[#888D93] border-b border-[#2B1100]/40 text-left">
//                 <th className="pb-3 font-normal text-[16px] text-black">
//                   Module
//                 </th>
//                 <th className="pb-3 font-normal text-[16px] text-black">
//                   Feature
//                 </th>
//                 <th className="pb-3 font-normal text-[16px] text-black w-[320px]">
//                   Description
//                 </th>
//                 <th className="pb-3 font-normal text-[16px] text-black text-center">
//                   Ready in MVP
//                 </th>
//                 <th className="pb-3 font-normal text-[16px] text-[#4FABFF] text-center">
//                   Ready to Ship
//                 </th>
//                 <th className="pb-3 font-normal text-[16px] text-[#4FABFF] text-left">
//                   Exact Match Effort
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(grouped).map(
//                 ([moduleName, moduleFeatures], groupIdx, arr) => (
//                   <React.Fragment key={moduleName}>
//                     {moduleFeatures.map((f: any, idx: number) => (
//                       <tr key={f.feature}>
//                         {idx === 0 && (
//                           <td
//                             className="py-8 align-top text-black font-medium"
//                             rowSpan={moduleFeatures.length}
//                           >
//                             {moduleName}
//                           </td>
//                         )}

//                         <td className="py-6 font-semibold text-black">
//                           {f.feature}
//                         </td>
//                         <td className="py-6 text-[#000]">{f.description}</td>

//                         <td className="py-6 text-center">
//                           {f.readyInMVP ? (
//                             <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[12px] bg-[rgba(95,192,100,0.20)] mx-auto">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 stroke="#5FC064"
//                                 strokeWidth="2"
//                                 className="w-5 h-5"
//                               >
//                                 <path d="M5 13l4 4L19 7" />
//                               </svg>
//                             </div>
//                           ) : (
//                             <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[12px] bg-[rgba(205,62,71,0.20)] mx-auto">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 stroke="#CD3E47"
//                                 strokeWidth="2"
//                                 className="w-5 h-5"
//                               >
//                                 <path d="M6 6l12 12M6 18L18 6" />
//                               </svg>
//                             </div>
//                           )}
//                         </td>

//                         <td className="py-6 text-center text-[#4FABFF] font-semibold">
//                           {f.readyToShip}%
//                         </td>

//                         <td className="py-6 text-left">
//                           {f.exactMatchEffort.customization}% customization
//                           <p className="text-sm text-[#888D93]">
//                             {f.exactMatchEffort.effort}
//                           </p>
//                         </td>
//                       </tr>
//                     ))}
//                     {groupIdx < arr.length - 1 && (
//                       <tr>
//                         <td colSpan={6}>
//                           <div className="border-b border-[#888D93]/40 w-full"></div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 )
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/redux/store";

export default function FeatureMatrixMap() {
  const { tableContent, paragraph } = useSelector(
    (state: RootState) => state.prompt
  );

  console.log("data from feature matrix tableContent", tableContent);
  console.log("data from feature matrix paragraph", paragraph);

  let data;

  try {
    if (!tableContent) throw new Error("No table data received");

    // --- Clean the string if it's messy (remove markdown or code fences) ---
    let parsed;
    if (typeof tableContent === "string") {
      const cleaned = tableContent
        .replace(/```json|```/g, "") // remove markdown fences
        .replace(/[\u0000-\u001F]+/g, "") // remove control chars
        .trim();

      parsed = JSON.parse(cleaned);
    } else {
      parsed = tableContent.generatedText || tableContent;
    }

    // --- Validate parsed data structure ---
    if (!parsed?.modules) throw new Error("No modules found in parsed data");
    data = parsed;
  } catch (err) {
    console.error("Invalid JSON format in heading:", err);
    data = { modules: [] };
  }

  if (!data.modules || data.modules.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        No feature data available. Please provide valid JSON in heading.
      </div>
    );
  }

  // --- Random status generator ---
  const generateStatus = () => ({
    readyInMVP: Math.random() > 0.4,
    readyToShip: Math.floor(Math.random() * 40) * 2 + 60,
    exactMatchEffort: {
      customization: Math.floor(Math.random() * 30),
      effort: ["No effort", "1 week", "2 weeks", "3 weeks"][
        Math.floor(Math.random() * 4)
      ],
    },
  });

  // --- Build feature list ---
  const features = data.modules.flatMap((mod: any) =>
    (mod.features || []).map((f: any) => ({
      module: mod.name,
      feature: f.name,
      description: f.description,
      ...generateStatus(),
    }))
  );

  // --- Group by module ---
  const grouped = features.reduce((acc: Record<string, any[]>, curr) => {
    if (!acc[curr.module]) acc[curr.module] = [];
    acc[curr.module].push(curr);
    return acc;
  }, {});

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-[#ffff]"
      style={{ fontFamily: "SF Pro, ui-sans-serif, system-ui" }}
    >
      <div className="flex flex-col w-[1440px] rounded-[40px] bg-white p-10 text-[#000]">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[72px] leading-[80px] font-[400] tracking-[-1.44px] text-black">
            Feature Matrix Map
          </h2>
          <p className="text-black text-[20px] mt-4 w-[80%] mx-auto">
            Explore the dynamically generated AI modules and features.
          </p>
        </div>

        {/* Table */}
        <div
          className="flex flex-col items-start gap-[10px] p-[48px] rounded-[48px]
          [background:linear-gradient(270deg,_#EFF6FF_0%,_#FAFFF5_100%)]
          overflow-x-auto"
        >
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-[#888D93] border-b border-[#2B1100]/40 text-left">
                <th className="pb-3 font-normal text-[16px] text-black">
                  Module
                </th>
                <th className="pb-3 font-normal text-[16px] text-black">
                  Feature
                </th>
                <th className="pb-3 font-normal text-[16px] text-black w-[320px]">
                  Description
                </th>
                <th className="pb-3 font-normal text-[16px] text-black text-center">
                  Ready in MVP
                </th>
                <th className="pb-3 font-normal text-[16px] text-[#4FABFF] text-center">
                  Ready to Ship
                </th>
                <th className="pb-3 font-normal text-[16px] text-[#4FABFF] text-left">
                  Exact Match Effort
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(grouped).map(
                ([moduleName, moduleFeatures], groupIdx, arr) => (
                  <React.Fragment key={moduleName}>
                    {moduleFeatures.map((f: any, idx: number) => (
                      <tr key={f.feature}>
                        {idx === 0 && (
                          <td
                            className="py-8 align-top text-black font-medium"
                            rowSpan={moduleFeatures.length}
                          >
                            {moduleName}
                          </td>
                        )}
                        <td className="py-6 font-semibold text-black">
                          {f.feature}
                        </td>
                        <td className="py-6 text-[#000]">{f.description}</td>
                        <td className="py-6 text-center">
                          {f.readyInMVP ? (
                            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[12px] bg-[rgba(95,192,100,0.20)] mx-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="#5FC064"
                                strokeWidth="2"
                                className="w-5 h-5"
                              >
                                <path d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          ) : (
                            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[12px] bg-[rgba(205,62,71,0.20)] mx-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="#CD3E47"
                                strokeWidth="2"
                                className="w-5 h-5"
                              >
                                <path d="M6 6l12 12M6 18L18 6" />
                              </svg>
                            </div>
                          )}
                        </td>
                        <td className="py-6 text-center text-[#4FABFF] font-semibold">
                          {f.readyToShip}%
                        </td>
                        <td className="py-6 text-left">
                          {f.exactMatchEffort.customization}% customization
                          <p className="text-sm text-[#888D93]">
                            {f.exactMatchEffort.effort}
                          </p>
                        </td>
                      </tr>
                    ))}
                    {groupIdx < arr.length - 1 && (
                      <tr>
                        <td colSpan={6}>
                          <div className="border-b border-[#888D93]/40 w-full"></div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
