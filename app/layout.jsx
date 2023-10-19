import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { Lato } from 'next/font/google';

const lato = Lato({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Pauline Ondiek Portfolio - Home',
  description: 'Pauline Ondiek Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#121212] px-10">
      <body className={lato.className}>
        <div>
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
