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
import skills1 from 'public/assets/images/code.gif';
import php from 'public/assets/images/php.png';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 justify-center gap-y-4">
        <div className="items-center justify-center">
          <Image
            src={skills1}
            alt="computer"
            className="w-[80%] mx-auto md:my-6"
          />
        </div>
        <div className="mx-6">
          <h1 className="text-primary text-3xl font-normal text-center">
            My <b className="text-blue-600 font-normal">Skills</b>
          </h1>
          <div className="grid grid-cols-4 pt-6 gap-y-6 gap-x-4">
            <div>
              <Image
                src={html}
                alt="html"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={git}
                alt="html"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={css}
                alt="css"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={php}
                alt="css"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={database}
                alt="html"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={javascript}
                alt="javascript"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={drupal}
                alt="html"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={wordpress}
                alt="html"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={react}
                alt="html"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={bootstrap}
                alt="html"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={tailwind}
                alt="html"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
            <div>
              <Image
                src={nextjs}
                alt="html"
                width={50}
                className="mx-auto bg-primary p-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
