import React from 'react';
import square from './square.png';
import Image from 'next/image';

export default function Experience() {
  return (
    <>
      <h1 className="text-[#A9A9A9] text-3xl font-bold">I'm a</h1>
      <h1 className="text-primary text-6xl font-bold py-1">FRONT-END</h1>
      <h1 className="text-primary text-6xl font-bold py-1">SOFTWARE</h1>
      <div className="flex flex-row gap-x-2 items-center">
        <h1 className="text-primary text-6xl font-bold py-1">DEVELOPER</h1>
        <div className="pt-10">
          <Image src={square} width={20} height={20} alt="square" />
        </div>
      </div>
      <button
        type="button"
        class="bg-gradient-to-r from-blue-300 to-blue-600 px-10 py-4 my-6 rounded-xl text-xl text-primary"
      >
        Previous Projects
      </button>
    </>
  );
}
