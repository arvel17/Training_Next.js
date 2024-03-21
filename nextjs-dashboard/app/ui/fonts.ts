import { Inter } from 'next/font/google'; //Inter font utama
import { Lusitana } from 'next/font/google'; //Lusitana font sekunder

export const inter = Inter({ subsets: ['latin'] }); //latin font subset
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
