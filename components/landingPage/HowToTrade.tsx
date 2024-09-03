import Image from 'next/image'
import React from 'react'

type Props = {}

function HowToTrade({ }: Props) {
    return (

        <div className="md:my-28 my-10 flex flex-col gap-10 px-6">
            <header className="flex flex-col  items-center text-center gap-1">
                <p className="text-primary-100 md:text-lg ">Trade</p>
                <h2 className="text-xl md:text-[36px] text-white ">How to Trade with Flipr</h2>
                <p className="text-[#F7F7F7] text-sm md:w-[830px]">Trading with Flipr is designed to be as seamless and intuitive as possible. Follow these straightforward steps to start maximizing your crypto returns through our automated arbitrage platform
                </p>
            </header>

            <div className="flex flex-col md:flex-row md:gap-16 md:px-20 md:mt-10">
                <div className="md:w-1/2">
                    <Image src='/trading.png' alt="" width={500} height={500} className='w-full h-full' />

                </div>

                <div className="md:w-1/2 text-white  flex flex-col gap-3 py-6 md:py-10">
                    <h2 className={`text-[25px] font-bold text-center`}>Steps to trade</h2>
                    <ol className="flex flex-col gap-2 md:gap-5 list-inside list-disc px-6 md:px-0">
                        <li>Sign Up fo r Your Flipr Account</li>
                        <li>Deposit Your Funds</li>
                        <li>Activate Automated Trading</li>
                        <li>Monitor Your Earnings</li>
                        <li>Withdraw Your Profits</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default HowToTrade