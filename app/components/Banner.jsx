import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import home from 'public/assets/images/home.png';

export default function Banner() {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 items-center justify-center mx-10 gap-y-6">
        <div>
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
              <Link href="/#about">About Me</Link>
            </button>
            <button
              type="button"
              className="border-blue-600 border-2 border-solid px-10 py-2 my-6 rounded-2xl text-base text-blue-600"
            >
              <Link href="/#contact">Let's talk</Link>
            </button>
          </div>
        </div>
        <div>
          <Image src={home} alt="about" className="w-[50%] mx-auto" />
        </div>
      </div>
    </>
  );
}

{
  /* <a href="PAULINEONDIEKCV.pdf" download>
<p style="text-align:center"><button class="w3-button w3-black w3-round-xlarge w3-hover-grey">
 <i class='fas fa-download' style='font-size:14px'> &nbsp;DOWNLOAD CV</i>
</button></p>
</a> */
}
