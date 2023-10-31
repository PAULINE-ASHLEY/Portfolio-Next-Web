import React from 'react';
import Experience from '@Components/Experience';
import About from '@Components/About';
import Portfolio from '@Components/Portfolio';
import Skills from '@Components/Skills';

export default function Home() {
  return (
    <>
      <div className="px-10 py-8">
        <Experience />
      </div>
      <div className="px-10 py-8">
        <About />
      </div>
      <div className="px-10 py-8">
        <Portfolio />
      </div>
      <div className="px-20 py-8">
        <Skills />
      </div>
    </>
  );
}
