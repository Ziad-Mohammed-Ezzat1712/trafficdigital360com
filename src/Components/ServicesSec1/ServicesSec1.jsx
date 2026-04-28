import React, { useContext } from 'react';
import bgService from "../../assets/Images/bgService.webp";
import ServicesSlider from '../ServicesSlider/ServicesSlider';
import ServicesGrid from '../ServicesGrid/ServicesGrid';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ServicesGridMobile from './../ServicesGridMobile/ServicesGridMobile';
import AnimatedText from "../AnimatedText/AnimatedText";
import { LanguageContext } from "../../Context/LanguageContext";

export default function ServicesSec1() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <section
      className="flex flex-col justify-center items-center text-white relative overflow-hidden max-w-[1500px]  mx-auto text-center"
    
    >
      <div className="md:mb-12 mb-48">
       
      </div>

  <h1 className="text-white text-center md:text-[60px] text-[42px] py-12 ">
  <span className="font-extrabold anton-regular permanent-marker-regular">
    {isArabic ? "خدماتنا" : "Our "}
  </span>

  <span className="relative inline-block font-normal anton-regular permanent-marker-regular bungee-regular">
    {isArabic ? "" : "services"}

    <span className="absolute left-0 bottom-2 w-full h-4 bg-[#008c96] -z-10"></span>
  </span>
</h1>

      {/* لسطح المكتب */}
      <div className="hidden md:block w-full">
        <ServicesGrid />
      </div>

      {/* للموبايل */}
      <div className="block md:hidden w-full">
        <ServicesGridMobile />
      </div>
    </section>
  );
}
