"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShow(false); // hide navbar on scroll down
      } else {
        setShow(true); // show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 
      w-[900px] max-w-[95%] h-[70px]
      flex items-center justify-around
      rounded-full backdrop-blur-xl border border-white/20
      bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.1)_100%)]
      px-6 overflow-hidden transition-all duration-500 ease-in-out
      ${show ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <img
            src="/images/Logo/header-logo.png"
            alt="KavTech Logo"
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
        <Link href="/" className="text-blue-600 font-semibold">
          Home
        </Link>
        <Link href="/services" className="hover:text-gray-900 transition">
          Services
        </Link>
        <Link href="/caseStudies" className="hover:text-gray-900 transition">
          Case Studies
        </Link>
        <Link href="/product" className="hover:text-gray-900 transition">
          Products
        </Link>
        <Link href="/company" className="hover:text-gray-900 transition">
          Company
        </Link>
      </div>

      {/* Button */}
      <div className="hidden md:flex">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1
            px-5 py-2.5 text-white font-[600] text-[14px] leading-[24px]
            rounded-[39px] bg-gradient-to-br from-[#025ADC] to-[#3282FA]
            shadow-[inset_0_0.5px_0_rgba(255,255,255,0.32),inset_0_-1.5px_0_rgba(255,255,255,0.32)]
            transition-transform duration-200 hover:scale-[1.05]"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
