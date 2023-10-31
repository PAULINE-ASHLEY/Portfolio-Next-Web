import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className="flex mx-10">
        {/* Logo Section */}
        <div className="flex flex-row items-center my-4 w-[30%]">
          <p className="text-primary text-xl">Pauline Ondiek</p>
        </div>
        {/* Other section */}
        <div className="flex flex-row-reverse items-center gap-x-4 text-primary w-[70%]">
          <button
            type="button"
            className="bg-gradient-to-r from-blue-300 to-blue-600 px-6 py-2 my-6 rounded-xl text-base text-primary"
          >
            Contact
          </button>
          <ul className="md:flex hidden items-center gap-4 text-lg">
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
