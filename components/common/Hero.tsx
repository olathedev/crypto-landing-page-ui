import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

type Props = {}

const montserat = Montserrat({ subsets: ['latin'] })
const Hero = (props: Props) => {
    return (
        <div className='relative container mx-auto px-20 my-20 flex gap-10'>
            <div className="w-[55%] flex flex-col gap-2 text-white">
                <h1 className={`${montserat.className} text-[53px] font-bold leading-[65px]`}>
                    Welcome to Flipr Gateway to <span className='text-primary-200'>Hassle-free Weekly </span> Crypto to 10% Returns
                </h1>
                <Image src='/vvector1.png' alt='' height={100} width={100} className='absolute' />

                <div className='w-[350px] flex flex-col gap-1'>
                    <p className='text-center text-lg'>Crypto Market Starts in</p>
                    <div className='h-[70px] w-full bg-[#111E32] rounded-2xl'>
                    </div>

                    <div className="mt-4 flex w-full gap-4">
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