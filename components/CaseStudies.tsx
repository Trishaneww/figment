import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
import { caseStudies } from '@/data'
import Image from 'next/image'
import '../styles/global.scss';


const CaseStudies = () => {
  return (
    <div className="mt-52">
         <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
            <h1 className="text-slate-800  text-3xl md:text-6xl font-semibold">Case Studies</h1>
            <div className="flex w-2/5 gap-8 justify-between items-center">
                <p className="text-slate-500 lg:text-xl">Find the answers to your questions here</p>
                <button className="w-[180px] h-[48px] p-2 bg-slate-100 rounded-xl">See All Case Studies</button>
            </div>
        </section>

        <div className="flex justify-center gap-8 flex-wrap">
            {caseStudies.map((card) => (
                <Card className="w-[340px] md:w-[400px] md:h-[460px] flex flex-col gap-4">
                    <CardHeader className="bg-slate-100 h-2/3 rounded-lg m-1 overflow-hidden">
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
                    <CardContent className="flex flex-col gap-4 h-1/3 mt-6">
                        <div className="flex justify-between items-center w-full">
                            <CardTitle className="text-2xl">{card.title}</CardTitle>
                            <button className="w-[88px] h-[32px] rounded-3xl border-slate-950 border-2 text-sm">Web App</button>
                        </div>
                      
                        <CardDescription>{card.desc}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>

    </div>
  )
}

export default CaseStudies