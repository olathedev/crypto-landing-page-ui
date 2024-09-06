import React from 'react'
import CartIcon from '../common/icons/CartIcon'
import WalletIcon from '../common/icons/WalletIcon'

type Props = {}

export default function Features({ }: Props) {
    return (
        <div className="w-full">
            <header className="text-center flex flex-col items-center gap- md:gap-3 px-6">
                <p className="text-primary-100 md:text-lg ">Our Features</p>
                <h2 className="text-xl md:text-[36px] text-white ">Attractive Features</h2>
                <p className="text-[#CFCFCF] md:w-[826.5px] text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
                    .
                </p>

            </header>

            <div className="w-full flex items-center justify-center my-10 ">

                <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="w-full border border-primary-100 rounded-lg p-6 flex flex-col gap-4 md:gap-6 items-center justify-center text-white text-center">
                        <div className="h-[75px] w-[75px] flex items-center justify-center bg-[#353535] rounded-full border-[#353535]">
                            <WalletIcon />
                        </div>

                        <h3 className="md:text-2xl text-[18px]">Flexible Investment</h3>
                        <p className="text-gray-400 md:text-sm text-[10px]">Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris.
                        </p>

                        <button className='py-3 px-6 text-white rounded-lg bg-primary-200 flex items-center gap-2 text-[12px] md:text-base'>Learn More
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.34839 12.0301L8.98391 8.3946C9.41326 7.96525 9.41326 7.26268 8.98391 6.83333L5.34839 3.19781" stroke="white" strokeWidth="0.836392" stroke-miterlimit="10"  strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="w-full border border-primary-100 p-6 rounded-lg flex flex-col gap-4 md:gap-6 items-center justify-center text-white text-center">
                        <div className="h-[75px] w-[75px] flex items-center justify-center bg-[#353535] rounded-full border-[#353535]">
                            <WalletIcon />
                        </div>

                        <h3 className="md:text-2xl text-lg">Weekly Profits</h3>
                        <p className="text-gray-400 md:text-sm text-[10px]">Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris.
                        </p>
                        
                        <button className='py-3 px-6 text-white rounded-lg bg-primary-200 flex items-center gap-2 text-[12px] md:text-base'>Learn More
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.34839 12.0301L8.98391 8.3946C9.41326 7.96525 9.41326 7.26268 8.98391 6.83333L5.34839 3.19781" stroke="white" strokeWidth="0.836392" strokeMiterlimit="10"  strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="w-full rounded-xl p-6 flex flex-col gap-4 md:gap-6 items-center justify-center text-white text-center border border-primary-100">
                        <div className="h-[75px] w-[75px] flex items-center justify-center bg-[#353535] rounded-full border-[#353535]">
                            <CartIcon />
                        </div>

                        <h3 className="md:text-2xl text-lg">Buy and or sell</h3>
                        <p className="text-gray-400 text-[10px] md:text-sm">Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris.
                        </p>
                        
                        <button className='py-3 px-6 text-white rounded-lg bg-primary-200 flex items-center gap-2 text-[12px] md:text-base'>Learn More
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.34839 12.0301L8.98391 8.3946C9.41326 7.96525 9.41326 7.26268 8.98391 6.83333L5.34839 3.19781" stroke="white" strokeWidth="0.836392" stroke-miterlimit="10"  strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}