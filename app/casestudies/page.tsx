import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { caseStudies } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col bg-slate-50">
        <Navbar />
        {/* <div className="w-3/5 h-4/5 bg-gradient-to-r from-green-200 to-green-300 rounded-full absolute z-1 top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 md:h-[100vh] overflow-hidden">
        <div className="flex flex-col justify-center items-center md:items-start gap-6 z-10 lg:w-3/6  ml-6 lg:ml-36 xl:ml-32 mt-48 md:mt-0">
            <h1 className="text-2xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">Figment designs to grow your business</h1>
            <p className="mx-16 md:mx-0">Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
            <Button className="w-[250px] shadow">Start Project</Button>
        </div>
            <Image
            alt="bg image"
            height={800}
            width={800}
            src="/assets/images/bg2.png"
            className="z-20 w-3/4 md:w-[44%]"
            />
        </div> */}

        <section className="flex flex-col md:flex-row w-full gap-4 lg:gap-16 p-8 justify-center items-center">
            <div className="flex justify-center items-center lg:justify-end lg:items-end flex-col gap-4 mt-40 w-full lg:w-2/4">
                {caseStudies.slice(0,3).map((caseStudy) => (
                    <Link href={caseStudy.link}>
                    <Card className="w-[340px] xl:w-[550px]  flex flex-col gap-4 p-[0.2rem] hover:cursor-pointer duration-300ms">
                    {/* <CardHeader className="bg-slate-100 h-[75%] rounded-lg m-1 overflow-hidden"> */}
                    <div className="h-[75%] w-full overflow-hidden rounded-lg">
                        <Image
                            width={1000}
                            height={1000}
                            src={caseStudy.src}
                            alt="logo image"
                            className="h-full w-full hover:scale-110 duration-500 transition-transform"
                        />
                    </div>

                       
                    {/* </CardHeader> */}
                    <CardContent className="flex flex-col gap-4 h-[25%] mt-6">
                        <div className="flex justify-between items-center w-full">
                            <CardTitle className="text-2xl">{caseStudy.title}</CardTitle>
                            <button className="w-[88px] h-[32px] rounded-3xl border-slate-950 border-2 text-sm">Web App</button>
                        </div>
                        <CardDescription>{caseStudy.desc}</CardDescription>
                    </CardContent>
                </Card>
                </Link>
                ))}
            </div>

            <div className="flex justify-center items-center lg:justify-start lg:items-start flex-col gap-4 w-full lg:w-2/4">
                {caseStudies.slice(3,6).map((caseStudy) => (
                    <Link href={caseStudy.link}>
                    <Card className="w-[340px] xl:w-[550px]  flex flex-col gap-4 p-[0.2rem] hover:cursor-pointer duration-300ms">
                    {/* <CardHeader className="bg-slate-100 h-[75%] rounded-lg m-1 overflow-hidden"> */}
                    <div className="h-[75%] w-full overflow-hidden rounded-lg">
                        <Image
                            width={1000}
                            height={1000}
                            src={caseStudy.src}
                            alt="logo image"
                            className="h-full w-full hover:scale-110 duration-500 transition-transform"
                        />
                    </div>

                       
                    {/* </CardHeader> */}
                    <CardContent className="flex flex-col gap-4 h-[25%] mt-6">
                        <div className="flex justify-between items-center w-full">
                            <CardTitle className="text-2xl">{caseStudy.title}</CardTitle>
                            <button className="w-[88px] h-[32px] rounded-3xl border-slate-950 border-2 text-sm">Web App</button>
                        </div>
                        <CardDescription>{caseStudy.desc}</CardDescription>
                    </CardContent>
                </Card>
                </Link>
                ))}
            </div>


            {/* <div className="flex flex-col gap-4 w-2/4">
                {caseStudies.slice(0,3).map((caseStudy) => (
                    <Card className="w-[340px] md:w-[70%] md:h-[560px] flex flex-col gap-4">
                    <CardHeader className="bg-slate-100 h-[75%] rounded-lg m-1 overflow-hidden">
                    <div className="w-[250px] h-[250px] bg-gradient-to-r from-green-100 to-green-200 rounded-full absolute z-1 blur-[40px]"></div>
                    <div className="w-[580px]">
                        <Image
                            width={1000}
                            height={1000}
                            src="/assets/images/foodbyte1.png"
                            alt="logo image"
                            className="relative top-10 z-10"
                        />
                    </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 h-[25%] mt-6">
                        <div className="flex justify-between items-center w-full">
                            <CardTitle className="text-2xl">{caseStudy.title}</CardTitle>
                            <button className="w-[88px] h-[32px] rounded-3xl border-slate-950 border-2 text-sm">Web App</button>
                        </div>
                        <CardDescription>{caseStudy.desc}</CardDescription>
                    </CardContent>
                </Card>
                ))}
            </div> */}
        </section>

        <Footer />

    </div>
  )
}

export default page