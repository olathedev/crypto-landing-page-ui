import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='h-[318px] w-full bg-[#00C4F4] bg-opacity-30 px-20 py-14 '>
            <div className="container mx-auto flex gap-[100px]">

                <div className='w-[30%] flex flex-col gap-6'>
                    <Image src='/logo.png' alt='' height={45} width={102} />

                    <p className='text-[#F7F7F7]'>Massa blandit semper varius faucibus. Suspendisse viverra venenatis placerat nam ut. Pellentesque sit id tempor turpis.</p>

                    <div className="flex gap-4">
                        <div className="h-[45px] w-[45px] bg-white rounded-full flex items-center justify-center">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7498 4.50004H18.4995V0H14.7498C11.8553 0 9.50034 2.355 9.50034 5.24948V7.49948H6.5V12H9.49944V24H13.9999V12H17.7497L18.4995 7.49951H13.9999V5.24948C13.9999 4.84286 14.3432 4.49963 14.7498 4.49963V4.50008L14.7498 4.50004Z" fill="#00C4F4" />
                            </svg>
                        </div>

                        <div className="h-[45px] w-[45px] bg-white rounded-full flex items-center justify-center">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_5_261)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5009 4.5564C23.6186 4.95105 22.6681 5.21325 21.6755 5.33018C22.6924 4.72118 23.4702 3.75604 23.8414 2.60711C22.8908 3.16916 21.8345 3.58155 20.7152 3.80209C19.8152 2.84584 18.537 2.25146 17.1209 2.25146C14.4019 2.25146 12.2006 4.45406 12.2006 7.17139C12.2006 7.55494 12.2431 7.93009 12.3264 8.29197C8.23513 8.08467 4.60809 6.12608 2.18 3.14614C1.74355 3.89795 1.51373 4.75183 1.51385 5.62114C1.51385 7.32728 2.38018 8.83632 3.70186 9.7164C2.89531 9.69248 2.13661 9.46748 1.47043 9.10294V9.16452C1.47043 11.5505 3.16636 13.5414 5.41993 13.9914C5.00712 14.1035 4.5713 14.1655 4.1222 14.1655C3.8042 14.1655 3.49768 14.1327 3.19295 14.0774C3.82231 16.0315 5.63919 17.456 7.7909 17.4976C6.10381 18.8193 3.98491 19.6063 1.67502 19.6063C1.2764 19.6063 0.887975 19.5819 0.5 19.5354C2.68359 20.9364 5.27023 21.7478 8.04913 21.7478C17.1024 21.7478 22.0573 14.2452 22.0573 7.74008C22.0573 7.52393 22.0525 7.31445 22.0436 7.10273C23.0052 6.41486 23.8387 5.54674 24.4987 4.55858L24.5009 4.55637L24.5009 4.5564Z" fill="#00C4F4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_5_261">
                                        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>

                        <div className="h-[45px] w-[45px] bg-white rounded-full flex items-center justify-center">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_5_1468)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.2555 7.20168C24.2555 7.20168 24.0212 5.54737 23.3001 4.821C22.3864 3.86561 21.3632 3.85942 20.8955 3.80407C17.5395 3.55957 12.4991 3.55957 12.4991 3.55957H12.4902C12.4902 3.55957 7.45205 3.55957 4.09426 3.80407C3.62476 3.86118 2.60296 3.8652 1.68965 4.821C0.96815 5.54737 0.738725 7.20168 0.738725 7.20168C0.738725 7.20168 0.5 9.14298 0.5 11.0883V12.9074C0.5 14.8487 0.738725 16.794 0.738725 16.794C0.738725 16.794 0.973025 18.4483 1.68965 19.176C2.60296 20.1314 3.80326 20.1004 4.33921 20.2023C6.2606 20.3856 12.5009 20.441 12.5009 20.441C12.5009 20.441 17.5457 20.4321 20.9017 20.1921C21.3712 20.1367 22.3925 20.1309 23.3063 19.1751C24.0278 18.4487 24.2617 16.7926 24.2617 16.7926C24.2617 16.7926 24.5005 14.8514 24.5005 12.906V11.087C24.4956 9.14565 24.2568 7.20037 24.2568 7.20037L24.2555 7.20168ZM10.013 15.1144V8.36925L16.4965 11.7531L10.013 15.1144Z" fill="#00C4F4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_5_1468">
                                        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </div>
                <div className='w-grow grid grid-cols-3 gap-10 text-white tex-sm'>

                    <div>
                        <h3 className='text-xl font-medium mb-4'>Our Products</h3>
                        <ul className='flex flex-col gap-3 text-sm'>
                            <li>Crypto Arbitrage</li>
                            <li>Exchanges</li>
                            <li>Defi Wallet</li>
                            <li>Converter</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mb-4'>Pages</h3>
                        <ul className='flex flex-col gap-3 text-sm'>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Careers</li>
                            <li>Taken Safe</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-medium mb-4'>Contact</h3>
                        <ul className='flex flex-col gap-3 text-sm'>
                            <li className='flex items-center gap-1'>
                                <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4775 13.7475C16.4775 14.0175 16.4175 14.295 16.29 14.565C16.1625 14.835 15.9975 15.09 15.78 15.33C15.4125 15.735 15.0075 16.0275 14.55 16.215C14.1 16.4025 13.6125 16.5 13.0875 16.5C12.3225 16.5 11.505 16.32 10.6425 15.9525C9.78 15.585 8.9175 15.09 8.0625 14.4675C7.2 13.8375 6.3825 13.14 5.6025 12.3675C4.83 11.5875 4.1325 10.77 3.51 9.915C2.895 9.06 2.4 8.205 2.04 7.3575C1.68 6.5025 1.5 5.685 1.5 4.905C1.5 4.395 1.59 3.9075 1.77 3.4575C1.95 3 2.235 2.58 2.6325 2.205C3.1125 1.7325 3.6375 1.5 4.1925 1.5C4.4025 1.5 4.6125 1.545 4.8 1.635C4.995 1.725 5.1675 1.86 5.3025 2.055L7.0425 4.5075C7.1775 4.695 7.275 4.8675 7.3425 5.0325C7.41 5.19 7.4475 5.3475 7.4475 5.49C7.4475 5.67 7.395 5.85 7.29 6.0225C7.1925 6.195 7.05 6.375 6.87 6.555L6.3 7.1475C6.2175 7.23 6.18 7.3275 6.18 7.4475C6.18 7.5075 6.1875 7.56 6.2025 7.62C6.225 7.68 6.2475 7.725 6.2625 7.77C6.3975 8.0175 6.63 8.34 6.96 8.73C7.2975 9.12 7.6575 9.5175 8.0475 9.915C8.4525 10.3125 8.8425 10.68 9.24 11.0175C9.63 11.3475 9.9525 11.5725 10.2075 11.7075C10.245 11.7225 10.29 11.745 10.3425 11.7675C10.4025 11.79 10.4625 11.7975 10.53 11.7975C10.6575 11.7975 10.755 11.7525 10.8375 11.67L11.4075 11.1075C11.595 10.92 11.775 10.7775 11.9475 10.6875C12.12 10.5825 12.2925 10.53 12.48 10.53C12.6225 10.53 12.7725 10.56 12.9375 10.6275C13.1025 10.695 13.275 10.7925 13.4625 10.92L15.945 12.6825C16.14 12.8175 16.275 12.975 16.3575 13.1625C16.4325 13.35 16.4775 13.5375 16.4775 13.7475Z" stroke="#00C4F4" strokeWidth="1.125" strokeMiterlimit="10" />
                                </svg>
                                </span>
                                (235) 801-333-3333
                            </li>
                            <li className='flex items-center gap-1'>
                                <span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9Z" stroke="#00C4F4" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.7831 11.3848L9.45814 9.99732C9.05314 9.75732 8.72314 9.17982 8.72314 8.70732V5.63232" stroke="#00C4F4" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </span>
                                Mon - Fri : 9 am- 11 pm
                            </li>

                            <li className='flex items-center gap-1'>
                                <span>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.25 15.625H5.75C3.5 15.625 2 14.5 2 11.875V6.625C2 4 3.5 2.875 5.75 2.875H13.25C15.5 2.875 17 4 17 6.625V11.875C17 14.5 15.5 15.625 13.25 15.625Z" stroke="#00C4F4" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.25 7L10.9025 8.875C10.13 9.49 8.8625 9.49 8.09 8.875L5.75 7" stroke="#00C4F4" strokeWidth="1.125" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>


                                </span>
                                flipr@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Footer