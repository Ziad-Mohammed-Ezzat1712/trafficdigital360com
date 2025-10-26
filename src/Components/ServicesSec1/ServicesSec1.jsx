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
      className="flex flex-col justify-center items-center text-white relative overflow-hidden container mx-auto text-center"
      style={{
        backgroundImage: `url(${bgService})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:mb-72 mb-48">
        <Navbar />
      </div>

      <h1 className="text-[50px] md:text-[70px] xl:text-[80px]  leading-tight md:mb-34 mb-24 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent font-bold">
     
          {isArabic ? "خدماتنا" : "Our services"}

       
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
