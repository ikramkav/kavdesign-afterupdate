"use client";
import { useState } from "react";

export default function SmartSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<any>(null);

  const dataMap = {
    "Predictive Analytics & Data Science": {
      keywords: [
        "Predictive analytics solutions",
        "Data science services",
        "Business intelligence dashboards",
        "Data engineering & pipelines",
        "Customer churn prediction",
        "Sales forecasting models",
        "Fraud detection analytics",
        "Demand planning algorithms",
        "Enterprise data strategy",
        "Data warehouse modernization",
      ],
      modules: [
        {
          name: "Data Engineering & Pipelines",
          features: [
            {
              name: "Automated ETL",
              description:
                "Automated workflows for extracting, cleaning, and transforming data.",
            },
            {
              name: "Real-time Streaming",
              description:
                "Stream data from apps, sensors, and events in real time.",
            },
            {
              name: "Data Quality Monitoring",
              description:
                "Monitor data anomalies, missing values, and schema drift.",
            },
          ],
        },
        {
          name: "Business Intelligence",
          features: [
            {
              name: "KPI Dashboards",
              description:
                "Interactive dashboards for operations, sales, HR, and finance.",
            },
            {
              name: "Self-Service Analytics",
              description:
                "Users can explore, filter, and segment data independently.",
            },
            {
              name: "Multi-Department BI",
              description: "Unified analytics across business functions.",
            },
          ],
        },
        {
          name: "Predictive Modeling",
          features: [
            {
              name: "Forecasting Models",
              description: "Sales, demand, revenue, inventory forecasting.",
            },
            {
              name: "Churn & Behavior Prediction",
              description:
                "Identify customer intent, risk, and behavior patterns.",
            },
            {
              name: "Risk & Fraud Analytics",
              description:
                "Detect anomalies, fraud attempts, and risky patterns.",
            },
          ],
        },
        {
          name: "Governance & Security",
          features: [
            {
              name: "Access Control",
              description: "Role-based permissions and dataset rules.",
            },
            {
              name: "Compliance Layer",
              description:
                "Align analytics with enterprise compliance standards.",
            },
            {
              name: "Audit Logs",
              description: "Track model usage, access, and actions.",
            },
          ],
        },
      ],
    },

    "Machine Learning Development": {
      keywords: [
        "ML model development",
        "AI model training",
        "Supervised learning models",
        "Unsupervised clustering",
        "Reinforcement learning systems",
        "Anomaly detection machine learning",
        "Model lifecycle management",
        "ML Ops & monitoring",
        "Model deployment at scale",
        "Custom AI development",
      ],
      modules: [
        {
          name: "Data Preparation",
          features: [
            {
              name: "Data Cleaning & Structuring",
              description: "Prepare raw data into usable formats.",
            },
            {
              name: "Feature Engineering",
              description:
                "Create derived attributes for better model accuracy.",
            },
            {
              name: "Validation Pipelines",
              description: "Ensure valid schema and safe ingestion.",
            },
          ],
        },
        {
          name: "Model Development",
          features: [
            {
              name: "Multi-Algorithm Modeling",
              description:
                "Build supervised, unsupervised, RL, or deep learning models.",
            },
            {
              name: "Experimentation Framework",
              description: "Compare thousands of model variations.",
            },
            {
              name: "Hyperparameter Tuning",
              description: "Optimize model performance using auto-search.",
            },
          ],
        },
        {
          name: "Deployment & ML Ops",
          features: [
            {
              name: "API Deployment",
              description: "Host models with live inference endpoints.",
            },
            {
              name: "CI/CD for Models",
              description: "Automated deployment for ML pipelines.",
            },
            {
              name: "Monitoring & Logging",
              description: "Track model accuracy, latency, and anomalies.",
            },
          ],
        },
        {
          name: "Maintenance",
          features: [
            {
              name: "Drift Detection",
              description: "Identify when model performance declines.",
            },
            {
              name: "Auto Retraining",
              description: "Automatic model refresh based on new data.",
            },
            {
              name: "Continuous Learning",
              description: "Models that adapt and evolve over time.",
            },
          ],
        },
      ],
    },

    "AI-Powered Communication & Automation": {
      keywords: [
        "AI chatbot development",
        "Conversational AI services",
        "AI dialer software",
        "Speech analytics solutions",
        "Automated call grading",
        "Voice AI for customer service",
        "Lead conversion automation",
        "Sales enablement AI",
        "Interaction analytics",
        "Customer support automation",
      ],
      modules: [
        {
          name: "Conversational AI",
          features: [
            {
              name: "Chatbot Development",
              description: "AI chatbots for support, sales, onboarding.",
            },
            {
              name: "Multi-turn Conversations",
              description: "Maintain context across complex dialogues.",
            },
            {
              name: "NLP Understanding",
              description: "Extract intent, sentiment, and meaning.",
            },
          ],
        },
        {
          name: "Voice & Call Automation",
          features: [
            {
              name: "AI Dialers",
              description: "Intelligent outbound calling engines.",
            },
            {
              name: "Voice AI Agents",
              description: "Automated voice agents for calls.",
            },
            {
              name: "Call Grading",
              description:
                "Score calls automatically based on quality and outcome.",
            },
          ],
        },
        {
          name: "Speech Analytics",
          features: [
            {
              name: "Transcription Engine",
              description: "Convert calls to searchable text.",
            },
            {
              name: "Keyword Detection",
              description: "Identify terms related to compliance or intent.",
            },
            {
              name: "Behavioral Metrics",
              description: "Track tone, interruptions, talk-time, engagement.",
            },
          ],
        },
        {
          name: "Performance & Conversion",
          features: [
            {
              name: "Conversion Tracking",
              description: "Measure lead success rates.",
            },
            {
              name: "Funnel Intelligence",
              description: "Identify drop-offs in the customer journey.",
            },
            {
              name: "Automated Insights",
              description: "AI-generated suggestions to improve conversions.",
            },
          ],
        },
      ],
    },

    "AI 3D Virtual Real Estate Tours": {
      keywords: [
        "AI 3D property tours",
        "Virtual real estate walkthroughs",
        "3D real estate visualization",
        "Interactive property tours",
        "Computer vision real estate tools",
        "Real estate automation",
        "AI-powered narration for listings",
        "Immersive property marketing",
        "3D scanning & reconstruction",
        "Virtual staging automation",
      ],
      modules: [
        {
          name: "3D Tour Engine",
          features: [
            {
              name: "Standard Tours",
              description:
                "Basic 3D walkthroughs generated from scans or images.",
            },
            {
              name: "Smart Navigation",
              description: "AI-guided tour path & transitions.",
            },
            {
              name: "Interactive Elements",
              description: "Infographics, hotspots, room information.",
            },
          ],
        },
        {
          name: "AI Media Generation",
          features: [
            {
              name: "Automated Narration",
              description: "AI voiceover describing property features.",
            },
            {
              name: "Listing Video Generation",
              description: "Auto-create listing highlight videos.",
            },
            {
              name: "Multi-language Support",
              description: "Narration & text in multiple languages.",
            },
          ],
        },
        {
          name: "Analytics Suite",
          features: [
            {
              name: "User Heatmaps",
              description: "Show most-viewed rooms/areas.",
            },
            {
              name: "Interaction Metrics",
              description: "Visitor counts, dwell time, navigation patterns.",
            },
            {
              name: "Buyer Interest Score",
              description: "AI predicts which listings will perform best.",
            },
          ],
        },
        {
          name: "Branding & Integrations",
          features: [
            {
              name: "White-Label Branding",
              description: "Custom brand elements for agencies.",
            },
            {
              name: "Website Embeds",
              description: "Embed 3D tours easily into property listings.",
            },
            {
              name: "CRM Integration",
              description: "Sync buyer data and leads into CRM.",
            },
          ],
        },
      ],
    },

    "Augmented Reality (AR) & Unity Development": {
      keywords: [
        "AR development services",
        "Unity 3D development",
        "Interactive AR experiences",
        "Product visualization AR",
        "AR training simulations",
        "Cross-platform XR development",
        "Real-time 3D configurators",
        "AR for education",
        "AI-powered AR applications",
        "Spatial computing solutions",
      ],
      modules: [
        {
          name: "AR Development",
          features: [
            {
              name: "Marker-Based AR",
              description: "AR triggered via QR codes or images.",
            },
            {
              name: "Markerless AR",
              description: "Environment-aware AR using spatial detection.",
            },
            {
              name: "WebAR",
              description: "Browser-based AR without app installation.",
            },
          ],
        },
        {
          name: "Unity 3D Development",
          features: [
            {
              name: "Interactive Scenes",
              description: "Build 3D immersive environments.",
            },
            {
              name: "Gamification",
              description: "Add scoring, levels, and user engagement.",
            },
            {
              name: "Multi-Platform Build",
              description: "Deploy to iOS, Android, Windows, macOS, VR.",
            },
          ],
        },
        {
          name: "Product Visualization",
          features: [
            {
              name: "3D Configurators",
              description: "Real-time product customization tools.",
            },
            {
              name: "Physics Simulation",
              description: "Realistic object movement and behavior.",
            },
            {
              name: "AI-Assisted Interactions",
              description: "System suggests actions based on user behavior.",
            },
          ],
        },
        {
          name: "Training & Education",
          features: [
            {
              name: "Guided Simulations",
              description: "Step-by-step AR training modules.",
            },
            {
              name: "Assessment Mode",
              description: "Evaluate performance within the simulation.",
            },
            {
              name: "LMS Integration",
              description: "Works with corporate learning systems.",
            },
          ],
        },
      ],
    },

    "Data Visualization & BI (Power BI, Tableau, Sigma)": {
      keywords: [
        "Data visualization services",
        "Business intelligence development",
        "Enterprise BI dashboards",
        "Interactive analytics solutions",
        "Self-service analytics",
        "KPI dashboard development",
        "Real-time reporting systems",
        "Cross-platform BI consulting",
        "Embedded analytics solutions",
        "Power BI dashboard development",
        "Power BI data modeling",
        "DAX calculations & optimization",
        "Power BI embedded analytics",
        "Power BI governance & workspace setup",
        "Power BI performance tuning",
        "Power BI cloud + on-premises hybrid setup",
        "Paginated report creation",
        "Tableau dashboard design",
        "Tableau data storytelling",
        "Tableau visual analytics",
        "Tableau Prep data pipelines",
        "Tableau Server deployment",
        "Tableau cloud dashboards",
        "Tableau KPI scorecards",
        "Advanced Tableau calculations",
        "Sigma dashboard development",
        "Sigma + Snowflake analytics",
        "Sigma spreadsheets-as-visuals",
        "Real-time data exploration",
        "Collaborative BI with Sigma",
        "SQL + spreadsheet hybrid modeling",
        "Sigma governance & access control",
      ],
      modules: [
        {
          name: "Data Integration",
          features: [
            {
              name: "Standard Data Sources",
              description: "Connect to Excel, CSV, SQL, APIs.",
            },
            {
              name: "Cloud Connections",
              description: "Salesforce, HubSpot, Snowflake, GA4, etc.",
            },
            {
              name: "Real-Time Data",
              description: "Live dashboards using streaming datasets.",
            },
          ],
        },
        {
          name: "Data Modeling",
          features: [
            {
              name: "Semantic Modeling",
              description: "KPIs, hierarchies, business calculations.",
            },
            {
              name: "Star Schema Design",
              description: "Performance-optimized datasets.",
            },
            {
              name: "Reusable Measures",
              description: "Centralized & reusable KPI definitions.",
            },
          ],
        },
        {
          name: "Dashboards & Visuals",
          features: [
            {
              name: "Interactive Dashboards",
              description: "Multi-page KPI dashboards.",
            },
            {
              name: "Drill-down Analysis",
              description: "Click-through breakdown to row-level.",
            },
            {
              name: "Data Storytelling",
              description: "Narrative-driven visual insights.",
            },
          ],
        },
        {
          name: "Analytics",
          features: [
            {
              name: "Advanced DAX / LOD",
              description: "Complex BI calculations and logic.",
            },
            {
              name: "Predictive Charts",
              description: "Forecasting and time-series visuals.",
            },
            {
              name: "Custom Visuals",
              description: "Maps, sankey, gauges, funnels, etc.",
            },
          ],
        },
        {
          name: "Security & Governance",
          features: [
            {
              name: "Role-Based Access",
              description: "Control visibility per user role.",
            },
            {
              name: "Row-Level Security",
              description: "Restrict data dynamically per user.",
            },
            {
              name: "Audit & Compliance",
              description: "Data lineage, logs, workspace management.",
            },
          ],
        },
        {
          name: "Collaboration & Automation",
          features: [
            {
              name: "Scheduled Reporting",
              description: "Auto-send dashboards and summaries.",
            },
            {
              name: "Commenting & Notes",
              description: "Team collaboration inside BI tools.",
            },
            {
              name: "Embedded BI",
              description: "Add dashboards into apps, portals, products.",
            },
          ],
        },
      ],
    },
  };

  const allKeywords = Object.entries(dataMap).flatMap(([category, data]) =>
    data.keywords.map((kw) => ({ keyword: kw, category }))
  );

  const handleSearch = (val: string) => {
    setQuery(val);
    if (val.trim() === "") {
      setSuggestions([]);
      return;
    }
    const filtered = allKeywords
      .filter((item) => item.keyword.toLowerCase().includes(val.toLowerCase()))
      .map((item) => item.keyword);
    setSuggestions(filtered);
  };

  const handleSelect = (kw: string) => {
    setQuery(kw);
    setSuggestions([]);
    const found = allKeywords.find((item) => item.keyword === kw);
    if (found) setSelectedKeyword(dataMap[found.category]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">
        🔍 Smart Service Finder
      </h2>

      <input
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Type a keyword like 'data science'..."
        className="w-full border bg-blue-500 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring focus:ring-blue-300"
      />

      {suggestions.length > 0 && (
        <ul className="border rounded-md bg-black  shadow-md">
          {suggestions.map((s, i) => (
            <li
              key={i}
              onClick={() => handleSelect(s)}
              className="px-4 py-2 hover:bg-blue-500 cursor-pointer"
            >
              {s}
            </li>
          ))}
        </ul>
      )}

      {selectedKeyword && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-600">
            Category:{" "}
            {
              Object.entries(dataMap).find(
                ([_, v]) => v === selectedKeyword
              )?.[0]
            }
          </h3>

          {selectedKeyword.modules.map((mod, i) => (
            <div key={i} className="mt-4 border rounded-lg p-4 bg-blue-500">
              <h4 className="font-semibold text-gray-800">{mod.name}</h4>
              <table className="w-full mt-2 border-t border-gray-200 text-sm">
                <tbody>
                  {mod.features.map((f, j) => (
                    <tr key={j} className="border-b border-gray-200">
                      <td className="py-2 font-medium text-gray-700 w-1/3">
                        {f.name}
                      </td>
                      <td className="py-2 text-gray-600">{f.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
