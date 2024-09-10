import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { caseStudies, devprocess, jiraDetails, servicesData } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { GiCheckMark } from "react-icons/gi";
import '../../styles/global.scss';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const Services = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50">
        <Navbar />

    <div>
      <div className="w-2/5 h-4/5 bg-gradient-to-r from-green-200 to-green-300 rounded-full absolute z-1 top-[50%] left-[80%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
      <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-10 md:h-[100vh] overflow-hidden">
        <div className="flex flex-col justify-center items-center md:items-start gap-6 z-10 lg:w-[35%] lg:ml-36 xl:ml-32 mt-48 md:mt-0 text-center md:text-left">
            <TextGenerateEffect words="Start. Scale. Grow"/>
            <p className="mx-16 md:mx-0 text-lg">Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
            <div className="flex gap-4">
                <Button className="w-[200px] shadow">Start Project</Button>
                <div className='flex gap-2 justify-center items-center hover:cursor-pointer'>
                    <p>Contact Us</p>
                    <IoIosArrowForward size={15}/>
                </div>

            </div>
        </div>
        {/* <div className="w-full">
          <img src="/assets/images/bg.png" alt="bg image"  className="z-20 relative left-96 w-[900px]"/>
        </div> */}
      
        <Image
          alt="bg image"
          height={800}
          width={800}
          src="/assets/images/services7.png"
          className="z-20 w-3/4 md:w-[44%]"
        />
      </div>
    </div>

        <section className="flex flex-col md:flex-row w-full gap-4 lg:gap-16 p-8 justify-center items-center mt-24">
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
{/* 
        <div className="relative left-[50%] flex gap-4 overflow-hidden">
                {servicesData.slice(0,6).map((service) => (
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
            </div> */}


        {/* <section className="flex justify-center gap-2 w-5/6">
            <div className="w-full">
                <Image
                    width={1000}
                    height={1000}
                    alt="jira board preview image"
                    src="/assets/images/jira.png"
                />
            </div>

            <div className="flex flex-col w-full gap-2 ">
                {jiraDetails.map((detail) => (
                    <div className="h-[180px] w-[80%] overflow-hidden rounded-2xl border-[1px] border-gray-200 flex flex-col items-center justify-center shadow-lg">
                        <div className="w-[500px] h-[250px] top-32 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px]"></div>
                        <div className="relative z-20 -top-16 flex flex-col justify-center items-center">
                            <p className="z-20 text-4xl">{detail.title}</p>
                            <p className="z-20">{detail.descr}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>  */}
        {/* <section className="flex flex-col items-center w-full mt-60 gap-14">
            <div className="flex flex-col items-center gap-6">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-green-200 bg-black">Our Process</p>
                <p className="font-bold text-6xl">Our essential development process</p>
            </div>
            <Image
                width={1000}
                height={1000}
                alt="jira board preview"
                src="/assets/images/jira2.png"
            />
            <div className="flex justify-center gap-4 flex-wrap w-full">
            {devprocess.map((phase) => (
                <div className="flex flex-col items-center justify-center text-center w-[90%] lg:w-[30%] h-[200px] rounded-lg shadow-lg p-4 gap-4 bg-white">
                    <p className="text-2xl font-bold">{phase.title}</p>
                    <p>{phase.desc}</p>
                </div>
            ))}
            </div>
        </section> */}

        <section className="flex flex-col items-center w-full mt-40">
            <div className="flex flex-col items-center gap-6">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-green-200 bg-black">Project Managment</p>
                <p className="font-bold text-6xl">Our essential development process</p>
            </div>
            <div className="w-full flex flex-col items-center">
                <Image
                    width={1400}
                    height={1400}
                    alt="jira board preview"
                    src="/assets/images/jira2.png"
                    className="ml-16"
                 />

                 <div className="flex gap-8 justify-center relative -top-16">
                    <div className="flex flex-col items-start justify-center text-left w-[90%] lg:w-[26%] h-[180px] rounded-lg shadow-lg p-4 px-8 gap-4 bg-white">
                        <p className="text-2xl font-bold">For Freelancers</p>
                        <p>Our essential development process, Our essential development process. Our essential development process, Our essential development process</p>
                    </div>
                    <div className="flex flex-col items-start justify-center text-left w-[90%] lg:w-[26%] h-[180px] rounded-lg shadow-lg p-4 px-8 gap-4 bg-white">
                        <p className="text-2xl font-bold">For Freelancers</p>
                        <p>Our essential development process, Our essential development process. Our essential development process, Our essential development process</p>
                    </div>
                    <div className="flex flex-col items-start justify-center text-left w-[90%] lg:w-[26%] h-[180px] rounded-lg shadow-lg p-4 px-8 gap-4 bg-white">
                        <p className="text-2xl font-bold">For Freelancers</p>
                        <p>Our essential development process, Our essential development process. Our essential development process, Our essential development process</p>
                    </div>
                 </div>

            </div>
            
        </section>

        <section className="flex flex-col items-center w-full mt-60 gap-14 mb-24">
            <div className="flex flex-col items-center gap-6">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-green-200 bg-black">Our Process</p>
                <p className="font-bold text-6xl text-center">Our essential development process</p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap w-full">
            {devprocess.map((phase, index) => (
                <div className="flex flex-col items-center justify-center text-center w-[90%] lg:w-[42%] xl:w-[28%] h-[260px] rounded-lg shadow-lg p-4 px-6 gap-4 bg-white">
                    <div className="flex items-center">
                        <p className="text-2xl font-bold">{phase.title}</p>
                        <p className="text-2xl font-bold">{index + 1}</p>
                    </div>
                    
                    <p className="text-left">{phase.desc}</p>
                </div>
            ))}
            </div>
        </section>

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