"use client"
import { GiCheckMark } from 'react-icons/gi'
import React from 'react'


const Information = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center xl:gap-24 p-4 mt-8 w-full mb-40">
        <section className="flex flex-col items-start w-[95%]">
            <h1 className="text-slate-800  text-4xl md:text-5xl font-semibold">What You&apos;ll Get</h1>

            <ul className='flex gap-4 items-start justify-start mt-8 flex-wrap'>
                <li className="flex flex-col items-start text-lg lg:text-xl w-full lg:w-[32%] xl:h-[150px] p-2 rounded-lg">        
                        <div className="flex justify-start gap-2">
                            <div className="w-[26px] h-[26px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                                <GiCheckMark size={16}/>
                            </div>
                            <p className="font-bold ">Custom, High-Performing Websites</p>
                        </div>
                        <p className="text-gray-700 ml-[2.15rem]">We create tailored websites that are visually stunning and built to drive traffic, engagement, and conversions.</p>
                </li>

                <li className="flex flex-col items-start text-lg lg:text-xl w-full lg:w-[32%] xl:h-[150px] p-2 rounded-lg">        
                        <div className="flex justify-start gap-2">
                            <div className="w-[26px] h-[26px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                                <GiCheckMark size={16}/>
                            </div>
                            <p className="font-bold ">Flawless Mobile and Tablet Experience</p>
                        </div>
                        <p className="text-gray-700 ml-[2.15rem]"> Our websites are fully optimized for mobile and tablet devices, ensuring that your site looks and performs beautifully no matter where visitors access it. </p>
                </li>

                <li className="flex flex-col items-start text-lg lg:text-xl w-full lg:w-[32%] xl:h-[150px] p-2 rounded-lg">        
                        <div className="flex justify-start gap-2">
                            <div className="w-[26px] h-[26px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                                <GiCheckMark size={16}/>
                            </div>
                            <p className="font-bold ">SEO-Ready for Enhanced Visibility</p>
                        </div>
                        <p className="text-gray-700 ml-[2.15rem]">We develop with SEO best practices, ensuring your site ranks higher on search engines and attracts more organic traffic.</p>
                </li>

                <li className="flex flex-col items-start text-lg lg:text-xl w-full lg:w-[32%] xl:h-[150px] p-2 rounded-lg">        
                        <div className="flex justify-start gap-2">
                            <div className="w-[26px] h-[26px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                                <GiCheckMark size={16}/>
                            </div>
                            <p className="font-bold ">Ecommerce Integration</p>
                        </div>
                        <p className="text-gray-700 ml-[2.15rem]">Our expert eCommerce integration ensures a smooth shopping experience, complete with secure payment options and inventory management.</p>
                </li>

                <li className="flex flex-col items-start text-lg lg:text-xl w-full lg:w-[32%] xl:h-[150px] p-2 rounded-lg">        
                        <div className="flex justify-start gap-2">
                            <div className="w-[26px] h-[26px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                                <GiCheckMark size={16}/>
                            </div>
                            <p className="font-bold ">Optimized for Conversions and Growth</p>
                        </div>
                        <p className="text-gray-700 ml-[2.15rem]">We design your site to maximize user engagement and turn visitors into customers, helping you achieve your business goals.</p>
                </li>


                <li className="flex flex-col items-start text-lg lg:text-xl w-full lg:w-[32%] xl:h-[150px] p-2 rounded-lg">        
                        <div className="flex justify-start gap-2">
                            <div className="w-[26px] h-[26px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                                <GiCheckMark size={16}/>
                            </div>
                            <p className="font-bold ">Seamless, Stress-Free Process</p>
                        </div>
                        <p className="text-gray-700 ml-[2.15rem]">Our team handles everything from design to development, keeping the process smooth and transparent without any technical headaches.</p>
                </li>
            </ul>
        </section>

    </div>
  )
}

export default Information