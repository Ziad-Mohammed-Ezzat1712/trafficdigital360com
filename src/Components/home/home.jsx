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
export default function Home() {
  return <>
  <div className=' overflow-hidden'>
<Hero/>
<div className=' hidden md:block'><HomeSec2/></div>
<HomeSlider/>
<HomeSec3/>
<HomeSec4/>
<HomeSec5/>
<HomeSec6/>
<HomeSec7/>
<Footer/>
</div>
  </>
}
