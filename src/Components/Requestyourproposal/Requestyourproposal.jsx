import React, { useState } from "react";
import bgRequest from "../../assets/Images/bgRequest.PNG";
import Navbar from "../Navbar/Navbar";
import ContactForm from "../ContactForm/ContactForm";


export default function Requestyourproposal() {


  return (
    <section
      className="flex  flex-col justify-center items-center text-white relative overflow-hidden max-w-[1500px] mx-auto py-20"
      style={{
        backgroundImage: `url(${bgRequest})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:mb-48 mb-24">
        <Navbar />
      </div>
      <h1 className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent text-[32px] mb-22 md:text-[60px] xl:text-[70px] font-bold leading-tight  text-center">
        Request your proposal
      </h1>

     <div className=" w-full max-w-7xl mb-36  ">
      <ContactForm/>
     </div>
    </section>
  );
}
