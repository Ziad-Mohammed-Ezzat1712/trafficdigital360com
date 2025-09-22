
import React from 'react';


import fedex from "../../assets/Images/Fedex.png";
import meta from "../../assets/Images/meta.png";
const firstRow = [fedex, meta, fedex, meta, fedex, meta, fedex,meta];


export default function HomeSlider() {
  return (
    <section className="container mx-auto my-12 py-4 bg-white ">
    

{/* الصف الأول */}
<div className="overflow-hidden ">
  <div className="flex w-[200%] animate-marquee-right">
    {[...firstRow, ...firstRow , ...firstRow].map((src, index) => (
      <div
        key={`row1-${index}`}
        className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] mx-4 rounded-full flex items-center justify-center "
      >
        <img src={src} alt={`tool-${index}`} className="w-28 h-28 object-contain" />
      </div>
    ))}
  </div>
</div>



    </section>
  );
}
