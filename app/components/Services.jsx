import React from 'react';
import Image from 'next/image';
import website from 'public/assets/images/website.png';
import square from 'public/assets/images/square.png';
import code from 'public/assets/images/code.png';
import design from 'public/assets/images/design.png';
import maintenance from 'public/assets/images/maintenance.png';

export default function Services() {
  return (
    <>
      <h1 className="text-primary text-center text-3xl font-normal">
        My <b className="text-blue-600 font-normal">Services</b>
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 mt-6 justify-center items-center gap-x-8 md:gap-y-8">
        <div className="gap-y-10 bg-[#242124] rounded text-center py-6 px-4 2xl:mx-20">
          <Image src={design} alt="html" width={40} className="mx-auto" />
          <h1 className="text-primary text-lg">
            Search Engine <br /> Optimization (SEO)
          </h1>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Improve website visibility</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Increase brand awareness</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">
                Cost effectively generate leads
              </p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Optimize for mobile users</p>
            </div>
          </div>
        </div>
        <div className="gap-y-10 bg-[#242124] rounded text-center py-6 px-4 2xl:mx-20">
          <Image src={code} alt="html" width={40} className="mx-auto" />
          <h1 className="text-primary text-lg">
            Interactive Frontend <br /> Development
          </h1>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">
                Creation of responsive websites
              </p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">HTML, CSS & Javascript</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Bootstrap, SQL & Git</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">
                React.js, Next.js & Tailwind
              </p>
            </div>
          </div>
        </div>
        <div className="gap-y-10 bg-[#242124] rounded text-center py-6 px-4 2xl:mx-20">
          <Image src={website} alt="html" width={40} className="mx-auto" />
          <h1 className="text-primary text-lg">
            Content Management <br /> Systems
          </h1>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Responsive website themes</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Effective page builders </p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Use of secure plugins</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">WordPress & Drupal</p>
            </div>
          </div>
        </div>
        <div className="gap-y-10 bg-[#242124] rounded text-center py-6 px-4 2xl:mx-20">
          <Image src={maintenance} alt="html" width={40} className="mx-auto" />
          <h1 className="text-primary text-lg">
            Maintenance and Technical Support
          </h1>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Regular website updates</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">
                Website performance tracking
              </p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">24/7 support</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">
                Bug fixing & issue resolution
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
