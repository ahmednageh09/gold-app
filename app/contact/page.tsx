"use client"
import React, { useRef } from 'react'
import icon1 from '../../assets/upload.svg'
import Image from 'next/image'
import Map from '@/components/map';


export default function ContactPage() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        fileInputRef.current!.click();
    };
    return (
        <>
            <section className='container bg-cover inset-0 object-fit-contain my-44'>
                <div className=' flex items-center md:justify-between flex-col md:flex-row'>
                    <div className='md:w-[40%] flex flex-col justify-center items-start text-white'>
                        <h2 className='text-[40px] font-bold my-4 whitespace-nowrap '><span className='text-[#E5BB44]'>Contact </span>Us</h2>
                        <p>Our team is available around the clock to provide assistance and answer your questions. Do not hesitate to fill out the contact form or send us an email. We look forward to communicating with you and meeting your needs. Thank you for your visit and trust in our services.</p>
                        <div className="bg-transparent w-full p-4">
                            <form className="space-y-6 bg-transparent" >
                                <div>
                                    <input
                                        aria-required="true"
                                        className="mt-1 bg-transparent block w-full border-b-2 outline-0 p-2 border-gray-300 "
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <input
                                        aria-required="true"
                                        className="mt-1 bg-transparent block w-full border-b-2 outline-0 p-2 border-gray-300 "
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        aria-required="true"
                                        className="mt-1 bg-transparent block w-full border-b-2 outline-0 p-2 border-gray-300 "
                                        id="message"
                                        name="message"
                                        placeholder="Leave your message here..."
                                        required
                                    />
                                </div>
                                <div className="flex justify-center w-full gap-1.5 border-dashed border-2 border-gray-300 px-12 py-8" onClick={handleImageClick}>
                                    <input
                                        id="file"
                                        type="file"
                                        placeholder="Add extra file"
                                        className="hidden"
                                        ref={fileInputRef}
                                    />
                                    <Image
                                        priority
                                        src={icon1}
                                        alt=""
                                    />
                                    <span>Add Extra File</span>
                                </div>
                                <div>
                                    <button className="bg-black w-full px-12 py-3 rounded-xl hover:text-[#E5BB44]">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='w-full md:w-[50%] flex items-center justify-center'>
                        <Map />
                    </div>
                </div>
            </section>
        </>
    )
}
