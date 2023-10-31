import React from 'react';
import css from './images/css.png';
import html from './images/html.png';
import javascript from './images/javascript.png';
import wordpress from './images/wordpress.png';
import bootstrap from './images/bootstrap.png';
import tailwind from './images/tailwind.png';
import database from './images/database.png';
import drupal from './images/drupal.png';
import react from './images/react.png';
import nextjs from './images/nextjs.png';
import git from './images/git.png';
import php from './images/php.png';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <h1 className="text-primary text-center text-3xl font-bold">SKILLS</h1>

      <div className="grid grid-cols-6 mt-20 justify-center items-center">
        <div>
          <div className="flex flex-col justify-center items-center gap-y-6">
            <Image src={html} alt="html" width={50} />
            <p className="text-white text-3xl text-center">Html</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-6 pt-10">
            <Image src={git} alt="html" width={50} />
            <p className="text-white text-3xl text-center">Git</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-y-6">
            <Image src={css} alt="css" width={50} />
            <p className="text-white text-3xl text-center">Css</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-6 pt-10">
            <Image src={database} alt="html" width={50} />
            <p className="text-white text-3xl text-center">Mysql</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-y-6">
            <Image src={javascript} alt="javascript" width={50} />
            <p className="text-white text-3xl text-center">Javascript</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-6 pt-10">
            <Image src={drupal} alt="html" width={50} />
            <p className="text-white text-3xl text-center">Drupal</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-y-6">
            <Image src={wordpress} alt="html" width={50} />
            <p className="text-white text-3xl text-center">WordPress</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-6 pt-10">
            <Image src={react} alt="html" width={50} />
            <p className="text-white text-3xl text-center">React.js</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-y-6">
            <Image src={bootstrap} alt="html" width={50} />
            <p className="text-white text-3xl text-center">Bootstrap</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-6 pt-10">
            <Image src={nextjs} alt="html" width={50} />
            <p className="text-white text-3xl text-center">Next.js</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-y-6">
            <Image src={tailwind} alt="html" width={50} />
            <p className="text-white text-3xl text-center">Tailwind</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-6 pt-10">
            <Image src={php} alt="html" width={50} />
            <p className="text-white text-3xl text-center">Php</p>
          </div>
        </div>
      </div>
    </>
  );
}
