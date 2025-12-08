"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Glass gradient behind navbar so it looks clean */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-xl z-20 pointer-events-none"></div>

      {/* Background base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061022] via-transparent to-[#0b1530] opacity-90"></div>

      {/* Background glows */}
      <div className="absolute -left-12 top-14 w-72 h-72 rounded-full bg-[#00E6B8]/8 blur-3xl animate-[pulse_6s_infinite]"></div>
      <div className="absolute right-10 bottom-32 w-80 h-80 rounded-full bg-purple-900/8 blur-3xl animate-[ping_8s_infinite]"></div>

      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl text-center px-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          AI that quietly delivers.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Brightpath AI builds pragmatic, private, and reliable AI systems for real businesses.
          Production-grade. Privacy-first. In stealth — early partners welcome.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="#request-access" className="btn-primary hover:scale-[1.03] transition-transform">
            Request Early Access
          </Link>

          <Link href="#what-we-build" className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition">
            What We Build
          </Link>
        </div>
      </motion.div>

      {/* Fade-out bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
}
