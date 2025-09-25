import React from "react";
import { FaStar } from "react-icons/fa";

export default function ServicesClientReview() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row gap-6 py-28 px-28">
      {/* Left Card */}
      <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-700 w-full md:w-1/3">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team working"
          className="w-full h-80 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-0 rounded-b-2xl text-center">
          {/* Avatars */}
          <div className="flex -space-x-3 mb-3 justify-center">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="w-10 h-10 mb- rounded-full border-2 border-white"
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

          {/* Title */}
          <h3 className="text-white text-[32px] font-semibold mb-2">
            25+ Client Review
          </h3>

          {/* Stars */}
          <div className="flex justify-center text-[#E48D13] gap-x-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-gradient-to-br from-[#111] to-[#1b1b1b] rounded-2xl p-8 border border-gray-700 flex flex-col justify-between w-full md:w-2/3">
        {/* Stars */}
        <div className="flex justify-center mb-4 gap-x-2 text-[#E48D13]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Testimonial */}
        <p className="text-gray-200 text-lg leading-relaxed text-center mb-6">
          "Working with Traffic 360 completely transformed our business. The team
          handled everything from social media to ad campaigns with creativity and
          precision. Since partnering with them, we’ve seen a remarkable increase
          in engagement and sales."
        </p>

        {/* Client Name */}
        <h4 className="text-white font-semibold text-center text-xl mb-6">
          Mohamed Ali
        </h4>

        {/* Slider Dots */}
        <div className="flex justify-center space-x-2">
          <span className="w-4 h-4 rounded-full border-2 border-cyan-400 "></span>
          <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
          <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
        </div>
      </div>
    </section>
  );
}
