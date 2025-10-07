import React from 'react'
import Hero from '../Hero/Hero'
import HomeSec2 from '../HomeSec2/HomeSec2'
import HomeSec3 from '../HomeSec3/HomeSec3'
import HomeSec4 from '../HomeSec4/HomeSec4'
import HomeSec5 from '../HomeSec5/HomeSec5'
import HomeSec6 from '../HomeSec6/HomeSec6'
import HomeSec7 from '../HomeSec7/HomeSec7'
import Footer from '../Footer/Footer'
import HomeSlider from '../HomeSlider/HomeSlider'
import {  Title, Meta, Link } from "react-head";
export default function Home() {
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
  <div className=' overflow-hidden'>
<Hero/>
<div className=' hidden md:block'><HomeSec2/></div>

<HomeSec3/>
<HomeSec4/>
<HomeSec5/>
<HomeSec6/>
<HomeSec7/>
<Footer/>
</div>
  </>
}
