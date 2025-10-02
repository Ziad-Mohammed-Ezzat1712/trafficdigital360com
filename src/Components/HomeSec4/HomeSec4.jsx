import React from "react";
import { motion } from "framer-motion"; // 👈 نضيف framer-motion
import portfolio1 from "../../assets/Images/portfolio1.jpg";
import portfolio2 from "../../assets/Images/portfolio2.jpg";
import portfolio3 from "../../assets/Images/portfolio3.jpg";
import portfolio4 from "../../assets/Images/portfolio4.jpg";
import portfolio5 from "../../assets/Images/portfolio5.jpg";
import portfolio6 from "../../assets/Images/portfolio6.jpg";
import bg from "../../assets/Images/bg.png"
const projects = [
  { id: 1, title: "LIQUID SPLASH", pragraph: "TTL Designe", img: portfolio1 },
  { id: 2, title: "LIQUID ROZETTA", pragraph: "TTL Designe", img: portfolio2 },
  { id: 3, title: "TRAFFIC 360", pragraph: "TTL Designe", img: portfolio3 },
  { id: 4, title: "CLINIC", pragraph: "TTL Designe", img: portfolio4 },
  { id: 5, title: "LIQUID ROZETTA", pragraph: "TTL Designe", img: portfolio5 },
  { id: 6, title: "LIQUID ROZETTA", pragraph: "TTL Designe", img: portfolio6 },
];

export default function HomeSec4() {
  return (
    <section className="bg-black text-white py-10">
      {/* العنوان */}
      <motion.div
        initial={{ y: -100, opacity: 0 }} // 👈 يجي من فوق
        whileInView={{ y: 0, opacity: 1 }} // 👈 يظهر لما تسكرول عنده
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }} // once=true يعني يظهر مرة واحدة بس
        className="text-center mb-10"
      >
        <h1 className="md:text-[70px] text-[20px] font-medium">we make cool things</h1>
        <h2 className="md:text-[70px] text-[20px] font-medium">
          that do great{" "}
          <span className="bg-[url('/src/assets/Images/bg.png')] bg-cover bg-center rounded-full" 
          >
            business
          </span>
        </h2>

        {/* الفلترة (مثال ثابت) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center gap-6 mt-6 text-gray-400"
        >
          <button className="cursor-pointer text-[16px]  hover:text-cyan-400 md:text-[20px]">
            All project
          </button>
          <button className="cursor-pointer text-[16px] hover:text-cyan-400 md:text-[20px]">
            Web Design
          </button>
          <button className="cursor-pointer text-[16px] text-cyan-400 font-semibold md:text-[20px]">
            TTL Design
          </button>
        </motion.div>
      </motion.div>

      {/* الشبكة */}
      <motion.div
        initial={{ opacity: 0 }} // 👈 يختفي
        whileInView={{ opacity: 1 }} // 👈 يظهر فقط في مكانه
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid md:grid-cols-3  grid-cols-2 gap-6 px-4"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* الصورة */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full md:h-[450px] h-[163px] object-cover transition-transform duration-500 group-hover:blur-[2px]"
            />
            {/* أوفرلاي عند الهوفر */}
            <div className="absolute inset-0 bg-[#2D2D2D]/[75%] cursor-pointer flex flex-col space-y-4 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-[30px] font-semibold">{project.title}</h3>
              <p>{project.pragraph}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
