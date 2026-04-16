import React, { useContext,useEffect, useState } from 'react';
import bgAbout from "../../../public/aboutbg.jpg";
import Navbar from './../Navbar/Navbar';
import { motion } from "framer-motion";
import { LanguageContext } from "../../Context/LanguageContext"; // ✅ استدعاء الكونتكست

export default function AboutHero() {
  const { language } = useContext(LanguageContext); // ✅ استخدام اللغة
 const text = "For e-marketing solutions";
 const text2 = "For e-marketing solutions";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* ================= Desktop Hero ================= */}
      <section
        className="hidden h-dvh md:grid  text-white relative overflow-hidden  mx-auto"
        style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
<div className=" z-10 flex  items-end justify-center h-full text-center">
       
    <h1 className="text-4xl md:text-[100px] anton-regular permanent-marker-regular bungee-regular text-fill font-extrabold text-[#00AEEF] ">
         Traffic Digital
          
        </h1>
        
        
     
        </div>
     <h1 className=" md:text-[52px] xl:text-[60px] px-42  italic leading-tight">
              {displayedText}
          </h1>
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
