import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { LanguageContext } from "../../Context/LanguageContext";

export default function HomeSec6() {
  const [team, setTeam] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await axios.get(
          `https://dashboard.traffic360eg.com/handle/viewAllStaff.php?nocache=${Date.now()}`
        );
        if (Array.isArray(res.data.data)) {
          setTeam(res.data.data);
        } else {
          console.error("Unexpected API response:", res.data.data);
        }
      } catch (error) {
        console.error("Error fetching staff:", error);
      }
    };
    fetchStaff();
  }, []);

  // دالة لزيادة أو تقليل عدد العناصر
  const handleToggle = () => {
    if (visibleCount < team.length) {
      setVisibleCount((prev) => prev + 6);
    } else {
      setVisibleCount(6);
    }
  };

  return (
    <div className="bg-transparent py-12">
      {/* العنوان */}
   
    <h1 className="text-white text-center md:text-[60px] text-[42px] mb-14  anton-regular permanent-marker-regular bungee-regular">
  <span className="font-extrabold">        {language === "ar" ? "فريقنا" : "Our "} </span>

  <span className="relative inline-block font-normal ">
    Team

    {/* Orange underline */}
    <span className="absolute left-0 bottom-2 w-full h-4 bg-[#008c96] -z-10"></span>
  </span>
</h1>
      {/* شبكة صور الفريق */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {team.slice(0, visibleCount).map((member, idx) => {
          const column = idx % 3;
          let initial = {};

          if (column === 0) {
            initial = { opacity: 0, x: -100, rotateZ: -10, scale: 0.9 };
          } else if (column === 2) {
            initial = { opacity: 0, x: 100, rotateZ: 10, scale: 0.9 };
          } else {
            initial = { opacity: 0, y: 100, rotateZ: -8, scale: 0.9 };
          }

          return (
            <motion.div
              key={member.id || idx}
              className="relative rounded-2xl overflow-hidden shadow-md group w-[360px] h-[445px] bg-black"
              initial={initial}
              whileInView={{ opacity: 1, x: 0, y: 0, rotateZ: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* صورة البروفايل */}
              <img
                src={member.image}
                alt={language === "ar" ? member.name_ar : member.name}
                className="w-[360px] h-[445px] object-cover"
              />

              {/* الشريط السفلي فيه الاسم والوظيفة */}
              <div className="absolute bottom-0 left-0 w-full bg-white/30 text-white backdrop-blur-sm flex justify-between items-center px-4 py-5 text-sm">
                <span className="font-bold text-[20px]">
                  {language === "ar" ? member.name_ar : member.name}
                </span>
                <span className="font-medium">
                  {language === "ar"
                    ? member.specialization_ar
                    : member.specialization}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* زر "See More / See Less" */}
      {team.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleToggle}
            className="px-8 py-3 text-lg bg-[#008c96] hover:bg-[#005F6B] cursor-pointer text-white rounded-full transition-colors"
          >
            {visibleCount < team.length
              ? language === "ar"
                ? "عرض المزيد"
                : "See More"
              : language === "ar"
              ? "عرض أقل"
              : "See Less"}
          </button>
        </div>
      )}
    </div>
  );
}
