import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import github from 'public/assets/images/github.png';
import globe from 'public/assets/images/globe.png';

const ProjectItem = ({ title, image, webUrl, gitUrl, languages }) => {
  return (
    <div className="relative cursor-pointer hover:scale-105 mx-auto flex items-center justify-center h-70 w-full shadow-xl shadow-gray-400 rounded px-2 py-4 group hover:bg-blue-600">
      <Image
        className="rounded group-hover:opacity-10 "
        src={image}
        alt="project1"
        width={600}
        height={900}
      />
      <div className="hidden group-hover:block absolute">
        <h3 className="text-base text-white text-center tracking-wider">
          {title}
        </h3>
        <p className="py-2 text-white text-center">{languages}</p>
        <div className="flex flex-row justify-center items-center gap-x-4">
          <Link href={gitUrl} target="_blank" rel="noreferrer">
            <div className="bg-black rounded-full p-2">
              <Image src={github} alt="html" width={20} />
            </div>
          </Link>
          <Link href={webUrl} target="_blank" rel="noreferrer">
            <div className="bg-black rounded-full p-2">
              <Image src={globe} alt="html" width={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
