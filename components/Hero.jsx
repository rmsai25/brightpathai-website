"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #0b1f2e 0%, #030b14 60%, #02070e 100%)",
      }}
    >
      {/* Glows */}
      <div className="absolute -left-24 top-32 w-96 h-96 rounded-full bg-cyan-400/10 blur-[140px]"></div>
      <div className="absolute right-0 bottom-40 w-[420px] h-[420px] rounded-full bg-teal-400/10 blur-[160px]"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl text-center px-6 pt-32 pb-24"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide leading-tight text-white">
          Customer operations, made intelligent.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Brightpath AI helps businesses connect customer conversations, business data, and team workflows into one AI-powered operations layer.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full bg-[#19F7C1] text-black font-semibold
                       transition-all duration-300 hover:bg-[#12e0af] hover:scale-105
                       shadow-[0_0_20px_#19F7C14d]"
          >
            Request Early Access
          </Link>

          <Link
            href="#what-we-build"
            className="px-8 py-4 rounded-full border border-[#19F7C1] text-[#19F7C1]
                       transition-all duration-300
                       hover:bg-[#19F7C1] hover:text-black hover:scale-105"
          >
            What We Build
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
