import { Rubik } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

type Props = {}
const rubik = Rubik({ subsets: ["latin"] })

const AboutUs = (props: Props) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center px-6 md:text-start">
    <div className="md:w-1/2">
    <Image src='/section2.png' alt="" className='hidden md:block' width={535.5} height={348} />
    </div>

    <div className="md:w-1/2 flex flex-col gap-3">
      <header className="font-medium text-center md:text-start">
        <p className="text-primary-100 md:text-lg ">About us</p>
        <h2 className="text-2xl md:text-[36px] text-white ">Accelerate the world’s transition</h2>

      </header>
      <Image src='/section2.png' alt="" className='block md:hidden' width={535.5} height={348} />

      <p className={`${rubik.className} text-[#F7F7F7] md:text-[20px] text-start my-2`}>At Flipr, we believe in simplifying the complexities of cryptocurrency trading to make it accessible and profitable for everyone. Founded by a team of seasoned financial experts and tech innovators, Flipr is designed to harness the power of automated crypto arbitrage, allowing users to achieve consistent, high-yield returns without the hassle.</p>

      <div>
        <button className='bg-primary-200 text-white py-2.5 md:py-4 px-5 md:px-10 rounded-lg'>More About Us</button>
      </div>

    </div>
  </div>
  )
}

export default AboutUs