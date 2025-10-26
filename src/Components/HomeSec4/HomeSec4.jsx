import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";
import axios from "axios";

export default function HomeSec4() {
  const { language } = useContext(LanguageContext);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videoModal, setVideoModal] = useState(null); // 🎥 مودال الفيديو

  // 🔹 جلب المشاريع
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          `https://dashboard.traffic360eg.com/handle/getAllProject.php?nocache=${Date.now()}`
        );
        if (res.data?.data) setProjects(res.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // 🔹 جلب الكاتيجوريز
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `https://dashboard.traffic360eg.com/handle/projectCategory.php?nocache=${Date.now()}`
        );
        if (res.data?.data) setCategories(res.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // 🔹 فلترة حسب الكاتيجوري
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // 🔹 زر عرض المزيد
  const handleSeeMore = () => {
    if (visibleCount < filteredProjects.length) {
      setVisibleCount((prev) => prev + 6);
    } else {
      setVisibleCount(6);
    }
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const text = {
    en: {
      title1: "we make cool things",
      title2: "that do great ",
      title3: " business",
    },
    ar: {
      title1: "نحن نصنع أشياء مميزة",
      title2: "تحقق نجاحًا مذهلًا ",
      title3: " للأعمال ",
    },
  };

  const t = text[language];

  return (
    <section className="bg-black text-white py-10 relative min-h-[400px]">
      {/* ====== الهيدر ====== */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className={`text-center mb-10 ${
          language === "ar" ? "font-[Tajawal]" : ""
        }`}
      >
        <h1 className="md:text-[70px] text-[20px] font-medium">{t.title1}</h1>
        <h2 className="md:text-[70px] text-[20px] font-medium">
          {t.title2.split(" ")[0]}{" "}
          <span>{t.title2.split(" ").slice(1).join(" ")}</span>
          <span className="bg-[url('/src/assets/Images/bg.png')] bg-cover bg-center rounded-full">
            {t.title3.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        {/* ====== الفلاتر ====== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className={`flex justify-center gap-6 mt-6 text-gray-400 ${
            language === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          <button
            onClick={() => handleFilterChange("All")}
            className={`cursor-pointer text-[16px] md:text-[20px] transition ${
              selectedCategory === "All"
                ? "text-cyan-400 font-semibold"
                : "hover:text-cyan-400"
            }`}
          >
            {language === "ar" ? "كل المشاريع" : "All Projects"}
          </button>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleFilterChange(cat.name)}
              className={`cursor-pointer text-[16px] md:text-[20px] transition ${
                selectedCategory === cat.name
                  ? "text-cyan-400 font-semibold"
                  : "hover:text-cyan-400"
              }`}
            >
              {language === "ar" ? cat.name_ar : cat.name}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* ====== حالة التحميل ====== */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* ====== المشاريع ====== */}
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
                  className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() =>
                    project.video_url && setVideoModal(project.video_url)
                  }
                >
                  <img
                    src={project.cover}
                    alt={project.name}
                    className="w-full md:h-[450px] h-[163px] object-fill transition-transform duration-500 group-hover:blur-[2px]"
                  />

                  <div className="absolute inset-0 bg-[#2D2D2D]/[75%] flex flex-col space-y-4 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-[30px] font-semibold">
                      {language === "ar" ? project.name_ar : project.name}
                    </h3>
                    <p>
                      {language === "ar"
                        ? project.category_ar
                        : project.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ====== زر عرض المزيد ====== */}
          {filteredProjects.length > 6 && (
            <div className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSeeMore}
                className="px-8 py-3 text-lg bg-[#086368] hover:bg-[#005F6B] cursor-pointer text-white rounded-full transition-colors"
              >
                {visibleCount < filteredProjects.length
                  ? language === "ar"
                    ? "عرض المزيد"
                    : "See More"
                  : language === "ar"
                  ? "عرض أقل"
                  : "See Less"}
              </motion.button>
            </div>
          )}

          {/* ====== مودال الفيديو ====== */}
          <AnimatePresence>
            {videoModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={() => setVideoModal(null)}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="w-[90%] md:w-[60%] aspect-video bg-black rounded-xl overflow-hidden shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    src={videoModal}
                    title="Project Video"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </section>
  );
}
