"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import x from '../../../assets/x.svg'
import email from '../../../assets/email.svg'
import facebook from '../../../assets/facebook.svg'
import google from '../../../assets/google.svg'
import appl from '../../../assets/apple.svg'
import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram.svg'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';

export default function SignUpPage() {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        handleLogin(data.name, data.address, data.phone, data.email, data.password);
    };

    const handleEmailLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleLogin = async (name: string, address: string, phone: string, email: string, password: string) => {
        try {
            const response = await fetch('http://192.168.1.50:8000/api/investors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, address, phone, email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className='flex justify-center my-40'>
            <div className="relative w-[280px] md:w-[350px] rounded-[10px] bg-white p-8 shadow-lg">
                <Button className="absolute top-4 right-4" onClick={() => router.back()}>
                    <Image src={x} className="h-6 w-6" alt={''} />
                </Button>
                <div className="flex flex-col items-center">
                    <Image src={email} className="h-12 w-12 text-gray-400" alt={''} />
                    <h2 className="mt-4 text-center text-lg font-semibold">Sign Up</h2>
                    {!isModalOpen && <div>
                        <div className="mt-8 w-full space-y-4">
                            <Button className="w-full rounded-3xl bg-slate-400" onClick={handleEmailLoginClick}>
                                <span className='sr-only'>login using email</span>
                                <Image src={email} className="mr-2" alt={'social icon'} />
                                Using Email/Phone Number
                            </Button>
                            <Button className="w-full rounded-3xl bg-[#1877F2] text-white" onClick={() => console.log('clicked facebook')}>
                                <span className='sr-only'>login using facebook</span>
                                <Image src={facebook} className="mr-2" alt={'social icon'} />
                                Using Facebook
                            </Button>
                            <Button className="w-full rounded-3xl bg-[#DB4437] text-white" onClick={() => console.log('clicked google')}>
                                <span className='sr-only'>login using google</span>
                                <Image src={google} className="mr-2" alt={'social icon'} />
                                Using Google
                            </Button>
                            <Button className="w-full rounded-3xl bg-black text-white" onClick={() => console.log('clicked apple')}>
                                <span className='sr-only'>login using apple</span>
                                <Image src={appl} className="mr-2" alt={'social icon'} />
                                Using Apple
                            </Button>
                            <Button className="w-full rounded-3xl bg-[#1DA1F2] text-white" onClick={() => console.log('clicked twitter')}>
                                <span className='sr-only'>login using twitter</span>
                                <Image src={twitter} className="mr-2" alt={'social icon'} />
                                Using Twitter
                            </Button>
                            <Button className="w-full rounded-3xl bg-[#E1306C] text-white" onClick={() => console.log('clicked instagram')}>
                                <span className='sr-only'>login using instagram</span>
                                <Image src={instagram} className="mr-2" alt={'social icon'} />
                                Using Instagram
                            </Button>
                        </div>
                        <p className="mt-4 text-xs text-gray-500">
                            Have Already an account ? <br />
                            <a className="text-blue-500" href="/login">
                                Sign In
                            </a>
                        </p>
                    </div>}
                    {isModalOpen && (
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex flex-col justify-center items-center p-8 gap-4'>
                                    <input type="name" placeholder="Name" {...register("name", { required: true })} className='p-3' />
                                    <input type="address" placeholder="Address" {...register("address", { required: true })} className='p-3' />
                                    <input type="phone" placeholder="Phone" {...register("phone", { required: true })} className='p-3' />
                                    <input type="email" placeholder="Email" {...register("email", { required: true })} className='p-3' />
                                    {errors.email && <p className='text-red-500'>Email is required.</p>}
                                    <input type="password" placeholder="Password" {...register("password", { required: true })} className='p-3' />
                                    {errors.password && <p className='text-red-500'>Password is required.</p>}
                                    <button type="submit" className='rounded-xl border-2 font-bold text-white outline-none py-3 px-6 bg-black hover:text-[#E5BB44]'>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
