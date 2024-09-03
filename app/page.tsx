import Hero from "@/components/landingPage/Hero";
import NavBar from "@/components/common/NavBar";
import Image from "next/image";
import { Montserrat, Rubik } from "next/font/google";
import AboutUs from "@/components/landingPage/AboutUs";
import WhyChooseUs from "@/components/landingPage/WhyChooseUs";
import Footer from "@/components/common/Footer";
import WalletIcon from "@/components/common/icons/WalletIcon";
import CartIcon from "@/components/common/icons/CartIcon";
import Features from "@/components/landingPage/Features";
import Testimonial from "@/components/landingPage/Testimonial";
import HowToTrade from "@/components/landingPage/HowToTrade";
import AppDownloadCta from "@/components/landingPage/AppDownloadCta";


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
        <Features />
        <Testimonial />
        <HowToTrade />
      </div>

      <AppDownloadCta />
      <div className="container mx-auto px-6 md:px-20 my-6 md:my-14">
        <div className="w-full md:h-[320px] bg-[#00C4F4] bg-opacity-30 rounded-2xl flex justify-between items-center text-white md:px-24 p-4">
          <div className="md:w-[60%] w-full flex flex-col gap-1">
            <p className="text-sm md:text-lg font-medium">Crypto Arbitrage</p>
            <h2 className="text-base md:text-3xl font-medium">Low fees and deep liquidity</h2>
            <p className="text-[#F7F7F7] text-[10px] md:text-base my-2 md:my-4">Crypto arbitrage is a trading strategy that involves buying cryptocurrencies on one exchange where prices are lower and then quickly selling them on another exchange where prices are higher, to capitalize on price discrepancies.</p>
            <div>
              <button className='bg-primary-200 text-white py-2.5 md:py-4 px-5 md:px-8 rounded-lg text-[10px] md:text-base'>Go To Exchanges</button>
            </div>
          </div>


          <div className="hidden md:w-[40%] md:flex justify-end">
            <Image src='/arb.png' alt="" width={251.12} height={251} />

          </div>
        </div>

        <div className="md:py-16 py-10">
          <div className="w-full md:px-20 flex items-center gap-2 md:gap-20">
            <div className="w-[40%]">
              <Image src='/bitcoin.png' alt="" width={399} height={316} className="h-full w-full" />

            </div>
            <div className="w-[60%]">
              <div className="flex flex-col text-white">
                <p className="text-[12px] md:text-lg font-medium">Start Now</p>
                <h2 className="text-xl md:text-3xl font-medium">Sign up to learn more</h2>
                <p className="text-[12px] md:text-base text-[#F7F7F7] my-1 md:my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat.</p>
                <div className="h-[53px] w-full bg-white rounded-lg hidden md:flex">
                  <input type="text" className=" h-full text-black  rounded-l-lg w-2/3 border-none px-4 text-blck" placeholder="Enter Your Email" />
                  <button className='w-1/3 h-full bg-primary-200 text-white px-2 rounded-r-lg'>Suscribe</button>
                </div>

              </div>

            </div>
          </div>

          <div className="h-[43px] w-full bg-white rounded-lg md:hidden flex mt-4">
            <input type="text" className=" h-full text-black  rounded-l-lg w-2/3 border-none px-4" placeholder="Enter Your Email" />
            <button className='w-1/3 h-full bg-primary-200 text-white px-2 rounded-r-lg'>Suscribe</button>
          </div>
        </div>
      </div>


      <Footer />
    </main>
  );
}
