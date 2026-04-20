import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaArrowRight, FaFilePdf } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import pdf from "../../../public/Profile - 360.pdf";
import { LanguageContext } from "../../Context/LanguageContext";
import bgAbout from "../../../public/aboutbg.jpg";
import ProfileTd from "../ProfileTD/ProfileTD";
export default function PortfolioSec1() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <>
      <section className="h-dvh text-white relative  pt-52 mx-auto flex flex-col justify-center items-center text-center gap-6"
          style={{
                backgroundImage: `url(${bgAbout})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
        <Navbar />



        {/* العنوان الرئيسي */}
        <h1 className="text-[80px] font-bold leading-tight z-20 anton-regular permanent-marker-regular bungee-regular dm-serif-display-regular  dm-serif-display-regular-italic">
          {isArabic ? (
            <>
              مرحبًا بك في <span className="text-[#27BBC3]">ترافيك 360</span>
            </>
          ) : (
            <>
              Welcome to Traffic <span className="text-[#27BBC3]">360</span>
            </>
          )}
        </h1>

        {/* العنوان الفرعي */}
        <p className="text-[62px] font-bold z-20 anton-regular permanent-marker-regular bungee-regular dm-serif-display-regular  dm-serif-display-regular-italic">
          {isArabic ? "الحلول التسويقية" : "Digital Solution"}
        </p>

        {/* زر التحميل */}
        <a
          href={pdf}
          download
          className="mt-4 border mb-20 z-20 border-[#005F6B] px-6 py-2 rounded-md text-white flex items-center gap-2 hover:bg-[#005F6B] transition"
        >
          {isArabic ? "تحميل" : "Download"} <FaFilePdf className="text-xl" />
        </a>

        
      </section>
      

    </>
  );
}
