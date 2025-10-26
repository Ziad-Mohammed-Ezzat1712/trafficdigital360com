import React, { useState, useEffect, useContext } from "react";
import { FaStar } from "react-icons/fa";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";

export default function ServicesClientReviewMobile() {
  const { language } = useContext(LanguageContext);

  const testimonials = [
    {
      text_en:
        "Working with Traffic 360 completely transformed our business. The team handled everything from social media to ad campaigns with creativity and precision. Since partnering with them, we’ve seen a remarkable increase in engagement and sales.",
      text_ar:
        "العمل مع Traffic 360 غيّر أعمالنا تمامًا. الفريق تعامل مع كل شيء من وسائل التواصل الاجتماعي إلى الحملات الإعلانية بإبداع واحترافية. منذ التعاون معهم شهدنا زيادة ملحوظة في التفاعل والمبيعات.",
      name_en: "Mohamed Ali",
      name_ar: "محمد علي",
    },
    {
      text_en:
        "I was impressed with their dedication and creativity. They always came up with fresh ideas that actually worked for our campaigns. Highly recommended!",
      text_ar:
        "أُعجبت بالتزامهم وإبداعهم. دائمًا ما يقدمون أفكارًا جديدة وفعالة لحملاتنا. أنصح بالتعامل معهم بشدة!",
      name_en: "Sara Ahmed",
      name_ar: "سارة أحمد",
    },
    {
      text_en:
        "Professional, reliable, and results-driven. Traffic 360 boosted our online presence more than we expected.",
      text_ar:
        "احترافية وموثوقية وتركيز على النتائج. ساعدتنا ترافيك 360 على تعزيز تواجدنا الرقمي أكثر مما توقعنا.",
      name_en: "Omar Khaled",
      name_ar: "عمر خالد",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // تقليب تلقائي كل 3 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const texts = {
    title_en: "See what our clients say",
    title_ar: "شاهد ما يقوله عملاؤنا",
    desc_en:
      "Discover who we are and how our expertise helps brands grow. Learn more about our journey and what makes us different.",
    desc_ar:
      "اكتشف من نحن وكيف تساعد خبرتنا العلامات التجارية على النمو. تعرف أكثر على رحلتنا وما يميزنا.",
    btn_en: "about us",
    btn_ar: "من نحن",
    reviews_en: "25+ Client Review",
    reviews_ar: "أكثر من 25 تقييم من عملائنا",
  };

  return (
    <section className="block md:hidden bg-black text-white px-5 py-16 space-y-8">
      {/* ---------- العنوان والنصوص ---------- */}
      <div className="text-left space-y-3">
        <h2 className="text-[16px] text-gray-200">
          {language === "ar" ? texts.title_ar : texts.title_en}
        </h2>
      </div>

      <div className="flex text-left">
        <div className="w-1/2">
          <p className="text-gray-400 text-[13px] leading-relaxed">
            {language === "ar" ? texts.desc_ar : texts.desc_en}
          </p>
        </div>

        <div className="flex w-1/2 justify-center items-center">
          <Link to={"/about"}>
            <button className="bg-[#086368] relative text-center flex gap-x-6 items-center cursor-pointer hover:bg-[#097f85] text-white text-[13px] px-4 py-2 rounded-2xl">
              {language === "ar" ? texts.btn_ar : texts.btn_en}
              <ArrowForwardIosIcon  className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
            </button>
          </Link>
        </div>
      </div>

      {/* ---------- كارت الريفيو ---------- */}
      <div className="bg-[#0c0c0c] border border-gray-700 rounded-2xl p-6 text-center space-y-4 shadow-lg">
        <div className="flex justify-center gap-x-1 text-[#E48D13]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <p className="text-gray-300 text-[14px] leading-relaxed">
          “{language === "ar"
            ? testimonials[currentIndex].text_ar
            : testimonials[currentIndex].text_en}”
        </p>

        <h4 className="text-white font-semibold text-[16px]">
          {language === "ar"
            ? testimonials[currentIndex].name_ar
            : testimonials[currentIndex].name_en}
        </h4>

        <div className="flex justify-center space-x-2 mt-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer rounded-full transition-all ${
                index === currentIndex
                  ? "w-4 h-4 bg-[#00F2FF]"
                  : "w-3 h-3 bg-gray-600"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* ---------- كارت الصورة ---------- */}
      <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team working"
          className="w-full h-64 object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-black text-center py-2 space-y-2">
          <div className="flex justify-center -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Client"
            />
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Client"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Client"
            />
            <img
              src="https://randomuser.me/api/portraits/women/19.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Client"
            />
          </div>

          <h3 className="text-white text-[20px] font-semibold">
            {language === "ar" ? texts.reviews_ar : texts.reviews_en}
          </h3>

          <div className="flex justify-center text-[#E48D13] gap-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
