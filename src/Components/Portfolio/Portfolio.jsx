import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa'
import PortfolioSec1 from '../PortfolioSec1/PortfolioSec1'
import PortfolioSec2 from '../PortfolioSec2/PortfolioSec2'
import PortfolioSec3 from './../PortfolioSec3/PortfolioSec3';
import PortfolioFaqSection from '../PortfolioFAQSection/PortfolioFAQSection'
import Footer from './../Footer/Footer';
import PortfolioSec4 from '../PortfolioSec4/PortfolioSec4'
import PortfolioSec1Mobile from './../portfolioSec1Mobile/portfolioSec1Mobile';
import PortfolioSec3Mobile from './../portfolioSec3Mobile/portfolioSec3Mobile';
 import {  Title, Meta, Link } from "react-head";
import ProfileTd from '../ProfileTD/ProfileTD'

export default function Portfolio() {
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

    <div className=' hidden md:block overflow-x-hidden'><PortfolioSec1/></div>
    
    <div className=' md:hidden block overflow-x-hidden'><PortfolioSec1Mobile/></div>
    <PortfolioSec2/>
     <div className=' hidden md:block overflow-x-hidden'><PortfolioSec3/></div>
    <div className=' md:hidden block overflow-x-hidden '> <PortfolioSec3Mobile/></div>
    <div className=' overflow-x-hidden'><PortfolioFaqSection/>  </div>
    <div className=' overflow-x-hidden'><PortfolioSec4/>   </div> 
    <Footer/>
 

    </>
  )
}
