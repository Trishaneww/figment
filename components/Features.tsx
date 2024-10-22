import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import feature1 from '../public/assets/images/hero6.png'
import feature2 from '../public/assets/images/hero7.png'

const Features = () => {
  return (
    <div className="flex flex-col items-center">
         <section className="flex flex-col gap-6 items-center mb-10 text-center p-2 lg:w-[65%]">
            <h1 className="text-slate-800  text-4xl md:text-5xl font-semibold">Unlock the Full Potential of Your Business with Our Cutting-Edge Website Solutions</h1>
        </section>

        <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col-reverse md:flex-row-reverse w-[90%] xl:w-[67%] xl:min-w-[1200px] bg-white border-[1px] border-gray-200 rounded-xl p-2 px-6 xl:h-[420px] gap-6 xl:gap-16">
                <section className="flex flex-col md:w-3/4 lg:w-1/2 items-start gap-2 justify-center mt-6 lg:mt-0 mb-2 lg:mb-0">
                    <p className="text-base">SALE CONVERTING LANDING PAGES</p>
                    <p className="font-semibold text-xl lg:text-3xl">Conversion-Focused Landing Pages to Maximize Lead Generation</p>
                    <p>We design landing pages with clear messaging, minimal distractions, and persuasive content to guide visitors smoothly into becoming leads, boosting conversion rates without extra marketing.</p>
                    <Link href="/#benefits">
                        <Button className="rounded-full border-2 border-black h-[50px] w-full lg:w-[200px] bg-transparent text-black mt-6 lg:mt-12 text-base lg:text-lg">View more details</Button>
                    </Link>
                </section>

                <div className="flex justify-end items-center md:w-1/2">
                    <Image
                        src={feature1}
                        alt="image of our mock designs"
                        className="rounded-md"
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row w-[90%] xl:w-[67%] xl:min-w-[1200px] bg-white border-[1px] border-gray-200 rounded-xl p-2 px-6 xl:h-[420px] gap-6 xl:gap-16">
                <section className="flex flex-col md:w-3/4 lg:w-1/2 items-start gap-2 justify-center mt-6 lg:mt-0 mb-2 lg:mb-0">
                <p className="text-base">ECOMMERCE INTEGRATION</p>
                <p className="font-semibold text-xl lg:text-3xl">Real-Time Sales Tracking to Monitor Your Business Performance</p>
                <p>We integrate powerful tools that allow you to track sales in real time, giving you immediate insights into product performance and revenue.</p>
                <Link href="/contact">
                    <Button className="rounded-full border-2 border-black h-[50px] w-full lg:w-[200px] bg-transparent text-black mt-6 lg:mt-12 lg:text-lg">Get a free quote</Button>
                </Link>

                </section>

                <div className="flex justify-end items-center md:w-1/2">
                <Image
                    src={feature2}
                    alt="image of admin sales dashboard"
                    className="rounded-md"
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features