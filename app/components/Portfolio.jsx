import React from 'react';
import book from 'public/assets/images/book.png';
import dashboard from 'public/assets/images/dashboard.png';
import food from 'public/assets/images/food.png';
import realestate from 'public/assets/images/realestate.png';
import black from 'public/assets/images/black.png';
import coin from 'public/assets/images/coin.png';
import pacis from 'public/assets/images/pacis.png';
import down from 'public/assets/images/down.png';
import Telkom from 'public/assets/images/Telkom.png';
import upp from 'public/assets/images/upp.png';
import tgc from 'public/assets/images/tgc.png';
import decor from 'public/assets/images/decor.png';
import inchcape from 'public/assets/images/inchcape.png';
import prudential from 'public/assets/images/prudential.png';
import icea from 'public/assets/images/icea.png';
import WorkTemp from './WorkTemp';

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
              title="Real Paradise Website"
              image={realestate}
              webUrl="https://real-estate-react-web.vercel.app/"
              gitUrl="https://github.com/PAULINE-ASHLEY/Real-Estate-React-Web"
              languages="React.js, JSON and Tailwind CSS"
            />
            <WorkTemp
              title="MangenyBuch E-Commerce Website"
              image={book}
              webUrl="https://mangeny-buch-react-web.vercel.app/"
              gitUrl="https://github.com/PAULINE-ASHLEY/MangenyBuch-React-Web"
              languages="React.js, Redux Toolkit, JSON and Tailwind CSS"
            />
            <WorkTemp
              title="Black Woman Can Dashboard"
              image={dashboard}
              webUrl="https://admin-blackwomancan.vercel.app/"
              gitUrl="https://admin-blackwomancan.vercel.app/"
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
              gitUrl="https://black-woman-can.vercel.app/"
              languages="React.js, Tailwind CSS and APIs"
            />

            <WorkTemp
              title="Ash Coin Website"
              image={coin}
              webUrl="https://ash-coin-react-web.vercel.app/"
              gitUrl="https://github.com/PAULINE-ASHLEY/Ash-Coin-React-Web"
              languages="React.js, Tailwind CSS and APIs"
            />

            <WorkTemp
              title="Pacis Insurance Website"
              image={pacis}
              webUrl="https://www.pacisinsurance.com/"
              gitUrl="https://www.pacisinsurance.com/"
              languages="WordPress"
            />

            <WorkTemp
              title="The LawDown Africa Website"
              image={down}
              webUrl="https://thelawdownafrica.com/"
              gitUrl="https://thelawdownafrica.com/"
              languages="WordPress"
            />

            <WorkTemp
              title="Telkom Kenya Website"
              image={Telkom}
              webUrl="https://telkom.co.ke/"
              gitUrl="https://telkom.co.ke/"
              languages="WordPress"
            />

            <WorkTemp
              title="Urban Policy Platform Website"
              image={upp}
              webUrl="https://urbanpolicyplatform.org/"
              gitUrl="https://urbanpolicyplatform.org/"
              languages="WordPress"
            />

            <WorkTemp
              title="The Gurl's Club Events Website"
              image={tgc}
              webUrl="https://events.tgc.co.ke/"
              gitUrl="https://events.tgc.co.ke/"
              languages="WordPress"
            />

            <WorkTemp
              title="Siginga Decor Ventures E-Commerce Website"
              image={decor}
              webUrl="http://sigingadecorventures.co.ke/"
              gitUrl="http://sigingadecorventures.co.ke/"
              languages="WordPress"
            />

            <WorkTemp
              title="Inchcape Kenya Website"
              image={inchcape}
              webUrl="https://inchcape.co.ke/"
              gitUrl="https://inchcape.co.ke/"
              languages="WordPress"
            />

            <WorkTemp
              title="ICEA Kenya, Uganda and Tanzania Website"
              image={icea}
              webUrl="https://icealion.co.ke/"
              gitUrl="https://icealion.co.ke/"
              languages="WordPress"
            />

            <WorkTemp
              title="Prudential Uganda Website"
              image={prudential}
              webUrl="https://www.prudential.ug/"
              gitUrl="https://www.prudential.ug/"
              languages="WordPress"
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-x-6">
          <a
            className="bg-blue-600 px-8 py-2 my-6 rounded-2xl text-base text-primary"
            href="http://github.com/PAULINE-ASHLEY"
            target="_blank"
            rel="noreferrer"
          >
            All My Works
          </a>
          <a
            className="border-blue-600 border-2 border-solid px-6 py-2 my-6 rounded-2xl text-base text-blue-600"
            href="https://pauline-ashley.github.io/PAULINE_ONDIEK/"
            target="_blank"
            rel="noreferrer"
          >
            Previous Portfolio
          </a>
        </div>
      </div>
    </>
  );
}
