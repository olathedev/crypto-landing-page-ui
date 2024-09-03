import Hero from "@/components/landingPage/Hero";
import NavBar from "@/components/common/NavBar";
import Image from "next/image";
import { Montserrat, Rubik } from "next/font/google";
import AboutUs from "@/components/landingPage/AboutUs";
import WhyChooseUs from "@/components/landingPage/WhyChooseUs";
import Footer from "@/components/common/Footer";
import WalletIcon from "@/components/common/icons/WalletIcon";
import CartIcon from "@/components/common/icons/CartIcon";


const montserat = Montserrat({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen min-w-full w-full bg-appBackground ">
      <NavBar />
      <Hero />
      <div className="w-full container mx-auto pt-10 md:pt-40">
        <AboutUs />
        <WhyChooseUs />
        <div className="w-full">
          <header className="text-center flex flex-col items-center gap-1 ">
            <p className="text-primary-100 text-lg ">Our Features</p>
            <h2 className="text-[36px] text-white ">Attractive Features</h2>
            <p className="text-[#CFCFCF] w-[826.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
              .
            </p>

          </header>

          <div className="w-full flex items-center justify-center my-10 ">

            <div className="w-[80%] grid grid-cols-3 gap-10">

              <div className="h-[371px] w-full border border-primary-100 rounded-lg p-6 flex flex-col gap-6 items-center justify-center text-white text-center">
                <div className="h-[75px] w-[75px] flex items-center justify-center bg-[#353535] rounded-full border-[#353535]">
                  <WalletIcon />
                </div>

                <h3 className="text-2xl">Flexible Investment</h3>
                <p className="text-gray-400 text-sm">Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris.
                </p>
              </div>

              <div className="h-[371px] w-full border border-primary-100 p-6 rounded-lg flex flex-col gap-6 items-center justify-center text-white text-center">
                <div className="h-[75px] w-[75px] flex items-center justify-center bg-[#353535] rounded-full border-[#353535]">
                  <WalletIcon />
                </div>

                <h3 className="text-2xl">Weekly Profits</h3>
                <p className="text-gray-400 text-sm">Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris.
                </p>
              </div>

              <div className="h-[371px] w-full rounded-xl p-6 flex flex-col gap-6 items-center justify-center text-white text-center border border-primary-100">
                <div className="h-[75px] w-[75px] flex items-center justify-center bg-[#353535] rounded-full border-[#353535]">
                  <CartIcon />
                </div>

                <h3 className="text-2xl">Buy and or sell</h3>
                <p className="text-gray-400 text-sm">Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center px-20 mt-16">
          <div className="w-1/2">
            <p className="text-primary-100 text-lg ">Testimonials</p>
            <h2 className="text-[36px] text-white ">Users from all over the world</h2>
            <p className="text-[#F7F7F7]">Flipr has been trusted by more than 10,000 clients.
            </p>

            <div className="flex gap-10 mt-10 text-white">
              <div>
                <p className="text-[45px] text-white font-medium">32K+</p>
                <p className="text-center text-[#CFCFCF] -mt-2">People Joined</p>
              </div>
              <div>
                <p className="text-[45px] text-white font-medium">250+</p>
                <p className="text-center text-[#CFCFCF] -mt-2">Active traders</p>
              </div>

              <div>
                <p className="text-[45px] text-white font-medium">87+</p>
                <p className="text-center text-[#CFCFCF] -mt-2">Countries</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image src='/world.png' alt="" width={560} height={283} />
          </div>

        </div>

        <div className="my-28 flex flex-col gap-10">
          <header className="flex flex-col  items-center text-center gap-1">
            <p className="text-primary-100 text-lg ">Trade</p>
            <h2 className="text-[36px] text-white ">How to Trade with Flipr</h2>
            <p className="text-[#F7F7F7] w-[830px]">Trading with Flipr is designed to be as seamless and intuitive as possible. Follow these straightforward steps to start maximizing your crypto returns through our automated arbitrage platform
            </p>
          </header>

          <div className="flex gap-16 px-20 mt-10">
            <div className="w-1/2">
              <Image src='/trading.png' alt="" width={500} height={500} />

            </div>

            <div className="w-1/2 text-white  flex flex-col gap-4 py-10">
              <h2 className={`text-[50px] font-bold`}>Steps to trade</h2>
              <ol className="flex flex-col gap-5 list-inside list-disc text-[20px]">
                <li>Sign Up fo r Your Flipr Account</li>
                <li>Deposit Your Funds</li>
                <li>Activate Automated Trading</li>
                <li>Monitor Your Earnings</li>
                <li>Withdraw Your Profits</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#505050] h-[491px] ">
        <div className="w-full h-full flex flex-col gap-8 items-center justify-center bg-[#160E33] bg-opacity-35">
          <h2 className="text-6xl w-2/3 text-center font-bold text-white">Most advanced crypto trading platfrom ever!</h2>
          <div className="flex gap-4">
            <Image src='/playstore.png' alt="" width={180} height={49.94} />
            <Image src='/applestore.png' alt="" width={180} height={49.94} />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-20 my-14">
        <div className="w-full h-[320px] bg-[#00C4F4] bg-opacity-30 rounded-2xl flex justify-between items-center text-white px-24 ">
          <div className="w-[60%] flex flex-col gap-1">
            <p className="text-lg font-medium">Crypto Arbitrage</p>
            <h2 className="text-3xl font-medium">Low fees and deep liquidity</h2>
            <p className="text-[#F7F7F7] my-4">Crypto arbitrage is a trading strategy that involves buying cryptocurrencies on one exchange where prices are lower and then quickly selling them on another exchange where prices are higher, to capitalize on price discrepancies.</p>
            <div>
              <button className='bg-primary-200 text-white py-4 px-8 rounded-lg'>Go To Exchanges</button>
            </div>
          </div>


          <div className="w-[40%] flex justify-end">
            <Image src='/arb.png' alt="" width={251.12} height={251} />

          </div>
        </div>


        <div className="w-full py-16 px-20 flex items-center gap-20">
          <div className="w-[40%]">
            <Image src='/bitcoin.png' alt="" width={399} height={316} />

          </div>
          <div className="w-[60%]">
            <div className="flex flex-col gap-2 text-white">
              <p className="text-lg font-medium">Start Now</p>
              <h2 className="text-3xl font-medium">Sign up to learn more</h2>
              <p className="text-[#F7F7F7] my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.</p>

              <div className="h-[53px] w-full bg-white rounded-lg flex">
                <input type="text" className=" h-full text-black  rounded-l-lg w-2/3 border-none px-4 text-blck" placeholder="Enter Your Email" />
                <button className='w-1/3 h-full bg-primary-200 text-white px-2 rounded-r-lg'>Suscribe</button>

              </div>

            </div>
          </div>
        </div>
      </div>


      <Footer />
    </main>
  );
}
