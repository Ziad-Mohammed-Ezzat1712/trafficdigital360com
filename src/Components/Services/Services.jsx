import React from 'react'
import ServicesSec1 from '../ServicesSec1/ServicesSec1'
import ServicesClientReview from '../ServicesClientReview/ServicesClientReview'
import Footer from '../Footer/Footer'
import ServicesClientReviewMobile from './../ServicesClientReviewMobile/ServicesClientReviewMobile';
export default function Services() {
  return <>
  <ServicesSec1/>
 {/* ديسكتوب */}
      <div className="hidden md:block">
        <ServicesClientReview />
      </div>

      {/* موبايل */}
      <div className="block md:hidden">
        <ServicesClientReviewMobile />
      </div>
  <Footer/>
  </>
}
