import React from 'react'
import bgService from "../../assets/Images/bgService.PNG"
import ServicesSlider from '../ServicesSlider/ServicesSlider'
import ServicesGrid from '../ServicesGrid/ServicesGrid'

import Navbar from '../Navbar/Navbar'

export default function ServicesSec1() {
  return (
    <section
      className=" flex flex-col justify-center items-center text-white relative overflow-hidden container mx-auto text-center"
      style={{
        backgroundImage: `url(${bgService})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
   <div className='mb-72'>
     <Navbar/>
   </div>
      <h1 className="text-[50px] md:text-[70px] xl:text-[80px] font-bold leading-tight mb-34">
        Our <span className='text-[#13ECF8]'> services</span>
      </h1>

      <div className="w-full ">
        <ServicesSlider />
      </div>
      
      <div className="w-full ">
        <ServicesGrid />
      </div>
   
    </section>
  )
}
