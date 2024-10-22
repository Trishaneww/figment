import Companies from '@/components/Companies'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { TextGenerateEffect2 } from '@/components/ui/text-generate-effect2'
import { caseStudies } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col bg-slate-50">
        <Navbar />
        <div className="flex flex-col  justify-center  items-center gap-2  overflow-hidden mt-44 lg:mt-72">
        <div className="flex flex-col justify-center items-center gap-6 z-10 w-full md:mt-0 mb-6 lg:mb-12">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-center">Our Portfolio</h1>
            <p className="md:mx-0 text-center w-5/6 md:w-3/6 text-lg">We partner with businesses of every scale and industry, from innovative startups to global enterprises, to create impactful and tailored digital experiences.</p>
            <Link href="/contact">
                <Button className="w-[250px] h-[53px] shadow text-lg">Get a free quote</Button>
            </Link>
        </div>
        </div>

        <section className="flex flex-col md:flex-row w-full gap-4 lg:gap-16 p-8 justify-center items-center mt-2">
            <div className="flex justify-center items-center lg:justify-end lg:items-end flex-col gap-4 mt-40 w-full lg:w-2/4">
                {caseStudies.slice(0,3).map((caseStudy, idx) => (
                    <Link href={caseStudy.link} key={idx}>
                    <Card className="w-[360px] xl:w-[550px]  flex flex-col gap-4 p-[0.2rem] hover:cursor-pointer duration-300ms">
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
                            <CardTitle className="text-xl md:text-2xl">{caseStudy.title}</CardTitle>
                            <button className="h-[32px] rounded-3xl border-slate-950 border-2 text-xs px-4 p-2 flex items-center justify-center">{caseStudy.type}</button>
                        </div>
                        <CardDescription>{caseStudy.desc}</CardDescription>
                    </CardContent>
                </Card>
                </Link>
                ))}
            </div>

            <div className="flex justify-center items-center lg:justify-start lg:items-start flex-col gap-4 w-full lg:w-2/4">
                {caseStudies.slice(3,6).map((caseStudy, idx) => (
                    <Link href={caseStudy.link} key={idx}>
                    <Card className="w-[360px] xl:w-[550px]  flex flex-col gap-4 p-[0.2rem] hover:cursor-pointer duration-300ms">
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
                            <CardTitle className="text-xl md:text-2xl">{caseStudy.title}</CardTitle>
                            <button className="h-[32px] rounded-3xl border-slate-950 border-2 text-xs px-4 p-2 flex items-center justify-center">{caseStudy.type}</button>
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

export default page