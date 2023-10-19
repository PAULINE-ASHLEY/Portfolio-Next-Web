import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-2 mx-10">
        {/* Logo Section */}
        <div className="flex flex-row items-center my-4">
          <p className="text-primary text-2xl">Pauline Ondiek</p>
        </div>
        {/* Other section */}
        <div className="flex flex-row-reverse gap-x-4 text-primary">
          <button
            type="button"
            class="bg-gradient-to-r from-blue-300 to-blue-600 px-4 my-4 rounded-xl text-xl"
          >
            Contact
          </button>
          <ul className="md:flex hidden items-center gap-8 text-xl">
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
