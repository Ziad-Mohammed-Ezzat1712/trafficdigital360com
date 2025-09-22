import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import teamImage from "../../assets/Images/herosec.png";
import Navbar from "../Navbar/Navbar";
import heroBG from "../../assets/Images/HeroBG.png";
import heroRightBG from "../../assets/Images/HeroRightBG.png";
 import {FiArrowUp} from "react-icons/fi";
export default function Hero() {
 return (
    <section className=" h-auto grid md:grid-cols-2  text-white relative overflow-hidden container mx-auto   "
    style={{ backgroundImage: `url(${heroBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",    
    backgroundPosition: "center" 
     }}>
   <Navbar/>
      {/* Left Side */}
      <motion.div
  initial={{ x: -200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="flex flex-col justify-center px-32 space-y-6 bg-cover bg-center"
  
>
  <p className="uppercase tracking-widest text-[16px]">we are</p>
  <h1 className="text-[120px] font-semibold leading-tight">
    Digital <br /> Agency
  </h1>
  <p className="text-gray-300 max-w-md">
    We create world-class digital products materials that communicate clearly.
  </p>
 <div className=" flex items-center gap-x-3"> <button className="flex items-center text-3xl space-x-3 bg-white text-black px-8 py-8 rounded-full hover:bg-gray-200 w-fit">
    <FaArrowRight /> 
  </button>
<span className="text-xl">Explore Traffic 360</span></div>
  {/* Slider Indicator */}

</motion.div>

   {/* Right Side */}
<motion.div
  initial={{ x: 200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="relative"
  style={{ backgroundImage: `url(${heroRightBG})` }}
>
  {/* الصورة */}
  <img
    src={teamImage}
    alt="Team"
    className="w-full h-full object-contain relative z-10"
  />

  {/* طبقة اللاير (من الشمال للشفاف) */}
  <div className="absolute inset-0 bg-gradient-to-l from-[#1A5559] to-transparent opacity-55 z-20"></div>

  {/* البوكس بتاع النصوص */}
  <div className="absolute bottom-0 left-0 z-30 bg-[#1A5559]/60 text-white p-8   max-w-4xl">
 <div className="text-left">   <FiArrowUp className="rotate-[45deg]"/></div>
    <p className="text-[16px] mb-2">Hello there!</p>
    <h2 className="text-[60px] font-bold leading-snug">
      World class <br /> digital design <br /> agency
    </h2>
  </div>
</motion.div>

    </section>
  );
}
