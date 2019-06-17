import React from 'react';
import AboutUsSection from '../HomeSections/section2';
import OurTeam from '../HomeSections/section4';
import JoinUs from '../HomeSections/section6';
import Footer from '../footer';
import Header from '../header';
import Banner from '../HomeSections/Banners';
import SecondaryBanner from '../HomeSections/Banners/index2';

 const About =() => (
     <div>
         <Header />
         <SecondaryBanner  />
        <AboutUsSection />
        <OurTeam />
        <JoinUs />
        <Footer />
    </div>
)

export default About;