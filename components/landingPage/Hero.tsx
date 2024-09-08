"use client"

import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import CountdownTimer from './countdownTimer';

type Props = {}

const montserat = Montserrat({ subsets: ['latin'] })
const Hero = (props: Props) => {


    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    return (
        <div className='relative container mx-auto px-6 my-6 md:px-20 md:mt-20 md:flex gap-10'>
            <div className="md:w-[60%] flex flex-col gap-2 text-white">
                <h1 className={`${montserat.className} text-3xl md:text-[53px] font-bold md:leading-[65px] leading-10`}>
                    Welcome to Flipr, your gateway to <span className='text-primary-200'>hassle-free crypto </span> arbitrage with up to 10% weekly Returns
                </h1>
                {/* <Image src='/vvector1.png' alt='' height={100} width={100} className='absolute' /> */}

                <div className='md:w-[350px] flex flex-col gap-1 my-4 md:my-2'>
                    <p className='text-center text-lg'>Arbitrage Launch starts in</p>
                    <CountdownTimer targetDate={targetDate} /> 

                    <div className="pt-5 w-full flex justify-center gap-4">
                        <button className='bg-primary-100 text-white py-3 md:py-4 px-8 md:px-10 rounded-lg'>Join Flipr</button>
                        <button className='border border-primary-100 text-white py-3 md:py-4 px-8 md:px-10 rounded-lg'>Trade Crypto</button>
                    </div>
                </div>
            </div>

            <div className='grow'>
                {/* <Image src='/coinimage.png' alt='' width={722} height={449} /> */}
            </div>
        </div>
    )
}

export default Hero