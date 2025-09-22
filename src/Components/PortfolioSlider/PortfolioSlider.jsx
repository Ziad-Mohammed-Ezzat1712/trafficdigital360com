import React from "react";
import { motion } from "framer-motion";

// صور تجريبية (غيرها بصورك)
import col11 from "../../assets/col11.png";
import col12 from "../../assets/col12.png";
import col13 from "../../assets/col13.png";
import col14 from "../../assets/col14.png";
import col15 from "../../assets/col15.png";
import col16 from "../../assets/col16.png";
import col17 from "../../assets/col17.png";
import col18 from "../../assets/col18.png";
import col19 from "../../assets/col19.png";
import col10 from "../../assets/col10.png";
import col21 from "../../assets/col21.png";
import col22 from "../../assets/col22.png";
import col23 from "../../assets/col23.png";
import col24 from "../../assets/col24.png";
import col25 from "../../assets/col25.png";
import col26 from "../../assets/col26.png";
import col27 from "../../assets/col27.png";
import col28 from "../../assets/col28.png";
import col29 from "../../assets/col29.png";
import col31 from "../../assets/col31.png";
import col32 from "../../assets/col32.png";
import col33 from "../../assets/col33.png";
import col34 from "../../assets/col34.png";
import col35 from "../../assets/col35.png";
import col36 from "../../assets/col36.png";



// كل عمود هيكون ليه صور خاصة بيه
const column1Images = [col11, col12, col13,col14, col15, col16,col17, col18, col19,col10,col11, col12, col13,col14, col15, col16,col17, col18, col19,col10];
const column2Images = [col21,col22,col23,col24,col25,col26,col27,col28,col29,col21,col22,col23,col24,col25,col26,col27,col28,col29];
const column3Images = [col31,col32,col33,col34,col35,col36,col31,col32,col33,col34,col35,col36];

function Column({ images, reverse = false }) {
  return (
    <div className="overflow-hidden h-[1000px] w-full">
      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
        transition={{
          duration: 120,
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

export default function PortfolioSlider() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto py-16">
         <Column images={column1Images}  /> {/* أسرع */}
        <Column images={column2Images}  speed={2} /> {/* أبطأ */}
        <Column images={column3Images}  /> {/* أسرع واحد */}
      </section>
    </>
  );
}
