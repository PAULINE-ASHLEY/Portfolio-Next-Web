import React from 'react';
import book from 'public/assets/images/book.png';
import dashboard from 'public/assets/images/dashboard.png';
import food from 'public/assets/images/food.png';
import realestate from 'public/assets/images/realestate.png';
import black from 'public/assets/images/black.png';
import pacis from 'public/assets/images/pacis.png';
import down from 'public/assets/images/down.png';
import Telkom from 'public/assets/images/Telkom.png';
import upp from 'public/assets/images/upp.png';
import inchcape from 'public/assets/images/inchcape.png';
import prudential from 'public/assets/images/prudential.png';
import icea from 'public/assets/images/icea.png';
import swop from 'public/assets/images/swop.png';
import umi from 'public/assets/images/umi.png';
import orthofit from 'public/assets/images/orthofit.png';
import WorkTemp from './WorkTemp';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <>
      <h1 className="text-primary text-center text-3xl font-normal">
        My <b className="text-blue-600 font-normal">Work</b>
      </h1>
      <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-2">
            <WorkTemp
              title="OrthoFit Enterprises"
              image={orthofit}
              webUrl="https://orthofit.co.ke/"
              gitUrl="#"
              languages="WordPress"
            />

             <WorkTemp
              title="UMi Digital Kenya"
              image={umi}
              webUrl="https://umi.co.ke/"
              gitUrl="#"
              languages="WordPress"
            />

            <WorkTemp
              title="Pacis Insurance Website"
              image={pacis}
              webUrl="https://www.pacisinsurance.com/"
              gitUrl="#"
              languages="WordPress"
            />

            <WorkTemp
              title="Telkom Kenya Website"
              image={Telkom}
              webUrl="https://telkom.co.ke/"
              gitUrl="#"
              languages="WordPress"
            />

            <WorkTemp
              title="Urban Policy Platform Website"
              image={upp}
              webUrl="https://urbanpolicyplatform.org/"
              gitUrl="#"
              languages="WordPress"
            />

            <WorkTemp
              title="ICEA Kenya, Uganda and Tanzania Website"
              image={icea}
              webUrl="https://icealion.co.ke/"
              gitUrl="#"
              languages="WordPress"
            />

            <WorkTemp
              title="The LawDown Africa Website"
              image={down}
              webUrl="https://thelawdownafrica.com/"
              gitUrl="#"
              languages="WordPress"
            />

            <WorkTemp
              title="Support for Widows and Orphans Programme"
              image={swop}
              webUrl="https://supportforwidowsandorphansprogramme.org/"
              gitUrl="#"
              languages="WordPress"
            />

            <WorkTemp
              title="Inchcape Kenya Website"
              image={inchcape}
              webUrl="https://inchcape.co.ke/"
              gitUrl="#"
              languages="WordPress"
            />

            <WorkTemp
              title="MangenyBuch E-Commerce Website"
              image={book}
              webUrl="https://mangeny-buch-react-web.vercel.app/"
              gitUrl="https://github.com/PAULINE-ASHLEY/MangenyBuch-React-Web"
              languages="React.js, Redux Toolkit, JSON and Tailwind CSS"
            />

            <WorkTemp
              title="Real Paradise Website"
              image={realestate}
              webUrl="https://real-estate-react-web.vercel.app/"
              gitUrl="https://github.com/PAULINE-ASHLEY/Real-Estate-React-Web"
              languages="React.js, JSON and Tailwind CSS"
            />

            <WorkTemp
              title="Black Woman Can Dashboard"
              image={dashboard}
              webUrl="https://admin-blackwomancan.vercel.app/"
              gitUrl="#"
              languages="React.js, JSON and Tailwind CSS"
            />

            <WorkTemp
              title="Ashley's Kitchen Website"
              image={food}
              webUrl="https://restaurant-react-web.vercel.app/"
              gitUrl="https://github.com/PAULINE-ASHLEY/Restaurant-React-Web"
              languages="React.js, Redux Toolkit, JSON and Tailwind CSS"
            />

            <WorkTemp
              title="Black Woman Can Website"
              image={black}
              webUrl="https://black-woman-can.vercel.app/"
              gitUrl="#"
              languages="React.js, Tailwind CSS and APIs"
            />

            <WorkTemp
              title="Prudential Uganda Website"
              image={prudential}
              webUrl="https://www.prudential.ug/"
              gitUrl="#"
              languages="WordPress"
            />

          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-x-6">
          <Link
            className="bg-blue-600 px-8 py-2 my-6 rounded-2xl text-base text-primary"
            href="http://github.com/PAULINE-ASHLEY"
            target="_blank"
            rel="noreferrer"
          >
            All My Works
          </Link>
          <Link
            className="border-blue-600 border-2 border-solid px-6 py-2 my-6 rounded-2xl text-base text-blue-600"
            href="https://pauline-ashley.github.io/PAULINE_ONDIEK/"
            target="_blank"
            rel="noreferrer"
          >
            Previous Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
