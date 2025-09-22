
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// كل عمود ليه الصور الخاصة بيه
import col11 from "../../assets/Images/col11.png";
import col12 from "../../assets/Images/col12.png";
import col13 from "../../assets/Images/col13.png";
import col14 from "../../assets/Images/col14.png";
import col15 from "../../assets/Images/col15.png";
import col16 from "../../assets/Images/col16.png";
import col17 from "../../assets/Images/col17.png";
import col18 from "../../assets/Images/col18.png";
import col19 from "../../assets/Images/col19.png";
import col10 from "../../assets/Images/col10.png";
import col21 from "../../assets/Images/col21.png";
import col22 from "../../assets/Images/col22.png";
import col23 from "../../assets/Images/col23.png";
import col24 from "../../assets/Images/col24.png";
import col25 from "../../assets/Images/col25.png";
import col26 from "../../assets/Images/col26.png";
import col27 from "../../assets/Images/col27.png";
import col28 from "../../assets/Images/col28.png";
import col29 from "../../assets/Images/col29.png";
import col31 from "../../assets/Images/col31.png";
import col32 from "../../assets/Images/col32.png";
import col33 from "../../assets/Images/col33.png";
import col34 from "../../assets/Images/col34.png";
import col35 from "../../assets/Images/col35.png";
import col36 from "../../assets/Images/col36.png";

const column1Images = [col11, col12, col13,col14, col15, col16,col17, col18, col19,col10,col11, col12, col13,col14, col15, col16,col17, col18, col19,col10,col11, col12, col13,col14, col15, col16,col17, col18, col19,col10];
const column2Images = [col21,col22,col23,col24,col25,col26,col27,col28,col29,col21,col22,col23,col24,col25,col26,col27,col28,col29,col21,col22,col23,col24,col25,col26,col27,col28,col29];
const column3Images = [col31,col32,col33,col34,col35,col36,col31,col32,col33,col34,col35,col36,col31,col32,col33,col34,col35,col36,col31,col32,col33,col34,col35,col36];

function Column({ images, reverse = false, }) {
  return (
    <div className="overflow-hidden h-[1800px] w-full">
      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
        transition={{
          duration: 150, 
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={src}
              alt="portfolio"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default function PortfolioSec3() {
  const { ref, inView } = useInView({
    triggerOnce: true, // يظهر مرة واحدة بس
    threshold: 0.2,    // يبدأ لما 20% من العنصر يدخل في الشاشة
  });

  return (
    <>
      <h2 className="text-[40px] text-center font-bold z-20  text-white">
  Our work
</h2>
    
    <section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="my-12 bg-black flex items-center justify-center"
    >

      <div className="relative max-w-7xl w-full">
        {/* الشادو من فوق وفي النص */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-4 shadow-[0_0px_140px_30px_#2CDBCF] z-0"></div>

        {/* المحتوى الرئيسي */}
        <div className="relative border border-[#0F9BA3] rounded-3xl p-3 text-center bg-black z-10 px-6">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-6 max-w-7xl mx-auto ">
        <Column images={column1Images}  /> {/* أسرع */}
        <Column images={column2Images}  speed={2} /> {/* أبطأ */}
        <Column images={column3Images}  /> {/* أسرع واحد */}
      </section>
        </div>
      </div>
    </section>
    </>
  );
}
