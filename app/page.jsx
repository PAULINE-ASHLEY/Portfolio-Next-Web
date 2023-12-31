import React from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Services from './components/Services';
import Banner from './components/Banner';
import Contact from './components/Contact';
// import Experience from './components/Experience';

export default function Home() {
  return (
    <>
      <div>
        <div className="sm:px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-6">
          <Banner />
        </div>
        <div
          className="sm:px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-10 bg-[#242124]"
          id="about"
        >
          <About />
        </div>
        <div
          className="sm:px-4 md:px-20 lg:px-20 xl:px-20 2xl:px-20 py-10"
          id="services"
        >
          <Services />
        </div>
        <div
          className="sm:px-0 md:px-20 lg:px-20 xl:px-20 2xl:px-20 py-10 bg-[#242124]"
          id="skills"
        >
          <Skills />
        </div>
        <div
          className="sm:px-20 md:px-10 lg:px-20 xl:px-20 2xl:px-20 py-10"
          id="work"
        >
          <Portfolio />
        </div>
        {/* <div className="px-20 py-10 bg-[#242124]">
          <Experience />
        </div> */}
        <div
          className="sm:px-4 md:px-10 lg:px-20 xl:px-20 2xl:px-20 py-6 bg-[#242124]"
          id="contact"
        >
          <Contact />
        </div>
      </div>
    </>
  );
}
