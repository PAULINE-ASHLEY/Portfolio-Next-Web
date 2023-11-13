import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className="flex mx-10">
        {/* Logo Section */}
        <div className="flex flex-row items-center my-4 w-[30%]">
          <p className="text-primary text-xl">
            Pauline <b className="text-blue-600 font-normal">Adhiambo Ondiek</b>
          </p>
        </div>
        {/* Other section */}
        <div className="flex flex-row-reverse items-center gap-x-4 text-primary w-[70%]">
          <button
            type="button"
            className="bg-blue-600 px-6 py-2 my-6 rounded-xl text-base text-primary"
          >
            Contact Me
          </button>
          <ul className="md:flex hidden items-center gap-4 text-lg">
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="py-7 px-3 inline-block">
                About
              </Link>
            </li>
            <li>
              <Link href="/#services" className="py-7 px-3 inline-block">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="py-7 px-3 inline-block">
                My Skills
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="py-7 px-3 inline-block">
                My Work
              </Link>
            </li>
            {/* <li>
              <Link href="/#experience" className="py-7 px-3 inline-block">
                Experience
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
