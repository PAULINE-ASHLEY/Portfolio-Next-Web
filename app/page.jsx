import React from 'react';
import Experience from './components/Experience';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

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
