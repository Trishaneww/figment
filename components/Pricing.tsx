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
import { FaCheck } from "react-icons/fa6";
import { pricingData } from '@/data';
import '../styles/global.scss';
import { GiCheckMark } from 'react-icons/gi';
import { TextGenerateEffect2 } from './ui/text-generate-effect2';
  

const Pricing = () => {
  return (
    <div className="flex flex-col gap-16 mt-60">
        <section className="flex flex-col justify-center items-center gap-6">
            <TextGenerateEffect2 words="Simple, Transparent, Pricing"/>
            <p className="text-xl text-slate-500">Choose the plan thats right for you. Cancel subscription at anytime.</p>
        </section>
        <div className="flex justify-center gap-8 flex-wrap">
            {pricingData.slice(0,2).map((card) => (
                <Card className="w-[400px] h-[550px] flex flex-col gap-4">
                    <CardHeader>
                        <CardTitle className="text-4xl">{card.title}</CardTitle>
                        <CardDescription>{card.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <h1 className="text-4xl font-bold mb-8">{card.price} <span className="text-base">{card.rate}</span></h1>
                        <ul className="mt-6 flex flex-col gap-2">
                            {card.packageList.map((item) => (
                                <li className="flex gap-4">
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
                    <CardFooter className="self-center">
                        <Button className="w-[240px] h-[46px] shadow">Purchase</Button>
                    </CardFooter>
                </Card>
            ))}
            {pricingData.slice(2,3).map((card) => (
                <Card className="w-[400px] h-[550px] flex flex-col gap-4 bg-black text-white">
                    <CardHeader>
                        <CardTitle className="text-4xl">{card.title}</CardTitle>
                        <CardDescription className="text-white">{card.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <h1 className="text-4xl font-bold mb-8">{card.price} <span className="text-base">{card.rate}</span></h1>
                        <ul className="mt-6 flex flex-col gap-2">
                            {card.packageList.map((item) => (
                                <li className="flex gap-4">
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
                    <CardFooter className="self-center">
                        <Button className="w-[240px] h-[46px] shadow">Purchase</Button>
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