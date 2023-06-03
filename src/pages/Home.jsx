import React from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Contact from '../components/Contact';
import SideNav from '../components/SideNav';

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Work />
      <Contact />
      <SideNav location='right' />
    </>
  );
}
