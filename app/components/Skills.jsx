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
import skills1 from 'public/assets/images/skills1.png';
import php from 'public/assets/images/php.png';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 justify-center">
        <div className="px-4 flex items-center">
          <Image
            src={skills1}
            alt="computer"
            className="sm:w-[30%] md:w-[30%] lg:w-[60%] xl:w-[60%] 2xl:w-[40%] mx-auto md:my-6"
          />
        </div>
        <div className="mx-20 flex flex-col justify-center">
          <h1 className="text-primary text-3xl font-normal md:text-center">
            My <b className="text-blue-600 font-normal">Skills</b>
          </h1>
          <div className="flex flex-col gap-y-6">
            <div></div>
            <div className="flex flex-row md:justify-center gap-x-10">
              <div className="bg-primary sm:p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 rounded-full">
                <Image
                  src={html}
                  alt="html"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={git}
                  alt="html"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={css}
                  alt="css"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={bootstrap}
                  alt="html"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
            </div>

            <div className="flex flex-row md:justify-center gap-x-10">
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={php}
                  alt="css"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={database}
                  alt="html"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={javascript}
                  alt="javascript"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={nextjs}
                  alt="html"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
            </div>

            <div className="flex flex-row md:justify-center gap-x-10">
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={drupal}
                  alt="html"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={wordpress}
                  alt="html"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={react}
                  alt="html"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
              <div className="bg-primary p-2 rounded-full">
                <Image
                  src={tailwind}
                  alt="html"
                  className="sm:w-[300px] md:w-[30px] lg:w-[30px] xl:w-[30px] 2xl:w-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
