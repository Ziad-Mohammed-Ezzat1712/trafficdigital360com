import React, { useState, useEffect, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img from "../../assets/Images/img.webp";
import img1 from "../../assets/Images/img1.png";
import img2 from "../../assets/Images/img2.png";
import img3 from "../../assets/Images/img3.png";
import img4 from "../../assets/Images/img4.png";
import { LanguageContext } from "../../context/LanguageContext";

export default function ServicesClientReview() {
  const { language } = useContext(LanguageContext);

  // بيانات العملاء
  const testimonials = [
    {
      text_en: "Working with Traffic 360 completely transformed our business. The team handled everything from social media to ad campaigns with creativity and precision. Since partnering with them, we’ve seen a remarkable increase in engagement and sales.",
      text_ar: "العمل مع Traffic 360 غيّر أعمالنا تمامًا. الفريق تعامل مع كل شيء من وسائل التواصل الاجتماعي إلى الحملات الإعلانية بإبداع واحترافية. منذ التعاون معهم شهدنا زيادة ملحوظة في التفاعل والمبيعات.",
      name_en: "Mohamed Ali",
      name_ar: "محمد علي",
    },
    {
      text_en: "I was impressed with their dedication and creativity. They always came up with fresh ideas that actually worked for our campaigns. Highly recommended!",
      text_ar: "أُعجبت بالتزامهم وإبداعهم. دائمًا ما يقدمون أفكارًا جديدة وفعالة لحملاتنا. أنصح بالتعامل معهم بشدة!",
      name_en: "Sara Ahmed",
      name_ar: "سارة أحمد",
    },
    {
      text_en: "Professional, reliable, and results-driven. Traffic 360 boosted our online presence more than we expected.",
      text_ar: "احترافية وموثوقية وتركيز على النتائج. ساعدتنا ترافيك 360 على تعزيز تواجدنا الرقمي أكثر مما توقعنا.",
      name_en: "Omar Khaled",
      name_ar: "عمر خالد",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // اوتوماتيك يقلب كل ثانيتين
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // النصوص حسب اللغة
  const texts = {
    title_en: "See what our clients say",
    title_ar: "شاهد ما يقوله عملاؤنا",
    desc_en: "Discover who we are and how our expertise helps brands grow. Learn more about our journey and what makes us different.",
    desc_ar: "اكتشف من نحن وكيف تساعد خبرتنا العلامات التجارية على النمو. تعرف أكثر على رحلتنا وما يميزنا.",
    btn_en: "about us",
    btn_ar: "من نحن",
    reviews_en: "25+ Client Review",
    reviews_ar: "أكثر من 25 تقييم من عملائنا",
  };

  return (
    <>
      {/* ---------- العنوان والنصوص ---------- */}
      <section className="container mx-auto px-6 md:px-36 py-16 overflow-hidden">
        <motion.div
          className="text-left space-y-3"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[36px] md:text-[48px] text-gray-200">
            {language === "ar" ? texts.title_ar : texts.title_en}
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-y-6 md:gap-x-6 mt-6 items-start md:items-center">
          <motion.p
            className="text-gray-400 md:w-2/3 text-[20px] md:text-[24px] leading-relaxed"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            {language === "ar" ? texts.desc_ar : texts.desc_en}
          </motion.p>

          <Link to={"/about"}>
            <motion.button
              className="bg-[#086368] flex gap-x-3 items-center cursor-pointer hover:bg-[#097f85] text-white text-[20px] px-12 py-2 rounded-4xl"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {language === "ar" ? texts.btn_ar : texts.btn_en}
              <ArrowForwardIosIcon  className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
            </motion.button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row gap-6 py-28 px-28">
        {/* Left Card */}
        <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-700 w-full md:w-1/3">
          <img src={img} alt="Team working" className="w-full h-80 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-0 rounded-b-2xl text-center">
            <div className="flex -space-x-3 mb-3 justify-center">
              <img src={img1} className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
              <img src={img2} className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
              <img src={img3} className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
              <img src={img4} className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
            </div>

            <h3 className="text-white text-[32px] font-semibold mb-2">
              {language === "ar" ? texts.reviews_ar : texts.reviews_en}
            </h3>

            <div className="flex justify-center text-[#E48D13] gap-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-gradient-to-br from-[#111] to-[#1b1b1b] rounded-2xl p-8 border border-gray-700 flex flex-col justify-between w-full md:w-2/3">
          <div className="flex justify-center mb-4 gap-x-2 text-[#E48D13]">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-gray-200 text-lg leading-relaxed text-center mb-6">
            “{language === "ar" ? testimonials[currentIndex].text_ar : testimonials[currentIndex].text_en}”
          </p>

          <h4 className="text-white font-semibold text-center text-xl mb-6">
            {language === "ar" ? testimonials[currentIndex].name_ar : testimonials[currentIndex].name_en}
          </h4>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer rounded-full transition-all ${
                  index === currentIndex ? "w-4 h-4 bg-cyan-400" : "w-3 h-3 bg-gray-500"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
