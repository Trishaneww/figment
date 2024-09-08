import React from 'react'
import { Button } from './ui/button'
import Navbar from './Navbar'
import '../styles/global.scss';
import Image from 'next/image';
import Bg from '../public/assets/images/bg.png';
import { TextGenerateEffect3 } from './ui/text-generate-effect3';


const Hero = () => {
  return (
    <div>
      <div className="w-3/5 h-4/5 bg-gradient-to-r from-green-200 to-green-300 rounded-full absolute z-1 top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 md:h-[100vh] overflow-hidden">
        <div className="flex flex-col justify-center items-center md:items-start gap-6 z-10 lg:w-4/6 lg:ml-36 xl:ml-32 mt-48 md:mt-0 text-center md:text-left">
            {/* <h1 className="text-2xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">Figment designs to grow your business</h1> */}
            <TextGenerateEffect3 words="Figment designs to grow your business"/>
            <p className="mx-16 md:mx-0">Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
            <Button className="w-[250px] shadow">Start Project</Button>
        </div>
        {/* <div className="w-full">
          <img src="/assets/images/bg.png" alt="bg image"  className="z-20 relative left-96 w-[900px]"/>
        </div> */}
      
        <Image
          alt="bg image"
          height={800}
          width={800}
          src="/assets/images/bg2.png"
          className="z-20 w-3/4 md:w-[44%]"
        />
      </div>
    </div>
  )
}

export default Hero