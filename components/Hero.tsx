import React from 'react'
import { Button } from './ui/button'
import Navbar from './Navbar'
import '../styles/global.scss';
import Image from 'next/image';


const Hero = () => {
  return (
    <div>
      <div className="w-[900px] h-[700px] bg-green-200 rounded-full absolute z-1 top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
      <div className="flex justify-center items-center h-[100vh] overflow-hidden">
        <div className="flex flex-col gap-2 w-3/5 z-10">
            <h1 className="text-7xl font-bold">Figment designs to grow your business</h1>
            <p className="">Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
            <Button className="w-[250px] shadow">Start Project</Button>
        </div>
        <Image
          alt="bg image"
          height={2000}
          width={2000}
          src="/assets/images/bg.png"
          className="z-20 relative left-96"
        />
      </div>
    </div>
  )
}

export default Hero