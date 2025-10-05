
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa'

import pdf from "../../../public/Profile - 360.pdf"


export default function PortfolioSec1Mobile() {
  return (
    <>
      <section className=" text-white relative container bg-gradient-to-b from-[#000101] via-[#033032] to-[#000000] md:bg-transparent mx-auto flex flex-col justify-center items-center text-center gap-6  ">
       <Navbar/>
       
       
        {/* زر Let’s connect */}
    
        <button className="bg-[#27BBC3] mt-46 md:mt-0 cursor-pointer hover:bg-[#1e949a] transition px-4 py-2 rounded-md z-20 text-white   md:font-semibold flex items-center gap-2">
          let’s connect <FaArrowRight />
        </button>

        {/* العنوان الرئيسي */}
        <h1 className="md:text-[80px] text-[28px]  font-bold leading-tight z-20">
          Welcome to Traffic <span className="text-[#27BBC3]">360</span>
        </h1>

        {/* العنوان الفرعي */}
        <p className="md:text-[62px] text-[28px]  font-bold z-20">Digital Solution</p>

        {/* زر التحميل */}
        <a
          href={pdf} // غيّر المسار حسب ملفك
          download
          className="mt-4 border mb-20 z-20 border-[#27BBC3] px-6 py-2 rounded-md text-white flex items-center gap-2 hover:bg-[#27BBC3] hover:text-black transition"
        >
          Download <FaFilePdf className="text-xl" />
        </a>
  
      
      </section>

     <div className="md:absolute  hidden w-[50%]  ml-auto inset-0 bg-gradient-to-b from-[#061318] via-[#033032] to-[#03090b]  opacity-32 "></div>
    </>
  )
}
