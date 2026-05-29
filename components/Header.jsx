// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     // <header
//     //   className={`
//     //     fixed top-0 left-0 w-full z-50 transition-all duration-500
//     //     ${
//     //       scrolled
//     //         ? "bg-black/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10"
//     //         : "bg-transparent backdrop-blur-0 border-b border-transparent"
//     //     }
//     //   `}
//     <header
//   className={`
//     fixed top-0 left-0 w-full z-50 transition-all duration-500
//     ${
//       scrolled
//         ? "bg-[#060f18]/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.45)] border-b border-[#0b1f2e]/40"
//         : "bg-transparent backdrop-blur-0 border-b border-transparent"
//     }
//   `}
// >

    
//       {/* ✅ FULL-WIDTH CONTAINER (NO CENTERED LOGO ISSUE) */}
//       <div className="w-full px-8 py-3 flex items-center justify-between">

//         {/* ✅ LOGO AT TRUE LEFT */}
//         <Link href="/" className="flex items-center transition-all duration-300">
//           <img
//             src="/logu.png"
//             alt="Brightpath AI Logo"
//             className={`object-contain transition-all duration-500
//               ${scrolled ? "h-9 opacity-90" : "h-12 opacity-100"}
//             `}
//           />
//         </Link>

//         {/* ✅ NAVIGATION AT RIGHT */}
//         <nav className="hidden md:flex gap-10 text-white text-sm font-medium">
//         <Link
//   href="#what-we-build"
//   className="text-[white] transition-colors duration-300 hover:text-[#9CA3AF]"
// >
//   What We Build
// </Link>




//           {/* <Link
//             href="#our-values"
//             className="relative hover:text-[#F6A35E] transition-colors duration-300"
//           >
//             About
//           </Link>

//           <Link
//             href="#request-access"
//             className="relative hover:text-[#F6A35E] transition-colors duration-300"
//           >
//             Contact Us
//           </Link> */}
//         </nav>
//       </div>
//     </header>
//   );
// }


// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50 transition-all duration-500
//         ${
//           scrolled
//             ? "bg-gradient-to-b from-[#0b1f2e] to-[#030b14] shadow-[0_4px_30px_rgba(0,0,0,0.45)] border-b border-[#0b1f2e]/40"
//             : "bg-gradient-to-b from-[#0b1f2e] to-[#030b14] border-b border-transparent"
//         }
//       `}
//     >
//       {/* FULL-WIDTH CONTAINER (NO CENTERED LOGO ISSUE) */}
//       <div className="w-full px-8 py-3 flex items-center justify-between">

//         {/* LOGO AT TRUE LEFT */}
//         <Link href="/" className="flex items-center transition-all duration-300">
//           <img
//             src="/logu.png"
//             alt="Brightpath AI Logo"
//             className={`object-contain transition-all duration-500
//               ${scrolled ? "h-9 opacity-90" : "h-12 opacity-100"}
//             `}
//           />
//         </Link>

//         {/* NAVIGATION AT RIGHT */}
//         <nav className="hidden md:flex gap-10 text-white text-sm font-medium">
//           <Link
//             href="#what-we-build"
//             className="text-white transition-colors duration-300 hover:text-[#9CA3AF]"
//           >
//             What We Build
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }


// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Define isMenuOpen state

//   // Handle scroll effect on the header for sticky effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle mobile menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50 transition-all duration-500
//         ${scrolled ? "bg-gradient-to-b from-[#0b1f2e] to-[#030b14] shadow-[0_4px_30px_rgba(0,0,0,0.45)] border-b border-[#0b1f2e]/40" : "bg-gradient-to-b from-[#0b1f2e] to-[#030b14] border-b border-transparent"}
//       `}
//     >
//       {/* FULL-WIDTH CONTAINER (NO CENTERED LOGO ISSUE) */}
//       <div className="w-full px-8 py-3 flex items-center justify-between">

//         {/* LOGO AT TRUE LEFT */}
//         <Link href="/" className="flex items-center transition-all duration-300">
//           <img
//             src="/logu.png"
//             alt="Brightpath AI Logo"
//             className={`object-contain transition-all duration-500 ${scrolled ? "h-9 opacity-90" : "h-12 opacity-100"}`}
//           />
//         </Link>

//         {/* Mobile Navigation Toggle */}
//         <div className="md:hidden flex items-center">
//           {/* Burger Menu Icon */}
//           <button onClick={toggleMenu} className="text-white text-2xl">
//             ☰
//           </button>
//         </div>

//         {/* Navigation Links (Desktop) */}
//         <nav className="hidden md:flex gap-10 text-white text-sm font-medium">
//           <Link
//             href="#what-we-build"
//             className="text-white transition-colors duration-300 hover:text-[#9CA3AF]"
//           >
//             What We Build
//           </Link>
//           {/* Add more links here as required */}
//         </nav>
//       </div>

//       {/* Mobile Navigation Links */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-[#1A1A2B] text-white p-5 space-y-5">
//           <Link
//             href="#what-we-build"
//             className="block text-white text-lg hover:text-[#9CA3AF] transition-colors duration-300"
//             onClick={() => setIsMenuOpen(false)} // Close the menu after clicking
//           >
//             What We Build
//           </Link>
//           {/* Add more links here if needed */}
//         </div>
//       )}
//     </header>
//   );
// }



// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Define isMenuOpen state

//   // Handle scroll effect on the header for sticky effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);  // Change this value if needed for earlier transition
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle mobile menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50 transition-all duration-500
//         ${scrolled 
//           ? "bg-[#0b1f2e] shadow-[0_4px_30px_rgba(0,0,0,0.45)]"  // No border, solid background when scrolled
//           : "bg-gradient-to-b from-[#0b1f2e] to-[#030b14]"  // Gradient for the top when not scrolled
//         }
//       `}
//     >
//       {/* FULL-WIDTH CONTAINER (NO CENTERED LOGO ISSUE) */}
//       <div className="w-full px-8 py-3 flex items-center justify-between">

//         {/* LOGO AT TRUE LEFT */}
//         <Link href="/" className="flex items-center transition-all duration-300">
//           <img
//             src="/logu.png"
//             alt="Brightpath AI Logo"
//             className={`object-contain transition-all duration-500 ${scrolled ? "h-9 opacity-90" : "h-12 opacity-100"}`}
//           />
//         </Link>

//         {/* Mobile Navigation Toggle */}
//         <div className="md:hidden flex items-center">
//           {/* Burger Menu Icon */}
//           <button onClick={toggleMenu} className="text-white text-2xl">
//             ☰
//           </button>
//         </div>

//         {/* Navigation Links (Desktop) */}
//         <nav className="hidden md:flex gap-10 text-white text-sm font-medium">
//           <Link
//             href="#what-we-build"
//             className="text-white transition-colors duration-300 hover:text-[#9CA3AF]"
//           >
//             What We Build
//           </Link>
//         </nav>
//       </div>

//       {/* Mobile Navigation Links */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-[#1A1A2B] text-white p-5 space-y-5">
//           <Link
//             href="#what-we-build"
//             className="block text-white text-lg hover:text-[#9CA3AF] transition-colors duration-300"
//             onClick={() => setIsMenuOpen(false)} // Close the menu after clicking
//           >
//             What We Build
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }


// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Define isMenuOpen state

//   // Handle scroll effect on the header for sticky effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);  // Change this value if needed for earlier transition
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle mobile menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50 transition-all duration-500
//         ${scrolled 
//           ? "bg-gradient-to-b from-[#0b1f2e] to-[#030b14] shadow-[0_4px_30px_rgba(0,0,0,0.45)]" // Keep the gradient when scrolled
//           : "bg-gradient-to-b from-[#0b1f2e] to-[#030b14]"} // Gradient at the top when not scrolled
//       `}
//     >
//       {/* FULL-WIDTH CONTAINER */}
//       <div className="w-full px-8 py-3 flex items-center justify-between">

//         {/* LOGO AT TRUE LEFT */}
//         <Link href="/" className="flex items-center transition-all duration-300">
//           <img
//             src="/logu.png"
//             alt="Brightpath AI Logo"
//             className={`object-contain transition-all duration-500 ${scrolled ? "h-9 opacity-90" : "h-12 opacity-100"}`}
//           />
//         </Link>

//         {/* Mobile Navigation Toggle */}
//         <div className="md:hidden flex items-center">
//           {/* Burger Menu Icon */}
//           <button onClick={toggleMenu} className="text-white text-2xl">
//             ☰
//           </button>
//         </div>

//         {/* Navigation Links (Desktop) */}
//         <nav className="hidden md:flex gap-10 text-white text-sm font-medium">
//           <Link
//             href="#what-we-build"
//             className="text-white transition-colors duration-300 hover:text-[#9CA3AF]"
//           >
//             What We Build
//           </Link>
//         </nav>
//       </div>

//       {/* Mobile Navigation Links */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-[#1A1A2B] text-white p-5 space-y-5">
//           <Link
//             href="#what-we-build"
//             className="block text-white text-lg hover:text-[#9CA3AF] transition-colors duration-300"
//             onClick={() => setIsMenuOpen(false)} // Close the menu after clicking
//           >
//             What We Build
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }


// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header
//       className="
//         fixed top-0 left-0 w-full z-50 
//         transition-all duration-500
//         border-none shadow-none
//         bg-[radial-gradient(ellipse_at_top,_#0b1f2e_0%,_#030b14_60%,_#02070e_100%)]
//       "
//       style={{
//         WebkitMaskImage: "-webkit-linear-gradient(top, rgba(0,0,0,1), rgba(0,0,0,1))",
//       }}
//     >
//       <div className="w-full px-6 py-3 flex items-center justify-between">

//         {/* LOGO */}
//         <Link href="/" className="flex items-center">
//           <img
//             src="/logu.png"
//             alt="Brightpath AI Logo"
//             className="h-12 object-contain transition-all duration-300"
//           />
//         </Link>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden text-white text-2xl"
//         >
//           ☰
//         </button>

//         {/* DESKTOP NAVIGATION */}
//         <nav className="hidden md:flex gap-10 text-white text-sm font-medium">
//           <Link
//             href="#what-we-build"
//             className="hover:text-[#9CA3AF] transition"
//           >
//             What We Build
//           </Link>
//         </nav>
//       </div>

//       {/* MOBILE NAVIGATION */}
//       {isMenuOpen && (
//         <div className="md:hidden w-full bg-[#02070e]/95 text-white p-5 space-y-5">
//           <Link
//             href="#what-we-build"
//             onClick={() => setIsMenuOpen(false)}
//             className="block text-lg hover:text-[#9CA3AF]"
//           >
//             What We Build
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }


// "use client";
// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header
//       className="
//         fixed top-0 left-0 w-full z-50 
//         transition-all duration-500

//         /* ✨ EXACT SAME RADIAL GRADIENT AS HERO */
//         bg-[radial-gradient(ellipse_at_top,_#0b1f2e_0%,_#030b14_60%,_#02070e_100%)]

//         /* 🚫 NO BORDER / NO SHADOW */
//         border-none shadow-none
//       "
//     >
//       <div className="w-full px-6 py-3 flex items-center justify-between">

//         {/* LOGO */}
//         <Link href="/" className="flex items-center">
//           <img
//             src="/logu.png"
//             alt="Brightpath AI Logo"
//             className="h-12 object-contain transition-all duration-300"
//           />
//         </Link>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden text-white text-2xl"
//         >
//           ☰
//         </button>

//         {/* DESKTOP NAVIGATION */}
//         <nav className="hidden md:flex gap-10 text-white text-sm font-medium">
//           <Link
//             href="#what-we-build"
//             className="hover:text-[#9CA3AF] transition"
//           >
//             What We Build
//           </Link>
//         </nav>
//       </div>

//       {/* MOBILE NAVIGATION */}
//       {isMenuOpen && (
//         <div className="md:hidden w-full bg-[#02070e]/95 text-white p-5 space-y-5">
//           <Link
//             href="#what-we-build"
//             onClick={() => setIsMenuOpen(false)}
//             className="block text-lg hover:text-[#9CA3AF]"
//           >
//             What We Build
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";
import Link from "next/link";
import { useState } from "react";

const basePath = "";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 
        transition-all duration-500

        /* ✨ EXACT same gradient as Hero */
        bg-[radial-gradient(ellipse_at_top,_#0b1f2e_0%,_#030b14_60%,_#02070e_100%)]

        /* 🚫 Remove all borders, lines, shadows */
        border-none shadow-none
      "
    >
      <div className="w-full px-6 py-2 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src={`${basePath}/logu.png`}
            alt="Brightpath AI Logo"
            className="h-10 object-contain transition-all duration-300"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex gap-10 text-white text-sm font-medium">
          <Link
            href="#what-we-build"
            className="hover:text-[#9CA3AF] transition"
          >
            What We Build
          </Link>
        </nav>
      </div>

      {/* MOBILE NAVIGATION */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-[#02070e]/95 text-white p-5 space-y-5">
          <Link
            href="#what-we-build"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg hover:text-[#9CA3AF]"
          >
            What We Build
          </Link>
        </div>
      )}
    </header>
  );
}
