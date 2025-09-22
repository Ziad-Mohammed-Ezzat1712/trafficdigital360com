import React from "react";
import bgFooter from "../../assets/Images/bgFooter.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import logo from "/public/logo.png"

export default function Footer() {
  return (
    <section
      className="relative max-w-[1500px] mx-auto bg-black text-white py-48 px-6"
      style={{
        backgroundImage: `url(${bgFooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* الشمال (لوجو + نص + سوشيال) */}
        <div className="space-y-6">
          <img src={logo} alt="Logo" className="h-12" />
          <p className="text-white text-[16px] text-sm leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-[#1DA1F2]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#1877F2]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[13px]  uppercase text-[#A1A1AA] font-semibold mb-6">Company</h3>
          <ul className="space-y-4 text-white text-[16px]">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-[13px]  uppercase text-[#A1A1AA] font-semibold mb-6">Help</h3>
          <ul className="space-y-4 text-white text-[16px]">
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-[13px]  uppercase text-[#A1A1AA] font-semibold mb-6">Subscribe to Newsletter</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 rounded-lg bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="w-32 cursor-pointer bg-[#0F9BA3] hover:bg-[#0b878e] text-white px-4 py-3 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
