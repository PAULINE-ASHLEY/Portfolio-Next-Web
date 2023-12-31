import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './styles/globals.css';
import { Kalam } from 'next/font/google';

const kalam = Kalam({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Pauline Ondiek Portfolio - Home',
  description: 'Pauline Ondiek Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#121212]">
      <body className={kalam.className}>
        <div>
          <Navbar />
        </div>
        {children}
        <div className="py-2 sm:px-10 md:px-10 lg:px-20 xl:px-20 2xl:px-20">
          <Footer />
        </div>
      </body>
    </html>
  );
}
