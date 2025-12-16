"use client";
import React, { useState } from "react";
import { Database, AlertCircle, Clock, FileText, Check } from "lucide-react";

const CaseStudyPage = () => {
  const [activeSection, setActiveSection] = useState("background");

  const sections = [
    { id: "background", label: "Background" },
    { id: "need", label: "The Need for MedChart" },
    { id: "solution", label: "The Solution: MedChart EMR System" },
    { id: "journey", label: "Development Journey" },
    { id: "results", label: "The Results" },
    { id: "benefits", label: "Continuing Benefits" },
    { id: "conclusion", label: "Conclusion" },
  ];

  const challenges = [
    {
      icon: (
        <img
          src="/images/Blogs/decentralizedcardicon.png"
          alt="Delayed Reporting"
          className="w-8 h-8 object-contain"
        />
      ),
      title: "Decentralized Data",
      description:
        "Patient information was scattered across spreadsheets, handwritten records, and standalone software.",
    },
    {
      icon: (
        <img
          src="/images/Blogs/medication.png"
          alt="Delayed Reporting"
          className="w-8 h-8 object-contain"
        />
      ),
      title: "Medication Management Errors",
      description:
        "Manual entry of medication orders and tracking led to frequent discrepancies and inefficiencies.",
    },
    {
      icon: (
        <img
          src="/images/Blogs/decentralizedcardicon.png"
          alt="Delayed Reporting"
          className="w-8 h-8 object-contain"
        />
      ),
      title: "Delayed Reporting",
      description:
        "Compiling daily and monthly medication reports required significant manual effort and time.",
    },
    {
      icon: (
        <img
          src="/images/Blogs/medication.png"
          alt="Delayed Reporting"
          className="w-8 h-8 object-contain"
        />
      ),
      title: "Compliance Gaps",
      description:
        "Maintaining accurate, auditable records to meet healthcare regulations was a continuous struggle.",
    },
  ];

  const sectionContent = {
    background: {
      title: "Background",
      content:
        "Healthcare operations in nursing homes are often defined by their complexity, multiple caregivers, overlapping responsibilities, and sensitive patient data spread across fragmented systems. Paper-based workflows and manual record-keeping not only slowed down operations but also increased the risk of medication errors and administrative inefficiencies.\n\nRecognizing this challenge, Chemco set out to build a tailored Electronic Medical Record (EMR) system that would bring structure, consistency, and accountability to the everyday workflows of nursing homes. Thus, MedChart was conceived as a secure, scalable, and intuitive platform designed to streamline clinical, administrative, and operational processes across multiple nursing home facilities.",
    },
    need: {
      title: "The Need for MedChart",
      content:
        "The goal was not just to digitize records but to build a single, reliable system that could connect every participant in the care cycle — ensuring real-time access, accuracy, and accountability.\n\nBefore MedChart, healthcare staff faced several recurring obstacles that hindered operational efficiency and patient safety.",
    },
    solution: {
      title: "The Solution: MedChart EMR System",
      content:
        "MedChart was designed as a comprehensive Electronic Medical Record system tailored specifically for nursing home operations. It provides a unified platform that integrates clinical, administrative, and operational workflows while ensuring data security, compliance, and ease of use across all staff members.",
    },
    journey: {
      title: "Development Journey",
      content:
        "The development of MedChart involved extensive research and collaboration with nursing home staff, healthcare professionals, and technology experts to ensure the system met real-world needs and industry standards.",
    },
    results: {
      title: "The Results",
      content:
        "Implementation of MedChart resulted in significant improvements in operational efficiency, medication management accuracy, compliance reporting, and overall patient care coordination across nursing home facilities.",
    },
    benefits: {
      title: "Continuing Benefits",
      content:
        "MedChart continues to deliver long-term benefits including reduced medication errors, improved staff communication, streamlined administrative processes, and enhanced data security and compliance.",
    },
    conclusion: {
      title: "Conclusion",
      content:
        "The transformation of nursing home management through MedChart demonstrates the power of digital precision in healthcare operations. By streamlining workflows and improving data accuracy, MedChart enables nursing homes to provide better care and operate more efficiently.",
    },
  };
  const articles = [
    {
      id: 1,
      title: "long established",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
    },
    {
      id: 2,
      title: "long established",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
    },
    {
      id: 3,
      title: "long established",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
    },
  ];
  const features = [
    {
      id: 1,
      title: "Nursing Home Management",
      icon: (
        <img
          src="/images/Blogs/checkicon.png"
          alt="Delayed Reporting"
          className="w-[30px] h-[30px] object-contain"
        />
      ),
    },
    {
      id: 2,
      title: "Patient Management & Medical History",
      icon: (
        <img
          src="/images/Blogs/checkicon.png"
          alt="Delayed Reporting"
          className="w-[30px] h-[30px] object-contain"
        />
      ),
    },
    {
      id: 3,
      title: "Order Management Automation",
      icon: (
        <img
          src="/images/Blogs/checkicon.png"
          alt="Delayed Reporting"
          className="w-[30px] h-[30px] object-contain"
        />
      ),
    },
    {
      id: 4,
      title: "Medication Change Management",
      icon: (
        <img
          src="/images/Blogs/checkicon.png"
          alt="Delayed Reporting"
          className="w-[30px] h-[30px] object-contain"
        />
      ),
    },
    {
      id: 5,
      title: "Automated Billing with Stripe",
      icon: (
        <img
          src="/images/Blogs/checkicon.png"
          alt="Delayed Reporting"
          className="w-[30px] h-[30px] object-contain"
        />
      ),
    },
    {
      id: 6,
      title: "User Management with role-based access",
      icon: (
        <img
          src="/images/Blogs/checkicon.png"
          alt="Delayed Reporting"
          className="w-[30px] h-[30px] object-contain"
        />
      ),
    },
    {
      id: 7,
      title: "Kardex Management System",
      icon: (
        <img
          src="/images/Blogs/checkicon.png"
          alt="Delayed Reporting"
          className="w-[30px] h-[30px] object-contain"
        />
      ),
    },
    {
      id: 8,
      title: "Ward Round Module",
      icon: (
        <img
          src="/images/Blogs/checkicon.png"
          alt="Delayed Reporting"
          className="w-[30px] h-[30px] object-contain"
        />
      ),
    },
    {
      id: 9,
      title: "Comprehensive Reporting (PRN, MAR, etc.)",
      icon: (
        <img
          src="/images/Blogs/checkicon.png"
          alt="Delayed Reporting"
          className="w-[30px] h-[30px] object-contain"
        />
      ),
    },
    {
      id: 10,
      title: "Prescription Module with Outlook Integration",
      icon: (
        <img
          src="/images/Blogs/checkicon.png"
          alt="Delayed Reporting"
          className="w-[30px] h-[30px] object-contain"
        />
      ),
    },
  ];
  const tableOfContents = [
    { id: 1, title: "Background" },
    { id: 2, title: "The Need for MedChart" },
    { id: 3, title: "The Solution: MedChart EMR System" },
    { id: 4, title: "Development Journey" },
    { id: 5, title: "The Results" },
    { id: 6, title: "Continuing Benefits" },
    { id: 7, title: "Conclusion" },
  ];
  const results = [
    {
      id: 1,
      title: "Improved Efficiency",
      description:
        "Administrative time spent on record-keeping and report generation has been significantly reduced.",
    },
    {
      id: 2,
      title: "Accuracy in Medication Orders",
      description:
        "Centralized management ensures consistent medication tracking and reduced human error.",
    },
    {
      id: 3,
      title: "Enhanced Collaboration",
      description:
        "Role-based portals have improved communication between nurses, doctors, and pharmacists.",
    },
    {
      id: 4,
      title: "Regulatory Compliance",
      description:
        "Automated documentation and audit trails ensure readiness for inspections and regulatory checks.",
    },
    {
      id: 5,
      title: "Financial Transparency",
      description:
        "The billing module has simplified payments, invoice tracking, and financial reconciliation.",
    },
    {
      id: 6,
      title: "Sustained Reliability",
      description:
        "Built on a scalable architecture, MedChart continues to evolve with new modules and performance upgrades.",
    },
  ];

  const benefits = [
    {
      id: 1,
      icon: (
        <img
          src="/images/Blogs/centralized.svg"
          alt="Delayed Reporting"
          className="w-6 h-6 object-contain"
        />
      ),
      title: "Source of Truth",
      description:
        "A centralized source of truth for patient care documentation.",
    },
    {
      id: 2,
      icon: (
        <img
          src="/images/Blogs/ringicon.svg"
          alt="Delayed Reporting"
          className="w-6 h-6 object-contain"
        />
      ),
      title: "Compliance Ready",
      description:
        "A compliance-ready system that meets evolving healthcare standards.",
    },
    {
      id: 3,
      icon: (
        <img
          src="/images/Blogs/colabicon.svg"
          alt="Delayed Reporting"
          className="w-6 h-6 object-contain"
        />
      ),
      title: "Operational Asset",
      description:
        "A long-term operational asset that reduces dependency on manual work and external tools.",
    },
  ];

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Hero Banner */}
      <div className="relative w-full h-96">
        {/* Background Image */}
        <div
          className="absolute inset-0  bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Blogs/image.png')",
          }}
        ></div>

        {/* Content */}
        <div className="absolute md:top-[250px] inset-0 flex flex-col items-center justify-center px-6 z-10">
          <h1 className="text-xl  md:text-3xl lg:text-4xl font-bold text-white text-center leading-tight">
            MedChart – Transforming Nursing Home <br /> Management through
            Digital Precision
          </h1>
        </div>
      </div>

      {/* Main Content Section */}

      <div className="bg-white px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 md:border-b border-[#262626] ">
            {/* Left Column - Background */}
            <div className="md:col-span-2">
              <h2 className="text-[24px] font-bold mb-4 md:pt-12">
                <span
                  className="bg-gradient-to-r from-[#297BF5] via-[#C7FC76] to-[#C7FC76] bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(140deg, rgb(41, 123, 245) 20%, rgb(199, 252, 118) 66.58%)",
                  }}
                >
                  Background
                </span>
              </h2>

              <div className="space-y-3 md:max-w-[720px] pb-4">
                <p className="text-[#000000] leading-[150%] fw-400 font-[SF Pro] text-[18px]">
                  Healthcare operations in nursing homes are often defined by
                  their complexity, multiple caregivers, overlapping
                  responsibilities, and sensitive patient data spread across
                  fragmented systems. Paper-based workflows and manual
                  record-keeping not only slowed down operations but also
                  increased the risk of medication errors and administrative
                  inefficiencies.
                </p>

                <p className="text-[#000000] leading-[150%] fw-400 font-[SF Pro] text-[18px]">
                  Recognizing this challenge, Chemco set out to build a tailored
                  Electronic Medical Record (EMR) system that would bring
                  structure, consistency, and accountability to the everyday
                  workflows of nursing homes. Thus, MedChart was conceived as a
                  secure, scalable, and intuitive platform designed to
                  streamline clinical, administrative, and operational processes
                  across multiple nursing home facilities.
                </p>
              </div>
            </div>

            {/* Right Column - Table of Contents */}
            <div className="md:col-span-1 md:border-l border-[#262626]">
              <div className="ps-8">
                <h3 className="mb-3 text-[#98989A] md:pt-16">
                  Table of Contents
                </h3>
                <div className="bg-[#3282FA] rounded-lg p-5 text-white ">
                  <ul className="space-y-1">
                    {tableOfContents.map((item) => (
                      <li key={item.id} className="flex items-start gap-3">
                        <span className="text-[#FFFFFF]  mt-0.5">•</span>
                        <a
                          href={`#${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="text-[16px] hover:text-blue-100 transition-colors text-sm leading-relaxed"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {(activeSection === "background" || activeSection === "need") && (
        <div className="mt-10 md:px-8 p-2">
          <div className="mb-8">
            <h3 className="text-[24px] font-bold mb-2 text-[#000000] font-[SF Pro]">
              The Need for
              <span
                className="font-[SF Pro] ps-1 bg-gradient-to-r from-[#297BF5] via-[#C7FC76] to-[#C7FC76] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, rgb(41, 123, 245) 35%, rgb(199, 252, 118) 66.58%)",
                }}
              >
                MedChart
              </span>
            </h3>

            <p className="text-[#000000] mb-8  font-[SF Pro] text-[18px]">
              The goal was not just to digitize records but to{" "}
              <b>build a single, reliable system</b> that could connect every
              participant in the care cycle — ensuring real-time access,
              accuracy, and accountability
            </p>
            <p className="text-[#000000] my-6 font-[SF Pro] text-[18px]">
              Before MedChart, healthcare staff faced several recurring
              obstacles:{" "}
            </p>
          </div>

          {/* Challenge Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {challenges.map((challenge, index) => (
              <div className="bg-white border border-[#E9EBF1] rounded-lg shadow-2xl p-[2.5px]">
                <div
                  key={index}
                  className="flex gap-2 md:p-12 p-6 rounded-xl  bg-[#F7F8FA]   transition-shadow duration-300 relative overflow-hidden border border-[#E9EBF1]
                "
                >
                  {/* Background Image */}
                  <div className="absolute bottom-0 right-0 max-w-45 max-h-45 min-w-20 min-h-20">
                    <img
                      src={`/images/Blogs/medchartbgimage.png`}
                      alt={challenge.title}
                      className="w-full h-full 
                    "
                    />
                  </div>

                  {/* Content */}
                  <div className="text-blue-600 mb-4 bg-white w-10 h-10 p-2 flex items-center justify-center rounded-full z-10">
                    {challenge.icon}
                  </div>
                  <div className="z-10 flex-1">
                    <h4 className="text-[21.38px] font-semibold text-[#060B13] mb-3 font-[SF Pro]">
                      {challenge.title}
                    </h4>
                    <p className="text-[#363D4F] font-[SF Pro]">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* limited communication section */}
      <section className="bg-[#DCECFF] rounded-2xl p-6 md:p-8 border border-blue-200 md:mx-8 mx-2">
        <div className="space-y-4">
          <p className="text-[#060B13] leading-relaxed text-base text-[21px] font-[SF Pro]">
            <span className="font-bold">Limited Communication:</span> Doctors,
            nurses, and pharmacists lacked a unified channel for collaboration
            and updates.
          </p>

          <p className="text-[#060B13] leading-relaxed text-base text-[21px] font-[SF Pro]">
            The goal was not just to digitize records but to build a single,
            reliable system that could connect every participant in the care
            cycle — ensuring real-time access, accuracy, and accountability.
          </p>
        </div>
      </section>
      {/* limited communication section */}

      <div className="bg-white px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* The Solution Section */}
          <div className="my-8">
            <h2 className="md:text-[24px] font-semibold mb-4 md:mt-18 font-[SF Pro]">
              <span
                className="font-[SF Pro] ps-1 bg-gradient-to-r from-[#297BF5] via-[#C7FC76] to-[#C7FC76] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, rgb(41, 123, 245) 30%, rgb(199, 252, 118) 66.58%)",
                }}
              >
                The Solution
              </span>
              <span className="text-gray-900 font-[SF Pro]">
                : MedChart EMR System
              </span>
            </h2>

            <p className="text-[#000000] leading-[150%] mb-8 text-base text-[18px] font-[SF Pro]">
              MedChart was developed as a comprehensive digital ecosystem for
              nursing home management, supporting every function from patient
              onboarding to prescription management and billing. Built using a
              Laravel (PHP) backend and a clean, responsive frontend, the
              platform integrates seamlessly into daily healthcare workflows
              without disrupting existing routines.
            </p>

            {/* Key Modules and Features */}
            <div className="bg-blue-50 rounded-lg p-2 md:p-10">
              <h3 className="text-[21.38px] font-semibold text-[#060B13] mb-3 font-[SF Pro]">
                Key Modules and Features:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {features.slice(0, 6).map((feature) => (
                  <div key={feature.id} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mt-1">
                      {feature.icon}
                    </div>
                    <p className="text-gray-800 font-medium text-base font-[SF Pro]">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {features.slice(5).map((feature) => (
                  <div key={feature.id} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mt-1">
                      {feature.icon}
                    </div>
                    <p className="text-gray-800 font-medium text-base font-[SF Pro]">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Development Journey Section */}
          <div>
            <h2 className="md:text-[24px] font-bold mb-8 font-[SF Pro]">
              <span
                className="bg-gradient-to-r from-[#297BF5] via-[#C7FC76] to-[#C7FC76] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, rgb(41, 123, 245) 60%, rgb(199, 252, 118) 66.58%)",
                }}
              >
                Development Journey
              </span>
            </h2>

            <div className="border border-[#D9D9D9] rounded-2xl p-2 md:p-10">
              <div className="space-y-6">
                <p className="text-[#000000] leading-relaxed text-base md:text-[21.38px] font-[SF Pro]">
                  The project followed an{" "}
                  <span className="font-bold">
                    Agile development methodology
                  </span>
                  , emphasizing continuous feedback, adaptability, and quality
                  assurance. Every iteration was guided by input from healthcare
                  professionals to ensure that MedChart mirrored the reality of
                  nursing home operations.
                </p>

                <p className="text-gray-800 leading-relaxed text-base md:text-[21.38px]  font-[SF Pro]">
                  Testing was rigorous, covering integration, regression, and
                  user acceptance phases to guarantee stability and compliance.
                  Tools like JIRA and Excel were used for bug tracking and
                  progress reporting, while daily coordination took place
                  through Microsoft Teams to ensure alignment between the
                  development and client teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* The Results Section */}
          <div className="mb-20">
            <h2 className="text-[24px] text-black  font-bold mb-4 md:mt-8 font-[SF Pro]">
              The Results
            </h2>
            <p className="text-[#000000] mb-6 text-base md:text-[*:] font-[SF Pro]">
              Since its deployment, MedChart has transformed the way Chemco and
              its partnered nursing homes operate:
            </p>

            {/* Results Grid */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((result) => (
                <div
                  key={result.id}
                  className={`relative rounded-lg p-6 md:p-8 border border-gray-100 
    ${result.id === 3 || result.id === 4 ? "bg-[#F6F7FA]" : "bg-blue-50"}
  `}
                >
                  <div className="absolute bottom-0 right-0 max-w-45 max-h-45 min-w-20 min-h-20">
                    <img
                      src={`/images/Blogs/medchartbgimage.png`}
                      className="w-full h-full 
                    "
                    />
                  </div>
                  <div className="z-10">
                    <h3 className="z-10 md:text-[21.38px] font-semibold text-[#060B13] mb-3 font-[SF Pro]">
                      {result.title}
                    </h3>
                    <p className="text-[#363D4F] text-[18px] z-10 text-base leading-[32px] font-[SF Pro]">
                      {result.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continuing Benefits Section */}
          <div>
            <h2 className="text-[#000000] md:text-[24px] font-semibold mb-4 font-[SF Pro]">
              Continuing Benefits
            </h2>
            <p className="text-[#000000] mb-10 text-base md:text-[21.38px] font-[SF Pro]">
              Years after its implementation, MedChart remains a cornerstone of
              Chemco's digital healthcare operations. Its modular design allows
              continuous enhancement, while the data-driven structure supports
              better decision-making and planning across nursing home
              facilities.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex items-center md:items-start gap-4"
                >
                  <div className="text-blue-600 mb-4 bg-[#E9EBF1] w-16 h-10   flex items-center justify-center rounded-full z-10">
                    {benefit.icon}
                  </div>
                  <p className="text-[#060B13] text-center md:text-left text-[14px] leading-relaxed font-[SF Pro]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* Conclusion Header */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-2 md:p-12 border border-gray-800">
            <h1 className="text-4xl md:text-[48px] font-bold text-center mb-6 text-[#C9FD74] font-[SF Pro]">
              Conclusion
            </h1>
            <p className="text-[#C8C6D3] text-[21px] leading-relaxed mb-6 text-center md:px-13 font-[SF Pro]">
              MedChart is not just a digital transformation initiative - it's a
              sustained operational shift that redefines how nursing homes
              manage care, compliance, and coordination. What began as a
              solution to fragmented data has evolved into a strategic backbone
              for Chemco's healthcare management operations.
            </p>
            <p className="text-[#FFFFFF] text-[21px] italic text-center font-semibold font-[SF Pro]">
              "Empowering healthcare professionals with the tools they need to
              provide better care, every single day."
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="shadow-lg rounded overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-[#2D3748] text-[20px] font-bold mb-3 font-[SF Pro]">
                    {article.title}
                  </h2>
                  <p className="text-[#718096] text-[14px] leading-[100%] font-normal mb-6 font-[SF Pro]">
                    {article.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#718096] text-[12px] font-[SF Pro] font-normal">
                      {article.date}
                    </span>
                    <button className="text-[#2D3748] text-[12px] font-bold tracking-wider transition-colors">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
