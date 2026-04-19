import React, { useState } from 'react';
import whatsappIcon from '../../assets/Images/whatsapp.png';
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  const [isTouched, setIsTouched] = useState(false);

  const handleClick = () => {
    window.open('https://wa.me/201507779771', '_blank'); 
  };


  return (
    <div
      onClick={handleClick}
    
      className={`
        fixed bottom-5 md:right-10 right-[5px] z-50 cursor-pointer 
        text-white  px-3 py-3 rounded-xl font-medium text-lg bg-black  flex items-center 
        transition-all duration-300 group
        hover:bg-[#5FD669] hover:
        ${isTouched ? 'bg-[#5FD669] pr-5' : ''}
      `}
    >
  <FaWhatsapp size={30}/>

   
    </div>
  );
};

export default WhatsAppButton;
