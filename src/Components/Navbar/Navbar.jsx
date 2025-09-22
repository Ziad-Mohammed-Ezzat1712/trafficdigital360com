import React from 'react'
import { motion } from "framer-motion";
import logo from "/public/logo.png"
import { FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation(); 
  const { pathname } = location;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About us" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
    { to: "/request", label: "Request your proposal" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute max-w-7xl top-0 left-[8%] w-full flex items-center justify-between px-10 py-6 z-50"
      >
        {/* Logo */}
        <div className="font-bold text-xl tracking-wide">
          <img src={logo} alt='logo' className='w-10 h-14'/>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <li
                className={`cursor-pointer text-white ${
                  pathname === link.to
                    ? "overline decoration-cyan-400" // overline بس لونه cyan
                    : "hover:text-cyan-400"
                }`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-[#0f9ba3] flex items-center gap-x-2 cursor-pointer px-6 py-2 rounded-xl hover:bg-cyan-600">
            let’s connect <FiChevronRight className='mt-[1px]'/>
          </button>
        </div>
      </motion.nav>
    </>
  );
}
