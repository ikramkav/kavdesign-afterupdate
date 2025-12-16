import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] text-gray-400 py-16 px-10 md:px-24 relative">
      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="mb-4 md:mb-0">
          <h2 className="text-white font-semibold text-lg mb-2">
            Subscribe to our newsletter for updates:
          </h2>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div
          className="inline-flex items-center flex-shrink-0"
          style={{
            height: "44px",
            padding: "13.5px 0 13.5px 17px",
            borderRadius: "12px",
            border: "1px solid #201E28",
            background: "#0D0C10",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-[#0D0C10] border-none text-white focus:outline-none"
          />
          <button
            className="flex justify-center items-center flex-shrink-0 gap-1 font-medium whitespace-nowrap"
            style={{
              width: "146.02px",
              height: "36px",
              padding: "10px 20px",
              borderRadius: "39px",
              background: "linear-gradient(315deg, #025ADC 0%, #3282FA 100%)",
              color: "#FFF",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "20px",
              boxShadow:
                "inset 0 0.5px 0 0 rgba(255, 255, 255, 0.32), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.32)",
            }}
          >
            Get Started - it's free
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-20 mb-10  ">
        {/* Logo */}
        <div className="flex flex-col items-start gap-10">
          <div className="mb-4">
            <Image
              src="/images/Logo/logo.png"
              alt="Kavtech"
              width={135}
              height={29}
            />
          </div>
          <div>
            <div className="flex space-x-3 mb-4 gap-3">
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
            <div
              className="flex flex-col justify-center flex-shrink-0"
              style={{
                width: "228.72px",
                height: "35px",
                color: "#878493",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "20px",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vehicula.
              </p>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 ml-20">
          <div>
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <ul className="space-y-5 text-sm ">
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li className="flex items-center gap-2">
                Contact
                <span
                  className="flex gap-5 justify-start items-center relative"
                  style={{
                    width: "30.301px",
                    height: "24px",
                    color: "#FFF",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333px"
                    height="13.333px"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="absolute"
                  >
                    <path
                      d="M6.66667 13.3333C10.3486 13.3333 13.3333 10.3486 13.3333 6.66667C13.3333 2.98477 10.3486 0 6.66667 0C2.98477 0 0 2.98477 0 6.66667C0 10.3486 2.98477 13.3333 6.66667 13.3333Z"
                      fill="#9585FF"
                      fillOpacity="0.16"
                    />
                  </svg>
                  <span
                    style={{ position: "relative", zIndex: 1, marginLeft: 20 }}
                  >
                    New
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-5 text-sm">
              <li>Startup Support</li>

              <li className="flex items-center gap-2">
                Growth AI
                <span
                  className="flex gap-5 justify-start items-center relative"
                  style={{
                    width: "30.301px",
                    height: "24px",
                    color: "#FFF",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333px"
                    height="13.333px"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="absolute"
                  >
                    <path
                      d="M6.66667 13.3333C10.3486 13.3333 13.3333 10.3486 13.3333 6.66667C13.3333 2.98477 10.3486 0 6.66667 0C2.98477 0 0 2.98477 0 6.66667C0 10.3486 2.98477 13.3333 6.66667 13.3333Z"
                      fill="#9585FF"
                      fillOpacity="0.16"
                    />
                  </svg>
                  <span
                    style={{ position: "relative", zIndex: 1, marginLeft: 20 }}
                  >
                    New
                  </span>
                </span>
              </li>
              <li>Business Support</li>
              <li>Shipping</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-5 text-sm">
              <li>Blog</li>
              <li>Community</li>
              <li>Tutorials</li>
              <li className="flex items-center gap-2">
                Monitoring
                <span
                  className="flex gap-5 justify-start items-center relative"
                  style={{
                    width: "30.301px",
                    height: "24px",
                    color: "#FFF",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.333px"
                    height="13.333px"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="absolute"
                  >
                    <path
                      d="M6.66667 13.3333C10.3486 13.3333 13.3333 10.3486 13.3333 6.66667C13.3333 2.98477 10.3486 0 6.66667 0C2.98477 0 0 2.98477 0 6.66667C0 10.3486 2.98477 13.3333 6.66667 13.3333Z"
                      fill="#9585FF"
                      fillOpacity="0.16"
                    />
                  </svg>
                  <span
                    style={{ position: "relative", zIndex: 1, marginLeft: 20 }}
                  >
                    New
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© Kavtech. All rights reserved 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
