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
      <h1
        className="text-primary text-center text-3xl font-normal"
        id="projects"
      >
        My <b className="text-blue-600 font-normal">Services</b>
      </h1>

      <div className="flex flex-row mt-6 justify-center items-center gap-x-8">
        <div className="w-[50%] gap-y-10 bg-[#242124] rounded text-center py-6 px-4">
          <Image src={design} alt="html" width={40} className="mx-auto" />
          <h1 className="text-primary text-lg">
            Creative graphic <br /> design
          </h1>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Visual identity & logo</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Printed materials design</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">UI-UX interface design</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Custom illustrations</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] gap-y-10 bg-[#242124] rounded text-center py-6 px-4">
          <Image src={code} alt="html" width={40} className="mx-auto" />
          <h1 className="text-primary text-lg">
            Interactive frontend <br /> development
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
              <p className="text-primary text-sm">HTML,CSS & Javascript</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">CMS integration, WordPress</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Creative graphic design</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] gap-y-10 bg-[#242124] rounded text-center py-6 px-4">
          <Image src={website} alt="html" width={40} className="mx-auto" />
          <h1 className="text-primary text-lg">
            User experience (UX) <br /> design
          </h1>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Wireframe & prototyping</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">
                UI needs research & analysis{' '}
              </p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">Effective UI workflows</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Image src={square} alt="html" width={10} />
              <p className="text-primary text-sm">User testing & iterations</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] gap-y-10 bg-[#242124] rounded text-center py-6 px-4">
          <Image src={maintenance} alt="html" width={40} className="mx-auto" />
          <h1 className="text-primary text-lg">
            Maintenance and technical support
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
