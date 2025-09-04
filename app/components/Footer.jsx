import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import youtube from 'public/assets/images/youtube.png';
import github2 from 'public/assets/images/github2.png';
import linkedin from 'public/assets/images/linkedin.png';

export default function Footer() {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        <div className="text-white text-sm mx-4 text-center md:py-4 py-2">
          <p>
            To view more of my projects and code, Visit my{' '}
            <b className="text-blue-600 font-normal">
              <Link href="http://github.com/PAULINE-ASHLEY" target="_blank">
                Github Account.
              </Link>
            </b>
            Follow me on github.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-6 md:py-4 py-2">
          <Link href="http://github.com/PAULINE-ASHLEY" target="_blank">
            <Image src={github2} alt="html" width={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/paulineondiek/"
            target="_blank"
          >
            <Image src={linkedin} alt="html" width={20} />
          </Link>
          {/* <Link
            href="https://youtube.com/@tech_pao?si=MK6dHfQrJZBnOv3i"
            target="_blank"
          >
            <Image src={youtube} alt="html" width={20} />
          </Link> */}
        </div>
        <div className="mx-4 text-center md:py-4 py-2">
          <p className="text-primary font-medium text-sm">
            © 2025 All rights reserved. By{' '}
            <b className="text-blue-600 font-normal">
              <Link href="http://github.com/PAULINE-ASHLEY" target="_blank">
                Pauline Adhiambo Ondiek.
              </Link>
            </b>
          </p>
        </div>
      </div>
    </>
  );
}
