import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HamburgerIcon from './icons/HamburgerIcon'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <nav className="h-[75px] w-full sticky top-0 bg-appBackground z-20">
            <div className='hidden md:flex container mx-auto h-full justify-between items-center px-10'>


                <ul className="flex space-x-8 text-white">
                    <li className='text-primary-100'>Home</li>
                    <li className='te'>How it Works </li>
                    <li className='text'>About Us</li>
                    <li className='text'>Contact </li>
                </ul>

                <div>
                    <Link href='/signup'><button className='bg-primary-100 text-white py-3 px-10 rounded-lg'>Sign up</button></Link>
                </div>

            </div>


            {/* Mobile Nav */}

            <div className='container mx-auto flex justify-between p-4'>

                <div>
                    <HamburgerIcon />
                </div>

                <div className="">
                    <Image src='/logo.png' alt='' height={40} width={90} />
                </div>

            </div>
        </nav>
    )
}

export default NavBar