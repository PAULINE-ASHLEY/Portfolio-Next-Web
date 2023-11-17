import React from 'react';
import about3 from 'public/assets/images/about3.png';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="sm:w-[70%] md:w-[50%] lg:w-[70%] xl:w-[70%] 2xl:w-[70%]">
          <h1 className="text-primary text-3xl font-normal py-1">
            About <b className="text-blue-600 font-normal">Me</b>
          </h1>
          <p className="text-primary text-base pt-6 font-normal mr-40 sm:mr-0">
            Passionate about{' '}
            <b className="text-blue-600 font-normal">
              WordPress and frontend development{' '}
            </b>
            , I combine creativity and technical skills to create impactful
            visual experiences. With a strong background and expertise in web
            development in designing, implementing, testing, debugging and
            developing software solutions by use of the software development
            life cycle (SDLC), I create{' '}
            <b className="text-blue-600 font-normal">
              Aesthetic, intuitive & Responsive user interfaces.{' '}
            </b>{' '}
            My user-centered approach allows me to design captivating visuals
            and provide an optimal user experience. Continuosly seeking the
            latest trends,{' '}
            <b className="text-blue-600 font-normal">
              {' '}
              I enjoy taking on new challenges{' '}
            </b>{' '}
            and collaborating with clients to bring their ideas to life through
            high-quality web experiences.
          </p>
        </div>
        <div className="sm:w-[30%] md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] px-4">
          <Image src={about3} alt="computer" className="w-[80%]" />
        </div>
      </div>
    </>
  );
}
