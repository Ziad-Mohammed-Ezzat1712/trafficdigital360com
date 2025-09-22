import React from 'react'
import AboutHero from './../AboutHero/AboutHero';
import { motion } from "framer-motion";
import HomeSec2 from '../HomeSec2/HomeSec2';
import AboutSlider from '../AboutSlider/AboutSlider';
import Footer from '../Footer/Footer';
import AboutSec2 from '../AboutSec2/AboutSec2';
import AboutSec3 from '../AboutSec3/AboutSec3';
 
export default function About() {
  return <>
  <AboutHero/>
 <div className='my-[44px]'>
   <HomeSec2/>
 </div>
 <AboutSlider/>
 <AboutSec2/>
 <AboutSec3/>
 <div className=' my-12'>
  <AboutSlider/>
 </div>
 <Footer/>
  </>
}
