import React from "react";
import pdf from "../../../public/PD.pdf";

export default function ProfileTd() {
  return (
    <div className="w-full  mx-auto h-dvh bg-black p-4 overflow-y-hidden">
      
      <iframe
  src={`${pdf}#toolbar=1&navpanes=0&scrollbar=1`}
  className="w-full h-screen  rounded-xl"
/>
    </div>
  );
}