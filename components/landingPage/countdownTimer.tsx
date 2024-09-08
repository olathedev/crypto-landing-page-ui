import React, { useState, useEffect } from 'react';

type CountdownTimerProps = {
    targetDate: Date;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });


    const updateCountdown = () => {
        const now = new Date();
        const distance = targetDate.getTime() - now.getTime();

        if (distance <= 0) {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
    };

    useEffect(() => {
        const intervalId = setInterval(updateCountdown, 1000);
        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div className='h-[60px] w-full bg-[#111E32] rounded-2xl text-center text-white flex items-center justify-center'>
            <div className="flex space-x-2">
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">{timeLeft.days}</span>
                    <span>Days</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">{timeLeft.hours}</span>
                    <span>Hours</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">{timeLeft.minutes}</span>
                    <span>Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">{timeLeft.seconds}</span>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
