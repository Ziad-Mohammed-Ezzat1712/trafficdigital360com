import React, { useState, useContext } from 'react';
import { motion } from "framer-motion";
import logo from "/public/logo.webp";
import { FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext'; // ✅ استدعاء الكونتكست

export default function Navbar() {
  const location = useLocation(); 
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(LanguageContext); // ✅ استخدام اللغة الحالية

  // ✅ النصوص باللغتين
  const navLinks = [
    { to: "/", label: language === "ar" ? "الرئيسية" : "Home" },
    { to: "/about", label: language === "ar" ? "من نحن" : "About us" },
    { to: "/services", label: language === "ar" ? "الخدمات" : "Services" },
    { to: "/portfolio", label: language === "ar" ? "أعمالنا" : "Portfolio" },
    { to: "/request", label: language === "ar" ? "طلب عرض سعر" : "Request your proposal" },
     { to: "/request", label: language === "ar" ? "" : "" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute overflow-hidden container mx-auto top-0 left-[2%] w-full flex items-center 
          xl:justify-around justify-between px-6 md:px-10 py-6 z-50
          ${language === "ar" ? "flex-row-reverse" : ""}`}
      >
        {/* Logo */}
        <div className="font-bold text-xl tracking-wide">
          <img src={logo} alt="logo" className="w-10 h-14" />
        </div>

        {/* Desktop Links */}
        <ul className={`hidden md:flex ${language === "ar" ? "space-x-reverse space-x-8" : "space-x-8"}`}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <li
                className={`cursor-pointer text-white ${
                  pathname === link.to
                    ? "overline decoration-cyan-400"
                    : "hover:text-cyan-400"
                }`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>

        {/* Right Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to={"/request"}>
            <button className="bg-[#086368] flex items-center gap-x-2 cursor-pointer px-6 py-2 rounded-xl hover:bg-[#005F6B]">
              {language === "ar" ? "تواصل معنا" : "let’s connect"}
              <FiChevronRight className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden absolute top-20 left-0 w-full bg-[#0f0f0f] text-white flex flex-col items-center space-y-6 py-6 z-50 ${
            language === "ar" ? "rtl" : "ltr"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`${
                pathname === link.to
                  ? "overline decoration-cyan-400"
                  : "hover:text-cyan-400"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link to={"/request"}>
            <button className="bg-[#086368] flex items-center gap-x-2 cursor-pointer px-6 py-2 rounded-xl hover:bg-[#005F6B]">
              {language === "ar" ? "تواصل معنا" : "let’s connect"}
              <FiChevronRight className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
            </button>
          </Link>
        </motion.div>
      )}
    </>
  );
}
