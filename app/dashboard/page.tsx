'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {

    const storedUser = localStorage.getItem('user');

    if (!storedUser) {

      // router.push('/auth/login');
    } else {

      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  // if (!user) {

  //   return <div>Loading...</div>;
  // }

  return (
    <div className="w-full flex flex-col gap-8 text-[#1E1E1E]">
      <header className='w-full flex gap-4 items-center'>
        <div className=''>
          <div className="h-[44px] w-[44px] bg-primary-100 shadow-sm rounded-full">

          </div>
        </div>

        <div className='grow h-[40px] bg-white rounded-[20px]'>

        </div>

        <div className='h-[44px] w-[44px] bg-[#1E1E1E] rounded-md flex items-center justify-center'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0199 20.5299C9.68987 20.5299 7.35987 20.1599 5.14987 19.4199C4.30987 19.1299 3.66987 18.5399 3.38987 17.7699C3.09987 16.9999 3.19987 16.1499 3.65987 15.3899L4.80987 13.4799C5.04987 13.0799 5.26987 12.2799 5.26987 11.8099V8.91992C5.26987 5.19992 8.29987 2.16992 12.0199 2.16992C15.7399 2.16992 18.7699 5.19992 18.7699 8.91992V11.8099C18.7699 12.2699 18.9899 13.0799 19.2299 13.4899L20.3699 15.3899C20.7999 16.1099 20.8799 16.9799 20.5899 17.7699C20.2999 18.5599 19.6699 19.1599 18.8799 19.4199C16.6799 20.1599 14.3499 20.5299 12.0199 20.5299ZM12.0199 3.66992C9.12987 3.66992 6.76987 6.01992 6.76987 8.91992V11.8099C6.76987 12.5399 6.46987 13.6199 6.09987 14.2499L4.94987 16.1599C4.72987 16.5299 4.66987 16.9199 4.79987 17.2499C4.91987 17.5899 5.21987 17.8499 5.62987 17.9899C9.80987 19.3899 14.2399 19.3899 18.4199 17.9899C18.7799 17.8699 19.0599 17.5999 19.1899 17.2399C19.3199 16.8799 19.2899 16.4899 19.0899 16.1599L17.9399 14.2499C17.5599 13.5999 17.2699 12.5299 17.2699 11.7999V8.91992C17.2699 6.01992 14.9199 3.66992 12.0199 3.66992Z" fill="#F7F7F7" />
            <path d="M13.8796 3.93993C13.8096 3.93993 13.7396 3.92993 13.6696 3.90993C13.3796 3.82993 13.0996 3.76993 12.8296 3.72993C11.9796 3.61993 11.1596 3.67993 10.3896 3.90993C10.1096 3.99993 9.80963 3.90993 9.61963 3.69993C9.42963 3.48993 9.36963 3.18993 9.47963 2.91993C9.88963 1.86993 10.8896 1.17993 12.0296 1.17993C13.1696 1.17993 14.1696 1.85993 14.5796 2.91993C14.6796 3.18993 14.6296 3.48993 14.4396 3.69993C14.2896 3.85993 14.0796 3.93993 13.8796 3.93993Z" fill="#F7F7F7" />
            <path d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z" fill="#F7F7F7" />
            <circle cx="17" cy="5" r="2.5" fill="#F46D22" stroke="white" />
          </svg>

        </div>
      </header>

      <div className='bg-white h-full w-full rounded-xl p-6 flex flex-col gap-8'>
        {/* balance */}
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-2xl'>Balance</h3>
            <p className='text-3xl font-semibold'>$52,291</p>
          </div>

          <div className="flex gap-4">
            <button className='py-2 w-[140px] bg-[#1E1E1E] text-white rounded-[8px] text-sm font-[500]'>Deposit</button>
            <button className='py-2 w-[140px] border border-[#1E1E1E] text-[#1E1E1E] rounded-[8px] text-sm font-[500]'>Withdraw</button>

          </div>
        </div>

        {/* Transaction History */}

        <div className="w-full">
          <header className='w-full flex justify-between items-center'>
            <p className='font-semibold text-[#9E9E9E]'>Transactions</p>
            <span>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_226_1142)">
                  <rect y="10" width="4" height="4" rx="2" transform="rotate(-90 0 10)" fill="#9E9E9E" />
                  <rect x="6" y="10" width="4" height="4" rx="2" transform="rotate(-90 6 10)" fill="#9E9E9E" />
                  <rect x="12" y="10" width="4" height="4" rx="2" transform="rotate(-90 12 10)" fill="#9E9E9E" />
                </g>
                <defs>
                  <clipPath id="clip0_226_1142">
                    <rect width="16" height="16.64" fill="white" transform="matrix(0 -1 1 0 0 16)" />
                  </clipPath>
                </defs>
              </svg>

            </span>
          </header>

          <div className="mt-5 flex flex-col">
            <div className='flex justify-between'>
              <div className='flex flex-col gap-4'>
                  <h2 className="text-xl">Sell</h2>

                  <div className="flex flex-col text-sm font-extralight text-[#121212]">
                    <p>26/08/2024 - 20:49</p>
                    <p>You receive</p>
                    <p>Reference number</p>
                  </div>
              </div>
              <div className='flex flex-col gap-4 items-end justify-start'>
              <h2 className="text-xl">15.000000 XRP</h2>

              <div className="flex flex-col text-sm text-[#121212]">
                    <p className='text-[#1ECB4F] inline-flex justify-end'>Completed</p>
                    <p className=' inline-flex justify-end'>20,000 NGN</p>
                    <p>3005322T60148765</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
