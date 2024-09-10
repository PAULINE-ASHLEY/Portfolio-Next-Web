import React from 'react';
import about3 from 'public/assets/images/reading.gif';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 items-center justify-center mx-10 gap-y-6">
        <div>
          <h1 className="text-primary text-3xl font-normal">
            About <b className="text-blue-600 font-normal">Me</b>
          </h1>
          <p className="text-primary text-base pt-6 font-normal">
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
        <div>
          <Image src={about3} alt="computer" className="w-[50%] mx-auto" />
        </div>
      </div>
    </>
  );
}
