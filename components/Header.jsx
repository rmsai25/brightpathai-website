"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled 
          ? "bg-black/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10" 
          : "bg-transparent backdrop-blur-0 border-b border-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center transition-all duration-300">
          <img
            src="/logo.png"
            alt="Brightpath AI Logo"
            className={`object-contain transition-all duration-500 
              ${scrolled ? "h-8 opacity-90" : "h-14 opacity-100"}
            `}
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex gap-8 text-white text-sm">
          <Link
            href="#what-we-build"
            className="hover:text-[#F6A35E] transition-colors duration-300"
          >
            What We Build
          </Link>

          <Link
            href="#our-values"
            className="hover:text-[#F6A35E] transition-colors duration-300"
          >
            About
          </Link>

          <Link
            href="#request-access"
            className="hover:text-[#F6A35E] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
