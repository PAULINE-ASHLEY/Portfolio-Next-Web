import React from 'react';
import Experience from './components/Experience';
import About from './components/About';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <>
      <div className="px-10 py-20">
        <Experience />
      </div>
      <div className="px-10 py-10">
        <About />
      </div>
      <div className="px-10 py-10">
        <Portfolio />
      </div>
    </>
  );
}
