import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FiSmile, FiAward, FiMonitor } from "react-icons/fi";
import { LanguageContext } from "../../Context/LanguageContext";

export default function HomeSec3() {
  const { language } = useContext(LanguageContext);

  const t = {
    en: {
      title1: "We are Creative",
      title2: "bold digital agency",
      based: "based in",
      location: "Egypt",
      years: "years of experience",
      desc: "we are dedicated to providing outstanding digital and design services meet the functional and aesthetics.",
      stats: [
        {
          icon: <FiSmile size={60} strokeWidth={1.5} />,
          number: "30+",
          text: "Satisfied clients around the worldwide.",
        },
        {
          icon: <FiAward size={60} strokeWidth={1.5} />,
          number: "150+",
          text: "Good award wining digital media agency",
        },
        {
          icon: <FiMonitor size={60} strokeWidth={1.5} />,
          number: "28+",
          text: "successful projects completed in one year",
        },
      ],
    },
    ar: {
      title1: "نحن وكالة إبداعية",
      title2: "جريئة ورقمية",
      based: "نقع في",
      location: "مصر",
      years: "سنوات من الخبرة",
      desc: "نحن ملتزمون بتقديم خدمات رقمية وتصميم مميزة تلبي الجوانب الوظيفية والجمالية.",
      stats: [
        {
          icon: <FiSmile size={60} strokeWidth={1.5} />,
          number: "30+",
          text: "عملاء راضون حول العالم.",
        },
        {
          icon: <FiAward size={60} strokeWidth={1.5} />,
          number: "150+",
          text: "وكالة رقمية حائزة على العديد من الجوائز",
        },
        {
          icon: <FiMonitor size={60} strokeWidth={1.5} />,
          number: "28+",
          text: "مشاريع ناجحة أُنجزت خلال عام واحد",
        },
      ],
    },
  };

  const current = t[language];

  return (
    <>
      {/* ================= Desktop Version ================= */}
      <section
        className={`hidden md:grid h-auto my-15 md:grid-cols-2 text-white relative container mx-auto ${
          language === "ar" ? "text-right" : "text-left"
        }`}
      >
        {/* Left Side */}
        <motion.div
          initial={{ x: language === "ar" ? 200 : -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center font-bold px-8 md:px-32 space-y-6 bg-cover bg-center"
        >
          <h1 className="text-5xl ">{current.title1}</h1>
          <h1 className="text-5xl ">{current.title2}</h1>
          <h1 className="text-5xl">
            {current.based}{" "}
            <span className="bg-[url('/src/assets/Images/bg.png')] bg-cover bg-center rounded-full">
              {current.location}
            </span>
          </h1>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: language === "ar" ? -200 : 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="flex items-center space-x-6 bg-black text-white p-6 rounded-lg">
            <div className="w-48 h-48 bg-[#086368] rounded-full flex items-center justify-center">
              <span className="text-7xl font-bold">3+</span>
            </div>

            <div className="max-w-sm">
              <h3 className="text-xl font-semibold">{current.years}</h3>
              <p className="text-gray-300 text-[20px] mt-2 leading-relaxed">
                {current.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= Stats Section ================= */}
      <section className="hidden md:block bg-black text-white max-w-5xl mx-auto py-16">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 ">
          {current.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col space-y-3"
            >
              <div
                className={`text-white flex gap-x-3 ${
                  language === "ar" ? "justify-end flex-row-reverse" : "justify-start"
                }`}
              >
                {stat.icon}
                <h3 className="text-xl font-semibold">{stat.number}</h3>
              </div>
              <p
                className={`text-gray-300 max-w-md text-[20px] ${
                  language === "ar" ? "text-right" : ""
                }`}
              >
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= Mobile Version ================= */}
      <section className="block md:hidden text-white bg-gradient-to-b from-[#03090b] via-[#050e12] to-[#000000] py-12 px-6 space-y-12">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`text-center space-y-1 ${
            language === "ar" ? "text-right" : ""
          }`}
        >
          <h1 className="text-[20px] font-bold">
            {current.title1} {current.title2}
          </h1>

          <h1 className="text-[20px] font-bold">
            {current.based}{" "}
            <span className=" text-white px-2 rounded-full">
              {current.location}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-between gap-x-16 text-center space-y-4"
        >
          <div className="w-24 h-24 px-6 bg-[#086368] rounded-full flex items-center ">
            <span className="text-4xl font-bold">3+</span>
          </div>

          <div className={`text-gray-300 text-left text-base ${language === "ar" ? "text-right" : ""}`}>
            <h3 className="text-lg font-semibold">{current.years}</h3>
            {current.desc}
          </div>
        </motion.div>

        <div className="grid gap-10">
          {current.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div>{stat.icon}</div>
              <h3 className="text-2xl font-semibold">{stat.number}</h3>
              <p className="text-gray-300">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
