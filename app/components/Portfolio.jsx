import React from 'react';
import Link from 'next/link';
import about from './about.png';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <h1 className="text-primary text-center text-2xl font-bold">PORTFOLIO</h1>
      <div className="flex flex-roW gap-x-4 text-[#A9A9A9] justify-center">
        <ul className="md:flex hidden items-center gap-8 text-xl">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Mobile App
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Website
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Desktop
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Other Projects
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Skills
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex mt-6">
        <div className="w-[60%] mr-20">
          <h1 className="text-blue-600 text-2xl font-bold py-1">PROJECT 1</h1>
          <h1 className="text-primary text-2xl font-bold py-1">
            Ecommerce Website
          </h1>
          <p className="text-[#A9A9A9] text-lg pt-6 text-justify">
            To obtain full time employment in a position that will allow me to
            utilize my experience in designing, implementing, testing, debugging
            and developing software solutions by use of the software development
            life cycle (SDLC). To obtain full time employment in a position that
            will allow me to utilize my experience in designing, implementing,
            testing, debugging and developing software solutions by use of the
            software development life cycle (SDLC).
          </p>
          <div className="flex flex-row gap-x-6 pt-2">
            <button type="button" class=" my-4 text-xl text-primary">
              Read More
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-[40%]">
          <Image src={about} alt="about" />
        </div>
      </div>

      <div className="flex mt-6">
        <div className="flex items-center justify-center w-[40%]">
          <Image src={about} alt="about" />
        </div>
        <div className="w-[60%] mr-20">
          <h1 className="text-blue-600 text-2xl font-bold py-1">PROJECT 1</h1>
          <h1 className="text-primary text-2xl font-bold py-1">
            Ecommerce Website
          </h1>
          <p className="text-[#A9A9A9] text-lg pt-6 text-justify">
            To obtain full time employment in a position that will allow me to
            utilize my experience in designing, implementing, testing, debugging
            and developing software solutions by use of the software development
            life cycle (SDLC). To obtain full time employment in a position that
            will allow me to utilize my experience in designing, implementing,
            testing, debugging and developing software solutions by use of the
            software development life cycle (SDLC).
          </p>
          <div className="flex flex-row gap-x-6 pt-2">
            <button type="button" class=" my-4 text-xl text-primary">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
