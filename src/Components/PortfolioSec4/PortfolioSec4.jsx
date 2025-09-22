import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function PortfolioSec4() {
  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      <h1 className="text-[60px] font-bold mb-12 flex justify-center items-center gap-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
        What Clients Say
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto">
        {/* Reusable Card */}
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-[#1D1D1D] border border-cyan-400 text-white text-left rounded-2xl p-6 flex-1 shadow-md transition-all duration-300 transform h-[400px] overflow-hidden flex flex-col justify-between"
          >
            <p className="text-[20px] leading-relaxed mb-6">
              We are very happy with the marketing services provided. The team managed our social media pages professionally, designed creative content, and ran campaigns that helped us reach new patients. Everything was delivered on time and with great attention to detail. We highly recommend their work.
            </p>

            {/* Footer section: name + stars */}
            <div className="flex justify-between items-center mt-auto">
              <div>
                <p className="font-bold text-[20px]">Clinic</p>
                <p className="text-gray-400 text-[16px]">Le rave</p>
              </div>
              <div className="flex gap-x-2 text-[#F4B400]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
