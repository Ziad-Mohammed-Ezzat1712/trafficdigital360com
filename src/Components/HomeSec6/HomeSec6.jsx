import React from "react";
import { motion } from "framer-motion";
import gamal from "../../assets/Images/gamal.jpg";
import gemy from "../../assets/Images/gemy.jpg";
import engy from "../../assets/Images/engy.jpg";
import zezo from "../../assets/Images/zezo.jpg";
import amr from "../../assets/Images/amr.jpg";
import adham from "../../assets/Images/adham.jpg";
import linkedin from "../../assets/Images/linkedin.png";

export default function HomeSec6() {
  const team = [
    { name: "Gamal Abdelnasser", role: "Graphic Designer",  image: gamal, linkedin: "#" },
    { name: "Engy Yasser", role: "Content Creator", image: engy, linkedin: "#" },
    { name: "Ahmed Khaled", role: "Manager", image: adham, linkedin: "#" },
    { name: "Mohammed Ragab", role: "Account Manager", image: gemy, linkedin: "#" },
    { name: "Amr ", role: "Video Editor", image: amr, linkedin: "#" },
    { name: "Ziad Mohammed", role: "Front-End Developer", image: zezo, linkedin: "#" },
  ];

  return (
    <div className="bg-black pb-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {team.map((member, idx) => {
        const column = idx % 3; // 0 = شمال, 1 = نص, 2 = يمين
        let initial = {};

        if (column === 0) {
          // شمال
          initial = { opacity: 0, x: -100, rotateZ: -10, scale: 0.9 };
        } else if (column === 2) {
          // يمين
          initial = { opacity: 0, x: 100, rotateZ: 10, scale: 0.9 };
        } else {
          // نص
          initial = { opacity: 0, y: 100, rotateZ: -8, scale: 0.9 };
        }

        return (
          <motion.div
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-md group w-[360px] h-[445px] bg-black"
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0, rotateZ: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* صورة البروفايل */}
            <img
              src={member.image}
              alt={member.name}
              className="w-[360px] h-[445px] object-cover "
            />

            {/* أيقونة لينكدإن */}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-opacity-60 rounded-full p-1"
              >
                <img src={linkedin} alt="LinkedIn" className="w-12 h-12" />
              </a>
            )}

            {/* الشريط السفلي فيه الاسم والوظيفة */}
            <div className="absolute bottom-0 left-0 w-full bg-FFFFFF/30 text-white backdrop-blur-sm flex justify-between items-center px-4 py-5 text-sm">
              <span className="font-bold text-[20px]">{member.name}</span>
              <span className="font-medium">{member.role}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
