import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import PartnerLogo from './PartnerLogo';
import Testimonial from './Testimonial';
import Faqs from './Faqs';
import Footer from './Footer'; //

function Hero() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <PartnerLogo/>
        <Testimonial/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default Hero