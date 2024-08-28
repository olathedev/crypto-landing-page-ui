'use client'
import { apiService } from '@/services'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

type Props = {}

const Login = (props: Props) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if(!email || !password) {
            toast.error('provide valid credentials')
            return
        }

        setLoading(true)
        const payload = { email, password }
        const { data, error } = await apiService('/auth/login', 'POST', payload)
        setLoading(false)
        if (error) {
            toast.error('Request failed', {
                description: error?.message || 'Something went wrong on our end, please try again'
            })
        return
        }
        // temporary implementation just for test purposes
        const userData = data?.data?.user
        localStorage.setItem('user', JSON.stringify(userData))
        console.log(data)
        toast.success('Success', {
            description: data?.message
        })
        router.push('/dashboard')

    }

    return (
        <div>
            <h2 className='text-2xl font-semibold mb-6'>Log in to your account</h2>
            <form action="" className='flex flex-col gap-4'  onSubmit={onSubmit}>
                <div className='flex flex-col'>
                    <label className='font-[500]'>Email</label>
                    <input type="text" className='py-4 px-3 rounded bg-[#F3F4F6]' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='flex flex-col'>
                    <label className='font-[500] w-full flex justify-between'><span>Password</span>
                        <Link href='/forgot-password' className='text-primary-200 font-normal cursor-pointer text-sm'>Forgot Password?</Link>
                    </label>
                    <input type="password" className='py-4 px-3 rounded bg-[#F3F4F6]' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='flex gap-2'>
                    <input type="checkbox" name="" className='p-2' id="" />
                    <span>Remember Me</span>
                </div>

                <button className='py-4 w-full rounded-md bg-primary-200 text-white'>{!loading ? 'Log In' : 'Processing'}</button>
                <div className="text-center">Don't have an account? <Link href='/signup' className='text-primary-200 font-semibold cursor-pointer'>Sign up!</Link> now, it's free!</div>
            </form>
        </div>
    )
}

export default Login