import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { FaArrowRight, FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import pdf from "../../../public/Profile - 360.pdf";
import { LanguageContext } from "../../Context/LanguageContext";

export default function PortfolioSec1Mobile() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <>
      <section className="text-white relative container bg-gradient-to-b from-[#000101] via-[#033032] to-[#000000] md:bg-transparent mx-auto flex flex-col justify-center items-center text-center gap-6">
        <Navbar />

        {/* زر Let’s connect */}
        <Link to={"/request"}>
          <button className="bg-[#086368] cursor-pointer hover:bg-[#005F6B] mt-46 md:mt-0  transition px-4 py-2 rounded-md z-20 text-white md:font-semibold flex items-center gap-2">
            {isArabic ? "لنتواصل" : "let’s connect"} <FaArrowRight className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
          </button>
        </Link>

        {/* العنوان الرئيسي */}
        <h1 className="md:text-[80px] text-[28px] font-bold leading-tight z-20">
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
        <p className="md:text-[62px] text-[28px] font-bold z-20">
          {isArabic ? "الحلول التسويقية" : "Digital Solution"}
        </p>

        {/* زر التحميل */}
        <a
          href={pdf}
          download
          className="mt-4 border mb-20 z-20 border-[#005F6B] px-6 py-2 rounded-md text-white flex items-center gap-2 hover:bg-[#005F6B] hover:text-black transition"
        >
          {isArabic ? "تحميل" : "Download"} <FaFilePdf className="text-xl" />
        </a>
      </section>

      <div className="md:absolute hidden w-[50%] ml-auto inset-0 bg-gradient-to-b from-[#061318] via-[#033032] to-[#03090b] opacity-32"></div>
    </>
  );
}
