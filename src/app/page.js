"use client";

import Hero from "../../components/Hero.jsx";
import RequestAccessForm from "../../components/RequestAccessForm.jsx";
import Footer from "../../components/Footer.jsx";
import BottomContact from "../../components/BottomContact.jsx";
import ScrollToTopOnRefresh from "../../components/ScrollToTopOnRefresh";

import AnimatedWhatWeBuildClient from "../../components/AnimatedWhatWeBuildClient";

import { motion } from "framer-motion";

// 🔥 Reusable animated card component (NO HOOKS in map)
function HowWeWorkCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // 🔥 animate EVERY TIME
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
    >
      {/* Outer Yellow Circle */}
      <div className="bg-yellow-400 rounded-full p-2">
        <motion.div
          initial={{ scale: 0.7, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.5 }} // 🔥 bounce every time
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="bg-red-500 rounded-full p-6 flex items-center justify-center w-20 h-20 shadow-md"
        >
          <img src={item.img} className="w-12 h-12 object-contain" alt="icon" />
        </motion.div>
      </div>

      <h3 className="font-bold text-xl mt-6 text-center">{item.num}</h3>

      <p className="text-gray-600 text-sm mt-1 text-center max-w-[180px]">
        {item.text}
      </p>
    </motion.div>
  );
}

export default function Home() {
  const howWeWorkItems = [
    {
      num: "01",
      img: "https://cdn-icons-png.flaticon.com/512/2913/2913132.png",
      text: "Client data privacy: zero-retention, least-privilege access, encrypted end-to-end.",
    },
    {
      num: "02",
      img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
      text: "Ethical AI: transparent evals, bias testing, audit logs, human-in-the-loop.",
    },
    {
      num: "03",
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
      text: "Security first: secrets management, vendor due-diligence, continuous monitoring.",
    },
    {
      num: "04",
      img: "https://cdn-icons-png.flaticon.com/512/3731/3731827.png",
      text: "Measurable value: latency, accuracy & unit-economics tracked and optimized.",
    },
    {
      num: "05",
      img: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
      text: "Ship small & iterate fast: short cycles, clear metrics & high-quality execution.",
    },
  ];

  return (
    <>
      <Hero />
      <ScrollToTopOnRefresh />

      {/* WHAT WE BUILD */}
      <section id="what-we-build" className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">What We Build</h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We build domain-aware AI systems that are private, fast, and deeply reliable.
        </p>

        <AnimatedWhatWeBuildClient />
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 bg-white flex justify-center" id="how-we-work">
        <div className="bg-white border-4 border-gray-300 rounded-3xl p-10 w-[95%] max-w-7xl shadow-md relative">
          <h2 className="text-4xl font-extrabold text-center mb-10">
            HOW WE WORK?
          </h2>

          {/* 🔥 Animated dotted line */}
          <svg
            className="absolute top-48 left-0 w-full h-32 hidden md:block pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 80 50 C 250 0, 450 90, 650 40 S 900 80, 1150 40 S 1400 60, 1600 30"
              stroke="#999"
              strokeWidth="4"
              strokeDasharray="6 10"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false, amount: 0.5 }} // 🔥 repeats every scroll
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          {/* 🔥 Animated Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 mt-10">
            {howWeWorkItems.map((item, index) => (
              <HowWeWorkCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST ACCESS */}
      <div id="request-access" className="py-12">
        <RequestAccessForm />
      </div>

      <BottomContact />
      <Footer />
    </>
  );
}
