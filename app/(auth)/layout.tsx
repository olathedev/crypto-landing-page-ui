import Image from 'next/image'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <div className='w-full flex h-screen'>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className='w-[440px] flex flex-col gap-8'>
                    <Image src='/logo.png' alt='' height={40} width={90} />
                    {children}
                </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 bg-appBackground h-full"></div>
        </div>
    )
}

export default layout