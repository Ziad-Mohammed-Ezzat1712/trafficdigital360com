import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

export default function HomeSec5() {
  const { language } = useContext(LanguageContext);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isArabic = language === "ar";

  const text = {
    en: {
      badge: "Perfect for technology and marketing",
      title1: "Streamlined design and development.",
      title2: "Swift and remarkable results.",
      paragraph: '"Forget the fluff. We deliver fast, focused, and effective marketing."',
      button: "Let’s connect",
    },
    ar: {
      badge: "مثالي للتكنولوجيا والتسويق",
      title1: "تصميم وتطوير سلس وسريع.",
      title2: "نتائج مميزة واستثنائية.",
      paragraph: "انسى المبالغات، نحن نقدم تسويقًا سريعًا وفعّالًا ومركّزًا.",
      button: "تواصل معنا",
    },
  };

  return (
    <motion.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      dir={isArabic ? "rtl" : "ltr"}
      className="md:my-42 my-24 bg-black flex items-center justify-center"
    >
      <div className="relative md:max-w-7xl md:w-full">
        {/* shadow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-4 shadow-[0_0px_80px_10px_#06b6d4] z-0"></div>

        {/* main content */}
        <div className="relative border border-[#086368] rounded-3xl md:py-22 py-6 text-center bg-black z-10 px-6">
          <div className="mb-6 border inline-block border-[#086368] px-4 py-1 rounded-full">
            <span className="inline-block text-[#15D5DF] px-4 py-1 rounded-full text-[16px] font-medium">
              {text[language].badge}
            </span>
          </div>

          <h1 className="text-white md:text-[60px] text-[16px] md:font-bold font-medium leading-tight w-full">
            {text[language].title1}
            <br />
            <span className="md:text-[60px] text-[16px]">{text[language].title2}</span>
          </h1>

          <p className="text-gray-300 mt-6 md:text-[24px] text-[12px] w-full">
            {text[language].paragraph}
          </p>

          {/* button */}
          <div className="mt-8 flex justify-center">
            <Link to={"/request"}>
              <button className="bg-[#086368] md:text-[16px] text-[12px] text-white font-medium px-6 py-2 cursor-pointer rounded-md hover:bg-[#005F6B] transition flex items-center justify-center gap-2">
                {text[language].button}
                <span className="md:text-[16px] text-[12px]">
                  <FiChevronRight className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
