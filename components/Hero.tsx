import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="flex flex-col gap-2 w-2/5">
            <h1 className="text-7xl font-bold">Figment designs to grow your business</h1>
            <p className="">Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
            <Button className="w-[250px]">Start Project</Button>
        </div>
    </div>
  )
}

export default Hero