import React from 'react'
import AboutHero from './../AboutHero/AboutHero';
import { motion } from "framer-motion";
import HomeSec2 from '../HomeSec2/HomeSec2';
import AboutSlider from '../AboutSlider/AboutSlider';
import Footer from '../Footer/Footer';
import AboutSec2 from '../AboutSec2/AboutSec2';
import AboutSec3 from '../AboutSec3/AboutSec3';
 import {  Title, Meta, Link } from "react-head";
export default function About() {
  return <>

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
        
        {/* SPACE */}
  <AboutHero/>
 <div className='md:my-[44px]'>
   <AboutSlider/>
 </div>

 <AboutSec2/>
 <AboutSec3/>

 <Footer/>
  </>
}
