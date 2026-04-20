// import React from 'react';
// import fedex from "../../assets/Images/Fedex.png";
// import traffic from "../../assets/Images/ourclaints/traffic.webp";
// import glory from "../../assets/Images/ourclaints/glory.png";
// import shefo from "../../assets/Images/ourclaints/shefo.png";
// import omRateba from "../../assets/Images/ourclaints/omRateba.png";
// import elshabrawy from "../../assets/Images/ourclaints/elshabrawy.png";
// import bsamk from "../../assets/Images/ourclaints/bsamk.png";
// import meastroe from "../../assets/Images/ourclaints/meastroe.png";
// import zen from "../../assets/Images/ourclaints/zen.png";
// import ahmed from "../../assets/Images/ourclaints/ahmed.png";
// import rozzeta from "../../assets/Images/ourclaints/rozzeta.png";
// import stars from "../../assets/Images/ourclaints/stars.png";
// import amr from "../../assets/Images/ourclaints/amr.png";
// const firstRow = [ahmed,glory,shefo,omRateba,elshabrawy,bsamk,meastroe,zen,rozzeta,amr];


// export default function AboutSlider() {
//   return (
//     <section className=" mx-auto hidden md:block my-12 py-4 bg-transparent ">
    
//   {/* ================= Desktop AboutSlider ================= */}
// <div className="overflow-hidden  hidden md:block">
//   <h1 className='text-white text-center text-[60px] py-12'><span className='font-extrabold'>Our</span> Clients</h1>
//   <div className="flex w-[200%] animate-marquee-right container mx-auto">
//     {[...firstRow, ...firstRow ].map((src, index) => (
//       <div
//         key={`row1-${index}`}
//         className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] mx-4 rounded-full flex items-center justify-center  "
//       >
//         <img src={src} alt={`tool-${index}`} className="w-28 h-28 object-contain rounded-xl" />
//       </div>
//     ))}
//   </div>
// </div>

//       {/* ================= Mobile AboutSlider ================= */}
// <div className="overflow-hidden  md:hidden block  ">
//   <div className="flex w-[200%] animate-marquee-right">
//     {[...firstRow ].map((src, index) => (
//       <div
//         key={`row1-${index}`}
//         className="w-[70px] h-[70px]  mx-4 rounded-full flex items-center justify-center "
//       >
//         <img src={src} alt={`tool-${index}`} className="w-28 h-28 object-contain" />
//       </div>
//     ))}
//   </div>
// </div>


//     </section>
//   );
// }

import React, { useContext } from "react";

import traffic from "../../assets/Images/ourclaints/traffic.webp";
import glory from "../../assets/Images/ourclaints/glory.png";
import shefo from "../../assets/Images/ourclaints/shefo.png";
import omRateba from "../../assets/Images/ourclaints/omRateba.png";
import elshabrawy from "../../assets/Images/ourclaints/elshabrawy.png";
import bsamk from "../../assets/Images/ourclaints/bsamk.png";
import meastroe from "../../assets/Images/ourclaints/meastroe.png";
import zen from "../../assets/Images/ourclaints/zen.png";
import ahmed from "../../assets/Images/ourclaints/ahmed.png";
import rozzeta from "../../assets/Images/ourclaints/rozzeta.png";
import stars from "../../assets/Images/ourclaints/stars.png";
import amr from "../../assets/Images/ourclaints/amr.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


export default function AboutSlider() {
 

  const carTypes = [
    
    { img: glory },
    { img: shefo },
    { img: omRateba },
    { img: elshabrawy },
    { img: bsamk },
      { img: meastroe },
    { img: zen },
    { img: ahmed },
    { img: rozzeta },
    { img: amr },
    
  ];
  // const carTypesDark = [
  //   { img: traffic },
  //   { img: traffic },
  //   { img: traffic },
  //   { img: traffic },
  //   { img: traffic },
  //   { img: traffic },
  //       { img: traffic },
  //   { img: traffic },
  //   { img: traffic },
  //   { img: traffic },
  //   { img: traffic },
  //   { img: traffic },
  // ];

  // نختار array المناسب حسب حالة Dark Mode
  const slides =  carTypes;

  return (
    <div className="text-center py-10 bg-transparent dark:bg-gray-900">
      <div className="max-w-[1600px] mx-auto px-4">
      <h1 className="text-white text-center md:text-[60px] text-[42px] mb-28">
  <span className="font-extrabold anton-regular permanent-marker-regular bungee-regular">Our </span>

  <span className="relative inline-block font-normal anton-regular permanent-marker-regular  ">
    Clients

    {/* Orange underline */}
    <span className="absolute left-0 bottom-2 w-full h-4 bg-[#008c96] -z-10"></span>
  </span>
</h1>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={100}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 2.8 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 7 },
          }}
        >
          {slides.map((car, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <img
                  src={car.img}
                  alt={`car-${idx}`}
                  className="w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
