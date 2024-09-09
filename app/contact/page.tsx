import Bento from '@/components/Bento'
import ContactHero from '@/components/ContactHero'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { caseStudies } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50">
        <Navbar />
        <ContactHero />

        <Bento />


        <div className="mt-52 w-full flex flex-col justify-center items-center">
         <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
            <h1 className="text-slate-800  text-3xl md:text-6xl font-semibold">Case Studies</h1>
            <div className="flex  gap-8 justify-between items-center">
                <p className="text-slate-500 lg:text-xl">Find the answers to your questions here</p>
                <Link href="/work"><button className="w-[180px] h-[48px] p-2 bg-slate-100 rounded-xl">See All Case Studies</button></Link>
            </div>
        </section>

        <div className="flex justify-center gap-4 flex-wrap w-5/6">
            {caseStudies.map((card) => (
                <Link href={card.link}>
                <Card className="w-[350px] md:w-[400px] md:h-[460px] flex flex-col gap-4 hover:cursor-pointer">
                    <CardHeader className="bg-slate-100 max-h-[400px] rounded-lg m-1 overflow-hidden">
                    <div className="w-[250px] h-[250px] bg-gradient-to-r from-green-100 to-green-200 rounded-full absolute z-1 blur-[40px]">
                    </div>
                    <div className="w-[580px]">
                        <Image
                            width={1000}
                            height={1000}
                            src={card.src2}
                            alt="logo image"
                            className="relative top-10 z-10 hover:scale-105 duration-500 transition-transform"
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
                </Link>
            ))}
        </div>
    </div>

        <div className="w-full">
        <Faq />
        </div>

 

        <Footer />

    </div>
  )
}

export default Contact