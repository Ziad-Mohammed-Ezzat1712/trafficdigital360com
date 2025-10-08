import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import pdf from "../../../public/Profile - 360.pdf"

export default function PortfolioSec1() {
  return (
    <>
      <section className="h-dvh text-white relative container pt-52 mx-auto flex flex-col justify-center items-center text-center gap-6 ">
       <Navbar/>
       
       
        {/* زر Let’s connect */}
     <Link to={"/request"} className='z-20'>
        <button className="bg-[#27BBC3] cursor-pointer hover:bg-[#1e949a] transition px-4 py-2 rounded-md z-20 text-white   font-semibold flex items-center gap-2">
          let’s connect <FiChevronRight />
        </button>
 </Link>
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

     <div className="absolute w-[50%]  ml-auto inset-0 bg-gradient-to-r  from-black to-[#27BBC3]  opacity-32 z-0 "></div>
    </>
  )
}





