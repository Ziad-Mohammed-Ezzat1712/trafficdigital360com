import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa'
import Frame from "../../assets/Images/Frame.png";
import Figma from "../../assets/Images/Figma.png";
import Lr from "../../assets/Images/Lr.png";
import Pr from "../../assets/Images/Pr.png";
import Ae from "../../assets/Images/Ae.png";
import Ai from "../../assets/Images/Ai.png";
import Ps from "../../assets/Images/Ps.png";
import Dn from "../../assets/Images/Dn.png";
import St from "../../assets/Images/St.png";
import An from "../../assets/Images/An.png";
import Pf from "../../assets/Images/Pf.png";
import Id from "../../assets/Images/Id.png";
import star from "../../assets/Images/star.png";
import gpt from "../../asset/Imagess/gpt.png";
import pdf from "../../../public/Profile - 360.pdf"
const firstRow = [
  { src: Frame, isLocal: true },
  { src: Figma, isLocal: true },
  { src: Lr, isLocal: true },
  { src: Pr, isLocal: true },
  { src: Ae, isLocal: true },
  { src: Ai, isLocal: true },
  { src:Ps, isLocal: true },
];

const secondRow = [
  { src: Dn, isLocal: true },
  { src: St, isLocal: true },
  { src: An, isLocal: true },
  { src: Pf, isLocal: true },
  { src: Id, isLocal: true },
  { src:star, isLocal: true },
  { src: gpt, isLocal: true },
];

export default function PortfolioSec1() {
  return (
    <>
      <section className="h-dvh text-white relative container pt-52 mx-auto flex flex-col justify-center items-center text-center gap-6 ">
       <Navbar/>
       
       
        {/* زر Let’s connect */}
    
        <button className="bg-[#27BBC3] cursor-pointer hover:bg-[#1e949a] transition px-4 py-2 rounded-md z-20 text-white   font-semibold flex items-center gap-2">
          let’s connect <FaArrowRight />
        </button>

        {/* العنوان الرئيسي */}
        <h1 className="text-[80px]  font-bold leading-tight z-20">
          Welcome to Traffic <span className="text-[#27BBC3]">360</span>
        </h1>

        {/* العنوان الفرعي */}
        <p className="text-[62px]  font-bold z-20">Digital Solution</p>

        {/* زر التحميل */}
        <a
          href={pdf} // غيّر المسار حسب ملفك
          download
          className="mt-4 border mb-20 z-20 border-[#27BBC3] px-6 py-2 rounded-md text-white flex items-center gap-2 hover:bg-[#27BBC3] hover:text-black transition"
        >
          Download <FaFilePdf className="text-xl" />
        </a>
  
      
      </section>

     <div className="absolute w-[50%]  ml-auto inset-0 bg-gradient-to-r  from-black to-[#27BBC3]  opacity-32 "></div>
    </>
  )
}
