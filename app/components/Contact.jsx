import React from 'react';
import Image from 'next/image';
import email from 'public/assets/images/email.png';
import phone from 'public/assets/images/phone.png';
import pin from 'public/assets/images/pin.png';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <h1
        className="text-primary text-center text-3xl font-normal"
        id="projects"
      >
        Contact <b className="text-blue-600 font-normal">Me</b>
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-x-6 justify-center items-center mt-2">
        <div className="flex flex-col gap-y-2 text-white text-center">
          <Link href="mailto:ashleyondiek9@gmail.com">
            <Image src={email} alt="html" width={25} className="mx-auto py-2" />
            <p>ashleyondiek9@gmail.com</p>
          </Link>
        </div>
        <div className="flex flex-col gap-y-2 text-white text-center">
          <Link href="#">
            <Image src={pin} alt="html" width={25} className="mx-auto py-2" />
            <p>Kenya-Nairobi</p>
          </Link>
        </div>
        <div className="flex flex-col gap-y-2 text-white text-center">
          <Link href="tel:0708400409">
            <Image src={phone} alt="html" width={25} className="mx-auto py-2" />
            <p>+(254)-708-400-409</p>
          </Link>
        </div>
      </div>
    </>
  );
}
