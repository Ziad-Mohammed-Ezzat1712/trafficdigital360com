import React from 'react'
import bgAbout from "../../assets/Images/bgAbout.png";
import Navbar from './../Navbar/Navbar';
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart } from "react-icons/fa"; 
export default function AboutHero() {
  return <>
   <section className=" h-dvh grid md:grid-cols-2  text-white relative overflow-hidden container mx-auto   "
      style={{ backgroundImage: `url(${bgAbout})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",    
      backgroundPosition: "center" 
       }}>
<Navbar/>

 <motion.div
  initial={{ x: -200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="flex flex-col justify-center px-32 space-y-6  bg-cover bg-center"
  
>  <h1 className="text-[80px] xl:text-[91px] font-bold leading-tight">
   We Don’t Just Market We Move Markets
  </h1>


</motion.div>

       </section>
  </>
}
