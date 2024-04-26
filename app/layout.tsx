import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "../components/footer";
import gold from '../assets/footershadow.svg'
import lightGold from '../assets/headershadow.svg'
import Image from "next/image";
import sun from '../assets/sun.svg'
import red from '../assets/holered.svg'
import yellow from '../assets/holeyellow.svg'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enza",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="">
      <body className="min-h-screen object-fit-contain bg-cover-app bg-no-repeat bg-cover overflow-x-hidden" >
        <Header />
        {modal}
        <div className="relative">
          <div>
            <Image src={lightGold} alt="logo" className='absolute top-[10%] md:-top-[9%] right-16 -z-50' priority />
          </div>
          <div>
            <Image src={gold} alt="logo" className='hidden absolute top-[1%] md:top-[12%] right-0 w-[700px] opacity-70 -z-50' priority />
          </div>

          <div>
            <Image src={gold} alt="logo" className='absolute top-[1%] md:top-[32%] left-0 w-[700px] opacity-70 -z-50' priority />
          </div>
          <div>
            <Image src={sun} alt="logo" className='absolute top-[35%] right-16 max-w-14 -z-50' priority />
          </div>
          <div>
            <Image src={lightGold} alt="logo" className='absolute top-[40%] left-[10%] w-[60%] -z-50' priority />
          </div>
          <div>
            <Image src={red} alt="logo" className='absolute top-[29%] left-0 sm:top-[33%] md:top-[22%] lg:top-[20%] -rotate-[180deg] w-16 md:w-28 lg:w-40 -z-50' priority />
          </div>
          <div>
            <Image src={yellow} alt="logo" className='absolute top-[20%] sm:top-[28%] md:top-[16%] lg:top-[16%]  left-[9%] sm:left-[12%] md:left-[7%] lg:left-[16%] max-w-40 -z-50' priority />
          </div>
          <div>
            <Image src={yellow} alt="logo" className='absolute top-[83%] sm:top-[55%] md:top-[70%] right-28  max-w-20 -z-50' priority />
          </div>
          <div>
            <Image src={red} alt="logo" className='absolute top-[75%] left-0 -rotate-[180deg]  max-w-20 -z-50' priority />
          </div>
          {children}
        </div>
        <Footer />
      </body>
    </html >
  );
}
