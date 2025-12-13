"use client";

import { useState } from "react";

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

    // ✅ numbers only for phone
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

      const text = await res.text(); // ✅ SAFE — no JSON crash
      const data = text ? JSON.parse(text) : {};

      if (res.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full py-20 flex justify-center bg-[#004B60]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Get In Touch</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border rounded"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border rounded"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-3 border rounded"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 border rounded"
          rows={4}
        />

        <button
          disabled={loading}
          className="bg-orange-500 text-white px-6 py-2 rounded w-full"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    </section>
  );
}
