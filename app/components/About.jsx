import React from 'react';
import about from './about.png';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="flex">
        <div className="flex items-center justify-center w-[40%] border-2 border-solid border-blue-200 mx-20 p-6 rounded-xl">
          <Image src={about} alt="about" />
        </div>
        <div className="w-[60%] mr-20">
          <h1 className="text-primary text-3xl font-bold py-1">ABOUT ME</h1>
          <p className="text-[#A9A9A9] text-xl pt-6">
            To obtain full time employment in a position that will allow me to
            utilize my experience in designing, implementing, testing, debugging
            and developing software solutions by use of the software development
            life cycle (SDLC). To obtain full time employment in a position that
            will allow me to utilize my experience in designing, implementing,
            testing, debugging and developing software solutions by use of the
            software development life cycle (SDLC).
          </p>
          <div className="flex flex-row gap-x-6 pt-6">
            <button
              type="button"
              class="bg-gradient-to-r from-blue-300 to-blue-600 px-10 py-4 my-4 rounded-xl text-xl text-primary"
            >
              Hire Me
            </button>
            <button
              type="button"
              class="border-blue-600 border-2 border-solid px-10 py-4 my-4 rounded-xl text-xl text-primary"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
