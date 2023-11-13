import React from 'react';
import css from 'public/assets/images/css.png';
import html from 'public/assets/images/html.png';
import javascript from 'public/assets/images/javascript.png';
import wordpress from 'public/assets/images/wordpress.png';
import bootstrap from 'public/assets/images/bootstrap.png';
import tailwind from 'public/assets/images/tailwind.png';
import database from 'public/assets/images/database.png';
import drupal from 'public/assets/images/drupal.png';
import react from 'public/assets/images/react.png';
import nextjs from 'public/assets/images/nextjs.png';
import git from 'public/assets/images/git.png';
import skills2 from 'public/assets/images/skills2.png';
import php from 'public/assets/images/php.png';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="w-[50%] px-4 flex items-center">
          <Image src={skills2} alt="computer" className="w-[60%] mx-auto" />
        </div>
        <div className="w-[50%] mx-20">
          <h1 className="text-primary text-3xl font-normal" id="skills">
            My <b className="text-blue-600 font-normal">Skills</b>
          </h1>
          <div className="flex flex-col gap-y-6">
            <div></div>
            <div className="flex flex-row gap-x-10">
              <div className="bg-primary p-2 rounded-full">
                <Image src={html} alt="html" width={30} />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image src={git} alt="html" width={30} />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image src={css} alt="css" width={30} />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image src={bootstrap} alt="html" width={30} />
              </div>
            </div>

            <div className="flex flex-row gap-x-10">
              <div className="bg-primary p-2 rounded-full">
                <Image src={php} alt="css" width={30} />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image src={database} alt="html" width={30} />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image src={javascript} alt="javascript" width={30} />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image src={nextjs} alt="html" width={30} />
              </div>
            </div>

            <div className="flex flex-row gap-x-10">
              <div className="bg-primary p-2 rounded-full">
                <Image src={drupal} alt="html" width={30} />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image src={wordpress} alt="html" width={30} />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image src={react} alt="html" width={30} />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image src={tailwind} alt="html" width={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
