import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import col12 from "../../assets/Images/col12.png";

import col15 from "../../assets/Images/col15.png";
import col16 from "../../assets/Images/col16.png";
import col19 from "../../assets/Images/col19.png";
import col10 from "../../assets/Images/col10.png";
import col21 from "../../assets/Images/col21.png";
import col22 from "../../assets/Images/col22.png";
import col23 from "../../assets/Images/col23.png";
import col24 from "../../assets/Images/col24.png";
import col25 from "../../assets/Images/col25.png";
import col29 from "../../assets/Images/col29.png";
import col31 from "../../assets/Images/col31.png";
import col32 from "../../assets/Images/col32.png";
import col33 from "../../assets/Images/col33.png";
import col34 from "../../assets/Images/col34.png";
import col35 from "../../assets/Images/col35.png";
import col36 from "../../assets/Images/col36.png";
import zen1 from "../../assets/Images/zen1.png";
import zen3 from "../../assets/Images/zen3.png";
import zen5 from "../../assets/Images/zen5.png";
import zen8 from "../../assets/Images/zen8.png";
import zen9 from "../../assets/Images/zen9.png";
import dr1 from "../../assets/Images/dr1.webp";
import dr2 from "../../assets/Images/dr2.webp";
import dr3 from "../../assets/Images/dr3.webp";
import dr4 from "../../assets/Images/dr4.webp";
import dr5 from "../../assets/Images/dr5.webp";
import dr21 from "../../assets/Images/dr21.webp";
import dr22 from "../../assets/Images/dr22.webp";
import dr23 from "../../assets/Images/dr23.webp";
import dr24 from "../../assets/Images/dr24.webp";
import dr25 from "../../assets/Images/dr25.webp";
import dr26 from "../../assets/Images/dr26.webp";
import dr27 from "../../assets/Images/dr27.webp";
import cli1 from "../../assets/Images/cli1.webp";
import cli2 from "../../assets/Images/cli2.webp";
import cli3 from "../../assets/Images/cli3.webp";
import cli4 from "../../assets/Images/cli4.webp";
import cli5 from "../../assets/Images/cli5.webp";
import cli6 from "../../assets/Images/cli6.webp";
import shif1 from "../../assets/Images/shif1.jpg";
import shif2 from "../../assets/Images/shif2.jpg";
import shif3 from "../../assets/Images/shif3.jpg";
import shif4 from "../../assets/Images/shif4.jpg";
import shif5 from "../../assets/Images/shif5.jpg";
import shif6 from "../../assets/Images/shif6.jpg";
import new1 from "../../assets/Images/new1.jpg";
import new2 from "../../assets/Images/new2.jpg";
import new3 from "../../assets/Images/new3.jpg";
import new4 from "../../assets/Images/new4.jpg";
import new10 from "../../assets/Images/new10.jpg";
import new5 from "../../assets/Images/new5.webp";
import new6 from "../../assets/Images/new6.webp";
import new7 from "../../assets/Images/new7.webp";
import new8 from "../../assets/Images/new8.webp";
import new9 from "../../assets/Images/new9.webp";
import new11 from "../../assets/Images/new11.webp";
import new12 from "../../assets/Images/new12.webp";
import new13 from "../../assets/Images/new13.webp";
import new14 from "../../assets/Images/new14.webp";
import new15 from "../../assets/Images/new15.webp";
import new16 from "../../assets/Images/new16.webp";
import { LanguageContext } from "../../Context/LanguageContext";
const column1Images = [
  col12,
  zen1,
  dr1,
  cli1,
  shif2,
  col15,
  shif1,
  zen3,
  dr22,
  col16,
  cli2,
  dr4,
  zen5,
  col19,
  dr21,
  col10,
  col12,
  zen1,
  dr1,
  cli1,
  shif2,
  col15,
  shif1,
  zen3,
  dr22,
  col16,
  cli2,
  dr4,
  zen5,
  col19,
  dr21,
  col10,
  col12,
  zen1,
  dr1,
  cli1,
  shif2,
  col15,
  shif1,
  zen3,
  dr22,
  col16,
  cli2,
  dr4,
  zen5,
  col19,
  dr21,
  col10,
];
const column2Images = [
  col21,
  cli4,
  shif3,
  col22,
  dr2,
  col23,
  shif4,
  col24,
  cli3,
  dr23,
  zen8,
  col25,
  dr5,
  zen9,
  col29,
  dr24,
  col21,
  cli4,
  shif3,
  col22,
  dr2,
  col23,
  shif4,
  col24,
  cli3,
  dr23,
  zen8,
  col25,
  dr5,
  zen9,
  col29,
  dr24,
  col21,
  cli4,
  shif3,
  col22,
  dr2,
  col23,
  shif4,
  col24,
  cli3,
  dr23,
  zen8,
  col25,
  dr5,
  zen9,
  col29,
  dr24,
];
const column3Images = [
  col31,
  col32,
  shif5,
  dr25,
  col33,
  cli5,
  shif6,
  dr3,
  col34,
  dr26,
  cli6,
  col35,
  col36,
  dr27,
  col31,
  col32,
  shif5,
  dr25,
  col33,
  cli5,
  shif6,
  dr3,
  col34,
  dr26,
  cli6,
  col35,
  col36,
  dr27,
  col31,
  col32,
  shif5,
  dr25,
  col33,
  cli5,
  shif6,
  dr3,
  col34,
  dr26,
  cli6,
  col35,
  col36,
  dr27,
  col31,
  col32,
  col33,
  dr3,
  col34,
  col35,
  col36,
  dr27,
];
const column4Images = [
  new1,
  new2,
  new3,
  new4,
  new5,
  new6,
  new7,
  new8,
  new9,
  new10,
  new11,
  new12,
  new13,
  new14,
  new15,
  new16,
    new1,
  new2,
  new3,
  new4,
  new5,
  new6,
  new7,
  new8,
  new9,
  new10,
  new11,
  new12,
  new13,
  new14,
  new15,
  new16,
    new1,
  new2,
  new3,
  new4,
  new5,
  new6,
  new7,
  new8,
  new9,
  new10,
  new11,
  new12,
  new13,
  new14,
  new15,
  new16,
  
];

function Column({ images, reverse = false }) {
  return (
    <div
      className="overflow-hidden h-[1800px] w-full"
      dir="ltr" // ✅ الصور تفضل نفس الاتجاه حتى لو الصفحة RTL
    >
      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
        transition={{
          duration: 300,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={src}
              alt="portfolio"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PortfolioSec3() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <h1 className="text-white text-center text-[60px] mb-12">
        <span className="font-extrabold anton-regular permanent-marker-regular bungee-regular">
          {" "}
          {isArabic ? "أعمالنا" : "Our "}
        </span>

        <span className="relative inline-block font-normal anton-regular permanent-marker-regular  ">
          {isArabic ? "أعمالنا" : " work"}

          {/* Orange underline */}
          <span className="absolute left-0 bottom-2 w-full h-4 bg-[#008c96] -z-10"></span>
        </span>
      </h1>
      <section
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`my-12 bg-black flex items-center justify-center ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        <div className="relative max-w-8xl w-full">
          {/* الشادو */}

          {/* المحتوى الرئيسي */}
          <div className="relative border border-[#008c96] rounded-3xl p-3 text-center bg-black z-10 px-6">
            {/* ✅ الصور ثابتة الاتجاه */}
            <section
              className="grid grid-cols-1 md:grid-cols-4 gap-x-6 max-w-8xl mx-auto"
              dir="ltr"
            >
              <Column images={column1Images} />
              <Column images={column2Images} />
              <Column images={column3Images} />
              <Column images={column4Images} />
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
