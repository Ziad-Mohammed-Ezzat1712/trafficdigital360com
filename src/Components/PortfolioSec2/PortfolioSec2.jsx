import React from 'react';

import Frame from "../../assets/Images/Frame.png";
import Figma from "../../assets/Images/Figma.png";
import Lr from "../../assets/Images/Lr.png";
import Pr from "../../assets/Images/Pr.png";
import Ae from "../../assets/Images/Ae.png";
import Ai from "../../assets/Images/Ai.png";
import Ps from "../../assets/Images/Ps.png";
import Dn from "../../assets/Images/Dn.png";
import St from "../../assets/Images/St.png";
import An from "../../assets/Images/An.png";
import Pf from "../../assets/Images/Pf.png";
import Id from "../../assets/Images/Id.png";
import star from "../../assets/Images/star.png";
import gpt from "../../assets/Images/gpt.png";

const firstRow = [Frame, Figma, Lr, Pr, Ae, Ai, Ps];
const secondRow = [Dn, St, An, Pf, Id, star, gpt];

export default function PortfolioSec2() {
  return (
    <section className="max-w-7xl mx-auto">
      {/* العنوان */}
      <h2 className="text-[40px] text-center font-bold mb-12 z-20 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
        Quick Glance at <span>Tools</span>
      </h2>

{/* الصف الأول */}
<div className="overflow-hidden mb-6">
  <div className="flex w-[200%] animate-marquee-right">
    {[...firstRow, ...firstRow , ...firstRow].map((src, index) => (
      <div
        key={`row1-${index}`}
        className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] mx-4 rounded-full bg-gray-200 flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <img src={src} alt={`tool-${index}`} className="w-24 h-24 object-contain" />
      </div>
    ))}
  </div>
</div>

{/* الصف الثاني */}
<div className="overflow-hidden mb-24">
  <div className="flex w-[200%] animate-marquee-left">
    {[...secondRow, ...secondRow , ...secondRow].map((src, index) => (
      <div
        key={`row2-${index}`}
        className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] mx-4 rounded-full bg-gray-200 flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <img src={src} alt={`tool-${index}`} className="w-24 h-24 object-contain" />
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
