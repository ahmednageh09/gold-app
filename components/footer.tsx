import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import icon1 from '../assets/Qrcode 1.svg';
import icon2 from '../assets/play.svg';
import icon3 from '../assets/applStore.svg';
import icon4 from '../assets/Facebook_3D.svg';
import icon5 from '../assets/instagram_3D.svg';
import icon6 from '../assets/Tiktok_3D.svg';
import icon7 from '../assets/Twitter_3D.svg';
import icon8 from '../assets/linkedin_3D.svg';
import icon9 from '../assets/youtube_3D.svg';
import icon10 from '../assets/whatsapp_3D.svg';


export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="container-fluid bg-cover-app bg-cover bg-center text-white pt-32">
            <section className='container py-14'>
                <div className='lg:hidden flex mb-5 items-center flex-col'>
                    <Image src={logo} alt="logo" className='max-w-full' priority />
                    <p className='text-[#E5BB44] mt-4 text-nowrap'>Your safe way to invest in gold</p>
                </div>
                <div className='text-center border-b-slate-300 pb-24 grid grid-cols-3 lg:grid-cols-7 gap-8'>
                    <div className='hidden lg:flex items-center flex-col'>
                        <Image src={logo} alt="logo" className='max-w-full' priority />
                        <p className='text-[#E5BB44] mt-4 text-nowrap'>Your safe way to invest in gold</p>
                    </div>
                    <div>
                        <h3 className="text-xl mb-5 font-bold sm:text-nowrap">Account</h3>
                        <ul className="space-y-2">
                            <li><a href="#">My Account</a></li>
                            <li><a href="/signUp">Sign Up</a></li>
                            <li><a href="/prices">Details</a></li>
                            <li><a href="/about">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl mb-5 font-bold sm:text-nowrap">Important Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Usage Terms</a></li>
                            <li><a href="#">Common</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl mb-5 font-bold sm:text-nowrap">Important Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Usage Terms</a></li>
                            <li><a href="#">Common</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl mb-5 font-bold sm:text-nowrap">Important Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Usage Terms</a></li>
                            <li><a href="#">Common</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl mb-5 font-bold sm:text-nowrap">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                            </li>
                            <li>exclusive
                                @gmail.com</li>
                            <li>+ 88015 -88888 -</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl mb-5 font-bold sm:text-nowrap">Download The App</h3>
                        <ul className="space-y-2">
                            <div className='flex justify-between flex-col sm:flex-row items-center gap-2'>
                                <li><span className='sr-only'>QR Code Image</span>
                                    <Image src={icon1} alt='social icon' /></li>
                                <div>
                                    <li><span className='sr-only'>Google Paly</span>
                                        <Image src={icon2} alt='social icon' /></li>
                                    <li><span className='sr-only'>Apple Store</span>
                                        <Image src={icon3} alt='social icon' /></li>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 sm:flex justify-between gap-2'>
                                <li><Image src={icon4} alt='social icon' /></li>
                                <li><Image src={icon5} alt='social icon' /></li>
                                <li><Image src={icon6} alt='social icon' /></li>
                                <li><Image src={icon7} alt='social icon' /></li>
                                <li><Image src={icon8} alt='social icon' /></li>
                                <li><Image src={icon9} alt='social icon' /></li>
                                <li><Image src={icon10} alt='social icon' /></li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className=' border-t-2 flex justify-between text-nowrap'>
                    <h3 className="text-xl font-bold">Serv5</h3>
                    <p className="">© <span>{currentYear}</span> All rights reserved.</p>
                </div>
            </section>
        </footer>
    )
}
