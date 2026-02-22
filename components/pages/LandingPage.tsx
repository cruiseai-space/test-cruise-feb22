import React from 'react';
import Hero from '../sections/Hero';
import Methodology from '../sections/Methodology';
import Showcase from '../sections/Showcase';
import TechStack from '../sections/TechStack';
import About from '../sections/About';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Methodology />
      <Showcase />
      <TechStack />
      <About />
    </>
  );
};

export default LandingPage;