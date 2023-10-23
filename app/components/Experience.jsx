import React from 'react';
import square from './square.png';
import Image from 'next/image';
import home from './home.png';

export default function Experience() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[70%]">
          <h1 className="text-[#A9A9A9] text-3xl font-bold">I'm a</h1>
          <h1 className="text-primary text-6xl font-normal py-2">
            FRONT-END SOFTWARE
          </h1>
          <div className="flex flex-row gap-x-2 items-center">
            <h1 className="text-primary text-6xl font-normal py-2">
              DEVELOPER
            </h1>
            <div className="pt-6">
              <Image src={square} width={20} height={20} alt="square" />
            </div>
          </div>
          <p className="text-[#A9A9A9] text-xl pt-6 text-justify">
            To obtain full time employment in a position that will allow me to
            utilize my experience in designing, <br /> implementing, testing,
            debugging and developing software solutions by use of the software{' '}
            <br />
            development life cycle (SDLC).
          </p>
          <button
            type="button"
            class="bg-gradient-to-r from-blue-300 to-blue-600 px-10 py-4 my-6 rounded-xl text-xl text-primary"
          >
            Previous Projects
          </button>
        </div>
        <div className="flex items-center justify-center w-[30%]">
          <Image src={home} alt="about" />
        </div>
      </div>
    </>
  );
}
