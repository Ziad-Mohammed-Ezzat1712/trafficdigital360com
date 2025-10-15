import React from 'react'
 import { FiChevronLeft, FiChevronRight,FiArrowUp,  } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function HomeSec2() {
  return <>
  <div className=' hidden md:block bg-white py-10 container mx-auto text-center space-y-2  '>
<div className='space-y-2'>
      <h1 className='text-5xl '>
      Ready To Grow Your Business
    </h1>
  <h2 className='text-2xl font-semibold '>Fill Out The Form Below And One of Our Team Will</h2>
  <h2 className='text-2xl font-semibold '>Contact You Personally</h2>
   <Link to={"/request"}>
   <button className="bg-[#086368] mx-auto text-xl text-white flex items-center gap-x-2 cursor-pointer  px-6 py-2 rounded-xl hover:bg-[#005F6B]">
                let’s connect <FiChevronRight className='mt-[1px]'/>
              </button>
              </Link>
</div>
  </div>

    <div className='md:hidden bg-white md:rounded-none rounded-2xl py-10 md:container max-w-sm mx-auto text-center space-y-2   '>
<div className='space-y-2'>
      <h1 className='md:text-5xl text-[24px] font-bold '>
      Ready To Grow Your Business
    </h1>
  <h2 className='md:text-2xl text-[16px] font-semibold '>Fill Out The Form Below And One of Our Team </h2>
  <h2 className='md:text-2xl text-[16px] font-semibold '>Will of Our Team Will Contact You Personally Contact You Personally</h2>
  <Link to={"/request"}>
   <button className="bg-[#086368] mx-auto text-xl text-white flex items-center gap-x-2 cursor-pointer  px-6 py-2 rounded-xl hover:bg-[#005F6B]">
                let’s connect <FiChevronRight className='mt-[1px]'/>
              </button>
              </Link>
</div>
  </div>
  </>
}
