import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import teamImage from "../../assets/Images/herosec.webp";
import Group from "../../assets/Images/Group.webp";
import Navbar from "../Navbar/Navbar";
import heroBG from "../../assets/Images/HeroBG.webp";
import heroRightBG from "../../assets/Images/HeroRightBG.webp";
import HomeSec2 from './../HomeSec2/HomeSec2';

export default function Hero() {
  return (
    <>
      {/* ================= Desktop Hero ================= */}
      <section
        className="hidden md:grid grid-cols-1 md:grid-cols-2 text-white relative overflow-hidden container mx-auto pt-24 md:pt-0"
        style={{
          backgroundImage: window.innerWidth >= 768 ? `url(${heroBG})` : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        {/* Left Side */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col justify-center px-6 sm:px-10 md:px-20 lg:px-20 pt-14 space-y-6"
        >
          <p className="uppercase tracking-widest text-sm md:text-base">we are</p>
          <h1 className="text-[42px] sm:text-[60px] md:text-[48px] lg:text-[120px] font-semibold leading-tight">
            Digital <br /> Agency
          </h1>
          <p className="text-gray-300 max-w-md text-sm sm:text-base">
            We create world-class digital products materials that communicate clearly.
          </p>

          <div className="flex items-center gap-x-3 flex-wrap">
            <button className="flex items-center justify-center text-lg sm:text-xl md:text-3xl bg-white text-black px-6 sm:px-8 py-4 sm:py-6 md:py-8 rounded-full hover:bg-gray-200 transition w-fit">
              <FaArrowRight />
            </button>
            <span className="text-base sm:text-lg md:text-xl">Explore Traffic 360</span>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative min-h-[300px] md:min-h-full"
          style={{
            backgroundImage: `url(${heroRightBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={teamImage}
            alt="Team"
            className="w-full h-full object-contain relative z-10"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#1A5559] to-transparent opacity-55 z-20"></div>

          <div className="absolute bottom-0 left-0 z-30 bg-[#1A5559]/60 text-white p-4 sm:p-6 md:p-8 max-w-full md:max-w-4xl">
            <h2 className="text-[28px] sm:text-[40px] md:text-[42px] lg:text-[64px] font-bold leading-snug">
              World class <br /> digital design <br /> agency
            </h2>
          </div>
        </motion.div>
      </section>

      {/* ================= Mobile Hero ================= */}
      <section className="block md:hidden bg-gradient-to-b from-[#061318] via-[#033032] to-[#03090b] text-white h-auto relative py-12">
        <Navbar />

        <div className="flex flex-col items-center justify-center text-center px-6 pt-20  ">
          <p className="uppercase text-[20px] font-medium">we are</p>
          <h1 className="text-[76px] font-semibold leading-tight">Digital </h1>
          <h1 className="text-[76px] font-semibold leading-tight mb-12">Agency </h1>

          {/* صورة الفريق */}
          <img
            src={Group}
            alt="Team"
            className=" w-full max-w-md object-cover"
          />

        
          {/* زر Explore */}
         <div className=" flex gap-3"> <button className="flex items-center gap-2 mt-4 bg-white text-black px-6 py-6 rounded-full">
            <FaArrowRight /> 
          </button>
          <span className="mt-9  text-[16px] font-medium">Explore Traffic 360</span>
          </div>
        </div>

       <div className="text-black mt-10"> <HomeSec2/></div>
      </section>
    </>
  );
}
