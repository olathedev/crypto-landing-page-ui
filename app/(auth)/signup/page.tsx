'use client'
import { apiService } from '@/services'
import { signUpSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { useRouter } from 'next/navigation' 

type Props = {}
type signupFormData = z.infer<typeof signUpSchema>
const Signup = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<signupFormData>({
        resolver: zodResolver(signUpSchema),
    });

    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const onSubmit = async (data: signupFormData) => {
        console.log(data)
        setLoading(true)
        const { data: response, error } = await apiService('/auth/register', 'POST', data)
        setLoading(false)
        if (error) {
            toast.error('Request failed', {
                description: error?.message || 'Something went wrong on our end, please try again'
            })
            return
        }
        console.log(response)
        toast.success('Success', {
            description: response?.data?.message
        })
        router.push('/login')
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
                                <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' {...register('firstName')} />
                                {errors.firstName && <p className="text-xs px-1 text-red-500">{errors.firstName.message}</p>}

                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' {...register('lastName')} />
                                {errors.lastName && <p className="text-xs px-1 text-red-500">{errors.lastName.message}</p>}
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
                    <div className='flex flex-col'>
                        <label className='font-[500] text-sm w-full flex justify-between'><span>Confirm Password</span>

                        </label>
                        <input type="password" className='py-4 px-3 rounded bg-[#F3F4F6]' {...register('confirmPassword')} />
                        {errors.confirmPassword && <p className="text-xs px-1 text-red-500">{errors.confirmPassword.message}</p>}
                    </div>

                    <div className='flex gap-4'>
                        {/* <input type="checkbox" name="" className='p-2' id="" /> */}
                        <span className='text-sm text-gray-500'>By signing up, you agree to the Terms of Service and Privacy Policy of flipr.io</span>
                    </div>
                    <button className='py-4 w-full rounded-md bg-primary-200 text-white'>{!loading ? 'Sign Up' : 'Processing...'}</button>
                    <div className="text-center">Already have an account? <Link href='/login' className='text-primary-200 font-semibold cursor-pointer'>log in!</Link> </div>
                </form>
            </div>
        </div>
    )
}

export default Signup