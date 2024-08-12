import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div>
      <div className="w-[700px] h-[500px] bg-green-300 rounded-full absolute z-1 top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
      <div className="flex flex-col justify-center items-center h-[100vh] ">
        <div className="flex flex-col gap-2 w-2/5 z-10">
            <h1 className="text-7xl font-bold">Figment designs to grow your business</h1>
            <p className="">Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
            <Button className="w-[250px]">Start Project</Button>
        </div>
    </div>

    </div>
  )
}

export default Hero