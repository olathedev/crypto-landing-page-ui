import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <nav className="h-[75px] container mx-auto px-10 flex justify-between items-center sticky top-0 bg-appBackground z-20">

            <div className="">
                <Image src='/logo.png' alt='' height={40} width={90} />
            </div>

            <ul className="flex space-x-8 text-white">
                <li className='text-primary-100'>Home</li>
                <li className='te'>How it Works </li>
                <li className='text'>About Us</li>
                <li className='text'>Contact </li>
            </ul>

            <div>
               <Link href='/signup'><button className='bg-primary-100 text-white py-3 px-10 rounded-lg'>Sign up</button></Link> 
            </div>

        </nav>
    )
}

export default NavBar