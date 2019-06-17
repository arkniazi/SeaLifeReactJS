import React from 'react';
import OurStory from '../HomeSections/section7';
import Header from '../header';
import SecondaryBanner from '../HomeSections/Banners/index2';
import Footer from '../footer';
import JoinUs from '../HomeSections/section6';
import OurCause from '../HomeSections/section1';

const  Cause =() => (
    <div>
        <Header />
        <SecondaryBanner />
        <OurCause />
        <OurStory />
        <JoinUs />
        <Footer />
    </div>
)
export default Cause;