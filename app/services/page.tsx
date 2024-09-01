import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { caseStudies } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-col items-center">
        <Navbar />

        <section className="flex flex-col md:flex-row w-full gap-4 lg:gap-16 p-8 justify-center items-center mt-40">
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
        </section>

        <Footer />
    </div>
  )
}

export default Services