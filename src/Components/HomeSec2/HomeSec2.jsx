import React, { useContext } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

export default function HomeSec2() {
  const { language } = useContext(LanguageContext);

  const text = {
    en: {
      title: "Ready To Grow Your Business",
      subtitle1: "Fill Out The Form Below And One of Our Team Will",
      subtitle2: "Contact You Personally",
      button: "Let's Connect",
    },
    ar: {
      title: "جاهز لتطوير عملك؟",
      subtitle1: "املأ النموذج أدناه وسيتواصل معك أحد أفراد فريقنا",
      subtitle2: "شخصيًا لمساعدتك",
      button: "تواصل معنا",
    },
  };

  const t = text[language];

  return (
    <>
      {/* Desktop Section */}
      <div className="hidden md:block bg-white py-10 container mx-auto text-center space-y-2">
        <h1 className="text-5xl font-bold">{t.title}</h1>
        <h2 className="text-2xl font-semibold">{t.subtitle1}</h2>
        <h2 className="text-2xl font-semibold">{t.subtitle2}</h2>

        <Link to="/request">
          <button className="bg-[#086368] mx-auto text-xl text-white flex items-center justify-center gap-x-2 cursor-pointer px-6 py-2 rounded-xl hover:bg-[#005F6B]">
            {t.button} <FiChevronRight className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
          </button>
        </Link>
      </div>

      {/* Mobile Section */}
      <div className="md:hidden bg-white py-10 max-w-sm mx-auto text-center space-y-2 rounded-2xl">
        <h1 className="text-[24px] font-bold">{t.title}</h1>
        <h2 className="text-[16px] font-semibold">{t.subtitle1}</h2>
        <h2 className="text-[16px] font-semibold">{t.subtitle2}</h2>

        <Link to="/request">
          <button className="bg-[#086368] mx-auto text-xl text-white flex items-center justify-center gap-x-2 cursor-pointer px-6 py-2 rounded-xl hover:bg-[#005F6B]">
            {t.button} <FiChevronRight className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
          </button>
        </Link>
      </div>
    </>
  );
}
