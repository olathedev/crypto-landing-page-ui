import Link from 'next/link'
import React from 'react'

type Props = {}

const ForgotPassword = (props: Props) => {
    return (
        <div>
            <div>
                <div className='mb-8'>
                    <h2 className='text-2xl font-semibold '>Forgot Password</h2>
                    <p className='text-gray-500'>Enter the email you previously registered, you will receive an email later.</p>
                </div>

                <form action="" className='flex flex-col gap-4'>

                    <div className='flex flex-col'>
                        <label className='font-semibold'>Email</label>
                        <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' />
                    </div>



                    <button className='py-4 w-full rounded-md bg-primary-200 text-white'>proceed</button>
                    <div className="text-center">Oh, remember the password now? <Link href='/login' className='text-primary-200 font-semibold cursor-pointer'>Login!</Link></div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword