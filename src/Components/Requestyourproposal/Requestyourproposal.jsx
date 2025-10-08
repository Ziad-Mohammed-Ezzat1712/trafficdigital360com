import React, { useState } from "react";
import bgRequest from "../../assets/Images/bgRequest.webp";
import Navbar from "../Navbar/Navbar";
import ContactForm from "../ContactForm/ContactForm";
 import {  Title, Meta, Link } from "react-head";
import AnimatedText from "../AnimatedText/AnimatedText";
export default function Requestyourproposal() {


  return (

    <>

            {/* ✅ SEO Meta Tags */}
            <Title>Traffic 360 | شركة تسويق إلكتروني في مصر</Title>
            <Meta
              name="description"
              content="Traffic 360 هي وكالة تسويق إلكتروني متكاملة في مصر تقدم خدمات السوشيال ميديا، إدارة الحملات الإعلانية، تصميم المواقع، وتحسين محركات البحث SEO."
            />
            <Meta
              name="keywords"
              content="شركة تسويق إلكتروني, digital marketing egypt, social media marketing, seo egypt, traffic 360"
            />
            <Meta name="robots" content="index, follow" />
            <Link rel="canonical" href="https://traffic360eg.com/" />
      
            {/* ✅ Open Graph */}
            <Meta property="og:title" content="Traffic 360 | Digital Marketing Experts in Egypt" />
            <Meta
              property="og:description"
              content="حقق نجاحك الرقمي مع Traffic 360 - خبراء التسويق الإلكتروني في مصر في السوشيال ميديا والإعلانات وتحسين محركات البحث."
            />
            <Meta property="og:image" content="https://traffic360eg.com/og-image.jpg" />
            <Meta property="og:url" content="https://traffic360eg.com/" />
            <Meta property="og:type" content="website" />
      
            {/* ✅ Schema Markup */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Traffic 360",
                "url": "https://traffic360eg.com",
                "logo": "https://traffic360eg.com/logo.png",
                "sameAs": [
                  "https://www.facebook.com/traffic360eg",
                  "https://www.instagram.com/traffic360eg",
                  "https://www.linkedin.com/company/traffic360eg"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+201507779771",
                  "contactType": "customer service",
                  "areaServed": "EG"
                }
              })}
            </script>
 
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
        <h1 className="text-[36px] md:text-[70px] xl:text-[80px] font-bold leading-tight md:mb-34 mb-24">
      
        <AnimatedText
        text=" Request your proposal"
        className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent font-bold"
      />
      </h1>
  

     <div className=" w-full max-w-7xl mb-36  ">
      <ContactForm/>
     </div>
    </section>
       </>
  );
}
