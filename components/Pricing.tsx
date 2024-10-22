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
import { pricingData } from '@/data';
import '../styles/global.scss';
import { GiCheckMark } from 'react-icons/gi';
import { TextGenerateEffect3 } from './ui/text-generate-effect3';
import Link from 'next/link';
  

const Pricing = () => {
  return (
    <div className="flex flex-col gap-16 mt-44">
         <div className="w-4/5 h-full bg-gradient-to-r from-green-200 to-green-300 rounded-full absolute z-1 -top-[28%] left-[30%] translate-x-[-50%] translate-y-[-50%] blur-[390px]"></div>
        <section className="flex flex-col justify-center items-center gap-6 text-center z-10">
            <h1 className="text-3xl md:text-5xl xl:text-[3.5rem] font-semibold mt-20">Simple and Transparent Pricing</h1>
            <p className="lg:text-xl text-slate-500 p-2">Explore our flexible pricing packages designed to deliver stunning, high-performing websites.</p>
        </section>
        <div className="flex justify-center gap-2 flex-wrap z-20">
            {pricingData.slice(0,3).map((card,idx) => (
                <Card className="w-[370px] h-[800px] flex flex-col gap-4" key={idx}>
                    <CardHeader className="h-[180px]">
                        <CardTitle className="text-3xl md:text-4xl">{card.title}</CardTitle>
                        <CardDescription className="text-base">{card.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                        {/* <h1 className="text-3xl md:text-4xl font-bold mb-8">{card.price}</h1> */}
                        <Link href="/contact">  <Button className="w-full h-[52px] shadow text-lg">Get custom pricing</Button></Link>
                        <p className="text-lg mt-12">Includes:</p>
                        <ul className="mt-6 flex flex-col gap-2">
                            {card.packageList.map((item,idx) => (
                                <li className="flex gap-4" key={idx}>
                                    {/* <div className="flex justify-center items-center border-[1px] border-green-500 w-[24px] h-[24px] rounded-full">
                                        <FaCheck size={12} />
                                    </div> */}
                                    <div className="w-[26px] h-[26px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                                        <GiCheckMark size={16}/>
                                    </div>
                                    <p className="text-lg">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="mt-24">
                        <a href='#features' className="underline">See all features</a>
                    </CardFooter>
                </Card>
            ))}
            {pricingData.slice(3,4).map((card, idx) => (
                <Card className="w-[370px] h-[800px] flex flex-col gap-4 bg-slate-950 text-white" key={idx}>
                    <CardHeader className="h-[180px]">
                        <CardTitle className="text-3xl md:text-4xl">{card.title}</CardTitle>
                        <CardDescription className="text-white text-base">{card.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                        <Link href="/contact">  <Button className="w-full h-[52px] shadow text-lg">Get custom pricing</Button></Link>
                        {/* <h1 className="text-3xl md:text-4xl font-bold mb-8">{card.price}</h1> */}
                        <p className="text-lg mt-12">Includes:</p>
                        <ul className="mt-6 flex flex-col gap-2">
                            {card.packageList.map((item, idx) => (
                                <li className="flex gap-4" key={idx}>
                                    {/* <div className="flex justify-center items-center border-[1px] border-green-500 w-[24px] h-[24px] rounded-full">
                                        <FaCheck size={12} />
                                    </div> */}
                                    <div className="w-[26px] h-[26px] flex justify-center items-center text-white bg-green-400 rounded-full">
                                        <GiCheckMark size={16}/>
                                    </div>
                                    <p className="text-lg">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="mt-24">
                        <a href='#features' className="underline">See all features</a>
                    </CardFooter>
                </Card>
            ))}
        {/* <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Monthly</CardTitle>
                <CardDescription>For businesses needing short-term marketing assets or a small new/redesigned website.</CardDescription>
            </CardHeader>
            <CardContent>
                <h1 className="text-2xl font-bold">$200/m</h1>
                <ul className="mt-6">
                    <li className="flex gap-4">
                        <div className="flex justify-center items-center border-[1px] border-black w-[24px] h-[24px] rounded-full">
                            <IoCheckmark />
                        </div>
                        <p className="text-lg">Unlimited Requests</p>
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
                <Button className="w-[220px]">Purchase</Button>
            </CardFooter>
        </Card> */}
        </div>
    </div>
  )
}

export default Pricing