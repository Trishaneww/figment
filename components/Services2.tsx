import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import service1 from '../public/assets/images/service1.png';
import service2 from '../public/assets/images/service2.png';
import service3 from '../public/assets/images/service3.png';

const Services2 = () => {
  return (
    <div className="flex flex-col items-center mt-32 px-10 lg:px-16">
    <div className="flex flex-col lg:flex-row items-center justify-between p-2 gap-6 text-left w-full">
        <div className="flex flex-col items-start w-full lg:w-1/2">
            <h1 className="text-slate-800  text-3xl md:text-5xl font-semibold">Our Core Services</h1>
            <p className="text-slate-500 w-full lg:text-xl">Our client&apos;s success stories speak for themselves—discover how we&apos;ve helped businesses like yours thrive online.</p>
        </div>
    </div>

    <section className="flex flex-row  justify-center lg:justify-between items-center flex-wrap gap-6 lg:gap-0 mt-12 mb-12 w-full">
        <Card className="w-[340px] xl:w-[32%] h-[430px] lg:h-[480px] items-between justify-between flex flex-col-reverse p-[0.2rem] hover:cursor-pointer duration-300ms">
            
            <div className="w-full overflow-hidden rounded-lg lg:-mt-12">
                <Image
                    src={service1}
                    alt="logo image"
                    className="h-full w-full hover:scale-110 duration-500 transition-transform"
                />
            </div>

            <CardContent className="flex flex-col gap-4 mt-6">
                <div className="flex justify-between items-center w-full">
                    <CardTitle className="text-2xl">Web Design</CardTitle>
                </div>
                <CardDescription>We provide custom, responsive websites tailored to your business needs. We handle everything from design and coding to deployment, ensuring a user-friendly and SEO-optimized site that performs well. We also integrate key features like e-commerce and CMS.</CardDescription>
            </CardContent>
        </Card>
        <Card className="w-[340px] xl:w-[32%] h-[430px] lg:h-[480px] items-between justify-between flex flex-col-reverse p-[0.2rem] hover:cursor-pointer duration-300ms">
            
            <div className="w-full overflow-hidden rounded-lg">
                <Image
                    src={service2}
                    alt="logo image"
                    className="h-full w-full hover:scale-110 duration-500 transition-transform"
                />
            </div>

            <CardContent className="flex flex-col gap-4 h-[25%] mt-6">
                <div className="flex justify-between items-center w-full">
                    <CardTitle className="text-2xl">Business Applications</CardTitle>
                    {/* <button className="w-[88px] h-[32px] rounded-3xl border-slate-950 border-2 text-sm">Web App</button> */}
                </div>
                <CardDescription>We develop custom software to help you track and manage your company&apos;s sales, conversions, and operations. We provide tailored solutions with features like sales tracking, CRM, and analytics to streamline workflows and drive growth.</CardDescription>
            </CardContent>
        </Card>

        <Card className="w-[340px] xl:w-[32%] h-[430px] lg:h-[480px] items-between justify-between flex flex-col-reverse p-[0.2rem] hover:cursor-pointer duration-300ms">
            
            <div className="w-full overflow-hidden rounded-lg">
                <Image
                    src={service3}
                    alt="logo image"
                    className="h-full w-full hover:scale-110 duration-500 transition-transform"
                />
            </div>

            <CardContent className="flex flex-col gap-4 h-[25%] mt-6">
                <div className="flex justify-between items-center w-full">
                    <CardTitle className="text-2xl">UX/UI Design</CardTitle>
                    {/* <button className="w-[88px] h-[32px] rounded-3xl border-slate-950 border-2 text-sm">Web App</button> */}
                </div>
                <CardDescription>Our UI/UX design service creates intuitive and visually appealing interfaces for websites and apps. We focus on user research, wireframing, and prototyping to ensure a user-friendly experience that aligns with your brand and goals.</CardDescription>
            </CardContent>
        </Card>        
    </section>
</div>
  )
}

export default Services2