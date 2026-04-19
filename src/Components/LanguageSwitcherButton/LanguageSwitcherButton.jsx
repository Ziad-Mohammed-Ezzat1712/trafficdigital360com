import React, { useContext, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import { MdGTranslate } from "react-icons/md";


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
        fixed bottom-20 md:right-[40px] right-[5px] z-50 cursor-pointer 
        text-white px-4 py-3 rounded-xl font-medium text-lg bg-black    flex items-center   
        transition-all duration-300 group hover:bg-blue-400 p-2
      
      
      `}
    >
              {language === "ar" ? "AR" : "EN"}


      {/* <span
        className={`
          ml-2 font-bold overflow-hidden whitespace-nowrap
          transition-all duration-300
          max-w-0 opacity-0
          group-hover:max-w-[100px] group-hover:opacity-100
          ${isTouched ? "max-w-[10px] opacity-100" : ""}
        `}
      >
        {language === "ar" ? "English" : "العربية"}
      </span> */}
    </div>
  );
};

export default LanguageSwitcherButton;
