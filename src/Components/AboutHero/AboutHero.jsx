import React, { useContext } from 'react';
import bgAbout from "../../assets/Images/bgAbout.webp";
import Navbar from './../Navbar/Navbar';
import { motion } from "framer-motion";
import { LanguageContext } from "../../Context/LanguageContext"; // ✅ استدعاء الكونتكست

export default function AboutHero() {
  const { language } = useContext(LanguageContext); // ✅ استخدام اللغة

  return (
    <>
      {/* ================= Desktop Hero ================= */}
      <section
        className="hidden h-dvh md:grid md:grid-cols-2 text-white relative overflow-hidden container mx-auto"
        style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col justify-center px-32 space-y-6 bg-cover bg-center"
        >
          <h1 className="text-[80px] xl:text-[91px] font-bold leading-tight">
            {language === "en"
              ? "We Don’t Just Market We Move Markets"
              : "نحن لا نسوّق فقط، بل نحرك الأسواق"}
          </h1>
        </motion.div>
      </section>

      {/* ================= Mobile Hero ================= */}
      <section className="relative h-[500px] pr-12 grid md:grid-cols-2 md:hidden text-white overflow-hidden container mx-auto">
        <Navbar />
        {/* التدرج اللوني في الخلفية */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#012d2f] via-[#000203] to-[#03090b]" />

        {/* الصورة */}
        <div
          className="absolute inset-0 bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${bgAbout})` }}
        ></div>

        {/* المحتوى */}
        <div className="relative z-10 flex flex-col justify-center text-left space-y-6 px-4">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-[40px] font-bold leading-tight max-w-lg">
              {language === "en"
                ? "We Don’t Just Market We Move Markets"
                : "نحن لا نسوّق فقط، بل نحرك الأسواق"}
            </h1>
          </motion.div>
        </div>
      </section>
    </>
  );
}
