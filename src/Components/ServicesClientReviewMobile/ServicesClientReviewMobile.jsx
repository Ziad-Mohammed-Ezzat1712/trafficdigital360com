import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
export default function ServicesClientReviewMobile() {
  const testimonials = [
    {
      text: "Working with Traffic 360 completely transformed our business. The team handled everything from social media to ad campaigns with creativity and precision. Since partnering with them, we’ve seen a remarkable increase in engagement and sales.",
      name: "Mohamed Ali",
    },
    {
      text: "I was impressed with their dedication and creativity. They always came up with fresh ideas that actually worked for our campaigns. Highly recommended!",
      name: "Sara Ahmed",
    },
    {
      text: "Professional, reliable, and results-driven. Traffic 360 boosted our online presence more than we expected.",
      name: "Omar Khaled",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // تقليب تلقائي كل 3 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="block md:hidden bg-black text-white px-5 py-16 space-y-8">
      {/* ---------- العنوان والنصوص ---------- */}
      <div className="  text-left space-y-3">
        <h2 className="text-[16px] text-gray-200">See what our clients say</h2>
     
      </div>
         <div className=" flex text-left  ">
         <div className="w-1/2">
          <p className="text-gray-400  text-[13px] leading-relaxed">
          Discover who we are and how our expertise helps brands grow <br />
          Learn more about our journey and what makes us different.
        </p>
         </div>
              <div className="flex w-1/2 justify-center items-center">
     
    <Link to={"/about"}>  <button className="bg-[#0F9BA3] relative text-center flex gap-x-6 items-center cursor-pointer hover:bg-[#097f85] text-white text-[13px] px-4 py-2 rounded-2xl">
          about us  <ArrowForwardIosIcon />
        </button></Link>

     </div> 
        </div>
 
      {/* ---------- كارت الريفيو ---------- */}
      <div className="bg-[#0c0c0c] border border-gray-700 rounded-2xl p-6 text-center space-y-4 shadow-lg">
        {/* Stars */}
        <div className="flex justify-center gap-x-1 text-[#E48D13]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* النص */}
        <p className="text-gray-300 text-[14px] leading-relaxed">
          “{testimonials[currentIndex].text}”
        </p>

        {/* الاسم */}
        <h4 className="text-white font-semibold text-[16px]">
          {testimonials[currentIndex].name}
        </h4>

        {/* النقاط */}
        <div className="flex justify-center space-x-2 mt-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer rounded-full transition-all ${
                index === currentIndex
                  ? "w-4 h-4 bg-[#00F2FF]"
                  : "w-3 h-3 bg-gray-600"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* ---------- كارت الصورة ---------- */}
      <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team working"
          className="w-full h-64 object-cover"
        />

        {/* المحتوى السفلي */}
        <div className="absolute bottom-0 left-0 right-0 bg-black text-center py-2 space-y-2">
          {/* صور العملاء */}
          <div className="flex justify-center -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Client"
            />
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Client"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Client"
            />
            <img
              src="https://randomuser.me/api/portraits/women/19.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Client"
            />
          </div>

          {/* العنوان */}
          <h3 className="text-white text-[20px] font-semibold">
            25+ Client Review
          </h3>

          {/* النجوم */}
          <div className="flex justify-center text-[#E48D13] gap-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
