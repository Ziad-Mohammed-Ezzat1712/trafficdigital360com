import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomeSec5() {
  const { ref, inView } = useInView({
    triggerOnce: true, // يظهر مرة واحدة بس
    threshold: 0.2,    // يبدأ لما 20% من العنصر يدخل في الشاشة
  });

  return (
    <motion.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="my-42 bg-black flex items-center justify-center"
    >
      <div className="relative max-w-7xl w-full">
        {/* الشادو من فوق وفي النص */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-4 shadow-[0_0px_80px_10px_#06b6d4] z-0"></div>

        {/* المحتوى الرئيسي */}
        <div className="relative border border-[#0F9BA3] rounded-3xl py-22 text-center bg-black z-10 px-6">
          <div className="mb-6 border inline-block border-[#0F9BA3] px-4 py-1 rounded-full">
            <span className="inline-block text-[#15D5DF] px-4 py-1 rounded-full text-[16px] font-medium">
              Perfect for technology and marketing
            </span>
          </div>

          <h1 className="text-white text-[60px] font-bold leading-tight w-full">
            Streamlined design and development.
            <br />
            <span className="text-[60px]">Swift and remarkable results.</span>
          </h1>

          <p className="text-gray-300 mt-6 text-[24px] w-full">
            "Forget the fluff. We deliver fast, focused, and effective marketing."
          </p>

          {/* الزرار في النص */}
          <div className="mt-8 flex justify-center">
            <button className="bg-[#0F9BA3] text-[16px] text-black font-medium px-6 py-2 cursor-pointer rounded-md hover:bg-cyan-400 transition flex items-center justify-center gap-2">
              let’s connect <span className="text-[16px]">➔</span>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
