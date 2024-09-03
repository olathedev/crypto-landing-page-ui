import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

type Props = {}

const montserat = Montserrat({ subsets: ['latin'] })
const Hero = (props: Props) => {
    return (
        <div className='relative container mx-auto px-6 my-6 md:px-20 md:my-20 md:flex gap-10'>
            <div className="md:w-[55%] flex flex-col gap-2 text-white">
                <h1 className={`${montserat.className} text-3xl md:text-[53px] font-bold md:leading-[65px] leading-10`}>
                    Welcome to Flipr, your gateway to <span className='text-primary-200'>hassle-free crypto </span> arbitrage with up to 10% weekly Returns
                </h1>
                {/* <Image src='/vvector1.png' alt='' height={100} width={100} className='absolute' /> */}

                <div className='w-[350px] flex flex-col gap-1'>
                    <p className='text-center text-lg'>Crypto Market Starts in</p>
                    <div className='h-[70px] w-full bg-[#111E32] rounded-2xl'>
                    </div>

                    <div className="mt-4 flex gap-4">
                        <button className='bg-primary-100 text-white py-3 px-10 rounded-lg'>Join Flipr</button>
                        <button className='border border-primary-100 text-white py-3 px-10 rounded-lg'>Trade Crypto</button>

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