import React, { useState, useEffect, useContext } from "react";
import { FaStar } from 'react-icons/fa';
import { LanguageContext } from "../../Context/LanguageContext"; // استدعاء الكونتكست

export default function PortfolioSec4() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  const testimonials = isArabic
    ? [
        {
          text: "التعاون مع Traffic 360 غيّر عملنا بالكامل. الفريق تولى كل شيء من وسائل التواصل الاجتماعي إلى الحملات الإعلانية بإبداع ودقة. منذ الشراكة معهم، شهدنا زيادة ملحوظة في التفاعل والمبيعات.",
          name: "محمد حسن",
          company: "Puff staff",
        },
        {
          text: "فريق التصميم لديهم على أعلى مستوى! أنشأوا هوية بصرية تعكس من نحن تمامًا. كل شيء كان سلسًا من البداية للنهاية، وتجاوزوا توقعاتنا.",
          name: "سارة المصري",
          company: "Elite Cotton",
        },
        {
          text: "نحن سعداء جدًا بالخدمات التسويقية المقدمة. الفريق أدار صفحاتنا على وسائل التواصل بشكل احترافي، وصمم محتوى إبداعي، وأدار حملات ساعدتنا في الوصول لعملاء جدد. أنصح بهم بشدة!",
          name: "د. أحمد",
          company: "Le Rave Clinic",
        },
      ]
    : [
        {
          text: "Working with Traffic 360 completely transformed our business. The team handled everything from social media to ad campaigns with creativity and precision. Since partnering with them, we’ve seen a remarkable increase in engagement and sales.",
          name: "Mohamed Hassan",
          company: "Puff staff",
        },
        {
          text: "Their design team is top-notch! They created a brand identity that perfectly reflects who we are. Everything was smooth from start to finish, and they delivered beyond our expectations.",
          name: "Sara El-Masry",
          company: "Elite Cotton",
        },
        {
          text: "We are very happy with the marketing services provided. The team managed our social media pages professionally, designed creative content, and ran campaigns that helped us reach new clients. Highly recommended!",
          name: "Dr. Ahmed",
          company: "Le Rave Clinic",
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      <h1 className="md:text-[60px] text-[32px] font-bold mb-12 flex justify-center items-center gap-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
        {isArabic ? "ماذا يقول العملاء" : "What Clients Say"}
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#1D1D1D] border border-cyan-400 text-white text-left rounded-2xl p-6 flex-1 shadow-md transition-all duration-300 transform hover:scale-105 h-[400px] overflow-hidden flex flex-col justify-between"
          >
            <p className="md:text-[20px] text-[16px] leading-relaxed mb-6">
              {item.text}
            </p>

            <div className="flex justify-between items-center mt-auto">
              <div>
                <p className="font-bold text-[20px]">{item.name}</p>
                <p className="text-gray-400 text-[16px]">{item.company}</p>
              </div>
              <div className="flex gap-x-2 text-[#F4B400]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
