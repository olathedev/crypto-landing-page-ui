import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <main className='relative maxW-screen-md h-screen max-h-screen p-4 md:p-6 bg-[#f7f7f7]'>
            {children}

            <footer className='absolute bottom-0 left-0 bgWhite w-full h-[90px] shadow-2xl flex justify-between px-8 items-center'>
                <div className='flex flex-col gap-2 items-center text-ceter'>
                    <span>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 18V15" stroke="#2965E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.5703 2.82009L3.64027 8.37009C2.86027 8.99009 2.36027 10.3001 2.53027 11.2801L3.86027 19.2401C4.10027 20.6601 5.46027 21.8101 6.90027 21.8101H18.1003C19.5303 21.8101 20.9003 20.6501 21.1403 19.2401L22.4703 11.2801C22.6303 10.3001 22.1303 8.99009 21.3603 8.37009L14.4303 2.83009C13.3603 1.97009 11.6303 1.97009 10.5703 2.82009Z" stroke="#2965E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <p className="text-sm">Home</p>
                </div>

                <div className='flex flex-col gap-2 items-center text-ceter'>
                    <span>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.89699 19.7C7.71699 18.82 8.96699 18.89 9.68699 19.85L10.697 21.2C11.507 22.27 12.817 22.27 13.627 21.2L14.637 19.85C15.357 18.89 16.607 18.82 17.427 19.7C19.207 21.6 20.657 20.97 20.657 18.31V7.04C20.667 3.01 19.727 2 15.947 2H8.38699C4.60699 2 3.66699 3.01 3.66699 7.04V18.3C3.66699 20.97 5.12699 21.59 6.89699 19.7Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.26306 11H8.27204" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.0654 11H16.5654" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.26306 7H8.27204" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.0654 7H16.5654" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>

                    <p className="text-sm">Transactions</p>
                </div>

                <div className='flex flex-col gap-2 items-center text-ceter'>
                    <span>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_245_1324)">
                                <path d="M3.38379 6.78675C3.38379 6.78675 4.40915 6.11497 4.83715 5.56041C5.33761 4.91197 6.1088 4.06152 6.1088 4.06152C6.1088 4.06152 7.53767 4.64668 8.83377 4.74276C10.0072 4.82974 10.3968 4.18377 11.5588 4.33407C13.2426 4.55184 14.2841 6.78675 14.2841 6.78675" stroke="#51526C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.2841 9.97253V7.79247V6.15743C14.2841 3.14739 11.844 0.707275 8.83394 0.707275V0.707275C5.8239 0.707275 3.38379 3.14739 3.38379 6.15743V9.42751C3.38379 12.4375 5.8239 14.8777 8.83394 14.8777V14.8777" stroke="#51526C" stroke-width="1.2" stroke-linecap="round" />
                                <path d="M14.2842 7.79272H14.5849C15.1924 7.79272 15.6848 8.28514 15.6848 8.89257C15.6848 9.5 15.1924 9.99242 14.5849 9.99242H14.2842V7.79272Z" fill="#51526C" stroke="#51526C" stroke-width="1.2" stroke-linejoin="round" />
                                <path d="M3.38379 7.79272H3.08302C2.47559 7.79272 1.98317 8.28514 1.98317 8.89257C1.98317 9.5 2.47559 9.99242 3.08302 9.99242H3.38379V7.79272Z" fill="#51526C" stroke="#51526C" stroke-width="1.2" stroke-linejoin="round" />
                                <rect x="-0.561139" y="0.561139" width="1.12228" height="1.12228" rx="0.561139" transform="matrix(-1 0 0 1 9.3787 13.7554)" fill="#51526C" stroke="#51526C" stroke-width="1.12228" />
                                <circle cx="6.83301" cy="8.09326" r="1" fill="#51526C" />
                                <circle cx="10.833" cy="8.09326" r="1" fill="#51526C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_245_1324">
                                    <rect width="16" height="16" fill="white" transform="translate(0.833008)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </span>
                    <p className="text-sm">Support</p>
                </div>

                <div className='flex flex-col gap-2 items-center text-ceter'>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.6" y="1.1" width="6.18462" height="6.18462" rx="1.4" stroke="#51526C" strokeWidth="1.2" />
                        <rect x="0.6" y="9.71548" width="6.18462" height="6.18462" rx="1.4" stroke="#51526C" strokeWidth="1.2" />
                        <rect x="9.21523" y="1.1" width="6.18462" height="6.18462" rx="1.4" stroke="#51526C" strokeWidth="1.2" />
                        <rect x="9.21523" y="9.71548" width="6.18462" height="6.18462" rx="1.4" stroke="#51526C" strokeWidth="1.2" />
                    </svg>

                    <p className="text-sm">Wallet</p>
                </div>


            </footer>
        </main>
    )
}

export default layout