import React from 'react';
import Image from 'next/image';
import email from 'public/assets/images/email.png';
import phone from 'public/assets/images/phone.png';
import pin from 'public/assets/images/pin.png';

export default function Contact() {
  return (
    <>
      <h1
        className="text-primary text-center text-3xl font-normal"
        id="projects"
      >
        Contact <b className="text-blue-600 font-normal">Me</b>
      </h1>
      <div className="grid grid-cols-3 gap-x-6 justify-center items-center mt-2">
        <div className="flex flex-col gap-y-2 text-white text-center">
          <Image src={email} alt="html" width={25} className="mx-auto" />
          <p>ashleyondiek9@gmail.com</p>
        </div>
        <div className="flex flex-col gap-y-2 text-white text-center">
          <Image src={pin} alt="html" width={25} className="mx-auto" />
          <p>Kenya-Nairobi</p>
        </div>
        <div className="flex flex-col gap-y-2 text-white text-center">
          <Image src={phone} alt="html" width={25} className="mx-auto" />
          <p>+254708-400-409</p>
        </div>
      </div>
    </>
  );
}
