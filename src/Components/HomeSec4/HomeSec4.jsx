import React, { useState, useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Context/LanguageContext";
import axios from "axios";

export default function HomeSec4() {
  const { language } = useContext(LanguageContext);

  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef(null);

  // 🔹 API
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(
        `https://dashboard.traffic360eg.com/handle/getAllProject.php?nocache=${Date.now()}`
      );
      setProjects(res.data.data || []);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(
        `https://dashboard.traffic360eg.com/handle/projectCategory.php?nocache=${Date.now()}`
      );
      setCategories(res.data.data || []);
    };
    fetchCategories();
  }, []);

  // 🔹 فلترة
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // 🔥 Auto Slide (direction aware)
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [filteredProjects, language]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        language === "ar"
          ? prev === 0
            ? filteredProjects.length - 1
            : prev - 1
          : prev === filteredProjects.length - 1
          ? 0
          : prev + 1
      );
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // 🔹 Navigation
  const next = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const handleFilterChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  return (
    <section className="bg-transparent text-white py-10 min-h-[600px]">
      {/* ===== Header ===== */}
      <div className="text-center md:mb-10">
        <h1 className="text-white text-center md:text-[60px] text-[42px] ">
          <span className="font-extrabold anton-regular permanent-marker-regular bungee-regular">
            {language === "ar" ? "مشاريعنا" : "Our "}
          </span>

          <span className="relative inline-block font-normal anton-regular permanent-marker-regular">
            {language === "ar" ? "" : "Projects"}

            <span className="absolute left-0 bottom-2 w-full h-4 bg-[#008c96] -z-10"></span>
          </span>
        </h1>
      </div>

      {/* ===== Loading ===== */}
      {loading ? (
        <div className="text-center py-20">Loading...</div>
      ) : (
        <div
          className="relative h-[500px] flex items-center justify-center overflow-hidden perspective"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* ===== Cards ===== */}
          {filteredProjects.map((project, index) => {
            const direction = language === "ar" ? -1 : 1;
            const offset = (index - currentIndex) * direction;

            return (
              <motion.div
                key={project.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -50) {
                    language === "ar" ? prev() : next();
                  }
                  if (info.offset.x > 50) {
                    language === "ar" ? next() : prev();
                  }
                }}
                animate={{
                  x: offset * 200,
                  scale: offset === 0 ? 1.2 : 0.8,
                  rotateY: offset * 30,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                  zIndex: 100 - Math.abs(offset),
                }}
                transition={{ type: "spring", stiffness: 20 }}
                className="absolute"
              >
                <div className="md:w-[320px] md:h-[390px] w-[180px] h-[200px] overflow-hidden shadow-xl group cursor-pointer">
                  <img
                    src={project.cover}
                    className="w-full h-full object-contain group-hover:scale-110 transition duration-300"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center transition duration-300">
                    <h3 className="px-4 text-lg font-semibold">
                      {language === "ar"
                        ? project.name_ar
                        : project.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}