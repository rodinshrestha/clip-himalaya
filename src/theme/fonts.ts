import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const magra = localFont({
  src: [
    {
      path: '../assets/fonts/catchy-mager.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-magra',
  display: 'swap',
});

export const fonts = {
  poppins: 'var(--font-poppins)',
  magra: 'var(--font-magra)',
};
