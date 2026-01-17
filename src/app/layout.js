import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

//Custom Components
import NavBar from '../components/NavBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Physical File Organizer',
  description: 'By Jamelle Messinger',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
