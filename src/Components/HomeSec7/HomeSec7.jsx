import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import bgVector from "../../assets/Images/bgVector.webp";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";

export default function HomeSec7() {
  const { language } = useContext(LanguageContext);

  const text = {
    en: {
      title: "We are trusted by our clients",
      review:
        "“The wonderful services you offer locally are great for our community. People are tired of having to travel out of town for things.”",
      link: "Traffic 360 The digital hub @facebook.com",
      ctaTitle: "Ready to work with us?",
      ctaBtn: "Let’s connect",
    },
    ar: {
      title: "عملاؤنا يثقون بنا",
      review:
        "الخدمات الرائعة التي تقدمونها محليًا مفيدة جدًا لمجتمعنا. الناس سئموا من الاضطرار للسفر خارج المدينة للحصول على ما يحتاجون.",
      link: "ترافيك 360 — المركز الرقمي @فيسبوك",
      ctaTitle: "هل أنت مستعد للعمل معنا؟",
      ctaBtn: "تواصل معنا",
    },
  };

  const t = text[language];

  return (
    <>
      {/* ================= Desktop HomeSec7 ================= */}
      <motion.section
        className="relative md:block hidden  mx-auto my-22 bg-black text-white py-20 px-6"
        style={{
          backgroundImage:
            window.innerWidth >= 768 ? `url(${bgVector})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-[60px] font-medium">
                {t.title} <FaHeart className="inline text-[#F24822]" />
              </h2>
            </motion.div>

            <motion.div
              className="text-lg max-w-sm mx-auto text-[24px] space-y-4"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>{t.review}</p>
              <a
                href="https://www.facebook.com/profile.php?id=61578198429753"
                className="text-[#55D3FD] underline"
                target="_blank"
                rel="noreferrer"
              >
                {t.link}
              </a>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16 bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-6"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-[60px] font-medium text-black">
              {t.ctaTitle}
            </h3>
            <Link to={"/request"}>
              <button className="flex items-center cursor-pointer text-[16px] gap-2 bg-[#008c96] hover:bg-[#005F6B] text-white px-6 py-3 rounded-xl transition">
                {t.ctaBtn} <FiChevronRight className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= Mobile HomeSec7 ================= */}
      <motion.section
        className="relative md:hidden max-w-7xl mx-auto my-12 bg-black text-white py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="space-y-10">
          <div className="flex justify-between gap-x-6">
            <h2 className="text-[16px] font-medium text-left px-1">
              {t.title} <FaHeart className="inline text-[#F24822]" />
            </h2>
            <div className="text-[12px] text-left space-y-4">
              <p>{t.review}</p>
              <a
                href="https://www.facebook.com/profile.php?id=61578198429753"
                className="text-[#55D3FD] underline"
                target="_blank"
                rel="noreferrer"
              >
                {t.link}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl flex items-center justify-between px-4 py-4 gap-4">
            <h3 className="text-md font-medium text-black">{t.ctaTitle}</h3>
            <Link to={"/request"}>
              <button className="flex items-center cursor-pointer text-[14px] gap-2 bg-[#008c96] hover:bg-[#005F6B] text-white px-6 py-1 rounded-xl transition">
                {t.ctaBtn} <FiChevronRight className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
