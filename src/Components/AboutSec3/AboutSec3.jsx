import React from 'react';
import { FaEye, FaTrophy, FaBullseye } from 'react-icons/fa';

export default function AboutSec3() {
  return (
    <section className="bg-black text-white py-16 px-4 text-center">
<h1 className="text-[60px] font-bold mb-12 flex justify-center items-center gap-4">
  believe in 3 words:
  <span className="relative h-[80px] overflow-hidden space-y-4 text-cyan-400 w-[300px] inline-block">
    <div className="animate-loop-words flex flex-col">
      <div className="h-[70px] flex items-center">Quality</div>
      <div className="h-[70px] flex items-center">Flexibility</div>
      <div className="h-[70px] flex items-center">Creativity</div>
       <div className="h-[70px] flex items-center">Quality</div>
      <div className="h-[70px] flex items-center">Flexibility</div>
      <div className="h-[70px] flex items-center">Creativity</div>
         <div className="h-[70px] flex items-center">Quality</div>
      <div className="h-[70px] flex items-center">Flexibility</div>
      <div className="h-[70px] flex items-center">Creativity</div>
    </div>
  </span>
</h1>


      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
<div className="bg-white text-black rounded-lg p-6 flex-1 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_2px_20px_10px_rgba(32,218,228,0.5)] h-[400px] hover:h-[450px] overflow-hidden">


  <div className="flex justify-center items-center text-white text-3xl mb-4">
    <FaEye className='bg-[#20DAE4] w-14 h-14 p-3 rounded-full' />
  </div>
  <h2 className="text-cyan-400 text-[40px] font-semibold mb-3">Our Vision</h2>
  <p className="text-[20px] leading-relaxed">
    To be one of the leading online business development companies in the MEA region offering state of the art quality turnkey solutions to our customers, developed careers to our employees and profits for our shareholders.
  </p>
</div>



        {/* Card 2 */}
        <div className="bg-white text-black rounded-lg p-6 flex-1 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_2px_20px_5px_rgba(32,218,228,0.5)] h-[400px] hover:h-[450px] overflow-hidden">

          <div className="flex justify-center items-center text-white text-3xl mb-4">
            <FaTrophy className='bg-[#20DAE4] w-14 h-14 p-3 rounded-full'/>
          </div>
          <h2 className="text-cyan-400 text-[40px] font-semibold mb-3">Main Objectives</h2>
          <p className="text-[20px] leading-relaxed">
            To secure the largest online audience share in the Middle East, achieve profitable growth through innovation, quality and commitment, and deliver the highest value to customers, suppliers, employees and shareholders.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black rounded-lg p-6 flex-1 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_2px_20px_5px_rgba(32,218,228,0.5)] h-[400px] hover:h-[450px] overflow-hidden">
 
          <div className="flex justify-center items-center text-white text-3xl mb-4">
            <FaBullseye className='bg-[#20DAE4] w-14 h-14 p-3 rounded-full' />
          </div>
          <h2 className="text-cyan-400 text-[40px] font-semibold mb-3">Our Missions </h2>
          <p className="text-[20px] leading-relaxed">
            To empower people and businesses with online business development solutions that are turnkey and scalable through a professional knowledgeable consultants with deep and better understanding of our customers need.
          </p>
        </div>
      </div>
    </section>
  );
}
