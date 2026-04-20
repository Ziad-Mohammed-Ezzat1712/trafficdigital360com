import React, { useEffect, useState } from "react";
import video from "../../../public/hero5.mp4";
import Navbar from "../Navbar/Navbar";

export default function Hero2() {
  const text = "Welcome To Traffic Digital";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Navbar />

      {/* Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <h1 className="text-2xl md:text-[100px] anton-regular permanent-marker-regular bungee-regular dm-serif-display-regular  dm-serif-display-regular-italic  font-extrabold text-[#13cfdd] ">
          {displayedText}
          
        </h1>
      </div>
    </div>
  );
}