import Link from 'next/link'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
        <h2 className='text-2xl font-semibold mb-6'>Log in to your account</h2>
        <form action="" className='flex flex-col gap-[30px]'>
            <div className='flex flex-col'>
                <label className='font-semibold'>Email</label>
                <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' />
            </div>

            <div className='flex flex-col'>
                <label className='font-semibold w-full flex justify-between'><span>Password</span> 
                <Link href='/forgot-password' className='text-primary-200 font-normal cursor-pointer'>Forgot Password?</Link>
                </label>
                <input type="password" className='py-4 px-3 rounded bg-[#F3F4F6]' />
            </div>

            <div className='flex gap-2'>
                <input type="checkbox" name="" className='p-2' id="" />
                <span>Remember Me</span>
            </div>

            <button className='py-4 w-full rounded-md bg-primary-200 text-white'>Log In</button>
            <div className="text-center">Don't have an account? <Link href='/signup' className='text-primary-200 font-semibold cursor-pointer'>Sign up!</Link> now, it's free!</div>
        </form>
    </div>
  )
}

export default Login