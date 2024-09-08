'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import HamburgerIcon from './icons/HamburgerIcon'

type Props = {}

const NavBar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="h-[75px] w-full sticky top-0 bg-appBackground z-20 ">
            <div className='hidden md:flex container mx-auto h-full justify-between items-center px-10'>

                <div className="">
                    <Image src='/logo.png' alt='' height={40} width={90} />
                </div>

                <ul className="flex space-x-8 text-white">
                    <li className='text-primary-100'>Home</li>
                    <li className='te'><Link href="/blog">How it Works</Link> </li>
                    <li className='text'>About Us</li>
                    <li className='text'>Contact </li>
                </ul>

                <div>
                    <Link href='/signup'><button className='bg-primary-100 text-white py-3 px-10 rounded-lg'>Sign up</button></Link>
                </div>

            </div>


            {/* Mobile Nav */}

            <div className='md:hidden container mx-auto flex flex-col bg-appBackground shadow-lg'>
                <div className='flex justify-between items-center py-4 px-4'>

                    <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen && (
                            <span className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </span>
                        )}
                        {!isOpen && <HamburgerIcon />}


                    </div>

                    <div className="">
                        <Image src='/logo.png' alt='' height={40} width={90} />
                    </div>

                </div>

                {isOpen && (
                    <div className="p-4 flex flex-col gap-3">
                        <ul className="flex flex-col space-y-2 text-white">
                            <li className='text-primary-100'>Home</li>
                            <li className='te'><Link href="/blog">How it Works</Link></li>
                            <li className='text'>About Us</li>
                            <li className='text'>Contact </li>
                        </ul>
                        <Link href='/signup'><button className='w-full bg-primary-100 text-white py-3 px-10 rounded-lg'>Sign up</button></Link>


                    </div>
                )}

            </div>

        </nav>
    )
}

export default NavBar