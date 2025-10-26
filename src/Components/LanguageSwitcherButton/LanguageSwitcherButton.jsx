import React, { useContext, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";


const LanguageSwitcherButton = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isTouched, setIsTouched] = useState(false);

  const handleClick = () => {
    setIsTouched(true);
    toggleLanguage();
    setTimeout(() => setIsTouched(false), 600);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        fixed bottom-20 md:right-[-10px] right-[-16px] z-50 cursor-pointer 
        text-white px-0 py-0  rounded-full flex items-center 
        transition-all duration-300 group
        hover:bg-[#086368] hover:pr-6
        ${isTouched ? "bg-[#086368] pr-1" : ""}
      `}
    >
      <img
        src="/Translate.png"
        alt="Language"
        className="w-48 h-22 transition-all duration-300"
      />
      <span
        className={`
          ml-2 font-bold overflow-hidden whitespace-nowrap
          transition-all duration-300
          max-w-0 opacity-0
          group-hover:max-w-[100px] group-hover:opacity-100
          ${isTouched ? "max-w-[10px] opacity-100" : ""}
        `}
      >
        {language === "ar" ? "English" : "العربية"}
      </span>
    </div>
  );
};

export default LanguageSwitcherButton;
