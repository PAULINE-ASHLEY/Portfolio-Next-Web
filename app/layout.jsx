import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { Kalam } from 'next/font/google';

const kalam = Kalam({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Pauline Ondiek Portfolio - Home',
  description: 'Pauline Ondiek Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#121212] mx-10">
      <body className={kalam.className}>
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
