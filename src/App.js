import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/index';
import Header from './components/header/index';
import Banner from './components/HomeSections/Banner';
import Cause from './components/HomeSections/section1';
import AboutUsSection from './components/HomeSections/section2';
import Featured from './components/HomeSections/section3';
import OurTeam from './components/HomeSections/section4';
import Events from './components/HomeSections/section5';
import JoinUs from './components/HomeSections/section6';
import Subscribe from './components/HomeSections/section8';
import OurStory from './components/HomeSections/section7';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Cause />
      <AboutUsSection />
      <Featured />
      <Events />
      <OurTeam />
      <JoinUs />
      <OurStory />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
