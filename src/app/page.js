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
//       </div>

//       <BottomContact />
//       <Footer />
//     </>
//   );
// }

// export default Home;



// "use client";

// import Head from "next/head";
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
//           <img src={item.img} className="w-12 h-12 object-contain" alt={item.text} />
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
//       img: "/mobile.png",  // Local image path for app install
//       text: "Install Our Application to get started.",
//     },
//     {
//       num: "02",  
//       img: "/whatsapp.png",  // Local image path for WhatsApp QR code
//       text: "Scan the QR code  to Connect Your WhatsApp .",
//     },
//     {
//       num: "03",
//       img: "/email.png",  // Local image path for Gmail connection
//       text: "Connect with your Gmail & Get Ready.",
//     },
//     {
//       num: "04",
//       img: "/logu.png",  // Local image path for audio transcription
//       text: "Enter Your Query in Bpai Website",
//     },
// {
//   num: "05",
//   img: "/new.png",
//   imgClass: "w-28 h-28", // ✅ valid & slightly bigger
//   text: "receive LLM Backed AI responses.",
// }


//   ];

//   return (
//     <>
//       {/* SEO Meta Tags */}
//       <Head>
//         <title>Brightpath AI – Private, Reliable, and Production-grade AI Systems</title>
//         <meta name="description" content="Brightpath AI builds privacy-first intelligent systems with WhatsApp integration, Gmail sync, and audio transcription solutions." />
//         <meta name="keywords" content="AI, WhatsApp Automation, Gmail AI, Audio Transcription, Brightpath AI" />
//         <meta name="robots" content="index, follow" />
        
//         {/* Open Graph for Social Sharing */}
//         <meta property="og:title" content="Brightpath AI – AI that Quietly Delivers" />
//         <meta property="og:description" content="Brightpath AI builds privacy-first AI systems with seamless integration, audio transcription, and real-time responses." />
//         <meta property="og:image" content="/og-image.jpg" />
//         <meta property="og:url" content="https://yourwebsite.com" />
        
//         {/* Twitter Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Brightpath AI – AI that Quietly Delivers" />
//         <meta name="twitter:description" content="Brightpath AI builds privacy-first AI systems with seamless integration, audio transcription, and real-time responses." />
//         <meta name="twitter:image" content="/og-image.jpg" />
//       </Head>

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
//           <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-10">
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

// export default Home;


"use client";

import Head from "next/head";
import Hero from "../../components/Hero.jsx";
import RequestAccessForm from "../../components/RequestAccessForm.jsx";
import Footer from "../../components/Footer.jsx";
import BottomContact from "../../components/BottomContact.jsx";
import ScrollToTopOnRefresh from "../../components/ScrollToTopOnRefresh";
import AnimatedWhatWeBuildClient from "../../components/AnimatedWhatWeBuildClient";

import { motion } from "framer-motion";

// 🔥 Animated card component
function HowWeWorkCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
    >
      <div className="bg-yellow-400 rounded-full p-2">
        <motion.div
          initial={{ scale: 0.7, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="bg-red-500 rounded-full p-6 flex items-center justify-center w-20 h-20 shadow-md"
        >
          <img
            src={item.img}
            alt={item.text}
            className={`${item.imgClass ?? "w-14 h-14"} object-contain`}
          />
        </motion.div>
      </div>

      <h3 className="font-bold text-xl mt-6 text-center">{item.num}</h3>

      <p className="text-gray-600 text-sm mt-1 text-center max-w-[180px]">
        {item.text}
      </p>
    </motion.div>
  );
}

const Home = () => {
  const howWeWorkItems = [
    {
      num: "01",
      img: "/mobile.png",
      text: "Install Our Application to get started.",
    },
    {
      num: "02",
      img: "/whatsapp.png",
      text: "Scan the QR code to Connect Your WhatsApp.",
    },
    {
      num: "03",
      img: "/email.png",
      text: "Connect with your Gmail & Get Ready.",
    },
    {
      num: "04",
      img: "/px.png",
      text: "Enter Your Query in Bpai Website",
    },
    {
      num: "05",
      img: "/new.png",
      imgClass: "w-16 h-16", // 🔥 slightly bigger image
      text: "Receive LLM Backed AI responses.",
    },
  ];

  return (
    <>
      <Head>
        <title>Brightpath AI – Private, Reliable, and Production-grade AI Systems</title>
        <meta
          name="description"
          content="Brightpath AI builds privacy-first intelligent systems with WhatsApp integration, Gmail sync, and audio transcription solutions."
        />
      </Head>

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

          {/* 🔥 RESTORED ANIMATED DOTTED LINE */}
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
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-10">
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
};

export default Home;




// "use client";

// import Head from "next/head";
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
//       viewport={{ once: false, amount: 0.3 }}
//       transition={{ duration: 0.5, delay: index * 0.15 }}
//       className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
//     >
//       <div className="bg-yellow-400 rounded-full p-2">
//         <motion.div
//           initial={{ scale: 0.7, rotate: -10 }}
//           whileInView={{ scale: 1, rotate: 0 }}
//           viewport={{ once: false, amount: 0.5 }}
//           transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
//           className="bg-red-500 rounded-full p-6 flex items-center justify-center w-28 h-28 shadow-md"
//         >
//           <img
//             src={item.img}
//             alt={item.text}
//             className={`${item.imgClass ?? "w-12 h-12"} object-contain`}
//           />
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
//       img: "/mobile.png",
//       text: "Install Our Application to get started.",
//     },
//     {
//       num: "02",
//       img: "/whatsapp.png",
//       text: "Scan the QR code to Connect Your WhatsApp.",
//     },
//     {
//       num: "03",
//       img: "/email.png",
//       text: "Connect with your Gmail & Get Ready.",
//     },
//     {
//       num: "04",
//       img: "/logu.png",
//       text: "Enter Your Query in Bpai Website",
//     },
//     {
//       num: "05",
//       img: "/ll.png",
//       imgClass: "w-16 h-16", // ✅ slightly bigger image
//       text: "receive LLM Backed AI responses.",
//     },
//   ];

//   return (
//     <>
//       <Head>
//         <title>Brightpath AI – Private, Reliable, and Production-grade AI Systems</title>
//         <meta
//           name="description"
//           content="Brightpath AI builds privacy-first intelligent systems with WhatsApp integration, Gmail sync, and audio transcription solutions."
//         />
//       </Head>

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

//           <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-10">
//             {howWeWorkItems.map((item, index) => (
//               <HowWeWorkCard key={index} item={item} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <div id="request-access" className="py-12">
//         <RequestAccessForm />
//       </div>

//       <BottomContact />
//       <Footer />
//     </>
//   );
// };

// export default Home;
