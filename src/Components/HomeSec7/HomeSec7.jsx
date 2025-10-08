import React from "react";
import {  FaHeart } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import bgVector from "../../assets/Images/bgVector.webp";
import { Link } from 'react-router-dom';

export default function HomeSec7() {
  return (
    <>
     {/* ================= Desktop HomeSec7 ================= */}
    <motion.section
      className="relative md:block hidden  max-w-7xl mx-auto my-22 bg-black text-white py-20 px-6"
      style={{
        backgroundImage: window.innerWidth >= 768 ? `url(${bgVector})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* نسخة الموبايل */}
        <div className="block md:hidden space-y-10 ">
      <div className=" flex justify-between gap-x-12">

            {/* النص */}
          <h2 className="text-[20px] font-medium text-center">
            We are trusted by our client<FaHeart className="inline text-[#F24822]" />
          
          </h2>

          {/* الريفيو */}
          <div className="text-[12px]  text-left space-y-4">
            <p>
              “The wonderful services you offer locally are great for our
              community. People are tired of having to travel out of town for
              thing”
            </p>
            <a
              href="https://twitter.com/gamalGamal8038"
              className="text-[#55D3FD] underline"
            >
              @gamalGamal8038
            </a>
          </div>

      </div>
          {/* CTA */}
          <div className="bg-white rounded-2xl flex items-center justify-between px-4 py-4 gap-4">
            <h3 className="text-lg font-medium text-black">
              Ready to work with us?
            </h3>
             <Link to={"/request"}>
            <button className="flex items-center cursor-pointer text-[14px] gap-2 bg-[#0F9BA3] hover:bg-[#0c898f] text-white px-4 py-2 rounded-xl transition">
              let’s connect <FiChevronRight />
            </button>
         </Link>
          </div>
        </div>

        {/* نسخة الديسكتوب */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* النص الشمال */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-[60px] font-medium">
                We are trusted <br /> by our client{" "}
                <FaHeart className="inline text-[#F24822]" />
              </h2>
            </motion.div>

            {/* الريفيو اليمين */}
            <motion.div
              className="text-lg max-w-sm mx-auto text-[24px] space-y-4"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>
                “The wonderful services you offer locally are great for our
                community. People are tired of having to travel out of town for
                thing”
              </p>
              <a
                href="https://twitter.com/gamalGamal8038"
                className="text-[#55D3FD] underline"
              >
                @gamalGamal8038
              </a>
            </motion.div>
          </div>

          {/* CTA تحت */}
          <motion.div
            className="mt-16 bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-6"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-[60px] font-medium text-black">
              Ready to work with us?
            </h3>
             <Link to={"/request"}>
            <button className="flex items-center cursor-pointer text-[16px] gap-2 bg-[#0F9BA3] hover:bg-[#0c898f] text-white px-6 py-3 rounded-xl transition">
              let’s connect <FiChevronRight />
            </button>
          </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>

     {/* ================= Mobile HomeSec7 ================= */}

       <motion.section
      className="relative md:hidden max-w-7xl mx-auto my-12 bg-gradient-to-b from-[#000000] via-[#000000] to-[#000000] text-white py-20 px-6"
    
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* نسخة الموبايل */}
        <div className="block md:hidden space-y-10 ">
      <div className=" flex justify-between gap-x-22">

            {/* النص */}
          <h2 className="text-[16px] font-medium text-left px-1">
            We are trusted by our client<FaHeart className="inline text-[#F24822]" />
          </h2>

          {/* الريفيو */}
          <div className="text-[12px]  text-left space-y-4">
            <p>
              “The wonderful services you offer locally are great for our
              community. People are tired of having to travel out of town for
              thing”
            </p>
            <a
              href="https://twitter.com/gamalGamal8038"
              className="text-[#55D3FD] underline"
            >
              @gamalGamal8038
            </a>
          </div>

      </div>
          {/* CTA */}
          <div className="bg-white rounded-2xl flex items-center justify-between px-4 py-4 gap-4">
            <h3 className="text-md font-medium text-black">
              Ready to work with us?
            </h3>
             <Link to={"/request"}>
            <button className="flex items-center cursor-pointer text-[14px] gap-2 bg-[#0F9BA3] hover:bg-[#0c898f] text-white px-6 py-1 rounded-xl transition">
              let’s connect <FiChevronRight />
            </button>
             </Link>
          </div>
        </div>

        {/* نسخة الديسكتوب */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* النص الشمال */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-[60px] font-medium">
                We are trusted <br /> by our client{" "}
                <FaHeart className="inline text-[#F24822]" />
              </h2>
            </motion.div>

            {/* الريفيو اليمين */}
            <motion.div
              className="text-lg max-w-sm mx-auto text-[24px] space-y-4"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>
                “The wonderful services you offer locally are great for our
                community. People are tired of having to travel out of town for
                thing”
              </p>
              <a
                href="https://twitter.com/gamalGamal8038"
                className="text-[#55D3FD] underline"
              >
                @gamalGamal8038
              </a>
            </motion.div>
          </div>

          {/* CTA تحت */}
          <motion.div
            className="mt-16 bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-6"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-[60px] font-medium text-black">
              Ready to work with us?
            </h3>
             <Link to={"/request"}>
            <button className="flex items-center cursor-pointer text-[16px] gap-2 bg-[#0F9BA3] hover:bg-[#0c898f] text-white px-6 py-3 rounded-xl transition">
              let’s connect <FiChevronRight />
            </button>
             </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  );
}
