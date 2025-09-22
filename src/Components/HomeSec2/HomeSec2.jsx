import React from 'react'
 import { FiChevronLeft, FiChevronRight,FiArrowUp,  } from "react-icons/fi";
export default function HomeSec2() {
  return <>
  <div className='bg-white py-10 container mx-auto text-center space-y-2  '>
<div className='space-y-2'>
      <h1 className='text-5xl '>
      Ready To Grow Your Business
    </h1>
  <h2 className='text-2xl font-semibold '>Fill Out The Form Below And One of Our Team Will</h2>
  <h2 className='text-2xl font-semibold '>Contact You Personally</h2>
   <button className="bg-[#0f9ba3] mx-auto text-xl text-white flex items-center gap-x-2 cursor-pointer  px-6 py-2 rounded-xl hover:bg-cyan-600">
                let’s connect <FiChevronRight className='mt-[1px]'/>
              </button>
</div>
  </div>
  </>
}
