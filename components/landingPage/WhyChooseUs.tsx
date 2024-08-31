import React from 'react'
import SecureLock from '../common/icons/SecureLock'
import InvestmentIcon from '../common/icons/InvestmentIcon'
import Boostrapicon from '../common/icons/Boostrapicon'
import MulticurrencyIcon from '../common/icons/MulticurrencyIcon'

type Props = {}

const WhyChooseUs = (props: Props) => {
    const cardData = [
        { title: "Safe and secure", icon: <SecureLock />, body: "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris." },
        { title: "Good invesment", icon: <InvestmentIcon />, body: "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris." },
        { title: "Integrated app", icon: <Boostrapicon />, body: "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris." },
        { title: "Multi Curency Support", icon: <MulticurrencyIcon />, body: "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris." }
    ]
    return (
        <div className="my-20 flex flex-col gap-10">
            <header className="text-center flex flex-col items-center gap-2">
                <p className="text-primary-100 text-lg ">Why Choose Us</p>
                <h2 className="text-[36px] text-white ">Safe, guaranteed, and easy to use</h2>
                <p className="text-[#CFCFCF] w-[826.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
                </p>

            </header>

            <div className="grid grid-cols-4 gap-6 mt-5 text-white">
                {cardData.map((card, index) => (
                    <div className="w-full border rounded-[7.6px] border-[#353535] flex flex-col gap-4 justify-center p-6" key={index}>

                        <div className="h-[75px] w-[75px] flex items-center justify-center bg-[#353535] rounded-full border-[#353535]">
                            {card.icon}
                        </div>
                        <h1 className="text-xl font-medium">{card.title}</h1>
                        <p className="text-[#7D7D7D] text-lg">
                            {card.body}

                        </p>
                    </div>
                ))}



            </div>
        </div>
    )
}

export default WhyChooseUs