import Image from 'next/image'
import React from 'react'
import gold from '../assets/footershadow.svg'


export default function BgCover() {
    return (
        <>
            <div>
                <Image src={gold} alt="logo" className='max-w-44' priority />
            </div>

        </>
    )
}
