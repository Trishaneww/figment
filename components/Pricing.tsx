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
import { IoCheckmark } from "react-icons/io5";
import { pricingData } from '@/data';
  

const Pricing = () => {
  return (
    <div>
        <div className="flex justify-center gap-5">
            {pricingData.map((card) => (
                <Card className="w-[400px] h-[500px] flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <h1 className="text-2xl font-bold">{card.price} <span>{card.rate}</span></h1>
                        <ul className="mt-6 flex flex-col gap-2">
                            {card.packageList.map((item) => (
                                <li className="flex gap-4">
                                    <div className="flex justify-center items-center border-[1px] border-black w-[24px] h-[24px] rounded-full">
                                        <IoCheckmark />
                                    </div>
                                    <p className="text-lg">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="self-baseline">
                        <Button className="w-[220px]">Purchase</Button>
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