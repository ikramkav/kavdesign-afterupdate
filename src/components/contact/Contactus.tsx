"use client";
import { useState } from "react";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "technology",
    "business",
    "design",
  ]);

  const cardsData = [
    {
      id: 1,
      title: "Message Us",
      description:
        "Get in touch with us via email. We'll respond to your inquiries within 24 hours.",
      category: "technology",
      icon: "message",
      contactInfo: "sanfrancisco@oteka.co",
    },
    {
      id: 2,
      title: "Call Us",
      description:
        "Prefer to talk? Reach out to our team directly during business hours.",
      category: "business",
      icon: "call",
      contactInfo: "+1 (555) 123-4567",
    },
    {
      id: 3,
      title: "Visit Us",
      description:
        "Come visit our office. We'd love to meet you in person and discuss your needs.",
      category: "design",
      icon: "location",
      contactInfo: "123 Business Ave, San Francisco, CA",
    },
  ];

  const filterOptions = [
    { id: "technology", label: "Lorem ipsum dolor sit amet." },
    { id: "business", label: "Lorem ipsum dolor sit amet." },
    { id: "design", label: "Lorem ipsum dolor sit amet." },
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((item) => item !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredCards = cardsData.filter((card) =>
    selectedFilters.includes(card.category)
  );

  // Function to render icons
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "message":
        return (
          <img
            src="/images/Contact/msgicon.png"
            alt="Delayed Reporting"
            className="w-6 h-6 object-contain"
          />
        );
      case "call":
        return (
          <img
            src="/images/Contact/callicon.png"
            alt="Delayed Reporting"
            className="w-6 h-6 object-contain"
          />
        );
      case "location":
        return (
          <img
            src="/images/Contact/locationicon.png"
            alt="Delayed Reporting"
            className="w-6 h-6 object-contain"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="container py-8 mt-8 h-full w-full bg-cover"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        backgroundImage: "url('/images/Contact/bggradient.png')",
      }}
    >
      {/* Cards Section */}
      <div className="container">
        {/* Heading Section */}
        <div className="flex justify-center align-items-center pt-15">
          <button className="bg-[#FFE785] hover:bg-[#FFE785] text-[#0D0C10] py-1 px-2 rounded-lg">
            Contact Us
          </button>
        </div>

        <div className="text-center">
          <h1 className="md:text-[60px] text-[40px] font-semibold text-[#0D0C10] my-4 font-sfpro">
            Contact our Team
          </h1>
          <p className="text-[18px] text-[#0D0C10] leading-[24px] max-w-2xl mx-auto  md:w-[44vw] font-sfpro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
            enim lacus. Nullam congue blandit quam, sit amet.
          </p>
        </div>

        {/* Filter Checkboxes */}
        <div className="flex justify-center gap-6 my-8">
          {filterOptions.map((filter) => (
            <div key={filter.id} className="flex items-center">
              <input
                type="checkbox"
                id={filter.id}
                checked={selectedFilters.includes(filter.id)}
                onChange={() => toggleFilter(filter.id)}
                className="h-5 w-5 text-black border-gray-300 rounded focus:ring-black focus:ring-2"
              />
              <label
                htmlFor={filter.id}
                className="ml-2 text-sm font-medium text-gray-900"
              >
                {filter.label}
              </label>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:mx-15 mx-8 md:mt-12">
          {filteredCards.slice(0, 3).map((card) => (
            <div
              key={card.id}
              className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center mb-4 pt-20">
                  <h5 className="text-3xl font-bold tracking-tight text-[#0D0C10] font-sfpro">
                    {card.title}
                  </h5>
                </div>
                <p className="text-gray-500 mt-2 text-[3vw] md:text-sm leading-snug font-sfpro">
                  {card.description}
                </p>
                <div className="flex items-center pt-8">
                  <div className="flex items-center text-gray-600">
                    <div className="rounded-sm mr-2">
                      {renderIcon(card.icon)}
                    </div>
                    <span className="text-sm font-medium">
                      {card.contactInfo}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No cards match the selected filters. Please try different
              categories.
            </p>
          </div>
        )}
      </div>

      {/* Contact Form Section */}
      <div className="flex justify-center align-items-center md:pt-40 pt-10">
        <button className="bg-[#FFE785] hover:bg-[#FFE785] text-[#0D0C10] py-1 px-2 rounded-lg">
          Contact Us
        </button>
      </div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="md:p-2">
            <div className="flex justify-between align-center flex-col">
              <h2 className="md:text-[40px] text-[30px] font-semibold text-center text-[#0D0C10] mb-5 font-sfpro">
                Leave our team a message
              </h2>
              <p className="text-[#0D0C10] font-sfpro text-[16px] leading-[24px] text-center mb-8 md:px-[60px] font-weight-400">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white text-gray-900"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white text-gray-900"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white text-gray-900"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white text-gray-900"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white text-gray-900"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white text-gray-900"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {/* Terms agreement */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
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
}
