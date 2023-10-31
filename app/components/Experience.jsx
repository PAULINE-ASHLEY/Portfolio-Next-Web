import React from 'react';
import square from './images/square.png';
import Image from 'next/image';
import home from './images/home.png';

export default function Experience() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[70%]">
          <h1 className="text-[#A9A9A9] text-2xl font-normal">I'm a</h1>
          <h1 className="text-primary text-3xl font-normal py-2">
            FRONT-END SOFTWARE
          </h1>
          <div className="flex flex-row gap-x-2 items-center">
            <h1 className="text-primary text-3xl font-normal py-2">
              DEVELOPER
            </h1>
            <div className="pt-2">
              <Image src={square} width={14} height={14} alt="square" />
            </div>
          </div>
          <p className="text-[#A9A9A9] text-base pt-2 text-justify font-normal">
            To obtain full time employment in a position that will allow me to
            utilize my experience in designing, <br /> implementing, testing,
            debugging and developing software solutions by use of the software{' '}
            <br />
            development life cycle (SDLC).
          </p>
          <button
            type="button"
            className="bg-gradient-to-r from-blue-300 to-blue-600 px-6 py-2 my-6 rounded-xl text-base text-primary"
          >
            Previous Projects
          </button>
        </div>
        <div className="flex items-center w-[30%]">
          <Image src={home} alt="about" />
        </div>
      </div>
    </>
  );
}
