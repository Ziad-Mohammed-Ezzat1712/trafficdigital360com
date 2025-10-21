import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolio1 from "../../assets/Images/portfolio1.webp";
import portfolio2 from "../../assets/Images/portfolio2.webp";
import portfolio3 from "../../assets/Images/portfolio3.webp";
import portfolio4 from "../../assets/Images/portfolio4.webp";
import portfolio5 from "../../assets/Images/portfolio5.webp";
import portfolio6 from "../../assets/Images/portfolio6.webp";
import portfolio7 from "../../assets/Images/shif1.jpg";
import portfolio8 from "../../assets/Images/shif2.jpg";
import portfolio10 from "../../assets/Images/shif4.jpg";
import portfolio13 from "../../assets/Images/elitecotton1.jpg";
import portfolio14 from "../../assets/Images/elitecotton2.jpg";
import portfolio15 from "../../assets/Images/elitecotton3.jpg";
import portfolio16 from "../../assets/Images/AlJoker.jpg";
import portfolio17 from "../../assets/Images/col23.png";
import portfolio18 from "../../assets/Images/elitecotton6.jpg";
import portfolio19 from "../../assets/Images/splash.jpg";
import portfolio20 from "../../assets/Images/col27.png";
import web1 from "../../assets/Images/web1.png";
import web2 from "../../assets/Images/web2.png";
import web3 from "../../assets/Images/web3.png";
import web4 from "../../assets/Images/web4.jpg";
import web5 from "../../assets/Images/web5.png";

const projects = [
  { id: 1, title: "LIQUID SPLASH", pragraph: "TTL Design", category: "TTL", img: portfolio1 },
  { id: 2, title: "LIQUID ROZETTA", pragraph: "TTL Design", category: "TTL", img: portfolio2 },
  { id: 3, title: "TRAFFIC 360", pragraph: "Web Design", category: "TTL", img: portfolio19 },
  { id: 4, title: "LIQUID Monkey", pragraph: "TTL Design", category: "TTL", img: portfolio20 },
  { id: 5, title: "Chef", pragraph: "Web Design", category: "TTL", img: portfolio7 },
  { id: 6, title: "Elite Cotton", pragraph: "Web Design", category: "TTL", img: portfolio13 },
  { id: 7, title: "Chef 2", pragraph: "Web Design", category: "TTL", img: portfolio8 },
  { id: 8, title: "Elite Cotton 2", pragraph: "Web Design", category: "TTL", img: portfolio14 },
  { id: 9, title: "Clinic", pragraph: "TTL Design", category: "TTL", img: portfolio4 },
  { id: 10, title: "Traffic Studio", pragraph: "TTL Design", category: "TTL", img: portfolio3 },
  { id: 11, title: "Minimal", pragraph: "Web Design", category: "TTL", img: portfolio17 },
  { id: 12, title: "Al Joker", pragraph: "TTL Design", category: "TTL", img: portfolio16 },
  { id: 13, title: "Elite Cotton 3", pragraph: "Web Design", category: "TTL", img: portfolio18 },
  { id: 14, title: "Rozetta", pragraph: "TTL Design", category: "TTL", img: portfolio6 },
  { id: 15, title: "Splash", pragraph: "TTL Design", category: "TTL", img: portfolio5 },
  { id: 16, title: "Web Elite", pragraph: "Web Design", category: "TTL", img: portfolio15 },
  { id: 17, title: "Burgu", pragraph: "Web Design", category: "Web", img: web1 },
  { id: 18, title: "Web Clinic", pragraph: "Web Design", category: "Web", img: web2 },
  { id: 19, title: "Web Clinic", pragraph: "Web Design", category: "Web", img: web3 },
  { id: 20, title: "Web Clinic", pragraph: "Web Design", category: "Web", img: web4 },
  { id: 21, title: "Web Clinic", pragraph: "Web Design", category: "Web", img: web5 },
  { id: 22, title: "TTL Monkey", pragraph: "TTL Design", category: "TTL", img: portfolio10 },
];

export default function HomeSec4() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // فلترة المشاريع حسب التصنيف
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // دالة لزيادة أو تقليل المشاريع المعروضة
  const handleSeeMore = () => {
    if (visibleCount < filteredProjects.length) {
      setVisibleCount((prev) => prev + 6);
    } else {
      setVisibleCount(6);
    }
  };

  // لما نغير الفلتر نرجع العرض لأول 6
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  return (
    <section className="bg-black text-white py-10">
      {/* العنوان */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-10"
      >
        <h1 className="md:text-[70px] text-[20px] font-medium">
          we make cool things
        </h1>
        <h2 className="md:text-[70px] text-[20px] font-medium">
          that do great{" "}
          <span className="bg-[url('/src/assets/Images/bg.png')] bg-cover bg-center rounded-full">
            business
          </span>
        </h2>

        {/* الفلترة */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center gap-6 mt-6 text-gray-400"
        >
          <button
            className={`cursor-pointer text-[16px] md:text-[20px] transition ${
              selectedCategory === "All" ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
            }`}
            onClick={() => handleFilterChange("All")}
          >
            All Projects
          </button>
          <button
            className={`cursor-pointer text-[16px] md:text-[20px] transition ${
              selectedCategory === "Web" ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
            }`}
            onClick={() => handleFilterChange("Web")}
          >
            Web Design
          </button>
          <button
            className={`cursor-pointer text-[16px] md:text-[20px] transition ${
              selectedCategory === "TTL" ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
            }`}
            onClick={() => handleFilterChange("TTL")}
          >
            TTL Design
          </button>
           <button
            className={`cursor-pointer text-[16px] md:text-[20px] transition ${
              selectedCategory === "TTL" ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
            }`}
            onClick={() => handleFilterChange("Ads")}
          >
             Ads
          </button>
        </motion.div>
      </motion.div>

      {/* الشبكة */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid md:grid-cols-3 grid-cols-2 gap-6 px-4"
      >
        <AnimatePresence>
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full md:h-[450px] h-[163px] object-fill transition-transform duration-500 group-hover:blur-[2px]"
              />
              <div className="absolute inset-0 bg-[#2D2D2D]/[75%] cursor-pointer flex flex-col space-y-4 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-[30px] font-semibold">{project.title}</h3>
                <p>{project.pragraph}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* الزرار */}
      {filteredProjects.length > 6 && (
        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSeeMore}
            className="px-8 py-3 text-lg bg-[#086368] hover:bg-[#005F6B] cursor-pointer text-white rounded-full transition-colors"
          >
            {visibleCount < filteredProjects.length ? "See More" : "See Less"}
          </motion.button>
        </div>
      )}
    </section>
  );
}
