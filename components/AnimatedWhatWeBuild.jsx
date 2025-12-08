"use client";

import { motion } from "framer-motion";
import {
  FiCpu,
  FiLock,
  FiEye,
  FiShield,
  FiSmartphone,
  FiActivity,
  FiGitMerge,
  FiSearch,
  FiLayers,
  FiCpu as FiIntegrate,
  FiKey,
  FiTrendingUp
} from "react-icons/fi";

// CORE CAPABILITIES WITH COLORS
const coreCapabilities = [
  { title: "Agentic Workflows", desc: "Autonomous task execution for operations & support.", icon: FiCpu, color: "text-blue-600" },
  { title: "Private RAG", desc: "Enterprise retrieval with zero-retention privacy.", icon: FiLock, color: "text-purple-600" },
  { title: "Observability", desc: "Monitoring, evaluation, debugging & safety.", icon: FiEye, color: "text-orange-500" },
  { title: "Safety & Evals", desc: "Bias audits, controlled overrides, guardrails.", icon: FiShield, color: "text-red-500" },
  { title: "Edge Inference", desc: "On-device & hybrid inference systems.", icon: FiSmartphone, color: "text-green-600" },
  { title: "Latency Engineering", desc: "We optimize everything until it’s instant.", icon: FiActivity, color: "text-yellow-500" },
];

// PLATFORM INTELLIGENCE WITH COLORS
const platformIntelligence = [
  { title: "Generative-AI Workflows", desc: "Automated reasoning, planning & execution across business processes.", icon: FiGitMerge, color: "text-blue-500" },
  { title: "Unified AI Search", desc: "Context-aware retrieval across all organizational knowledge.", icon: FiSearch, color: "text-indigo-500" },
  { title: "Enterprise Knowledge Graph", desc: "Deep organizational modeling with relationship understanding.", icon: FiLayers, color: "text-emerald-600" },
  { title: "Tool & System Integration", desc: "Connects with your existing apps, CRMs, databases & workflows.", icon: FiIntegrate, color: "text-teal-600" },
  { title: "Governance & Security", desc: "Permission-aware, compliant & secure by design.", icon: FiKey, color: "text-rose-600" },
  { title: "Productivity Acceleration", desc: "Faster onboarding, reduced friction & improved operational speed.", icon: FiTrendingUp, color: "text-yellow-600" },
];

// ✨ Reusable Animated Card Component
function AnimatedCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}   // 🔥 animate EVERY scroll
      transition={{ duration: 0.45, delay: index * 0.15, ease: "easeOut" }}
      className="p-8 bg-white rounded-3xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:bg-gray-200 hover:border-gray-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
    >
      <div className="mb-4 flex justify-center">
        <motion.div
          initial={{ scale: 0.7, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: false }}  // 🔥 bounce every scroll
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        >
          <item.icon size={36} className={`${item.color}`} />
        </motion.div>
      </div>

      <h3 className="font-semibold text-xl text-center">{item.title}</h3>
      <p className="mt-3 text-gray-600 text-center">{item.desc}</p>
    </motion.div>
  );
}

export default function AnimatedWhatWeBuild() {
  return (
    <div className="w-full">

      {/* CORE CAPABILITIES SECTION */}
      <h3 className="text-3xl font-semibold mt-12">Core Capabilities</h3>

      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {coreCapabilities.map((item, i) => (
          <AnimatedCard key={`core-${i}`} item={item} index={i} />
        ))}
      </div>

      {/* PLATFORM INTELLIGENCE SECTION */}
      <h3 className="text-3xl font-semibold mt-20">Platform Intelligence</h3>

      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {platformIntelligence.map((item, i) => (
          <AnimatedCard key={`platform-${i}`} item={item} index={i} />
        ))}
      </div>

    </div>
  );
}
