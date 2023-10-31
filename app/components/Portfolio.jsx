import React from 'react';
import Link from 'next/link';
import book from './images/book.png';
import realestate from './images/realestate.png';
import github from './images/github.png';
import globe from './images/globe.png';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <h1 className="text-primary text-center text-2xl font-bold">PORTFOLIO</h1>
      <div className="flex flex-row gap-x-4 text-[#A9A9A9] justify-center">
        <ul className="md:flex hidden items-center gap-4 text-lg">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              React
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              WordPress
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Other Projects
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex mt-6 justify-center items-center gap-x-10">
        <div className="w-[50%] gap-y-4">
          {/* <h1 className="text-blue-600 text-2xl font-bold py-1">PROJECT 1</h1> */}
          <h1 className="text-blue-600 text-xl font-bold py-1">
            Real Estate Website
          </h1>
          <p className="text-[#A9A9A9] text-base">
            To obtain full time employment in a position that will allow me to
            utilize my experience in designing, implementing, testing, debugging
            and developing software solutions by use of the software development
            life cycle (SDLC). To obtain full time employment in a position that
            will allow me to utilize my experience in designing, implementing,
            testing, debugging and developing software solutions by use of the
            software development life cycle (SDLC).
          </p>
          <div className="flex flex-row gap-x-6">
            <button
              type="button"
              className=" my-4 text-base text-primary flex gap-x-4"
            >
              <Image src={github} alt="arrow" width={30} />
              <Image src={globe} alt="arrow" width={30} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-[50%] p-6">
          <Image src={realestate} alt="about" className="rounded-xl" />
        </div>
      </div>

      <div className="flex mt-10 justify-center items-center gap-x-10">
        <div className="flex items-center justify-center w-[50%] p-6">
          <Image src={book} alt="about" className="rounded-xl" />
        </div>
        <div className="w-[50%] gap-y-4">
          {/* <h1 className="text-blue-600 text-2xl font-bold py-1">PROJECT 1</h1> */}
          <h1 className="text-blue-600 text-xl font-bold py-1">
            MangenyBuch Ecommerce Website
          </h1>
          <p className="text-[#A9A9A9] text-base">
            To obtain full time employment in a position that will allow me to
            utilize my experience in designing, implementing, testing, debugging
            and developing software solutions by use of the software development
            life cycle (SDLC). To obtain full time employment in a position that
            will allow me to utilize my experience in designing, implementing,
            testing, debugging and developing software solutions by use of the
            software development life cycle (SDLC).
          </p>
          <div className="flex flex-row gap-x-6">
            <button
              type="button"
              className=" my-4 text-base text-primary flex gap-x-4"
            >
              <Image src={github} alt="arrow" width={30} />
              <Image src={globe} alt="arrow" width={30} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
