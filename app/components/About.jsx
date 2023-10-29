import React from 'react';
import about2 from './about2.gif';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[40%] px-4">
          <Image src={about2} alt="computer" />
        </div>
        <div className="w-[60%]">
          <h1 className="text-primary text-2xl font-bold py-1">ABOUT ME</h1>
          <p className="text-[#A9A9A9] text-base pt-6">
            To obtain full time employment in a position that will allow me to
            utilize my experience in designing, implementing, testing, debugging
            and developing software solutions by use of the software development
            life cycle (SDLC). To obtain full time employment in a position that
            will allow me to utilize my experience in designing, implementing,
            testing, debugging and developing software solutions by use of the
            software development life cycle (SDLC).
          </p>
          <div className="flex flex-row gap-x-6 pt-2">
            <button
              type="button"
              class="bg-gradient-to-r from-blue-300 to-blue-600 px-6 py-2 my-6 rounded-xl text-base text-primary"
            >
              Hire Me
            </button>
            <button
              type="button"
              class="border-blue-600 border-2 border-solid px-6 py-2 my-6 rounded-xl text-base text-primary"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
