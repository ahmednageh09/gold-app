"use client"
import Image from 'next/image'
import React from 'react'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/circuit.svg'
import icon3 from '../../assets/signature.svg'
import icon4 from '../../assets/star.svg'
import icon5 from '../../assets/phone.svg'
import icon6 from '../../assets/applStore.svg'
import icon7 from '../../assets/play.svg'
import icon8 from '../../assets/wavy.svg'
import check from '../../assets/check.svg'
import { useRouter } from 'next/navigation'
import CarouselComponent from '../../components/carouselComponent'
import Link from 'next/link'

export default function HomePage() {
    const router = useRouter()
    const investmentBundles = [
        {
            id: 1,
            name: 'Invest bundle',
            percentage: 50,
            description: 'Owners of medium and small capital',
            benefits: [
                'A distinct investment goal. This service doubles the amount of gold agreed upon during the contract.',
                'Starting the service immediately after contracting. The service begins immediately after contracting. As well as the time frame for the service.',
                'The commission is paid in two stages, and only half of the commission is paid upon contracting and the other half after reaching half of the goal',
            ],
            route: '/bundles/50',
        },
        {
            id: 2,
            name: 'Invest bundle',
            percentage: 20,
            description: 'Owners of medium and small capital',
            benefits: [
                'A distinct investment goal. This service doubles the amount of gold agreed upon during the contract.',
                'Starting the service immediately after contracting. The service begins immediately after contracting. As well as the time frame for the service.',
                'The commission is paid in two stages, and only half of the commission is paid upon contracting and the other half after reaching half of the goal',
            ],
            route: '/bundles/50',
        },
        {
            id: 3,
            name: 'Invest bundle',
            percentage: 15,
            description: 'Owners of medium and small capital',
            benefits: [
                'A distinct investment goal. This service doubles the amount of gold agreed upon during the contract.',
                'Starting the service immediately after contracting. The service begins immediately after contracting. As well as the time frame for the service.',
                'The commission is paid in two stages, and only half of the commission is paid upon contracting and the other half after reaching half of the goal',
            ],
            route: '/bundles/50',
        },
        {
            id: 4,
            name: 'Invest bundle',
            percentage: 10,
            description: 'Owners of medium and small capital',
            benefits: [
                'A distinct investment goal. This service doubles the amount of gold agreed upon during the contract.',
                'Starting the service immediately after contracting. The service begins immediately after contracting. As well as the time frame for the service.',
                'The commission is paid in two stages, and only half of the commission is paid upon contracting and the other half after reaching half of the goal',
            ],
            route: '/bundles/50',
        },
    ];
    const features = [
        {
            title: 'Customer service',
            description: 'Our role just to advice you by buy and sell in approriate time to make you reach your goal',
            iconSrc: icon4
        },
        {
            title: 'Customer service',
            description: 'Our role just to advice you by buy and sell in approriate time to make you reach your goal',
            iconSrc: icon4
        },
        {
            title: 'Customer service',
            description: 'Our role just to advice you by buy and sell in approriate time to make you reach your goal',
            iconSrc: icon4
        },
        {
            title: 'Customer service',
            description: 'Our role just to advice you by buy and sell in approriate time to make you reach your goal',
            iconSrc: icon4
        },
    ];
    return (
        <>
            <div className='space-y-48'>
                <section className=''>
                    <div className='container'>
                        <div className='flex justify-center flex-col md:flex-row md:mt-[6%] md:space-x-24 mx-9'>
                            <div className='md:w-[50%] flex flex-col justify-center items-start'>
                                <h2 className='text-[18px] md:text-[30px] lg:text-[40px] font-bold my-4 text-white'>Investment consultants in <span className='text-[#E5BB44]'>gold market</span> - Make your investment successful</h2>
                                <p className='text-white'>Do you want to invest your money in the Egyptian gold market? You take knowledge and it is the path to your success.</p>
                            </div>
                            <div className='my-8 md:w-[50%] md:flex items-center justify-center object-contain'>
                                <span className='sr-only'>Gold image</span>
                                <Image priority src={icon1} alt={'gold icon'} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-48 lg:mt-20'>
                        <CarouselComponent />
                    </div>
                </section>
                <section className='text-white  object-fit-contain'>
                    <div className='container'>
                        <div className='flex justify-center flex-col md:flex-row md:mt-[6%] md:space-x-24 mx-9'>
                            <div className='md:w-[50%] flex flex-col justify-center items-start'>
                                <span className='text-[#E5BB44]'>Who are we</span>
                                <h3 className='text-[18px] md:text-[30px] font-bold my-4 lg:text-[40px]'>Customized investment consultance in the local <span className='text-[#E5BB44]'>gold market</span></h3>
                                <div className='text-[#BAB9B6]'>
                                    <p className='text-[15px]'>
                                        Enza for Trade and Investment is a 100% Egyptian limited liability company and operates under its trademark ENZA.Trading. We provide specialized investment consultations for individuals and companies wishing to invest in the local Egyptian gold market.
                                    </p>
                                    <p className='text-[15px] my-6'> We provide recommendations for buying and selling, relying on our experience and economic and market analysis. We are distinguished by high experience and accurate analysis in the field of investing in gold in the Egyptian market in particular and the global gold market in general. We are always ready to cooperate with everyone.</p>
                                </div>
                                <div className='flex justify-between flex-col sm:flex-row text-nowrap sm:gap-x-12 text-left text-[#7C7D81]'>
                                    <div className='flex content-between flex-col flex-start'>
                                        <div className='flex flex-row my-2 gap-2' > <Image priority src={check} alt='' />customers service</div>
                                        <div className='flex flex-row my-2 gap-2' > <Image priority src={check} alt='' />Your capital is in your hands</div>
                                    </div>
                                    <div className='flex content-between flex-col '>
                                        <div className='flex flex-row my-2 gap-2'> <Image priority src={check} alt='' />Professional capital growth</div>
                                        <div className='flex flex-row my-2 gap-2'> <Image priority src={check} alt='' />Seizing sure opportunities</div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-8 w-[90%] md:w-[50%] md:flex items-center justify-center'>
                                <Image priority src={icon2} alt={''} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='text-white  object-fit-contain'>
                    <div className='container'>
                        <div className='flex justify-center flex-col md:flex-row md:mt-[6%] md:space-x-24 mx-9'>
                            <div className='my-8 w-[90%] md:w-[50%] md:flex items-center justify-center'>
                                <Image priority src={icon3} alt={''} />
                            </div>
                            <div className='md:w-[50%] flex flex-col justify-center items-start'>
                                <span className='text-[#E5BB44]'>Who are we</span>
                                <h3 className='text-[18px] md:text-[30px] font-bold my-4 lg:text-[40px]'>Customized investment consultance in the local <span className='text-[#E5BB44]'>gold market</span></h3>
                                <div className='text-[#BAB9B6]'>
                                    <p className='text-[15px]'>
                                        Enza for Trade and Investment is a 100% Egyptian limited liability company and operates under its trademark ENZA.Trading. We provide specialized investment consultations for individuals and companies wishing to invest in the local Egyptian gold market.
                                    </p>
                                    <p className='text-[15px] my-6'> We provide recommendations for buying and selling, relying on our experience and economic and market analysis. We are distinguished by high experience and accurate analysis in the field of investing in gold in the Egyptian market in particular and the global gold market in general. We are always ready to cooperate with everyone.</p>
                                </div>
                                <div className='flex justify-between flex-col sm:flex-row text-nowrap sm:gap-x-12 text-left text-[#7C7D81]'>
                                    <div className='flex content-between flex-col flex-start'>
                                        <div className='flex flex-row my-2 gap-2' > <Image priority src={check} alt='' />customers service</div>
                                        <div className='flex flex-row my-2 gap-2' > <Image priority src={check} alt='' />Your capital is in your hands</div>
                                    </div>
                                    <div className='flex content-between flex-col '>
                                        <div className='flex flex-row my-2 gap-2'> <Image priority src={check} alt='' />Professional capital growth</div>
                                        <div className='flex flex-row my-2 gap-2'> <Image priority src={check} alt='' />Seizing sure opportunities</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container'>
                    <div className='text-white flex justify-center my-28'>
                        <h2 className='text-[25px] md:text-[45px] text-center font-bold'>Why we are the first choice for investors in <span className='text-[#E5BB44] lg:block lg:text-center sm:inline'>gold market</span></h2>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10'>
                        {features.map((item, index) => (
                            <div key={index} className="relative bg-[#0d0d0d] p-4 rounded-2xl">
                                <div className='flex content-center justify-center w-full'>
                                    <Image className='absolute -top-10' src={item.iconSrc} alt={item.title} />
                                </div>
                                <div className='flex content-center flex-col text-center my-8 text-white'>
                                    <h4 className='my-4 text-[20px]'>{item.title}</h4>
                                    <div>{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='container'>
                    <div className='text-white text-center my-10'><span className='block text-[40px] text-[#E5BB44]'>Our investment bundles</span>We believe in the importance of providing high value services at reasonable prices. Additionally, <span className='block'>we offer flexible subscription plans to fit your needs and budget.</span></div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10'>
                        {investmentBundles.map((bundle) => (
                            <div key={bundle.id} className='bg-[#212940] border-[0.2px] border-[#383e57] text-white rounded-2xl p-5'>
                                <div>
                                    <h2 className='text-center'>
                                        <span className='text-[25px]'>{bundle.name}</span>
                                        <span className='text-[#E5BB44] relative p-5'>
                                            <span className='text-[50px] font-bold'>{bundle.percentage}</span>
                                            <span className='ms-2 absolute top-0'>%</span>
                                        </span>
                                    </h2>
                                    <p className='my-6 font-bold'>{bundle.description}</p>
                                </div>
                                <div>
                                    {bundle.benefits.map((benefit, index) => (
                                        <div key={index} className='flex gap-2 items-start mt-2'>
                                            <Image className='w-5 mt-1' src={check} alt='' />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center my-8'>
                                    <button className='rounded-xl border-2 border-yellow-400 text-[#E5BB44] outline-none py-4 px-12' onClick={() => router.push(bundle.route)}>Know more</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section >
                <section className='text-white bg-cover my-28 inset-0 object-fit-contain'>
                    <div className='container'>
                        <div className='flex justify-center flex-col md:flex-row md:mt-[6%] md:space-x-24 mx-9'>
                            <div className='flex items-center justify-center'>
                                <Image src={icon5} alt={''} />
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <h3 className='text-[20px] md:text-[40px] font-bold my-4'>Download the app now</h3>
                                <p className='text-[15px] text-[#BAB9B6]'>
                                    Lorem Ipsum is simply dummy text (meaning the intent is form, not content) and is used by the printing and publishing industries. Lorem Ipsum has been the standard for dummy text since the 1500s, when an anonymous printer randomly scribbled a string of characters taken from a text.
                                </p>
                                <div className='flex justify-center md:justify-between gap-6 row m-6 items-center'>
                                    <Image src={icon6} className='mb-1' alt={''} />
                                    <Image src={icon7} alt={''} />
                                </div>
                                <div className='flex justify-between flex-col sm:flex-row text-nowrap sm:gap-x-12 text-left text-[#7C7D81]'>
                                    <div className='flex content-between flex-col flex-start'>
                                        <div className='flex flex-row my-2 gap-2' > <Image src={check} alt='' />customers service</div>
                                        <div className='flex flex-row my-2 gap-2' > <Image src={check} alt='' />Your capital is in your hands</div>
                                        <div className='flex flex-row my-2 gap-2'> <Image src={check} alt='' />Seizing sure opportunities</div>
                                    </div>
                                    <div className='flex content-between flex-col'>
                                        <div className='flex flex-row my-2 gap-2'> <Image src={check} alt='' />Professional capital growth</div>
                                        <div className='flex flex-row my-2 gap-2'> <Image src={check} alt='' />Seizing sure opportunities</div>
                                        <div className='flex flex-row my-2 gap-2'> <Image src={check} alt='' />Seizing sure opportunities</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section>
                    <div className='container mb-40'>
                        <div className='text-white text-center'>
                            <h2 className='text-[18px] md:text-[30px] font-bold my-4 lg:text-[40px]'>Invest smartly in <span className='text-[#E5BB44]'>the Egyptian gold market</span> with <span className='block'>a professional team that takes your hand towards achieving your goals.</span></h2>
                            <p className='text-[18px] my-10 text-[#BAB9B6]'>Personal service, tailored consultations for each client, accurate analyzes and <span className='block'>investment recommendations based on market research.</span></p>
                        </div>
                        <div className='flex justify-center items-center my-8'>
                            <button className='rounded-xl border-2 font-bold border-yellow-400 text-[#E5BB44] outline-none py-4 px-12 hover:bg-[#E5BB44] hover:text-black'>
                                <Link href={'/login'}>Start now</Link>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
