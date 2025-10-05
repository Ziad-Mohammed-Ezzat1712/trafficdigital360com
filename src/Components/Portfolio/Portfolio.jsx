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


export default function Portfolio() {
  return (
    <>
    <div className=' hidden md:block'><PortfolioSec1/></div>
    <div className=' md:hidden block'><PortfolioSec1Mobile/></div>
    <PortfolioSec2/>
     <div className=' hidden md:block'><PortfolioSec3/></div>
    <div className=' md:hidden block'> <PortfolioSec3Mobile/></div>
    <PortfolioFaqSection/>   
    <PortfolioSec4/>   
    <Footer/>
 

    </>
  )
}
