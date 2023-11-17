import React from 'react';
import Image from 'next/image';
import twitter from 'public/assets/images/twitter.png';
import github2 from 'public/assets/images/github2.png';
import linkedin from 'public/assets/images/linkedin.png';
import pinterest from 'public/assets/images/pinterest.png';

export default function Footer() {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        <div className="text-white text-sm mx-4">
          <p>
            To view more of my projects and code, Kindly visit my{' '}
            <b className="text-blue-600 font-normal">Github Account. </b>
            Please follow me on github.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-6">
          <Image src={github2} alt="html" width={20} />
          <Image src={linkedin} alt="html" width={20} />
          <Image src={pinterest} alt="html" width={20} />
          <Image src={twitter} alt="html" width={20} />
        </div>
        <div className="mx-4">
          <p className="text-primary font-medium text-sm">
            © 2023 All rights reserved. By{' '}
            <b className="text-blue-600 font-normal">
              Pauline Adhiambo Ondiek.
            </b>
          </p>
        </div>
      </div>
    </>
  );
}
