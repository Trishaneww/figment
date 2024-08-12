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
  

const Pricing = () => {
  return (
    <div>
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Monthly</CardTitle>
                <CardDescription>For businesses needing short-term marketing assets or a small new/redesigned website.</CardDescription>
            </CardHeader>
            <CardContent>
                <h1>$200/m</h1>
                <ul>
                    <li>
                        <div>

                        </div>
                        <p></p>
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
                <Button>Purchase</Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Pricing