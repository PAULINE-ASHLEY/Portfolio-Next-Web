import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import home from 'public/assets/images/home.png';

export default function Banner() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[70%]">
          <h1 className="text-primary text-2xl font-normal">
            Hello, My name is
          </h1>
          <h1 className="text-primary text-3xl font-normal py-2">
            Pauline{' '}
            <b className="text-blue-600 font-normal">Adhiambo Ondiek,</b>
          </h1>
          <div className="flex flex-row gap-x-2 items-center">
            <h1 className="text-primary text-3xl font-normal py-2">
              I am a WordPress <b className="text-blue-600 font-normal">&</b>{' '}
              Frontend developer.
            </h1>
          </div>
          <div className="flex flex-row gap-x-6">
            <button
              type="button"
              className="bg-blue-600 px-6 py-2 my-6 rounded-2xl text-base text-primary"
            >
              Download CV
            </button>
            <button
              type="button"
              className="border-blue-600 border-2 border-solid px-10 py-2 my-6 rounded-2xl text-base text-blue-600"
            >
              <Link href="/#contact">Let's talk</Link>
            </button>
          </div>
        </div>
        <div className="flex items-center w-[30%]">
          <Image src={home} alt="about w-[40%]" />
        </div>
      </div>
    </>
  );
}
