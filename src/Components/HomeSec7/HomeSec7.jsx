import React from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import bgVector from "../../assets/Images/bgVector.png";

export default function HomeSec7() {
  return (
    <motion.section
      className="relative max-w-7xl mx-auto my-22 bg-black text-white py-52 px-6"
      style={{
        backgroundImage: `url(${bgVector})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
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
          <button className="flex items-center  cursor-pointer text-[16px] gap-2 bg-[#0F9BA3] hover:bg-[#0c898f] text-white px-6 py-3 rounded-xl transition">
            let’s connect <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
