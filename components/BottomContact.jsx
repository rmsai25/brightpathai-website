"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setSuccess("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setSuccess("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Server error. Please try again later.");
    }

    setLoading(false);
  };

  // 🔥 Stagger animation for inputs
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-20 px-6 bg-[#004B60] flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl w-full mx-auto"
      >
        <h2 className="text-5xl font-semibold mb-10 text-white text-center">
          Get In Touch With Us
        </h2>

        {/* Stagger container */}
        <motion.div variants={containerVars} initial="hidden" whileInView="show">
          {/* NAME */}
          <motion.input
            variants={itemVars}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="FULL NAME"
            className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 mb-5 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
          />

          {/* EMAIL + PHONE */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={itemVars}
          >
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-MAIL"
              className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="PHONE NUMBER"
              className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
            />
          </motion.div>

          {/* MESSAGE */}
          <motion.textarea
            variants={itemVars}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="YOUR MESSAGE"
            rows={5}
            className="w-full bg-[#e9e3ff] p-4 rounded-xl outline-none border border-gray-300 mt-6 text-gray-700 focus:ring-4 focus:ring-[#FF8F3A]/40 transition"
          ></motion.textarea>

          {/* SUBMIT BUTTON */}
          <motion.div
            className="flex justify-center"
            variants={itemVars}
          >
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`relative mt-6 px-10 py-4 rounded-full text-lg tracking-wide transition-all duration-300 shadow-lg
                ${
                  loading
                    ? "bg-[#003B49] text-transparent cursor-not-allowed"
                    : "bg-[#FF8F3A] text-black hover:scale-105 hover:shadow-xl"
                }
                ${
                  success === "Message sent successfully!"
                    ? "bg-green-600 text-white"
                    : ""
                }
              `}
              style={{ minWidth: "180px" }}
            >
              {!loading && success !== "Message sent successfully!" && "SUBMIT"}

              {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </span>
              )}

              {success === "Message sent successfully!" && "Submitted ✔"}
            </button>
          </motion.div>
        </motion.div>

        {/* SUCCESS MSG */}
        {success && (
          <p className="text-center mt-4 text-white font-semibold">
            {success}
          </p>
        )}
      </motion.div>
    </section>
  );
}
