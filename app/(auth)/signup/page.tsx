'use client'
import { signUpSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {}
type signupFormData = z.infer<typeof signUpSchema>
const Signup = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<signupFormData>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = (data: signupFormData) => {
        console.log(data)
    }
    return (
        <div>
            <div>
                <div className='mb-8'>
                    <h2 className='text-2xl font-semibold '>Create a new account</h2>
                    <p className='text-gray-500'>It's not difficult, you just need to enter a few pieces of data and you're good to go!</p>
                </div>

                <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label className='font-[500] text-sm'>FullName</label>
                        <div className="w-full flex gap-2">
                            <div className='w-1/2 flex flex-col'>
                                <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' {...register('firstname')} />
                                {errors.firstname && <p className="text-xs px-1 text-red-500">{errors.firstname.message}</p>}

                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' {...register('lastname')} />
                                {errors.lastname && <p className="text-xs px-1 text-red-500">{errors.lastname.message}</p>}
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col'>
                        <label className='font-[500] text-sm'>Email</label>
                        <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' {...register('email')} />
                        {errors.email && <p className="text-xs px-1 text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-[500] text-sm w-full flex justify-between'><span>Password</span>

                        </label>
                        <input type="password" className='py-4 px-3 rounded bg-[#F3F4F6]' {...register('password')} />
                        {errors.password && <p className="text-xs px-1 text-red-500">{errors.password.message}</p>}
                    </div>

                    <div className='flex gap-4'>
                        {/* <input type="checkbox" name="" className='p-2' id="" /> */}
                        <span className='text-sm text-gray-500'>By signing up, you agree to the Terms of Service and Privacy Policy of flipr.io</span>
                    </div>
                    <button className='py-4 w-full rounded-md bg-primary-200 text-white'>Log In</button>
                    <div className="text-center">Already have an account? <Link href='/login' className='text-primary-200 font-semibold cursor-pointer'>Sign up!</Link> </div>
                </form>
            </div>
        </div>
    )
}

export default Signup