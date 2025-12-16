"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const AboutUsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const teamMembers = [
    {
      id: 1,
      name: "Jenny Wilson",
      image: "/images/Aboutus/jeny.png",
    },
    {
      id: 2,
      name: "Eleanor Pena",
      image: "/images/Aboutus/Eleanor.png",
    },
    {
      id: 3,
      name: "Robert Fox",
      image: "/images/Aboutus/Robert.png",
    },
    {
      id: 4,
      name: "Rachel Green",
      image: "/images/Aboutus/jeny.png",
    },
    {
      id: 5,
      name: "Michael Brown",
      image: "/images/Aboutus/jeny.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  // Calculate visible slides (4 at a time)
  const visibleSlides = [];
  for (let i = 0; i < 3; i++) {
    visibleSlides.push(teamMembers[(currentSlide + i) % teamMembers.length]);
  }

  const aboutData = {
    header: {
      title: "About Us",
      subtitle: "Where Passion Meets Purpose",
      subtitleBlue: "Where Passion",
      subtitleGreen: "Meets Purpose",
    },
    story: {
      text: "In 2014, two minds met in Lahore with a shared conviction: data held untapped power to reshape industries, solve complex problems, and unlock human potential. Afaq Ahmad and Waqas founded Kayteck Solutions on this belief, building a company dedicated to transforming raw data into strategic intelligence that drives real-world impact.\nWhat started as a vision in Pakistan has evolved into a multinational presence spanning Lahore and Los Angeles. Today, Kayteck Solutions stands at the intersection of AI innovation and practical business solutions, helping organizations worldwide turn their data challenges into competitive advantages.",
    },
    sections: [
      {
        id: 1,
        title: "Our Foundation",
        titleBlue: "Our Found",
        titleGreen: "ation",
        content:
          "We build long-term partnerships with startups and enterprises through trust, collaboration, and shared growth. By understanding each partner's goals and challenges, we craft tailored solutions that drive innovation, scalability, and lasting impact. Our mission is to grow together and reach new heights of success. Each collaboration is rooted in transparency and a shared vision for progress, ensuring mutual value at every stage. Together, we turn ambitious ideas into lasting achievements.",
      },
    ],
  };

  return (
    <div className="">
      <div className="">
        {/* Background Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10  md:px-6 px-3 pt-30 ">
          {/* Header */}
          <div className="text-center mb-16 md:w-[954px] mx-auto">
            <h1 className="text-4xl font-semibold text-[#262626] mb-4 font-[SF Pro] md:text-[60px] text-[40px]">
              {aboutData.header.title}
            </h1>
            <h3 className="font-semibold mb-2 text-[#000000] md:text-[60px] text-[40px] font-[SF Pro]">
              <span
                className="font-[SF Pro] ps-1 bg-gradient-to-r from-[#297BF5] via-[#C7FC76] to-[#C7FC76] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, rgb(41, 123, 245) 35%, rgb(199, 252, 118) 66.58%)",
                }}
              >
                Where Passion Meets Purpose
              </span>
              <div className="w-full h-[3px] bg-[#F0F0F0] mt-6"></div>
            </h3>
          </div>

          {/* Story Section */}
          <div className="mb-16 md:w-[954px] flex jus\tify-center mx-auto">
            <p className="text-[#000000] leading-relaxed text-base whitespace-pre-wrap font-[SF Pro] text-[20px]">
              {aboutData.story.text}
            </p>
          </div>

          {/* Sections Map */}
          {aboutData.sections.map((section) => (
            <div
              key={section.id}
              className="flex justify-center  flex-col mb-16 md:w-[954px] mx-auto"
            >
              {/* Section Title */}
              <h3 className="md:text-[60px] text-[40px] font-semibold mb-2 text-[#000000] font-[SF Pro] ">
                <span
                  className="ps-1 font-[SF Pro] bg-gradient-to-r from-[#297BF5] via-[#C7FC76] to-[#C7FC76] bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(140deg, rgb(41, 123, 245) 35%, rgb(199, 252, 118) 66.58%)",
                  }}
                >
                  {section.title}
                </span>
              </h3>
              <div className="w-full h-[3px] bg-[#F0F0F0] mt-1"></div>
              {/* Section Content */}
              <p className="text-[#000000] font-[SF Pro] leading-relaxed text-base whitespace-pre-wrap md:pt-10 md:text-[20px]">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-start mb-16 md:w-[954px] mx-auto ">
        <h3 className="md:text-[60px] text-4xl font-[SF Pro] font-semibold mb-2 text-[#000000]">
          <span
            className="font-[SF Pro] ps-1 bg-gradient-to-r from-[#297BF5] via-[#C7FC76] to-[#C7FC76] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(140deg, rgb(41, 123, 245) 35%, rgb(199, 252, 118) 66.58%)",
            }}
          >
            Our Vision
          </span>
        </h3>
        <p className="text-[#000000] font-[SF Pro] leading-relaxed text-base whitespace-pre-wrap md:pt-10 md:text-[20px]">
          To become a trusted global partner for startups and enterprises,
          empowering them to transform ideas into impactful digital realities.
          We envision a future where innovation, design, and technology come
          together seamlessly to create meaningful user experiences and
          sustainable growth. By continuously evolving and adapting to new
          challenges, we strive to set new standards of creativity and
          excellence that inspire progress across industries.
        </p>
        <div className="w-full h-[3px] bg-[#F0F0F0] mt-2"></div>
      </div>

      {/* Header Section */}
      <div className="pt-20 pb-16 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-[60px] font-semibold text-[#000000] font-[SF Pro] mb-3">
          We are here for you
        </h1>
        <p className="md:text-[60px] text-4xl font-semibold mb-2 text-[#000000] font-[SF Pro]">
          <span
            className="font-[SF Pro] ps-1 bg-gradient-to-r from-[#297BF5] via-[#C7FC76] to-[#C7FC76] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(140deg, rgb(41, 123, 245) 35%, rgb(199, 252, 118) 66.58%)",
            }}
          >
            no matter where you are
          </span>
        </p>
        <div className="flex w-[70%] h-[3px] bg-[#F0F0F0] mt-6"></div>
      </div>

      {/* World Map Section */}
      <div className="relative w-full max-w-4xl px-8 mx-auto mb-20 h-96">
        <Image
          src="/images/Aboutus/WorldMap.png"
          alt="World Map"
          fill
          className="object-cover"
        />
      </div>

      {/* Team Section */}
      <div className="pb-10">
        <h3 className="md:text-[60px] text-4xl font-[SF Pro] font-semibold mb-2 text-[#000000] text-center">
          <span
            className="font-[SF Pro] ps-1 bg-gradient-to-r from-[#297BF5] via-[#C7FC76] to-[#C7FC76] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(140deg, rgb(41, 123, 245) 35%, rgb(199, 252, 118) 66.58%)",
            }}
          >
            Our Success Team
          </span>
        </h3>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto px-4 pt-10">
          {/* Team Members Grid */}
          <div className="flex gap-4 mb-8 justify-center">
            {visibleSlides.map((member, index) => (
              <div
                key={member.id}
                className={`flex-1 max-w-xs transition-all duration-300 `}
              >
                <div className="rounded-lg overflow-hidden  h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-bold text-[#262626] mt-4 md:text-xl">
                  {member.name}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-300 transition-colors duration-200"
              aria-label="Previous slide"
            >
              {/* <ChevronLeft className="w-6 h-6 text-gray-700" /> */}
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-b from-[#C7FC76] via-[#297BF5] to-[#297BF5]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-2 rounded-full  hover:bg-gray-300 transition-colors duration-200"
              aria-label="Next slide"
            >
              {/* <ChevronRight className="w-6 h-6 text-gray-700" /> */}
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex justify-center align-items-center pt-10">
        <button className="bg-[#FFE785] hover:bg-[#FFE785] text-[#0D0C10] py-1 px-2 rounded-lg">
          Contact Us
        </button>
      </div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="md:p-2">
            <div className="flex justify-between align-center flex-col">
              <h2 className="md:text-[40px] text-2xl font-semibold text-center text-[#0D0C10] mb-2 font-sfpro">
                Leave our team a message
              </h2>
              <p className="text-[#0D0C10] font-sfpro text-[16px] text-center mb-8 md:px-[60px] font-weight-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                non enim lacus. Nullam congue blandit quam, sit amet scelerisque
                turpis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#0D0C10] text-[14px] font-sfpro mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full shadow-[0px_4px_20px_#0D0C100A,_0px_8px_30px_#0D0C100F] px-4 py-2 border-2 border-[#CCCCCC] rounded-xl text-gray-900"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[#0D0C10] text-[14px] font-sfpro mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full shadow-[0px_4px_20px_#0D0C100A,_0px_8px_30px_#0D0C100F] px-4 py-2 border-2 border-[#CCCCCC] rounded-xl text-gray-900"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#0D0C10] text-[14px] font-sfpro mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full shadow-[0px_4px_20px_#0D0C100A,_0px_8px_30px_#0D0C100F] px-4 py-2 border-2 border-[#CCCCCC] rounded-xl text-gray-900"
                  placeholder="you@example.com"
                  required
                />
              </div>
              {/* Phone field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#0D0C10] text-[14px] font-sfpro mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full shadow-[0px_4px_20px_#0D0C100A,_0px_8px_30px_#0D0C100F] px-4 py-2 border-2 border-[#CCCCCC] rounded-xl text-gray-900"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Company field */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[#0D0C10] text-[14px] font-sfpro mb-1"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full shadow-[0px_4px_20px_#0D0C100A,_0px_8px_30px_#0D0C100F] px-4 py-2 border-2 border-[#CCCCCC] rounded-xl text-gray-900"
                  placeholder="Your Company Inc."
                />
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#0D0C10] text-[14px] font-sfpro mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full shadow-[0px_4px_20px_#0D0C100A,_0px_8px_30px_#0D0C100F] px-4 py-2 border-2 border-[#CCCCCC] rounded-xl text-gray-900"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {/* Terms agreement */}
              <div className="flex items-center ms-1">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-5 w-5  rounded-4xl bg-[#FFFFFF] border-2 border-[#CCCCCC] text-gray-900"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-[#0D0C10] font-semibold text-[18px] font-[sf pro]"
                >
                  I Agree to the Privacy Policy
                </label>
              </div>

              {/* Send button */}
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
