import React, { useContext, useEffect, useState } from "react";
import bgAbout from "../../../public/aboutbg.jpg";
import Navbar from "./../Navbar/Navbar";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Context/LanguageContext";

export default function AboutHero() {
  const { language } = useContext(LanguageContext);

  const textEn = "For e-marketing solutions";
  const textAr = "لحلول التسويق الإلكتروني";

  const text = language === "ar" ? textAr : textEn;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (language === "ar") {
        // RTL animation
        setDisplayedText(text.slice(text.length - i - 1));
      } else {
        // LTR animation
        setDisplayedText(text.slice(0, i + 1));
      }

      i++;

      if (i === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <>
      <section
        dir={language === "ar" ? "rtl" : "ltr"}
        className=" md:h-dvh h-[600px] grid text-white relative overflow-hidden mx-auto"
        style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <div className=" z-10 flex items-end justify-center h-full text-center">
          <h1 className="text-4xl md:text-[100px] anton-regular permanent-marker-regular bungee-regular dm-serif-display-regular dm-serif-display-regular-italic text-[#008c96] ">
            {language === "ar" ? "ترافيك ديجيتال" : "Traffic Digital"}
          </h1>
        </div>

        <h1 className="text-[20px] md:text-[52px] xl:text-[60px] md:px-42 py-12 md:py-0 px-5 italic leading-tight">
          {displayedText}
        </h1>
      </section>
    </>
  );
}