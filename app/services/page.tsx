"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { devprocess,servicesData} from '@/data'
import Image from 'next/image'
import React from 'react'
import '../../styles/global.scss';

const Services = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50">
    <Navbar />
        <div className="-mb-48 md:-mb-20 mt-60 flex flex-col justify-center items-center gap-2" id="services">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-center">Our Services</h1>
            <p className="text-lg text-center">Discover our core services designed to build, enhance, and grow your online presence.</p>
        </div>

        <section className="flex flex-col md:flex-row w-full gap-4 lg:gap-16 p-8 justify-center items-center mt-20">
            <div className="flex justify-center items-center lg:justify-end lg:items-end flex-col gap-4 mt-40 w-full lg:w-2/4">
                {servicesData.slice(0,3).map((service, idx) => (
                    <Card className="w-[340px] xl:w-[550px]  flex flex-col gap-4 p-[0.2rem] hover:cursor-pointer duration-300ms" key={idx}>
                    <div className="h-[75%] w-full overflow-hidden rounded-lg">
                        <Image
                            width={1000}
                            height={1000}
                            src={service.src}
                            alt="logo image"
                            className="h-full w-full hover:scale-110 duration-500 transition-transform"
                        />
                    </div>
                    <CardContent className="flex flex-col gap-4 h-[25%] mt-6">
                        <div className="flex justify-between items-center w-full">
                            <CardTitle className="text-2xl">{service.name}</CardTitle>
                            {/* <button className="w-[88px] h-[32px] rounded-3xl border-slate-950 border-2 text-sm">Web App</button> */}
                        </div>
                        <CardDescription>{service.desc}</CardDescription>
                    </CardContent>
                </Card>
                ))}
            </div>

            <div className="flex justify-center items-center lg:justify-start lg:items-start flex-col gap-4 w-full lg:w-2/4">
                {servicesData.slice(3,6).map((service, idx) => (
                    <Card className="w-[340px] xl:w-[550px]  flex flex-col gap-4 p-[0.2rem] hover:cursor-pointer duration-300ms" key={idx}>
                    <div className="h-[75%] w-full overflow-hidden rounded-lg">
                        <Image
                            width={1000}
                            height={1000}
                            src={service.src}
                            alt="logo image"
                            className="h-full w-full hover:scale-110 duration-500 transition-transform"
                        />
                    </div>
                    <CardContent className="flex flex-col gap-4 h-[25%] mt-6">
                        <div className="flex justify-between items-center w-full">
                            <CardTitle className="text-2xl">{service.name}</CardTitle>
                 
                        </div>
                        <CardDescription>{service.desc}</CardDescription>
                    </CardContent>
                </Card>
                ))}
            </div>
        </section>


        <section className="flex flex-col items-center w-full mt-40">
            <div className="flex flex-col items-center gap-6 p-2">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-green-200 bg-black">Project Managment</p>
                <p className="font-bold text-4xl md:text-6xl text-center">All-in-one Project Management</p>
            </div>
            <div className="w-full flex flex-col items-center">
                <Image
                    width={1400}
                    height={1400}
                    alt="jira board preview"
                    src="/assets/images/jira2.png"
                    className="ml-4 lg:ml-16"
                 />

                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 xl:gap-4 items-center justify-center relative -top-16">
                    <div className="flex flex-col items-start justify-center text-left w-[90%] lg:w-[33%] xl:w-[26%] rounded-lg shadow-lg py-8 px-8 gap-4 bg-white">
                        <p className="text-2xl font-bold">Stay on top of timelines</p>
                        <p className="h-[130px] md:h-[100px]">Jira&apos;s reporting features give you insights into project timelines and help in managing expectations, ensuring we deliver your project on schedule.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center text-left w-[90%] lg:w-[33%] xl:w-[26%] rounded-lg shadow-lg py-8 px-8 gap-4 bg-white">
                        <p className="text-2xl font-bold">Collaborate with our Team</p>
                        <p className="h-[130px] md:h-[100px]">Leave comments, give feedback, and communicate directly with our designers and developers on specific tasks. This ensures quick iterations and adjustments to match your vision.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center text-left w-[90%] lg:w-[33%] xl:w-[26%] rounded-lg shadow-lg py-8 px-8 gap-4 bg-white">
                        <p className="text-2xl font-bold">File and image sharing</p>
                        <p className="h-[130px] md:h-[100px]">Upload images, logos, and other files directly to tasks. This way, our designers and developers always have access to the latest assets you provide.</p>
                    </div>
                 </div>
            </div>
            
        </section>

        <section className="flex flex-col items-center w-full mt-60 gap-14 mb-24" id="process">
            <div className="flex flex-col items-center gap-6">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-green-200 bg-black">Our Process</p>
                <p className="font-bold text-4xl md:text-6xl text-center">Our Development Process</p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap w-full">
            {devprocess.map((phase, index) => (
                <div className="flex flex-col items-center justify-start text-center w-[90%] lg:w-[42%] xl:w-[35%] h-[380px] md:h-[290px] xl:h-[280px] rounded-lg shadow-lg p-4 px-6 gap-4 bg-white process-card" key={index}>
                    <div className="flex items-center justify-between w-full h-[30px]">
                        <p className="text-2xl font-bold">{phase.title}</p>
                        <p className="text-2xl font-bold">{index + 1}</p>
                    </div>
                    
                    <p className="text-left">{phase.description}</p>
                </div>
            ))}
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Services