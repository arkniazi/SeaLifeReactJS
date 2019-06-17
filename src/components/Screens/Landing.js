import React,{Component} from 'react';
import Header from '../header';
import Banner from '../HomeSections/Banners';
import AboutUsSection from '../HomeSections/section2';
import Featured from '../HomeSections/section3';
import Events from '../HomeSections/section5';
import OurTeam from '../HomeSections/section4';
import JoinUs from '../HomeSections/section6';
import OurStory from '../HomeSections/section7';
import Subscribe from '../HomeSections/section8';
import Footer from '../footer';
import Cause from '../HomeSections/section1';
import OurCause from '../HomeSections/section1';


export default class  Landing extends Component{
    
    render(){
        return(
            <div>
                <Header />
                <Banner />
                <OurCause />
                <AboutUsSection />
                <Featured />
                <Events />
                <OurTeam />
                <JoinUs />
                <OurStory />
                <Subscribe />
                <Footer />
            </div>
        )
    }
}