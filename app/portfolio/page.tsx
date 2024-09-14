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
        <div className="w-[93%] h-2/6 lg:h-full bg-gradient-to-r from-green-200 to-green-300 rounded-full absolute z-1 top-[105%] md:top-[94%] lg:top-[124%] left-[48%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
        <div className="flex flex-col  justify-center  items-center gap-2  overflow-hidden mt-72">
        <div className="flex flex-col justify-center items-center gap-6 z-10 w-full md:mt-0">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-center">Our Portfolio of <span className="bg-gradient-to-r from-green-400 via-green-600 to bg-slate-900 bg-clip-text text-transparent ml-2">Success Stories</span></h1>
            <p className="md:mx-0 text-center w-5/6 md:w-3/6 text-lg">We partner with businesses of every scale and industry, from innovative startups to global enterprises, to create impactful and tailored digital experiences.</p>
            {/* <Button className="w-[250px] shadow">Start Project</Button> */}
        </div>
        <Companies />
        <div className="flex justify-center items-center -mt-16 lg:mt-0  w-full">
            <video width="85%" height="820" autoPlay loop muted className="rounded-lg z-20 shadow-lg">
                <source src="/assets/videos/video5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        </div>


        <section className="flex flex-col md:flex-row w-full gap-4 lg:gap-16 p-8 justify-center items-center mt-48">
            <div className="flex justify-center items-center lg:justify-end lg:items-end flex-col gap-4 mt-40 w-full lg:w-2/4">
                {caseStudies.slice(0,3).map((caseStudy) => (
                    <Link href={caseStudy.link}>
                    <Card className="w-[360px] xl:w-[550px]  flex flex-col gap-4 p-[0.2rem] hover:cursor-pointer duration-300ms">
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
                            <CardTitle className="text-xl md:text-2xl">{caseStudy.title}</CardTitle>
                            <button className="h-[32px] rounded-3xl border-slate-950 border-2 text-sm px-4 p-2 flex items-center justify-center">{caseStudy.type}</button>
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
                    <Card className="w-[360px] xl:w-[550px]  flex flex-col gap-4 p-[0.2rem] hover:cursor-pointer duration-300ms">
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
                            <CardTitle className="text-xl md:text-2xl">{caseStudy.title}</CardTitle>
                            <button className="h-[32px] rounded-3xl border-slate-950 border-2 text-sm px-4 p-2 flex items-center justify-center">{caseStudy.type}</button>
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

        {/* <div className="h-[200vh] bg-gray-200 flex flex-col items-center justify-center">
            <video width="35%" height="820" autoPlay loop muted className="rounded-lg z-20 shadow-lg">
                <source src="/assets/videos/video5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="flex flex-col items-center justify-center mt-20">
                <p className="text-sm">LIVE PREVIEW</p>
                <p className="text-2xl">Figment Studios</p>
            </div>
        </div> */}

        <Footer />

    </div>
  )
}

export default page