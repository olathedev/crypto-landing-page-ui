import DashboardFooter from '@/components/common/DashboardFooter'
import AppModal from '@/components/ui/AppModal'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <main className='relative maxW-screen-md h-screen max-h-screen p-4 md:p-6 bg-[#030B15]'>
            {children}

            <DashboardFooter  />

               
        </main>
    )
}

export default layout