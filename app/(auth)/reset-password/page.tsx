import Link from 'next/link'
import React from 'react'

type Props = {}

const ResetPassword = (props: Props) => {
    return (
        <div>
            <div className='mb-8'>
                <h2 className='text-2xl font-semibold '>Reset Password</h2>
                <p className='text-gray-600'>Don't use a difficult password, it just makes life difficult for everyone.</p>
            </div>
            <form action="" className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label className='font-semibold'>New Password</label>
                    <input type="password" className='py-4 px-3 rounded bg-[#F3F4F6]' />
                </div>

                <div className='flex flex-col'>
                    <label className='font-semibold w-full flex justify-between'><span>Confirm Password</span> </label>
                    <input type="password" className='py-4 px-3 rounded bg-[#F3F4F6]' />
                </div>
                <button className='py-4 w-full rounded-md bg-primary-200 text-white'>Log In</button>
               
            </form>
        </div>
    )
}

export default ResetPassword