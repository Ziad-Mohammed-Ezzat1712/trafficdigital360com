import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { LanguageContext } from "../../Context/LanguageContext";

export default function HomeSec6() {
  const [team, setTeam] = useState([]);
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

  return (
    <div className="bg-black pb-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {team.map((member, idx) => {
        const column = idx % 3; // 0 = شمال, 1 = نص, 2 = يمين
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
            <div className="absolute bottom-0 left-0 w-full bg-FFFFFF/30 text-white backdrop-blur-sm flex justify-between items-center px-4 py-5 text-sm">
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
  );
}
