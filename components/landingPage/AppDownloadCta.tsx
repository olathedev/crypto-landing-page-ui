import Image from 'next/image'
import React from 'react'

type Props = {}

const AppDownloadCta = (props: Props) => {
    return (
        <div className="w-full bg-[#505050] h-[200px] md:h-[491px] ">
            <div className="w-full h-full flex flex-col gap-8 items-center justify-center bg-[#160E33] bg-opacity-35">
                <h2 className="text-2xl md:text-6xl md:w-2/3 text-center font-bold text-white">Most advanced crypto trading platfrom ever!</h2>
                <div className="flex gap-4">
                    <Image src='/playstore.png' alt="" width={150} height={49.94} />
                    <Image src='/applestore.png' alt="" width={150} height={49.94} />
                </div>
            </div>
        </div>
    )
}

export default AppDownloadCta