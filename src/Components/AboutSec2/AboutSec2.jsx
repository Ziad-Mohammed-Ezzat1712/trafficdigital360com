
import React from "react";

export default function AboutSec2({
  subtitle = "Welcome to Traffic 360 – Where Brands Accelerate",
  title = "We don’t just follow trends\nwe create momentum",
  leftText = "Founded in 2023, but powered by a team with over 7 years of solid experience in the marketing industry, we've quickly become one of the most talked-about names in the market — and for good reason",
  rightText = `From the heart of Cairo, we've delivered impactful campaigns for clients across Egypt, Saudi Arabia, Dubai, and the UAE, building a reputation for excellence, speed, and creativity. Whether you're a startup looking to break into the market or an established brand aiming for the next level — Traffic 360 is your full-circle marketing partner.`,
}) {
  return (
    <section className="bg-black container mx-auto text-white py-20">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <p className="text-[#1BD1DB] font-bold text-[28px]">{subtitle}</p>

            <h1 className="text-white font-extrabold text-[49px]  leading-tight tracking-tight">
              {title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="text-[#AAAAAA] max-w-3xl  text-[24px]">
              {leftText}
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="pt-6 md:pt-12">
            <p className="text-[#AAAAAA] max-w-2xl  text-[24px] leading-relaxed">
              {rightText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
