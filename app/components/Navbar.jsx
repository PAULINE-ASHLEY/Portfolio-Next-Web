'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menu from 'public/assets/images/menu.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="flex items-center font-semibold justify-around mx-4 md:mx-10 lg:mx-0 xl:mx-0 2xl:mx-0">
          {/* Logo Section */}
          <div className="z-50 lg:w-auto w-full flex justify-between gap-2">
            <p className="text-primary text-xl pt-6 md:pt-10 lg:pt-0 xl:pt-0 2xl:pt-0">
              Pauline{' '}
              <b className="text-blue-600 font-normal">Adhiambo Ondiek</b>
            </p>
            <div className="text-3xl lg:hidden" onClick={() => setOpen(!open)}>
              <Image
                src={menu}
                alt="logo"
                name={`${open ? 'close' : 'menu'}`}
                className="pt-4 md:pt-8"
              />
            </div>
          </div>
          {/* Other section */}
          <div className="lg:flex hidden items-center gap-8 text-base font-normal text-primary">
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
                <Link href="/#work" className="py-7 px-3 inline-block">
                  My Work
                </Link>
              </li>
            </ul>
            <div className="lg:flex hidden justify-between gap-4">
              <button
                type="button"
                className="bg-blue-600 px-6 py-2 my-6 rounded-xl text-base text-primary"
              >
                <Link href="/#contact">Contact Me</Link>
              </button>
            </div>
          </div>
          {/* Mobile nav */}
          <ul
            className={`
        lg:hidden bg-black text-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
          >
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
              <Link href="/#work" className="py-7 px-3 inline-block">
                My Work
              </Link>
            </li>
            <div>{/* button */}</div>
          </ul>
        </div>
      </nav>
    </>
  );
}
