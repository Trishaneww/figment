
import Navbar from '@/components/Navbar'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import Image from 'next/image'
import React from 'react'
import dg1 from '../../public/assets/images/gallery5.png'
import dg2 from '../../public/assets/images/dg2.png'
import dg3 from '../../public/assets/images/dg3.png'
import dg4 from '../../public/assets/images/dg4.png'
import dg5 from '../../public/assets/images/dg5.png'
import dg6 from '../../public/assets/images/dg6.png'

const DigitalWealth = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50">
        <Navbar />

        <section className="w-full flex flex-col justify-center items-center mt-56">
            <div className="flex flex-col gap-4 w-full md:w-4/6 p-2">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-white bg-slate-900">Market Tracker</p>
                <TextGenerateEffect words="Digital Wealth"/>
                {/* <p>Whatever your unique idea or needs, weve got the tools and know how to build your custom solution from discovery to deployment.</p> */}
            </div>
            <div className="w-[92%] md:w-[70%] mt-6 md:mt-20">
                <Image
                    src={dg1}
                    alt="Yasolutions logo banner"
                    className="w-full"
                />
            </div>

            <div className="w-full px-6 md:px-2 p-2 md:w-4/6 flex flex-col gap-4 mt-20">
                <p className="text-2xl md:text-5xl font-bold">Overview</p>
                <p>
                Digital Wealth is a comprehensive software application that provides real-time cryptocurrency market prices, allows users to search for specific cryptocurrencies, and keeps them informed with the latest news reports within the market and industry. The application features a live dashboard displaying up-to-date prices of various cryptocurrencies, utilizing the Coinranking API to ensure accurate and current market information. Users can easily search for their desired cryptocurrency through a robust search function, providing detailed information about each one. Additionally, the application integrates the Bing News Search API to fetch the most recent news reports, delivering relevant and timely updates directly within the application.
               </p>
            </div>

                <div className="grid md:grid-cols-2 gap-4 mt-36 w-[92%] md:w-[70%]">
                    <Image
                        src={dg2}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <div className="bg-black flex justify-center items-center overflow-hidden rounded-lg">
                        <video  autoPlay loop muted className="border-[1px] border-slate-900 rounded-lg w-full">
                            <source src="/assets/videos/video4.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <Image
                        src={dg3}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={dg4}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                </div>

                <div className="bg-slate-900 w-full flex justify-center items-center mt-24 p-12">
                    <Image
                        src={dg5}
                        alt="Yasolutions logo banner"
                        className="w-[94%] md:w-[88%]"
                    />
                </div>
        </section>

        <div className="flex justify-center w-full">
        <footer className="flex justify-between items-center w-full lg:w-4/5 px-2 mt-16 mb-16">
            <p className="mt-8 lg:text-2xl font-semibold">Next Case Study</p>
            <a href="/studyhive" className="mt-8 lg:text-2xl font-semibold">Study Hive</a>
        </footer>
        </div>

    </div>
  )
}

export default DigitalWealth