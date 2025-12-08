"use client";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Footer() {
  return (
    <>

      {/* Small clean strip above footer */}
      <div className="w-full h-[1px] bg-white/20"></div>

      <footer className="bg-black text-gray-300 pt-20 pb-10 border-t border-white/10">

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-wide">Brightpath AI</h2>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Brightpath AI builds private, reliable, and production-grade AI systems
              designed for enterprises that demand speed, privacy, and measurable outcomes.
            </p>

            {/* Social Icons */}
            {/* <div className="flex items-center gap-4 pt-4 text-gray-400">
              <FaYoutube className="hover:text-white transition cursor-pointer" size={20} />
              <RxCross2 className="hover:text-white transition cursor-pointer" size={20} />
              <FaInstagram className="hover:text-white transition cursor-pointer" size={20} />
              <FaFacebook className="hover:text-white transition cursor-pointer" size={20} />
              <FaTiktok className="hover:text-white transition cursor-pointer" size={20} />
            </div> */}
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide mb-4">PRODUCT</h3>
            <ul className="space-y-2 text-sm text-gray-300">
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
            <h3 className="text-sm font-semibold text-white tracking-wide mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
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
            <h3 className="text-sm font-semibold text-white tracking-wide mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Contact</li>
              {/* <li>Press & Media</li> */}
              {/* <li>Careers</li> */}
              <li>Security Statement</li>
              <li>Site Map</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 mt-12 mb-6 border-t border-white/10"></div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white transition">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          </div>
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} Brightpath Technology & Services Pvt. Ltd. 
          </p>
        </div>

      </footer>
    </>
  );
}
