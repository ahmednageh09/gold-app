import Image from 'next/image'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import icon1 from "../../assets/board.svg"
import icon2 from "../../assets/balance.svg"
import icon3 from "../../assets/target2.svg"
import person1 from "../../assets/image 1.png"
import person2 from "../../assets/image 2.png"
import person3 from "../../assets/image 3.png"
import person4 from "../../assets/image 4.png"
import person5 from "../../assets/image 5.png"
import person6 from "../../assets/image 6.png"
import person7 from "../../assets/image 7.png"
import person8 from "../../assets/image 8.png"
import person9 from "../../assets/image 9.png"
import person10 from "../../assets/image 10.png"
import person11 from "../../assets/image 11.png"

export default function AboutPage() {
    const people = [
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person1 },
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person2 },
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person3 },
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person4 },
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person5 },
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person6 },
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person7 },
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person8 },
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person9 },
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person10 },
        { name: 'Emad Nagi', role: 'Company member', imageSrc: person11 },
    ];

    return (
        <>
            <div className='container'>
                <section className='flex flex-col gap-y-40 md:gap-y-24 lg:gap-y-2 text-white bg-cover inset-0 object-fit-contain my-24'>
                    <div className='flex justify-center flex-col md:flex-row md:gap-x-48 lg:gap-x-72'>
                        <div className='w-[80%] md:w-[50%] flex flex-col justify-center items-start'>
                            <span className='text-[#E5BB44]'>Welcome to</span>
                            <h3 className='text-[20px] md:text[40px] font-bold my-4 text-nowrap'>Enza Trade and Investment </h3>
                            <div className='text-[#BAB9B6]'>
                                <p className='text-[15px]'>
                                    Enza Trade and Investment Company is a 100% Egyptian company. It was established in 2023 according to the Egyptian Companies Law. It holds commercial registration number (4725), as stipulated in the commercial register. We specialize in (providing technical consultations and analysis, especially in the field of the local gold market), and according to the tax card number (755258073), we provide investment consultations related to the local Egyptian gold market.
                                </p>
                            </div>
                        </div>
                        <div className='my-8 md:w-[40%] md:flex items-center justify-center'>
                            <Image priority src={icon1} alt={''} className='transform scale-x-[-1]' />
                        </div>
                    </div>
                    <div className='bg-[#302B26]/30 md:mx-4 w-[90%] md:w-[65%] lg:w-[40%] text-nowrap'>
                        <div className='flex justify-center flex-col sm:flex-row text-center py-12 gap-x-14'>
                            <div className='flex flex-col gap-4 text-[15px]'>
                                <span className='text-[#E5BB44] text-[20px] md:text-[30px] font-bold'>12+</span>Years of experience
                            </div>
                            <div className='flex flex-col gap-4 text-[15px]'>
                                <span className='text-[#E5BB44] text-[20px] md:text-[30px] font-bold'>1280+</span>A client trusts us
                            </div>
                            <div className='flex flex-col gap-4 text-[15px]'>
                                <span className='text-[#E5BB44] text-[20px] md:text-[30px] font-bold'>1,22,280+</span>Monthly profits
                            </div>
                        </div>
                    </div>
                </section>
                <section className='my-44'>
                    <div className=' flex flex-col md:flex-row flex-1 justify-center space-y-14 md:space-y-0 md:gap-12'>
                        <div className="flex flex-col bg-[#272626]/90 p-12 shadow-[5px_10px_54px_rgba(255,215,0,0.15)]">
                            <div className='flex content-center justify-center w-full'>
                                <Image className='' src={icon2} alt={''} />
                            </div>
                            <div className='flex content-center flex-col text-center my-8 text-white'>
                                <h4 className='mb-4 text-[20px] text-[#E5BB44]'>Company Legality</h4>
                                <div>Enza Trade and Investment Company is a 100% Egyptian company. It was established in 2023 according to the Egyptian Companies Law. It holds commercial registration number (4725), as stipulated in the commercial register. We specialize in (providing technical consultations and analysis, especially in the field of the local gold market), and according to the tax card number (755258073), we provide investment consultations related to the local Egyptian gold market.</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-[#272626]/90 p-12 shadow-[5px_10px_54px_rgba(255,215,0,0.15)]">
                            <div className='flex content-center justify-center w-full'>
                                <Image className='' src={icon3} alt={''} />
                            </div>
                            <div className='flex content-center flex-col text-center my-8 text-white'>
                                <h4 className='mb-4 text-[20px] text-[#E5BB44]'>Company Goals</h4>
                                <div>Working to save all this effort from investors or those wishing to invest in this market. And bear responsibility for buying and selling decisions. These decisions must be carefully considered. To provide it to our customers. The best investment service is to raise awareness regarding this type of investment. And helping small capital owners by publishing long-term buying and selling recommendations, transforming the decision to buy or sell in the gold market from a random decision to a deliberate decision.</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex justify-center flex-col items-center'>
                    <div className='text-white text-center my-10'><span className='block font-bold text-[40px] text-[#E5BB44]'>Work Team</span>Our teams include experts specialized in the local gold market, giving you confidence in <span className='block sm:flex'>our advice and recommendations to achieve profitable returns on your investments. </span></div>
                    <div className='flex flex-col gap-4 mb-80'>
                        <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:my-14'>
                            {people.slice(0, 3).map((person, index) => (
                                <div key={index} className="flex-1 relative">
                                    <Image src={person.imageSrc} alt={person.name} className="w-full object-contain" />
                                    <div className='absolute bottom-12 left-1/4 text-white flex flex-col justify-center text-center text-nowrap'>
                                        <span className='font-bold text-[30px]'>{person.name}</span>
                                        <span className='text-[15px]'>{person.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4">
                            {people.slice(3, 11).map((person, index) => (
                                <div key={index} className="flex-1 relative">
                                    <Image src={person.imageSrc} alt={person.name} className="w-full object-contain" />
                                    <div className='absolute bottom-2 left-4 md:left-7 text-white flex flex-col justify-center text-center text-nowrap'>
                                        <span className='font-bold text-[12px] md:text-[24px] lg:text-[25px]'>{person.name}</span>
                                        <span className='text-[10px] md:text-[15px]'>{person.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Carousel className="md:hidden">
                            <CarouselContent>
                                {people.map((person, index) => (
                                    <CarouselItem key={index} className='basis-1/2'>
                                        <div className="flex-1 relative">
                                            <Image src={person.imageSrc} alt={person.name} className="w-full object-contain" />
                                            <div className='absolute bottom-2 md:12 left-1/4 md:left-1/4 text-white flex flex-col justify-center text-center text-nowrap'>
                                                <span className='font-bold text-[12px] md:text-[24px] lg:text-[35px]'>{person.name}</span>
                                                <span className='text-[10px] md:text-[15px]'>{person.role}</span>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </section>
            </div>
        </>
    )
}
