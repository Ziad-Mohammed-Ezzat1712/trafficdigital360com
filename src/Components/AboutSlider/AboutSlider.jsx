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

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { LanguageContext } from "../../Context/LanguageContext";

export default function AboutSlider() {
  const { language } = useContext(LanguageContext);

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

  const slides = carTypes;

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="text-center py-10 bg-transparent dark:bg-gray-900"
    >
      <div className="max-w-[1600px] mx-auto px-4">
        <h1 className="text-white text-center md:text-[60px] text-[42px] mb-28">
          <span className="font-extrabold anton-regular permanent-marker-regular bungee-regular">
            {language === "ar" ? "عملاؤنا" : "Our "}
          </span>

          <span className="relative inline-block font-normal anton-regular permanent-marker-regular">
            {language === "ar" ? "" : "Clients"}

            <span className="absolute left-0 bottom-2 w-full h-4 bg-[#008c96] -z-10"></span>
          </span>
        </h1>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            reverseDirection: language === "ar", // 🔥 الاتجاه
          }}
          loop={true}
          spaceBetween={100}
          dir={language === "ar" ? "rtl" : "ltr"} // 🔥 مهم جدًا
         onInit={(swiper) =>
    swiper.changeLanguageDirection(language === "ar" ? "rtl" : "ltr")
  }
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