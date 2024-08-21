import Link from 'next/link'
import React from 'react'

type Props = {}

const Signup = (props: Props) => {
    return (
        <div>
            <div>
                <div className='mb-8'>
                    <h2 className='text-2xl font-semibold '>Create a new account</h2>
                    <p className='text-gray-500'>It's not difficult, you just need to enter a few pieces of data and you're good to go!</p>
                </div>

                <form action="" className='flex flex-col gap-4'>
                    <div className="">
                        <label className='font-semibold'>FullName</label>
                        <div className="w-full flex gap-2">
                            <div className='w-1/2 flex flex-col'>
                                <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' />
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold'>Email</label>
                        <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' />
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-semibold w-full flex justify-between'><span>Password</span>

                        </label>
                        <input type="password" className='py-4 px-3 rounded bg-[#F3F4F6]' />
                    </div>

                    <div className='flex gap-4'>
                        {/* <input type="checkbox" name="" className='p-2' id="" /> */}
                        <span className='text-sm text-gray-500'>By signing up, you agree to the Terms of Service and Privacy Policy of flipr.io</span>
                    </div>
                    <button className='py-4 w-full rounded-md bg-primary-200 text-white'>Log In</button>
                    <div className="text-center">Already have an account? <Link href='/login' className='text-primary-200 font-semibold cursor-pointer'>Log in!</Link> </div>
                </form>
            </div>
        </div>
    )
}

export default Signup