import React from 'react';
// import Test from './components/Test';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Services from './components/Services';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Experience from './components/Experience';

export default function Home() {
  return (
    <>
      <div>
        <div className="px-20 py-6">
          <Banner />
        </div>
        <div className="px-20 py-6 bg-[#242124]">
          <About />
        </div>
        <div className="px-20 py-6">
          <Services />
        </div>
        <div className="px-20 py-6 bg-[#242124]">
          <Skills />
        </div>
        <div className="px-20 py-6">
          <Portfolio />
        </div>
        {/* <div className="px-20 py-10 bg-[#242124]">
          <Experience />
        </div> */}
        <div className="px-20 py-6 bg-[#242124]">
          <Contact />
        </div>
      </div>
    </>
  );
}
