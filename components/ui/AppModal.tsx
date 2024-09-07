import { AnimatePresence, motion } from 'framer-motion'
import React, { Children } from 'react'

type Props = {
    className?: string;
    foreground?: string;
    foregroundClass?: string;
    title?: string;
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

const AppModal = ({ className, foreground = 'black', foregroundClass, children, open, title = '', onClose }: Props) => {
    return (
        open && (
            <div className="fixed inset-0 bg-black w-full z-40 bg-opacity-20">
                <div className='bg-[#1B2028] w-full h-[80svh] absolute bottom-0 rounded-t-2xl  flex justify-center text-white'>
                    <div className="relative w-full h-full py-4 px-8">
                        <span className='absolute top-4 right-4 cursor-pointer' onClick={onClose}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6L18 18" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        <header className='text-center text-xl pb-4 border-b border-b-gray-500 '>
                            {title}


                        </header>

                        {children}
                    </div>
                </div>
            </div>
        )

    )
}

export default AppModal