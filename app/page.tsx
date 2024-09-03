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
