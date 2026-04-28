import React, { useEffect, useState, useContext } from "react";
import home2 from "../../assets/Images/hero110.png";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";

export default function HomeSec3() {
  const [offset, setOffset] = useState(0);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center md:gap-40 gap-12">
        
        {/* Left Side */}
        <div className="flex justify-between relative">
          <div className=" rounded-t-full w-[300px] xl:h-[600px] h-[380px] relative shadow-lg overflow-visible"></div>
          <img src={home2} alt="Home Section" className=" z-10 rounded-xl animate-float " />
        </div>

        {/* Right Side */}
        <div className=" w-max-1 xl:text-left md:px-0 px-5">
          <div className="relative inline-block">
            <span className="anton-regular permanent-marker-regular bungee-regular dm-serif-display-regular dm-serif-display-regular-italic text-[#008c96] md:text-[62px] text-[42px] font-bold">
              {language === "ar" ? "ترافيك ديجيتال" : "Traffic Digital"}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl px-5 pb-[20px] italic font-serif font-extrabold text-[#272c2c] dark:text-gray-100 leading-tight">
            {language === "ar"
              ? "الخدمات الرقمية أصبحت أسهل من أي وقت مضى"
              : "Digital Services has never been easier."}
          </h1>

          <div>
            <p className="text-gray-600 dark:text-gray-300 text-[18px] px-5 font-medium">
              {language === "ar" ? "ماذا نقدم؟" : "What We Do?"}

              <h1>
                {language === "ar"
                  ? "- تحليل الأصول الرقمية"
                  : "- Digital assets audit"}
              </h1>

              <h1>
                {language === "ar"
                  ? "- أبحاث وتحليل المنافسين"
                  : "- Research & competitive analysis"}
              </h1>

              <h1>
                {language === "ar"
                  ? "- تقسيم الجمهور المستهدف"
                  : "- Target audience segmentation"}
              </h1>

              <h1>
                {language === "ar"
                  ? "- إنشاء شخصيات العملاء واستراتيجية تخصيص المحتوى"
                  : "- Customer persona & content personalization strategy"}
              </h1>

              <h1>
                {language === "ar"
                  ? "- استراتيجية الاتصالات الرقمية"
                  : "- Digital communications strategy"}
              </h1>

              <h1>
                {language === "ar"
                  ? "- استراتيجية الإبداع والسوشيال ميديا والإعلانات الرقمية"
                  : "- Creative, social media & Digital advertising strategy"}
              </h1>

              <h1>
                {language === "ar"
                  ? "- أدوات تحليل الأعمال والتقارير"
                  : "- Business intelligence & reporting tools"}
              </h1>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}