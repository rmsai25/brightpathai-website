// "use client";

// import Hero from "../../components/Hero.jsx";
// import RequestAccessForm from "../../components/RequestAccessForm.jsx";
// import Footer from "../../components/Footer.jsx";
// import BottomContact from "../../components/BottomContact.jsx";
// import ScrollToTopOnRefresh from "../../components/ScrollToTopOnRefresh";

// import AnimatedWhatWeBuildClient from "../../components/AnimatedWhatWeBuildClient";

// import { motion } from "framer-motion";

// // 🔥 Reusable animated card component (NO HOOKS in map)
// function HowWeWorkCard({ item, index }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.3 }} // 🔥 animate EVERY TIME
//       transition={{ duration: 0.5, delay: index * 0.15 }}
//       className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
//     >
//       {/* Outer Yellow Circle */}
//       <div className="bg-yellow-400 rounded-full p-2">
//         <motion.div
//           initial={{ scale: 0.7, rotate: -10 }}
//           whileInView={{ scale: 1, rotate: 0 }}
//           viewport={{ once: false, amount: 0.5 }} // 🔥 bounce every time
//           transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
//           className="bg-red-500 rounded-full p-6 flex items-center justify-center w-20 h-20 shadow-md"
//         >
//           <img src={item.img} className="w-12 h-12 object-contain" alt="icon" />
//         </motion.div>
//       </div>

//       <h3 className="font-bold text-xl mt-6 text-center">{item.num}</h3>

//       <p className="text-gray-600 text-sm mt-1 text-center max-w-[180px]">
//         {item.text}
//       </p>
//     </motion.div>
//   );
// }
// export default function Home() {
//   const howWeWorkItems = [
//     {
//       num: "01",
//       img: "https://cdn-icons-png.flaticon.com/512/2913/2913132.png",  // Icon for installation
//       text: "Install Our Application: Download and install our app to get started.",
//     },
//     {
//       num: "02",
//       img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",  // Icon for QR code
//       text: "Connect via WhatsApp: Scan the QR code in the app to connect with us on WhatsApp for seamless communication.",
//     },
//     {
//       num: "03",
//       img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",  // Icon for Gmail connection
//       text: "Link Your Gmail Account: Connect your Gmail account to keep everything synced and receive personalized updates.",
//     },
//     {
//       num: "04",
//       img: "https://cdn-icons-png.flaticon.com/512/3731/3731827.png",  // Icon for audio transcription
//       text: "Audio Transcription: We automatically transcribe your audio files to text for easy access and review.",
//     },
//     {
//       num: "05",
//       img: "https://cdn-icons-png.flaticon.com/512/992/992651.png",  // Icon for response
//       text: "Get Your Response: Receive a personalized response based on the data you've shared with us, in real-time.",
//     },
//   ];

//   return (
//     <>
//       <Hero />
//       <ScrollToTopOnRefresh />

//       {/* WHAT WE BUILD */}
//       <section id="what-we-build" className="max-w-7xl mx-auto px-6 py-20 text-center">
//         <h2 className="text-4xl font-bold">What We Build</h2>

//         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//           We build domain-aware AI systems that are private, fast, and deeply reliable.
//         </p>

//         <AnimatedWhatWeBuildClient />
//       </section>

//       {/* HOW WE WORK */}
//       <section className="py-16 bg-white flex justify-center" id="how-we-work">
//         <div className="bg-white border-4 border-gray-300 rounded-3xl p-10 w-[95%] max-w-7xl shadow-md relative">
//           <h2 className="text-4xl font-extrabold text-center mb-10">
//             HOW WE WORK?
//           </h2>

//           {/* 🔥 Animated dotted line */}
//           <svg
//             className="absolute top-48 left-0 w-full h-32 hidden md:block pointer-events-none"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <motion.path
//               d="M 80 50 C 250 0, 450 90, 650 40 S 900 80, 1150 40 S 1400 60, 1600 30"
//               stroke="#999"
//               strokeWidth="4"
//               strokeDasharray="6 10"
//               strokeLinecap="round"
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               viewport={{ once: false, amount: 0.5 }} // 🔥 repeats every scroll
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             />
//           </svg>

//           {/* 🔥 Animated Cards */}
//           <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 mt-10">
//             {howWeWorkItems.map((item, index) => (
//               <HowWeWorkCard key={index} item={item} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* REQUEST ACCESS */}
//       <div id="request-access" className="py-12">
//         <RequestAccessForm />
//       </div>

//       <BottomContact />
//       <Footer />
//     </>
//   );
// }


// "use client";

// import Hero from "../../components/Hero.jsx";
// import RequestAccessForm from "../../components/RequestAccessForm.jsx";
// import Footer from "../../components/Footer.jsx";
// import BottomContact from "../../components/BottomContact.jsx";
// import ScrollToTopOnRefresh from "../../components/ScrollToTopOnRefresh";
// import AnimatedWhatWeBuildClient from "../../components/AnimatedWhatWeBuildClient";

// import { motion } from "framer-motion";

// // 🔥 Animated card component
// function HowWeWorkCard({ item, index }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.3 }} // 🔥 animate EVERY TIME
//       transition={{ duration: 0.5, delay: index * 0.15 }}
//       className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
//     >
//       <div className="bg-yellow-400 rounded-full p-2">
//         <motion.div
//           initial={{ scale: 0.7, rotate: -10 }}
//           whileInView={{ scale: 1, rotate: 0 }}
//           viewport={{ once: false, amount: 0.5 }} // 🔥 bounce every time
//           transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
//           className="bg-red-500 rounded-full p-6 flex items-center justify-center w-20 h-20 shadow-md"
//         >
//           <img src={item.img} className="w-12 h-12 object-contain" alt="icon" />
//         </motion.div>
//       </div>

//       <h3 className="font-bold text-xl mt-6 text-center">{item.num}</h3>

//       <p className="text-gray-600 text-sm mt-1 text-center max-w-[180px]">
//         {item.text}
//       </p>
//     </motion.div>
//   );
// }

// const Home = () => {
//   const howWeWorkItems = [
//     {
//       num: "01",
//       img: "/mobile-chatting.png",  // This is the direct image URL for the icon
//       text: "Install Our Application: Download and install our app to get started.",
//     },
//     {
//       num: "02",
//       img: "/whatsapp.png",  // WhatsApp QR code icon
//       text: "Connect via WhatsApp: Scan the QR code in the app to connect with us on WhatsApp for seamless communication.",
//     },
//     {
//       num: "03",
//       img: "/email.png",  // Gmail connection icon
//       text: "Link Your Gmail Account: Connect your Gmail to receive synced updates.",
//     },
//     {
//       num: "04",
//       img: "/headphone.png",  // Audio transcription icon
//       text: "Audio Transcription: We automatically transcribe your audio files to text for easy access and review.",
//     },
//     {
//       num: "05",
//       img: "/digital-product.png",  // Response icon
//       text: "Get Your Response: Receive a personalized response based on the data you've shared with us, in real-time.",
//     },
//   ];

//   return (
//     <>
//       <Hero />
//       <ScrollToTopOnRefresh />

//       {/* WHAT WE BUILD */}
//       <section id="what-we-build" className="max-w-7xl mx-auto px-6 py-20 text-center">
//         <h2 className="text-4xl font-bold">What We Build</h2>
//         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//           We build domain-aware AI systems that are private, fast, and deeply reliable.
//         </p>

//         <AnimatedWhatWeBuildClient />
//       </section>

//       {/* HOW WE WORK */}
//       <section className="py-16 bg-white flex justify-center" id="how-we-work">
//         <div className="bg-white border-4 border-gray-300 rounded-3xl p-10 w-[95%] max-w-7xl shadow-md relative">
//           <h2 className="text-4xl font-extrabold text-center mb-10">
//             HOW WE WORK?
//           </h2>

//           {/* Animated dotted line */}
//           <svg
//             className="absolute top-48 left-0 w-full h-32 hidden md:block pointer-events-none"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <motion.path
//               d="M 80 50 C 250 0, 450 90, 650 40 S 900 80, 1150 40 S 1400 60, 1600 30"
//               stroke="#999"
//               strokeWidth="4"
//               strokeDasharray="6 10"
//               strokeLinecap="round"
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               viewport={{ once: false, amount: 0.5 }} // 🔥 repeats every scroll
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             />
//           </svg>

//           {/* Cards */}
//           <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 mt-10">
//             {howWeWorkItems.map((item, index) => (
//               <HowWeWorkCard key={index} item={item} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* REQUEST ACCESS */}
//       <div id="request-access" className="py-12">
//         <RequestAccessForm />
"use client";

import Head from "next/head";
import Hero from "../../components/Hero.jsx";
import Footer from "../../components/Footer.jsx";
import BottomContact from "../../components/BottomContact.jsx";
import ScrollToTopOnRefresh from "../../components/ScrollToTopOnRefresh";
import { motion } from "framer-motion";
import { FiCheckCircle, FiDatabase, FiCpu, FiMessageSquare, FiShield, FiZap, FiTarget, FiActivity, FiLayers } from "react-icons/fi";

const howWeWorkItems = [
  { num: "01", icon: <FiMessageSquare size={28} />, title: "We Connect", text: "We integrate directly with your phone systems, email inboxes, WhatsApp, and ticketing platforms to capture customer interactions in real-time." },
  { num: "02", icon: <FiCpu size={28} />, title: "We Process", text: "Our AI extracts key details—what was promised, what is broken, who is angry, and what needs immediate follow-up." },
  { num: "03", icon: <FiActivity size={28} />, title: "We Monitor", text: "The platform continuously checks if promised actions were actually completed by your team." },
  { num: "04", icon: <FiCheckCircle size={28} />, title: "We Alert & Act", text: "If an SLA is breached or a customer is ignored, we alert the right manager or automatically trigger the next workflow step." }
];

const useCases = [
  { title: "Customer Support Escalation", text: "Automatically detect frustrated customers in emails or calls and escalate to a manager before they churn." },
  { title: "Sales Follow-up Enforcement", text: "Track when a sales rep promises a quote on a call, and automatically alert them if the quote isn't sent within 4 hours." },
  { title: "Operations Coordination", text: "Read maintenance requests from WhatsApp, categorize the urgency, and dispatch to the correct field team without human routing." },
  { title: "Automated Quality Assurance", text: "Review 100% of customer support interactions against your company guidelines, rather than randomly sampling 2%." }
];

const whyBrightpath = [
  { icon: <FiShield size={28} />, title: "Privacy First", text: "We deploy in secure environments. Your customer data isn't used to train public models." },
  { icon: <FiZap size={28} />, title: "Pragmatic AI", text: "No chatbots hallucinating. Just structured, reliable data extraction and workflow automation." },
  { icon: <FiTarget size={28} />, title: "Built for Operations", text: "Designed for the messy reality of missed emails, dropped calls, and delayed follow-ups." }
];

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Brightpath AI – Intelligent Customer Operations</title>
        <meta name="description" content="Brightpath AI helps businesses connect customer conversations, business data, and team workflows into one AI-powered operations layer." />
      </Head>

      <Hero />
      <ScrollToTopOnRefresh />

      {/* WHAT WE BUILD */}
      <section id="what-we-build" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">What We Build</h2>
            <p className="text-[#00a980] font-semibold text-lg">AI systems that turn customer activity into clear action.</p>
          </motion.div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <FiMessageSquare size={24} />, label: "Conversation Intelligence", desc: "Every call, email & message captured, parsed, and understood." },
              { icon: <FiDatabase size={24} />, label: "Unified Customer Timeline", desc: "A single view of every touchpoint linked to your CRM & ERP." },
              { icon: <FiLayers size={24} />, label: "Structured Data Extraction", desc: "Intent, sentiment, promises, deadlines — pulled automatically." },
              { icon: <FiActivity size={24} />, label: "Workflow Automation", desc: "Trigger CRM updates, Slack alerts, or ticket routing instantly." },
              { icon: <FiCheckCircle size={24} />, label: "Execution Monitoring", desc: "We track if humans followed through — catching dropped balls." },
              { icon: <FiShield size={24} />, label: "Privacy-First Deployment", desc: "Your data stays private. Never used to train public models." },
            ].map((feat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e9fbf6] text-[#00a980] flex items-center justify-center group-hover:bg-[#00a980] group-hover:text-white transition-colors duration-300">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feat.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-gray-500 font-medium">The building blocks of intelligent customer operations.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <FiDatabase size={24} />, label: "Unified Interaction Graph", desc: "We ingest calls, emails, texts, and tickets, linking them to your CRM and ERP data to create a single timeline-based view of every customer." },
              { icon: <FiLayers size={24} />, label: "Intelligence & Extraction", desc: "Our models extract structured data — intent, sentiment, promises made, deadlines set, and missing information from every interaction." },
              { icon: <FiActivity size={24} />, label: "Workflow & Orchestration", desc: "When data is extracted, we trigger actions — update a CRM, draft an email, alert a manager, or route a ticket based on your business logic." },
              { icon: <FiCheckCircle size={24} />, label: "Execution Monitoring", desc: "We watch what happens after the AI acts. If a human doesn't follow up, we catch the dropped ball before the customer complains." },
            ].map((cap, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e9fbf6] text-[#00a980] flex items-center justify-center group-hover:bg-[#00a980] group-hover:text-white transition-colors duration-300">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{cap.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — sticky scroll */}
      <section id="how-we-work" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-2xl md:text-4xl font-bold tracking-tight text-center mb-16 text-gray-900">
            How We Work
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left sticky panel */}
            <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-[#f8fffe] border border-[#d0f5eb] rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#e9fbf6] text-[#00a980] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  <FiActivity size={12} /> Our Process
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Four steps. Zero dropped balls.</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  From the first customer interaction to the final follow-up — we make sure nothing falls through the cracks.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  {howWeWorkItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-5 h-5 rounded-full bg-[#00a980] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">{item.num}</div>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right scrolling steps */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              {howWeWorkItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl border border-gray-100 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#e9fbf6] text-[#00a980] flex items-center justify-center group-hover:bg-[#00a980] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#00a980] bg-[#e9fbf6] px-2 py-0.5 rounded-full">{item.num}</span>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">Use Cases</h2>
            <p className="text-gray-500 font-medium">Real-world applications driving operational excellence.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <FiMessageSquare size={24} />, title: "Customer Support Escalation", text: "Automatically detect frustrated customers in emails or calls and escalate to a manager before they churn." },
              { icon: <FiTarget size={24} />, title: "Sales Follow-up Enforcement", text: "Track when a sales rep promises a quote on a call, and automatically alert them if the quote isn't sent within 4 hours." },
              { icon: <FiActivity size={24} />, title: "Operations Coordination", text: "Read maintenance requests from WhatsApp, categorize the urgency, and dispatch to the correct field team without human routing." },
              { icon: <FiCheckCircle size={24} />, title: "Automated Quality Assurance", text: "Review 100% of customer support interactions against your company guidelines, rather than randomly sampling 2%." },
            ].map((uc, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e9fbf6] text-[#00a980] flex items-center justify-center group-hover:bg-[#00a980] group-hover:text-white transition-colors duration-300">
                  {uc.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{uc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{uc.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BRIGHTPATH AI */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">Why Brightpath AI?</h2>
            <p className="text-gray-500 font-medium">Built for businesses that can't afford dropped balls.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <FiShield size={24} />, title: "Privacy First", text: "We deploy in secure environments. Your customer data isn't used to train public models." },
              { icon: <FiZap size={24} />, title: "Pragmatic AI", text: "No chatbots hallucinating. Just structured, reliable data extraction and workflow automation." },
              { icon: <FiTarget size={24} />, title: "Built for Operations", text: "Designed for the messy reality of missed emails, dropped calls, and delayed follow-ups." },
            ].map((reason, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e9fbf6] text-[#00a980] flex items-center justify-center group-hover:bg-[#00a980] group-hover:text-white transition-colors duration-300">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{reason.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BottomContact />
      <Footer />
    </div>
  );
}
