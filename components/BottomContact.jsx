"use client";
import { FiMapPin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function BottomContact() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Get in Touch</h2>
          <p className="text-gray-500 text-base">We're building for early partners. Reach out and let's talk.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}
          <motion.a
            href="mailto:team@bpai.in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex flex-col justify-between p-8 rounded-2xl border border-gray-100 bg-white hover:-translate-y-1 hover:shadow-xl hover:border-[#00a980] transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#e9fbf6] text-[#00a980] flex items-center justify-center mb-5 group-hover:bg-[#00a980] group-hover:text-white transition-colors duration-300">
                <FiMail size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-500 text-sm mb-4">General inquiries, partnership, and early access.</p>
            </div>
            <div className="flex items-center gap-2 text-[#00a980] font-semibold text-sm">
              team@bpai.in
              <FiArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </motion.a>

          {/* Visit */}
          <motion.a
            href="https://www.google.com/maps/place/12%C2%B055'01.3%22N+77%C2%B038'17.1%22E"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex flex-col justify-between p-8 rounded-2xl border border-gray-100 bg-white hover:-translate-y-1 hover:shadow-xl hover:border-[#00a980] transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#e9fbf6] text-[#00a980] flex items-center justify-center mb-5 group-hover:bg-[#00a980] group-hover:text-white transition-colors duration-300">
                <FiMapPin size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-500 text-sm mb-4">Come visit our office in Bengaluru.</p>
            </div>
            <div className="flex items-center gap-2 text-[#00a980] font-semibold text-sm">
              View on Maps
              <FiArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}

