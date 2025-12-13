// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";
// // import { FiSend } from "react-icons/fi"; // Correct straight arrow icon

// // export default function Footer() {
// //   const [stars, setStars] = useState(0);
// //   const [hovered, setHovered] = useState(0);
// //   const [review, setReview] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [status, setStatus] = useState("");

// //   const submitReview = async () => {
// //     if (!stars || review.length < 5) {
// //       setStatus("❌ Please select stars and write a short review.");
// //       return;
// //     }

// //     setLoading(true);
// //     setStatus("");

// //     try {
// //       console.log("NEW REVIEW:", { stars, review });

// //       setTimeout(() => {
// //         setStatus("✅ Thanks for your feedback!");
// //         setStars(0);
// //         setReview("");
// //         setLoading(false);
// //       }, 800);
// //     } catch {
// //       setStatus("❌ Something went wrong.");
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="w-full h-[1px] bg-white/20"></div>

// //       <footer className="bg-black text-gray-300 pt-16 pb-10 border-t border-white/10">
// //         <div className="max-w-7xl mx-auto px-6 flex justify-between items-start space-x-12">
// //           {/* Main Footer Content */}
// //           <div className="flex flex-col justify-start">
// //             <Link href="#hero" className="text-xl font-bold tracking-wide hover:text-white transition">
// //               Brightpath AI
// //             </Link>
// //             <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
// //               Brightpath AI builds private, reliable, and production-grade AI systems
// //               designed for enterprises that demand speed, privacy, and measurable outcomes.
// //             </p>
// //           </div>

// //           {/* Product Section */}
// //           <div className="flex flex-col justify-start">
// //             <h3 className="text-sm font-semibold text-white tracking-wide mb-4">PRODUCT</h3>
// //             <ul className="space-y-2 text-sm text-gray-300">
// //               <li>Agentic Workflows</li>
// //               <li>Private RAG</li>
// //               <li>Evaluation & Evals</li>
// //               <li>Observability Tools</li>
// //               <li>Edge Inference</li>
// //               <li>Security & Privacy</li>
// //               <li>Deployment Platform</li>
// //             </ul>
// //           </div>

// //           {/* Resources Section */}
// //           <div className="flex flex-col justify-start">
// //             <h3 className="text-sm font-semibold text-white tracking-wide mb-4">RESOURCES</h3>
// //             <ul className="space-y-2 text-sm text-gray-300">
// //               <li>Blog</li>
// //               <li>Partner Program</li>
// //               <li>Help Center</li>
// //               <li>Pricing</li>
// //               <li>Engineering Updates</li>
// //               <li>AI Guidelines</li>
// //             </ul>
// //           </div>

// //           {/* Company Section */}
// //           <div className="flex flex-col justify-start">
// //             <h3 className="text-sm font-semibold text-white tracking-wide mb-4">COMPANY</h3>
// //             <ul className="space-y-2 text-sm text-gray-300">
// //               <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
// //               <li><Link href="#request-access" className="hover:text-white transition">Contact</Link></li>
// //             </ul>
// //           </div>

// //           {/* Feedback Section (Without Shield) */}
// //           <div className="bg-black text-white p-5 rounded-md flex flex-col justify-start">
// //             <p className="text-gray-400 text-xs mb-3">Rate your experience</p>

// //             {/* Star Rating */}
// //             <div className="flex gap-1 mb-3 text-lg cursor-pointer">
// //               {[1, 2, 3, 4, 5].map((num) => (
// //                 <span
// //                   key={num}
// //                   onClick={() => setStars(num)}
// //                   onMouseEnter={() => setHovered(num)}
// //                   onMouseLeave={() => setHovered(0)}
// //                   className={`transition ${num <= (hovered || stars) ? "text-[#19F7C1]" : "text-gray-600"}`}
// //                 >
// //                   ★
// //                 </span>
// //               ))}
// //             </div>

// //             {/* Feedback Input */}
// //             <div className="flex items-center gap-2">
// //               <input
// //                 value={review}
// //                 onChange={(e) => setReview(e.target.value.slice(0, 60))}
// //                 placeholder="share your feedback…"
// //                 className="w-full bg-transparent border border-gray-700 text-white px-3 py-2 rounded-md text-xs outline-none focus:border-[#19F7C1]"
// //               />
// //               <button
// //                 onClick={submitReview}
// //                 disabled={loading}
// //                 className="bg-[#727c8d] hover:bg-[#5f6877] text-white px-3 py-2 rounded-md text-xs transition disabled:opacity-50"
// //               >
// //                 <FiSend size={20} />
// //               </button>
// //             </div>

// //             {status && <p className="mt-2 text-xs text-gray-400">{status}</p>}
// //           </div>
// //         </div>

// //         {/* Divider */}
// //         <div className="max-w-7xl mx-auto px-6 mt-12 mb-6 border-t border-white/10"></div>

// //         {/* Bottom Section */}
// //         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
// //           <div className="flex gap-6 mb-4 md:mb-0">
// //             <Link href="#hero" className="hover:text-white transition">Back to Top</Link>
// //           </div>

// //           <p className="text-center md:text-right">
// //             © {new Date().getFullYear()} Brightpath Technology & Services Pvt. Ltd.
// //           </p>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // }




// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FiSend } from "react-icons/fi"; // Correct straight arrow icon

// export default function Footer() {
//   const [stars, setStars] = useState(0);  // Store selected star rating
//   const [hovered, setHovered] = useState(0);  // Store hovered star for hover effect
//   const [review, setReview] = useState("");  // Store the review text
//   const [email, setEmail] = useState("");  // Optional email field
//   const [loading, setLoading] = useState(false);  // Loading state for form submission
//   const [status, setStatus] = useState("");  // Status message after submission

//   // Handle the form submission
//   const submitReview = async () => {
//     if (!stars || review.length < 5) {
//       setStatus("❌ Please select stars and write a short review.");
//       return;
//     }

//     setLoading(true);
//     setStatus("");

//     try {
//       console.log("NEW REVIEW:", { stars, review, email });

//       // Send the review data to the backend API
//       const res = await fetch("/api/review", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ stars, review, email }), // Send stars, review, and optional email
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setStatus("✅ Thanks for your feedback!");
//         setStars(0);  // Reset star rating
//         setReview("");  // Reset review input field
//         setEmail("");  // Reset email input field
//       } else {
//         setStatus("❌ Failed to send. Try again.");
//       }
//     } catch {
//       setStatus("❌ Something went wrong.");
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       <div className="w-full h-[1px] bg-white/20"></div>

//       <footer className="bg-black text-gray-300 pt-16 pb-10 border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-12">
//           {/* Main Footer Content */}
//           <div className="flex flex-col justify-start w-full md:w-auto">
//             <Link href="#hero" className="text-xl font-bold tracking-wide hover:text-white transition">
//               Brightpath AI
//             </Link>
//             <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
//               Brightpath AI builds private, reliable, and production-grade AI systems designed for enterprises that demand speed, privacy, and measurable outcomes.
//             </p>
//           </div>

//           {/* Product Section */}
//           <div className="flex flex-col justify-start w-full md:w-auto">
//             <h3 className="text-sm font-semibold text-white tracking-wide mb-4">PRODUCT</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li>Agentic Workflows</li>
//               <li>Private RAG</li>
//               <li>Evaluation & Evals</li>
//               <li>Observability Tools</li>
//               <li>Edge Inference</li>
//               <li>Security & Privacy</li>
//               <li>Deployment Platform</li>
//             </ul>
//           </div>

//           {/* Resources Section */}
//           <div className="flex flex-col justify-start w-full md:w-auto">
//             <h3 className="text-sm font-semibold text-white tracking-wide mb-4">RESOURCES</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li>Blog</li>
//               <li>Partner Program</li>
//               <li>Help Center</li>
//               <li>Pricing</li>
//               <li>Engineering Updates</li>
//               <li>AI Guidelines</li>
//             </ul>
//           </div>

//           {/* Company Section */}
//           <div className="flex flex-col justify-start w-full md:w-auto">
//             <h3 className="text-sm font-semibold text-white tracking-wide mb-4">COMPANY</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
//               <li><Link href="#request-access" className="hover:text-white transition">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Feedback Section */}
//           <div className="bg-black text-white p-5 rounded-md flex flex-col justify-start w-full md:w-auto">
//             <p className="text-gray-400 text-xs mb-3">Rate your experience</p>

//             {/* Star Rating */}
//             <div className="flex gap-1 mb-3 text-lg cursor-pointer">
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <span
//                   key={num}
//                   onClick={() => setStars(num)}  // Set stars when clicked
//                   onMouseEnter={() => setHovered(num)}  // Highlight stars on hover
//                   onMouseLeave={() => setHovered(0)}  // Reset hover when mouse leaves
//                   className={`transition ${num <= (hovered || stars) ? "text-[#19F7C1]" : "text-gray-600"}`}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>

//             {/* Feedback Input */}
//             <div className="flex items-center gap-2">
//               <input
//                 value={review}
//                 onChange={(e) => setReview(e.target.value.slice(0, 200))}  // Limit to 200 characters
//                 placeholder="Share your feedback…"
//                 className="w-full bg-transparent border border-gray-700 text-white px-3 py-2 rounded-md text-xs outline-none focus:border-[#19F7C1]"
//               />
//               <button
//                 onClick={submitReview}
//                 disabled={loading}
//                 className="bg-[#727c8d] hover:bg-[#5f6877] text-white px-3 py-2 rounded-md text-xs transition disabled:opacity-50"
//               >
//                 <FiSend size={20} />
//               </button>
//             </div>

//             {/* Optional Email Input */}
//             <div className="mt-2">
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email (optional)"
//                 className="w-full bg-transparent border border-gray-700 text-white px-3 py-2 rounded-md text-xs outline-none focus:border-[#19F7C1]"
//               />
//             </div>

//             {status && <p className="mt-2 text-xs text-gray-400">{status}</p>}
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="max-w-7xl mx-auto px-6 mt-12 mb-6 border-t border-white/10"></div>

//         {/* Bottom Section */}
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
//           <div className="flex gap-6 mb-4 md:mb-0">
//             <Link href="#hero" className="hover:text-white transition">Back to Top</Link>
//           </div>

//           <p className="text-center md:text-right">
//             © {new Date().getFullYear()} Brightpath Technology & Services Pvt. Ltd.
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// }
// yy



// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FiSend } from "react-icons/fi";
// import { MdSend } from "react-icons/md";

// export default function Footer() {
//   const [stars, setStars] = useState(0);  // Store selected star rating
//   const [hovered, setHovered] = useState(0);  // Store hovered star for hover effect
//   const [review, setReview] = useState("");  // Store the review text
//   const [loading, setLoading] = useState(false);  // Loading state for form submission
//   const [status, setStatus] = useState("");  // Status message after submission

//   // Handle the form submission
// const submitReview = async () => {
//   if (!stars) {
//     setStatus("❌ Please select a star rating.");
//     return;
//   }

//   if (review.trim().length < 5) {
//     setStatus("❌ Please write at least 5 characters.");
//     return;
//   }

//   setLoading(true);
//   setStatus("");

//   try {
//     const res = await fetch("/api/review", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ stars, review }),
//     });

//     const data = await res.json();

//     if (!res.ok || !data.success) {
//       setStatus("❌ Failed to send review.");
//       return;
//     }

//     setStatus("✅ Thanks for your feedback!");
//     setStars(0);
//     setReview("");
//   } catch (err) {
//     setStatus("❌ Server error.");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <>
//       <div className="w-full h-[1px] bg-white/20"></div>

//       <footer className="bg-black text-gray-300 pt-16 pb-10 border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-12">
//           {/* Main Footer Content */}
//           <div className="flex flex-col justify-start w-full md:w-auto">
//             <Link href="#hero" className="text-xl font-bold tracking-wide hover:text-white transition">
//               Brightpath AI
//             </Link>
//             <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
//               Brightpath AI builds private, reliable, and production-grade AI systems designed for enterprises that demand speed, privacy, and measurable outcomes.
//             </p>
//           </div>

//           {/* Product Section */}
//           <div className="flex flex-col justify-start w-full md:w-auto">
//             <h3 className="text-sm font-semibold text-white tracking-wide mb-4">PRODUCT</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li>Agentic Workflows</li>
//               <li>Private RAG</li>
//               <li>Evaluation & Evals</li>
//               <li>Observability Tools</li>
//               <li>Edge Inference</li>
//               <li>Security & Privacy</li>
//               <li>Deployment Platform</li>
//             </ul>
//           </div>

//           {/* Resources Section */}
//           <div className="flex flex-col justify-start w-full md:w-auto">
//             <h3 className="text-sm font-semibold text-white tracking-wide mb-4">RESOURCES</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li>Blog</li>
//               <li>Partner Program</li>
//               <li>Help Center</li>
//               <li>Pricing</li>
//               <li>Engineering Updates</li>
//               <li>AI Guidelines</li>
//             </ul>
//           </div>

//           {/* Company Section */}
//           <div className="flex flex-col justify-start w-full md:w-auto">
//             <h3 className="text-sm font-semibold text-white tracking-wide mb-4">COMPANY</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
//               <li><Link href="#request-access" className="hover:text-white transition">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Feedback Section */}
//           <div className="bg-black text-white p-5 rounded-md flex flex-col justify-start w-full md:w-auto">
//             <p className="text-gray-400 text-xs mb-3">Rate your experience</p>

//             {/* Star Rating */}
//             <div className="flex gap-1 mb-3 text-lg cursor-pointer">
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <span
//                   key={num}
//                   onClick={() => setStars(num)}  // Set stars when clicked
//                   onMouseEnter={() => setHovered(num)}  // Highlight stars on hover
//                   onMouseLeave={() => setHovered(0)}  // Reset hover when mouse leaves
//                   className={`transition ${num <= (hovered || stars) ? "text-[#19F7C1]" : "text-gray-600"}`}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>

//             {/* Feedback Input */}
//             <div className="flex items-center gap-2">
//               <input
//                 value={review}
//                 onChange={(e) => setReview(e.target.value.slice(0, 200))}  // Limit to 200 characters
//                 placeholder="Share your feedback…"
//                 className="w-full bg-transparent border border-gray-700 text-white px-3 py-2 rounded-md text-xs outline-none focus:border-[#19F7C1]"
//               />
//              <button
//   onClick={submitReview}
//   disabled={loading || !stars || review.trim().length < 5}
//   className="bg-[#727c8d] hover:bg-[#5f6877] text-white px-3 py-2 rounded-md text-xs transition disabled:opacity-40 disabled:cursor-not-allowed"
// >
//   <MdSend size={16} />
// </button>

//             </div>

//             {status && <p className="mt-2 text-xs text-gray-400">{status}</p>}
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="max-w-7xl mx-auto px-6 mt-12 mb-6 border-t border-white/10"></div>

//         {/* Bottom Section */}
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
//           <div className="flex gap-6 mb-4 md:mb-0">
//             <Link href="#hero" className="hover:text-white transition">Back to Top</Link>
//           </div>

//           <p className="text-center md:text-right">
//             © {new Date().getFullYear()} Brightpath Technology & Services Pvt. Ltd.
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// }



// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { MdSend } from "react-icons/md";

// export default function Footer() {
//   const [stars, setStars] = useState(0);
//   const [hovered, setHovered] = useState(0);
//   const [review, setReview] = useState("");
//   const [status, setStatus] = useState("");

//   // ✅ Store review in localStorage
//   const submitReview = () => {
//     if (!stars) {
//       setStatus("❌ Please select a star rating.");
//       return;
//     }

//     if (review.trim().length < 5) {
//       setStatus("❌ Please write at least 5 characters.");
//       return;
//     }

//     const newReview = {
//       stars,
//       review,
//       createdAt: new Date().toISOString(),
//     };

//     // Get existing reviews
//     const existingReviews = JSON.parse(
//       localStorage.getItem("reviews") || "[]"
//     );

//     // Add new review
//     existingReviews.push(newReview);

//     // Save back to localStorage
//     localStorage.setItem("reviews", JSON.stringify(existingReviews));

//     // UI feedback
//     setStatus("✅ Thanks for your feedback!");
//     setStars(0);
//     setReview("");
//   };

//   return (
//     <>
//       <div className="w-full h-[1px] bg-white/20"></div>

//       <footer className="bg-black text-gray-300 pt-16 pb-10 border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-12">

//           {/* Brand */}
//           <div className="flex flex-col w-full md:w-auto">
//             <Link href="#hero" className="text-xl font-bold hover:text-white transition">
//               Brightpath AI
//             </Link>
//             <p className="text-sm text-gray-400 max-w-xs">
//               Brightpath AI builds private, reliable, and production-grade AI systems.
//             </p>
//           </div>

//           {/* Product */}
//           <div>
//             <h3 className="text-sm font-semibold text-white mb-4">PRODUCT</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Agentic Workflows</li>
//               <li>Private RAG</li>
//               <li>Evaluation & Evals</li>
//               <li>Observability Tools</li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="text-sm font-semibold text-white mb-4">COMPANY</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#about">About Us</Link></li>
//               <li><Link href="#request-access">Contact</Link></li>
//             </ul>
//           </div>

//           {/* ⭐ Feedback Section */}
//           <div className="bg-black text-white p-5 rounded-md w-full md:w-auto">
//             <p className="text-gray-400 text-xs mb-3">Rate your experience</p>

//             {/* Stars */}
//             <div className="flex gap-1 mb-3 text-lg cursor-pointer">
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <span
//                   key={num}
//                   onClick={() => setStars(num)}
//                   onMouseEnter={() => setHovered(num)}
//                   onMouseLeave={() => setHovered(0)}
//                   className={`${
//                     num <= (hovered || stars)
//                       ? "text-[#19F7C1]"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>

//             {/* Input */}
//             <div className="flex gap-2">
//               <input
//                 value={review}
//                 onChange={(e) => setReview(e.target.value.slice(0, 200))}
//                 placeholder="Share your feedback…"
//                 className="w-full bg-transparent border border-gray-700 px-3 py-2 rounded-md text-xs outline-none"
//               />

//               <button
//                 onClick={submitReview}
//                 disabled={!stars || review.trim().length < 5}
//                 className="bg-[#727c8d] hover:bg-[#5f6877] px-3 py-2 rounded-md disabled:opacity-40"
//               >
//                 <MdSend size={16} />
//               </button>
//             </div>

//             {status && <p className="mt-2 text-xs text-gray-400">{status}</p>}
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-white/10"></div>

//         <div className="max-w-7xl mx-auto px-6 mt-6 flex justify-between text-xs text-gray-500">
//           <Link href="#hero">Back to Top</Link>
//           <p>© {new Date().getFullYear()} Brightpath Technology</p>
//         </div>
//       </footer>
//     </>
//   );
// }


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { MdSend } from "react-icons/md";

// export default function Footer() {
//   const [stars, setStars] = useState(0);
//   const [hovered, setHovered] = useState(0);
//   const [review, setReview] = useState("");
//   const [status, setStatus] = useState("");

//   // ✅ Save review to localStorage (NO backend)
//   const submitReview = () => {
//     if (!stars) {
//       setStatus("❌ Please select a star rating.");
//       return;
//     }

//     if (review.trim().length < 5) {
//       setStatus("❌ Please write at least 5 characters.");
//       return;
//     }

//     const newReview = {
//       stars,
//       review,
//       createdAt: new Date().toISOString(),
//     };

//     const existingReviews = JSON.parse(
//       localStorage.getItem("reviews") || "[]"
//     );

//     existingReviews.push(newReview);

//     localStorage.setItem("reviews", JSON.stringify(existingReviews));

//     setStatus("✅ Thanks for your feedback!");
//     setStars(0);
//     setReview("");
//   };

//   return (
//     <>
//       <div className="w-full h-[1px] bg-white/20"></div>

//       <footer className="bg-black text-gray-300 pt-16 pb-10 border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-12">

//           {/* Brand */}
//           <div className="flex flex-col w-full md:w-auto">
//             <Link href="#hero" className="text-xl font-bold hover:text-white transition">
//               Brightpath AI
//             </Link>
//             <p className="text-sm text-gray-400 max-w-xs">
//               Brightpath AI builds private, reliable, and production-grade AI systems designed for enterprises.
//             </p>
//           </div>

//           {/* Product */}
//           <div className="flex flex-col w-full md:w-auto">
//             <h3 className="text-sm font-semibold text-white mb-4">PRODUCT</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li>Agentic Workflows</li>
//               <li>Private RAG</li>
//               <li>Evaluation & Evals</li>
//               <li>Observability Tools</li>
//               <li>Edge Inference</li>
//               <li>Security & Privacy</li>
//               <li>Deployment Platform</li>
//             </ul>
//           </div>

//           {/* Resources (RESTORED ✅) */}
//           <div className="flex flex-col w-full md:w-auto">
//             <h3 className="text-sm font-semibold text-white mb-4">RESOURCES</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li>Blog</li>
//               <li>Partner Program</li>
//               <li>Help Center</li>
//               <li>Pricing</li>
//               <li>Engineering Updates</li>
//               <li>AI Guidelines</li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div className="flex flex-col w-full md:w-auto">
//             <h3 className="text-sm font-semibold text-white mb-4">COMPANY</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><Link href="#about" className="hover:text-white">About Us</Link></li>
//               <li><Link href="#request-access" className="hover:text-white">Contact</Link></li>
//             </ul>
//           </div>

//           {/* ⭐ Feedback Section */}
//           {/* <div className="bg-black text-white p-5 rounded-md w-full md:w-auto"> */}
//           <div className="bg-black text-white p-5 rounded-md w-full md:w-auto self-start">

//             <p className="text-gray-400 text-xs mb-3">Rate your experience</p>

//             {/* Stars */}
//             <div className="flex gap-1 mb-3 text-lg cursor-pointer">
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <span
//                   key={num}
//                   onClick={() => setStars(num)}
//                   onMouseEnter={() => setHovered(num)}
//                   onMouseLeave={() => setHovered(0)}
//                   className={`transition ${
//                     num <= (hovered || stars)
//                       ? "text-[#19F7C1]"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>

//             {/* Input */}
//             <div className="flex gap-2">
//               <input
//                 value={review}
//                 onChange={(e) => setReview(e.target.value.slice(0, 200))}
//                 placeholder="Share your feedback…"
//                 className="w-full bg-transparent border border-gray-700 px-3 py-2 rounded-md text-xs outline-none"
//               />

//               <button
//                 onClick={submitReview}
//                 disabled={!stars || review.trim().length < 5}
//                 className="bg-[#727c8d] hover:bg-[#5f6877] px-3 py-2 rounded-md disabled:opacity-40"
//               >
//                 <MdSend size={16} />
//               </button>
//             </div>

//             {status && <p className="mt-2 text-xs text-gray-400">{status}</p>}
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-white/10"></div>

//         <div className="max-w-7xl mx-auto px-6 mt-6 flex justify-between text-xs text-gray-500">
//           <Link href="#hero">Back to Top</Link>
//           <p>© {new Date().getFullYear()} Brightpath Technology & Services Pvt. Ltd.</p>
//         </div>
//       </footer>
//     </>
//   );
// }


"use client";
import { useState } from "react";
import Link from "next/link";
import { MdSend } from "react-icons/md";

export default function Footer() {
  const [stars, setStars] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [review, setReview] = useState("");
  const [status, setStatus] = useState("");

  // Save review to localStorage
  const submitReview = () => {
    if (!stars) {
      setStatus("❌ Please select a star rating.");
      return;
    }

    if (review.trim().length < 5) {
      setStatus("❌ Please write at least 5 characters.");
      return;
    }

    const newReview = {
      stars,
      review,
      createdAt: new Date().toISOString(),
    };

    const existingReviews = JSON.parse(
      localStorage.getItem("reviews") || "[]"
    );

    existingReviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(existingReviews));

    setStatus("✅ Thanks for your feedback!");
    setStars(0);
    setReview("");
  };

  return (
    <>
      <div className="w-full h-[1px] bg-white/20"></div>

      <footer className="bg-black text-gray-300 pt-16 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Brand */}
          <div className="flex flex-col max-w-xs">
            <Link href="#hero" className="text-xl font-bold hover:text-white transition">
              Brightpath AI
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              Brightpath AI builds private, reliable, and production-grade AI systems designed for enterprises.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide mb-4">
              PRODUCT
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Agentic Workflows</li>
              <li>Private RAG</li>
              <li>Evaluation & Evals</li>
              <li>Observability Tools</li>
              <li>Edge Inference</li>
              <li>Security & Privacy</li>
              <li>Deployment Platform</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide mb-4">
              RESOURCES
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Partner Program</li>
              <li>Help Center</li>
              <li>Pricing</li>
              <li>Engineering Updates</li>
              <li>AI Guidelines</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#request-access" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ⭐ Feedback (ALIGNED FIXED) */}
          <div className="self-start">
            <h3 className="text-sm font-semibold text-white tracking-wide mb-4">
              FEEDBACK
            </h3>

            <p className="text-gray-400 text-xs mb-3">
              Rate your experience
            </p>

            {/* Stars */}
            <div className="flex gap-1 mb-3 text-lg cursor-pointer">
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  onClick={() => setStars(num)}
                  onMouseEnter={() => setHovered(num)}
                  onMouseLeave={() => setHovered(0)}
                  className={`transition ${
                    num <= (hovered || stars)
                      ? "text-[#19F7C1]"
                      : "text-gray-600"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                value={review}
                onChange={(e) => setReview(e.target.value.slice(0, 200))}
                placeholder="Share your feedback..."
                className="w-[220px] bg-transparent border border-gray-700 px-3 py-2 rounded-md text-xs outline-none focus:border-[#19F7C1]"
              />

              <button
                onClick={submitReview}
                disabled={!stars || review.trim().length < 5}
                className="bg-[#727c8d] hover:bg-[#5f6877] px-3 py-2 rounded-md disabled:opacity-40"
              >
                <MdSend size={16} />
              </button>
            </div>

            {status && (
              <p className="mt-2 text-xs text-gray-400">{status}</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-white/10"></div>

        {/* Bottom */}
        <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <Link href="#hero" className="hover:text-white transition">
            Back to Top
          </Link>
          <p className="mt-2 md:mt-0">
            © {new Date().getFullYear()} Brightpath Technology & Services Pvt. Ltd.
          </p>
        </div>
      </footer>
    </>
  );
}
