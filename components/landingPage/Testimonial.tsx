import Image from 'next/image'
import React from 'react'

type Props = {}

function Testimonial({ }: Props) {
    return (

        <div className="w-full flex flex-col md:flex-row items-center md:px-20 mt-16 px-6">
            <div className="md:w-1/2 text-center md:text-start">
                <p className="text-primary-100 md:text-lg ">Testimonials</p>
                <h2 className="text-xl md:text-[36px] text-white my-2">Users from all over the world</h2>
                <p className="text-[#F7F7F7]">Flipr has been trusted by more than 10,000 clients.
                </p>

                <div className="flex gap-10 md:mt-10 my-6 text-white">
                    <div>
                        <p className="text-[38px] md:text-[45px] text-white font-medium">32K+</p>
                        <p className="text-center text-[#CFCFCF] -mt-2 text-sm md:text-base">People Joined</p>
                    </div>
                    <div>
                        <p className="text-[38px] md:text-[45px] text-white font-medium">250+</p>
                        <p className="text-center text-[#CFCFCF] -mt-2 text-sm md:text-base">Active traders</p>
                    </div>

                    <div>
                        <p className="text-[38px] md:text-[45px] text-white font-medium">87+</p>
                        <p className="text-center text-[#CFCFCF] -mt-2 text-sm md:text-base">Countries</p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 my-4">
                <Image src='/world.png' alt="" width={560} height={283} />
            </div>

        </div>
    )
}

export default Testimonial