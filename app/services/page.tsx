import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { caseStudies, servicesData } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import '../../styles/global.scss';

const Services = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50">
        <Navbar />

    <div>
      <div className="w-2/5 h-4/5 bg-gradient-to-r from-green-200 to-green-300 rounded-full absolute z-1 top-[50%] left-[80%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
      <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-10 md:h-[100vh] overflow-hidden">
        <div className="flex flex-col justify-center items-center md:items-start gap-6 z-10 lg:w-2/6 lg:ml-36 xl:ml-32 mt-48 md:mt-0 text-center md:text-left">
            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">Start. Scale. Grow</h1>
            <p className="mx-16 md:mx-0">Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
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
                    {/* <CardHeader className="bg-slate-100 h-[75%] rounded-lg m-1 overflow-hidden"> */}
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
                    {/* <CardHeader className="bg-slate-100 h-[75%] rounded-lg m-1 overflow-hidden"> */}
                    <div className="h-[75%] w-full overflow-hidden rounded-lg">
                        <Image
                            width={1000}
                            height={1000}
                            src={service.src}
                            alt="logo image"
                            className="h-full w-full hover:scale-110 duration-500 transition-transform"
                        />
                    </div>

                       
                    {/* </CardHeader> */}
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
        </section>

        <section className="flex flex-col items-center w-full mb-24 h-[100vh]">
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
        </section>

        <Footer />
    </div>
  )
}

export default Services