// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // export default function ContactFormSection() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState("");

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async () => {
// //     if (!form.name || !form.email || !form.message) {
// //       setSuccess("Please fill all required fields.");
// //       return;
// //     }

// //     setLoading(true);
// //     setSuccess("");

// //     try {
// //       const res = await fetch("/api/send-email", {
//         // method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(form),
// //       });

// //       if (res.ok) {
// //         setSuccess("Message sent successfully!");
// //         setForm({ name: "", email: "", phone: "", message: "" });
// //       } else {
// //         setSuccess("Failed to send message. Try again.");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setSuccess("Server error. Please try again later.");
// //     }

// //     setLoading(false);
// //   };

// //   // 🔥 Stagger animation for inputs
// //   const containerVars = {
// //     hidden: { opacity: 0 },
// //     show: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.15,
// //         delayChildren: 0.2,
// //       },
// //     },
// //   };

// //   const itemVars = {
// //     hidden: { opacity: 0, y: 20 },
// //     show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// //   };

// //   return (
// //     <section className="w-full py-20 px-6 bg-[#004B60] flex justify-center">
// //       <motion.div
// //         initial={{ opacity: 0, y: 50, scale: 0.95 }}
// //         whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //         transition={{ duration: 0.6, ease: "easeOut" }}
// //         viewport={{ once: true }}
// //         className="max-w-2xl w-full mx-auto"
// //       >
// //         <h2 className="text-5xl font-semibold mb-10 text-white text-center">
// //           Get In Touch With Us
// //         </h2>

// //         {/* Stagger container */}
// //         <motion.div variants={containerVars} initial="hidden" whileInView="show">
// //           {/* NAME */}
// //           <motion.input
// //             variants={itemVars}
// //             type="text"
// //             name="name"
// //             value={form.name}
// //             onChange={handleChange}
// //             placeholder="FULL NAME"
// //             className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 mb-5 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
// //           />

// //           {/* EMAIL + PHONE */}
// //           <motion.div
// //             className="grid grid-cols-1 md:grid-cols-2 gap-6"
// //             variants={itemVars}
// //           >
// //             <input
// //               type="email"
// //               name="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               placeholder="E-MAIL"
// //               className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
// //             />

// //             <input
// //               type="text"
// //               name="phone"
// //               value={form.phone}
// //               onChange={handleChange}
// //               placeholder="PHONE NUMBER"
// //               className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
// //             />
// //           </motion.div>

// //           {/* MESSAGE */}
// //           <motion.textarea
// //             variants={itemVars}
// //             name="message"
// //             value={form.message}
// //             onChange={handleChange}
// //             placeholder="YOUR MESSAGE"
// //             rows={5}
// //             className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 mt-6 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
// //           ></motion.textarea>

// //           {/* SUBMIT BUTTON */}
// //           <motion.div
// //             className="flex justify-center"
// //             variants={itemVars}
// //           >
// //             <button
// //               onClick={handleSubmit}
// //               disabled={loading}
// //               className={`relative mt-6 px-10 py-4 rounded-full text-lg tracking-wide transition-all duration-300 shadow-lg
// //                 ${
// //                   loading
// //                     ? "bg-[#003B49] text-transparent cursor-not-allowed"
// //                     : "bg-[#FF8F3A] text-black hover:scale-105 hover:shadow-xl"
// //                 }
// //                 ${
// //                   success === "Message sent successfully!"
// //                     ? "bg-green-600 text-white"
// //                     : ""
// //                 }
// //               `}
// //               style={{ minWidth: "180px" }}
// //             >
// //               {!loading && success !== "Message sent successfully!" && "SUBMIT"}

// //               {loading && (
// //                 <span className="absolute inset-0 flex items-center justify-center">
// //                   <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
// //                 </span>
// //               )}

// //               {success === "Message sent successfully!" && "Submitted ✔"}
// //             </button>
// //           </motion.div>
// //         </motion.div>

// //         {/* SUCCESS MSG */}
// //         {success && (
// //           <p className="text-center mt-4 text-white font-semibold">
// //             {success}
// //           </p>
// //         )}
// //       </motion.div>
// //     </section>
// //   );
// // }



// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // export default function ContactFormSection() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState("");

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // ✅ VERY IMPORTANT

// //     if (!form.name || !form.email || !form.message) {
// //       setSuccess("Please fill all required fields.");
// //       return;
// //     }

// //     setLoading(true);
// //     setSuccess("");

// //     try {
// //       const res = await fetch("/api/contact", { // ✅ CORRECT API ROUTE
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(form),
// //       });

// //       const data = await res.json();

// //       if (data.success) {
// //         setSuccess("Message sent successfully!");
// //         setForm({ name: "", email: "", phone: "", message: "" });
// //       } else {
// //         setSuccess("Failed to send message. Try again.");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setSuccess("Server error. Please try again later.");
// //     }

// //     setLoading(false);
// //   };

// //   // 🔥 Stagger animation for inputs
// //   const containerVars = {
// //     hidden: { opacity: 0 },
// //     show: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.15,
// //         delayChildren: 0.2,
// //       },
// //     },
// //   };

// //   const itemVars = {
// //     hidden: { opacity: 0, y: 20 },
// //     show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// //   };

// //   return (
// //     <section className="w-full py-20 px-6 bg-[#004B60] flex justify-center">
// //       <motion.div
// //         initial={{ opacity: 0, y: 50, scale: 0.95 }}
// //         whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //         transition={{ duration: 0.6, ease: "easeOut" }}
// //         viewport={{ once: true }}
// //         className="max-w-2xl w-full mx-auto"
// //       >
// //         <h2 className="text-5xl font-semibold mb-10 text-white text-center">
// //           Get In Touch With Us
// //         </h2>

// //         {/* ✅ REAL FORM WRAPPER */}
// //         <form onSubmit={handleSubmit}>
// //           <motion.div variants={containerVars} initial="hidden" whileInView="show">

// //             {/* NAME */}
// //             <motion.input
// //               variants={itemVars}
// //               type="text"
// //               name="name"
// //               value={form.name}
// //               onChange={handleChange}
// //               placeholder="FULL NAME"
// //               className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 mb-5 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
// //             />

// //             {/* EMAIL + PHONE */}
// //             <motion.div
// //               className="grid grid-cols-1 md:grid-cols-2 gap-6"
// //               variants={itemVars}
// //             >
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={form.email}
// //                 onChange={handleChange}
// //                 placeholder="E-MAIL"
// //                 className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
// //               />

// //               <input
// //                 type="text"
// //                 name="phone"
// //                 value={form.phone}
// //                 onChange={handleChange}
// //                 placeholder="PHONE NUMBER"
// //                 className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
// //               />
// //             </motion.div>

// //             {/* MESSAGE */}
// //             <motion.textarea
// //               variants={itemVars}
// //               name="message"
// //               value={form.message}
// //               onChange={handleChange}
// //               placeholder="YOUR MESSAGE"
// //               rows={5}
// //               className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 mt-6 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
// //             ></motion.textarea>

// //             {/* SUBMIT BUTTON */}
// //             <motion.div className="flex justify-center" variants={itemVars}>
// //               <button
// //                 type="submit"
// //                 disabled={loading}
// //                 className={`relative mt-6 px-10 py-4 rounded-full text-lg tracking-wide transition-all duration-300 shadow-lg
// //                   ${
// //                     loading
// //                       ? "bg-[#003B49] text-transparent cursor-not-allowed"
// //                       : "bg-[#FF8F3A] text-black hover:scale-105 hover:shadow-xl"
// //                   }
// //                   ${
// //                     success === "Message sent successfully!"
// //                       ? "bg-green-600 text-white"
// //                       : ""
// //                   }
// //                 `}
// //                 style={{ minWidth: "180px" }}
// //               >
// //                 {!loading && success !== "Message sent successfully!" && "SUBMIT"}

// //                 {loading && (
// //                   <span className="absolute inset-0 flex items-center justify-center">
// //                     <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
// //                   </span>
// //                 )}

// //                 {success === "Message sent successfully!" && "Submitted ✔"}
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         </form>

// //         {/* SUCCESS / ERROR MESSAGE */}
// //         {success && (
// //           <p className="text-center mt-4 text-white font-semibold">
// //             {success}
// //           </p>
// //         )}
// //       </motion.div>
// //     </section>
// //   );
// // }



// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function ContactFormSection() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");

//   // ✅ Handle input + numbers only for phone
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phone" && !/^\d*$/.test(value)) return;

//     setForm({ ...form, [name]: value });
//   };

//   // ✅ Email validation
//   const isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   // ✅ SAFE SUBMIT HANDLER (fixes <!DOCTYPE JSON error)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.message) {
//       setSuccess("Please fill all required fields.");
//       return;
//     }

//     if (!isValidEmail(form.email)) {
//       setSuccess("Please enter a valid email address.");
//       return;
//     }

//     if (form.phone && !/^\d{7,15}$/.test(form.phone)) {
//       setSuccess("Phone number must contain only digits (7–15).");
//       return;
//     }

//     setLoading(true);
//     setSuccess("");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       // ✅ SAFE JSON PARSE (prevents your error)
//       let data = null;
//       try {
//         data = await res.json();
//       } catch (jsonErr) {
//         console.error("Invalid JSON response:", jsonErr);
//         setSuccess("Server responded, but format was invalid.");
//         setLoading(false);
//         return;
//       }

//       if (res.ok && data?.success) {
//         setSuccess("Message sent successfully!");
//         setForm({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setSuccess("Failed to send message. Try again.");
//       }
//     } catch (err) {
//       console.error("Network error:", err);
//       setSuccess("Server error. Please try again later.");
//     }

//     setLoading(false);
//   };

//   // 🔥 Stagger animation for inputs
//   const containerVars = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVars = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section className="w-full py-20 px-6 bg-[#004B60] flex justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 50, scale: 0.95 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="max-w-2xl w-full mx-auto"
//       >
//         <h2 className="text-5xl font-semibold mb-10 text-white text-center">
//           Get In Touch With Us
//         </h2>

//         {/* ✅ REAL FORM WRAPPER */}
//         <form onSubmit={handleSubmit}>
//           <motion.div variants={containerVars} initial="hidden" whileInView="show">

//             {/* NAME */}
//             <motion.input
//               variants={itemVars}
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="FULL NAME"
//               className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 mb-5 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
//             />

//             {/* EMAIL + PHONE */}
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//               variants={itemVars}
//             >
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="E-MAIL"
//                 className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 value={form.phone}
//                 onChange={handleChange}
//                 placeholder="PHONE NUMBER"
//                 inputMode="numeric"
//                 className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
//               />
//             </motion.div>

//             {/* MESSAGE */}
//             <motion.textarea
//               variants={itemVars}
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="YOUR MESSAGE"
//               rows={5}
//               className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 mt-6 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
//             ></motion.textarea>

//             {/* SUBMIT BUTTON */}
//             <motion.div className="flex justify-center" variants={itemVars}>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`relative mt-6 px-10 py-4 rounded-full text-lg tracking-wide transition-all duration-300 shadow-lg
//                   ${
//                     loading
//                       ? "bg-[#003B49] text-transparent cursor-not-allowed"
//                       : "bg-[#FF8F3A] text-black hover:scale-105 hover:shadow-xl"
//                   }
//                   ${
//                     success === "Message sent successfully!"
//                       ? "bg-green-600 text-white"
//                       : ""
//                   }
//                 `}
//                 style={{ minWidth: "180px" }}
//               >
//                 {!loading && success !== "Message sent successfully!" && "SUBMIT"}

//                 {loading && (
//                   <span className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//                   </span>
//                 )}

//                 {success === "Message sent successfully!" && "Submitted ✔"}
//               </button>
//             </motion.div>
//           </motion.div>
//         </form>

//         {/* ✅ SUCCESS / ERROR MESSAGE */}
//         {success && (
//           <p className="text-center mt-4 text-white font-semibold">
//             {success}
//           </p>
//         )}
//       </motion.div>
//     </section>
//   );
// }



//  "use client";
 
//  import { useState } from "react";
 
//  export default function GetInTouch() {
//    const [form, setForm] = useState({
//      name: "",
//      email: "",
//      phone: "",
//      message: "",
//    });
 
//    const [loading, setLoading] = useState(false);
//    const [status, setStatus] = useState("");
 
//    const handleChange = (e) => {
//      const { name, value } = e.target;
 
//      // ✅ numbers only for phone
//      if (name === "phone" && !/^\d*$/.test(value)) return;
 
//      setForm({ ...form, [name]: value });
//    };
 
//    const handleSubmit = async (e) => {
//      e.preventDefault();
 
//      if (!form.name || !form.email || !form.message) {
//        setStatus("❌ Please fill all required fields.");
//        return;
//      }
 
//      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//      if (!emailRegex.test(form.email)) {
//        setStatus("❌ Invalid email format.");
//        return;
//      }
 
//      setLoading(true);
//      setStatus("");
 
//      try {
//        const res = await fetch("/api/get-in-touch", {
//          method: "POST",
//          headers: { "Content-Type": "application/json" },
//          body: JSON.stringify(form),
//        });
 
//        const text = await res.text(); // ✅ SAFE — no JSON crash
//        const data = text ? JSON.parse(text) : {};
 
//        if (res.ok && data.success) {
//          setStatus("✅ Message sent successfully!");
//          setForm({ name: "", email: "", phone: "", message: "" });
//        } else {
//          setStatus("❌ Failed to send. Try again.");
//        }
//      } catch (err) {
//        console.error(err);
//        setStatus("❌ Server error. Try again later.");
//      }
 
//      setLoading(false);
//    };
 
//    return (
//      <section className="w-full py-20 flex justify-center bg-[#004B60]">
//        <form
//          onSubmit={handleSubmit}
//          className="bg-white p-8 rounded-xl w-full max-w-md space-y-4"
//        >
//          <h2 className="text-2xl font-bold text-center">Get In Touch</h2>
 
//          <input
//            name="name"
//            value={form.name}
//            onChange={handleChange}
//            placeholder="Full Name"
//            className="w-full p-3 border rounded"
//          />
 
//          <input
//            name="email"
//            value={form.email}
//            onChange={handleChange}
//            placeholder="Email"
//            className="w-full p-3 border rounded"
//          />
 
//          <input
//            name="phone"
//            value={form.phone}
//            onChange={handleChange}
//            placeholder="Phone Number"
//            className="w-full p-3 border rounded"
//          />
 
//          <textarea
//            name="message"
//            value={form.message}
//            onChange={handleChange}
//            placeholder="Your Message"
//            className="w-full p-3 border rounded"
//            rows={4}
//          />
 
//          <button
//            disabled={loading}
//            className="bg-orange-500 text-white px-6 py-2 rounded w-full"
//          >
//            {loading ? "Sending..." : "Send Message"}
//          </button>
 
//          {status && <p className="text-center mt-2">{status}</p>}
//        </form>
//      </section>
//    );
//  }


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
// import { motion } from "framer-motion";

// export default function GetInTouch() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone" && !/^\d*$/.test(value)) return;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.message) {
//       setStatus("❌ Please fill all required fields.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(form.email)) {
//       setStatus("❌ Invalid email format.");
//       return;
//     }

//     setLoading(true);
//     setStatus("");

//     try {
//       const res = await fetch("/api/get-in-touch", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (res.ok && data.success) {
//         setStatus("✅ Message sent successfully!");
//         setForm({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setStatus("❌ Failed to send. Try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("❌ Server error. Try again later.");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f4f1] to-[#eae6df] px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[2fr_1fr] min-h-[520px]"
//       >
//         {/* ✅ FORM SECTION */}
//         <div className="p-10 md:p-14 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold mb-2 text-[#111]">Get in Touch</h2>
//           <p className="text-sm text-gray-500 mb-10">
//             Fill the form and our team will contact you shortly.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <motion.input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 focus:border-black py-3 outline-none text-sm transition"
//                 whileFocus={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               />

//               <motion.input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 focus:border-black py-3 outline-none text-sm transition"
//                 whileFocus={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               />
//             </div>

//             <motion.input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               className="w-full border-b border-gray-400 focus:border-black py-3 outline-none text-sm transition"
//               whileFocus={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             />

//             <motion.textarea
//               name="message"
//               placeholder="Your Message"
//               rows={4}
//               value={form.message}
//               onChange={handleChange}
//               className="w-full border-b border-gray-400 focus:border-black py-3 outline-none text-sm transition resize-none"
//               whileFocus={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             />

//             <motion.button
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               type="submit"
//               disabled={loading}
//               className="bg-[#1A1A2B] text-white py-3 px-19 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#15152B] disabled:opacity-60 mx-auto block"
//             >
//               {loading ? "Sending..." : "Submit Message"}
//             </motion.button>

//             {status && (
//               <p
//                 className={`text-sm text-center ${
//                   status.includes("✅") ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {status}
//               </p>
//             )}
//           </form>
//         </div>

//         {/* ✅ CONTACT INFO PANEL */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-[#1A1A2B] text-white p-10 md:p-14 flex flex-col justify-center h-full space-y-10"
//         >
//           {/* ✅ CALL */}
//           <div>
//             <p className="text-sm font-semibold mb-2 flex items-center gap-2">
//               <FiPhoneCall /> Call Us
//             </p>
//             <p className="text-gray-100 text-sm mb-2">Speak directly with our team.</p>
//             <p className="font-medium text-lg">+91 98765 43210</p>
//           </div>

//           {/* ✅ EMAIL */}
//           <div>
//             <p className="text-sm font-semibold mb-2 flex items-center gap-2">
//               <FiMail /> Email Us
//             </p>
//             <p className="text-gray-100 text-sm mb-2">Write to us anytime.</p>
//             <a
//               href="mailto:team@bpai.in.com"
//               className="font-medium text-lg underline hover:text-gray-200 transition"
//             >
//               team@bpai.in.com
//             </a>
//           </div>

//           {/* ✅ MAP */}
//           <div>
//             <p className="text-sm font-semibold mb-2 flex items-center gap-2">
//               <FiMapPin /> Visit Us
//             </p>
//             <p className="text-gray-100 text-sm mb-3">Come visit our office.</p>
//             <a
//               href="https://www.google.com/maps/place/12%C2%B055'01.3%22N+77%C2%B038'17.1%22E"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline hover:text-gray-200 transition text-sm"
//             >
//               View Office on Maps
//             </a>
//           </div>

//           {/* Bottom gradient */}
//           <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#003366] to-transparent pointer-events-none"></div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }



"use client";
import { useState } from "react";
import Link from "next/link";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function GetInTouch() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("❌ Please fill all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus("❌ Invalid email format.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/get-in-touch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch {
      setStatus("❌ Server error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f4f1] to-[#eae6df] px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[2fr_1fr] min-h-[520px]"
      >
        {/* ✅ FORM SECTION */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-[#111]">Get in Touch</h2>
          <p className="text-sm text-gray-500 mb-10">
            Fill the form and our team will contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="border-b border-gray-400 focus:border-black py-3 outline-none text-sm transition"
                whileFocus={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="border-b border-gray-400 focus:border-black py-3 outline-none text-sm transition"
                whileFocus={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>

            <motion.input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black py-3 outline-none text-sm transition"
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black py-3 outline-none text-sm transition resize-none"
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="bg-[#1A1A2B] text-white py-3 px-19 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#15152B] disabled:opacity-60 mx-auto block"
            >
              {loading ? "Sending..." : "Submit Message"}
            </motion.button>

            {status && (
              <p
                className={`text-sm text-center ${status.includes("✅") ? "text-green-600" : "text-red-600"}`}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* ✅ CONTACT INFO PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A1A2B] text-white p-10 md:p-14 flex flex-col justify-center h-full space-y-10"
        >
          {/* ✅ CALL */}
          <div>
            <p className="text-sm font-semibold mb-2 flex items-center gap-2">
              <FiPhoneCall /> Call Us
            </p>
            <p className="text-gray-100 text-sm mb-2">Speak directly with our team.</p>
            <p className="font-medium text-lg">+91 98765 43210</p>
          </div>

          {/* ✅ EMAIL */}
          <div>
            <p className="text-sm font-semibold mb-2 flex items-center gap-2">
              <FiMail /> Email Us
            </p>
            <p className="text-gray-100 text-sm mb-2">Write to us anytime.</p>
            <a
              href="mailto:team@bpai.in.com"
              className="font-medium text-lg underline hover:text-gray-200 transition"
            >
              team@bpai.in
            </a>
          </div>

          {/* ✅ MAP */}
          <div>
            <p className="text-sm font-semibold mb-2 flex items-center gap-2">
              <FiMapPin /> Visit Us
            </p>
            <p className="text-gray-100 text-sm mb-3">Come visit our office.</p>
            <a
              href="https://www.google.com/maps/place/12%C2%B055'01.3%22N+77%C2%B038'17.1%22E"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200 transition text-sm"
            >
              View Office on Maps
            </a>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#003366] to-transparent pointer-events-none"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
