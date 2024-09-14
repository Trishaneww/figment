"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { caseStudies, devprocess, jiraDetails, servicesData, studyHiveFeatures } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { GiCheckMark } from "react-icons/gi";
import '../../styles/global.scss';
import { TextGenerateEffect3 } from '@/components/ui/text-generate-effect3'
import { HoverEffect } from '@/components/ui/card-hover-effect2'

const Services = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50">
        <Navbar />

    <div>
      <div className="w-2/5 h-4/5 bg-gradient-to-r from-green-200 to-green-300 rounded-full absolute z-1 top-[50%] left-[80%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
      <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-10 md:h-[100vh] overflow-hidden">
        <div className="flex flex-col justify-center items-center md:items-start gap-6 z-10 lg:w-[35%] lg:ml-36 xl:ml-32 mt-48 md:mt-0 text-center md:text-left">
            <TextGenerateEffect3 words="Start. Scale. Grow"/>
            <p className="mx-2 md:mx-0 text-lg">Whether you need a stunning custom website, expert UI/UX design, or reliable ongoing maintenance and support, our team is ready to meet all your website needs with precision and expertise."</p>
            <div className="flex gap-4">
                <a href="/contact"><Button className="w-[200px] shadow text-base">Start Project</Button></a>
                <a href="mailto:contact.figmentstudios@gmail.com" className='flex gap-2 justify-center items-center hover:cursor-pointer'>
                    <p className="text-base">Contact Us</p>
                    <IoIosArrowForward size={15}/>
                </a>
            </div>
        </div>
  
      
        <Image
          alt="bg image"
          height={800}
          width={800}
          src="/assets/images/services7.png"
          className="z-20 w-full md:w-[48%]"
        />
      </div>
    </div>


        <div className="-mb-48 md:-mb-20 mt-24 flex flex-col justify-center items-center gap-2">
            <h1 className="text-slate-800 text-3xl md:text-5xl lg:text-6xl font-semibold">Our Core Services</h1>
            <p className="text-lg text-center">Discover our core services designed to build, enhance, and grow your online presence.</p>
        </div>

        <section className="flex flex-col md:flex-row w-full gap-4 lg:gap-16 p-8 justify-center items-center mt-20">
            <div className="flex justify-center items-center lg:justify-end lg:items-end flex-col gap-4 mt-40 w-full lg:w-2/4">
                {servicesData.slice(0,3).map((service) => (
                    <Card className="w-[340px] xl:w-[550px]  flex flex-col gap-4 p-[0.2rem] hover:cursor-pointer duration-300ms">
        
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
                {servicesData.slice(3,6).map((service) => (
                    <Card className="w-[340px] xl:w-[550px]  flex flex-col gap-4 p-[0.2rem] hover:cursor-pointer duration-300ms">

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
                        <p className="h-[130px] md:h-[100px]">Jira's reporting features give you insights into project timelines and help in managing expectations, ensuring we deliver your project on schedule.</p>
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
                <p className="font-bold text-4xl md:text-6xl text-center">Our Essential Development Process</p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap w-full">
            {devprocess.map((phase, index) => (
                <div className="flex flex-col items-center justify-start text-center w-[90%] lg:w-[42%] xl:w-[35%] h-[380px] md:h-[290px] xl:h-[280px] rounded-lg shadow-lg p-4 px-6 gap-4 bg-white process-card">
                    <div className="flex items-center justify-between w-full h-[30px]">
                        <p className="text-2xl font-bold">{phase.title}</p>
                        <p className="text-2xl font-bold">{index + 1}</p>
                    </div>
                    
                    <p className="text-left">{phase.description}</p>
                </div>
            ))}
            </div>
        </section>

        

        

        {/* <HoverEffect items={devprocess}/> */}

        {/* <section className="flex flex-col items-center w-full mb-24 h-[100vh]">
            <p>hi</p>
            <div className="flex flex-col rounded-xl h-[54px] border-[1px] border-gray-500 w-2/6 pt-[6px]">
                <div className="relative flex items-center">
                    <input type="radio" name="tabs" checked id="tab1"/>
                    <label htmlFor="tab1">Phase 1</label>
                    <input type="radio" name="tabs" checked id="tab2"/>
                    <label htmlFor="tab2">Phase 2</label>
                    <input type="radio" name="tabs" checked id="tab3"/>
                    <label htmlFor="tab3">Phase 3</label>
                    <input type="radio" name="tabs" checked id="tab4"/>
                    <label htmlFor="tab4">Phase 4</label>
                    <input type="radio" name="tabs" checked id="tab5"/>
                    <label htmlFor="tab5">Phase 5</label>
                    <div className="glider"></div>
                </div>

                <div className="mt-10">
                    <p>We create custom web applications as new systems, or as a backend to existing applications. We can build your application from scratch, or rebuild a previous application into a modern web-based system. We create custom web applications as new systems, or as a backend to existing applications. We can build your application from scratch, or rebuild a previous application into a modern web-based system.</p>
                </div>
            </div>
        </section> */}
        
{/* 
        <div className="bg-white w-full h-[100vh] flex justify-center items-center gap-12">
            <div className="w-[60px] h-[60px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                <GiCheckMark size={30}/>
            </div>
            <div className="flex flex-col">
                <p className="font-extrabold text-4xl">C$201.98 <span className="text-gray-3   400 text-4xl font-semibold">(22 transactions)</span></p>
                <p className="font-semibold text-4xl text-gray-400">accept payments.</p>
            </div>

            <Button className="font-extrabold text-white w-[220px] h-[35px]">Instant payout</Button>
        
            <p className="font-extrabold text-4xl">Payment link is now</p>
            <p className="font-semibold text-4xl text-gr -ml-10">buy.figment.com/zKU12E</p>
          
        </div> */}

        <Footer />
    </div>
  )
}

export default Services