"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import hero1 from '../public/assets/images/hero1.png'
import hero2 from '../public/assets/images/hero2.png'
import hero3 from '../public/assets/images/hero3.png'
import trustpilot from '../public/assets/images/trustpilot.png'

const Hero2 = () => {
  return (
    <div className="flex justify-between gap-4 w-full mt-20 overflow-x-hidden">

      <div className="w-[40%] hidden lg:flex">
      <Image 
        src={hero1}
        alt="hero image one"
        className="h-full w-full"
        priority
      />
      </div>

      <section className="flex flex-col items-center text-center w-full p-2 lg:w-[42%]">

      <div className="flex flex-col items-center lg:mt-20 gap-4">
        <h1 className="text-3xl md:text-5xl xl:text-[3.5rem] font-semibold mt-20">Building Websites That Drive Your Business Forward</h1>
        <p className="text-base">A professionally designed site tailored to your brand not only enhances your online presence but also drives traffic, engages customers, and boosts conversions.</p>
      </div>

        <Link href="/contact">
            <Button className="w-[320px] h-[55px] text-lg bg-black rounded-lg text-white  shadow mt-12">Get a free quote <FaArrowRightLong className="ml-2" size={20}/></Button>
        </Link>

        <Link href="https://www.trustpilot.com/review/figmentstudios.ca?utm_medium=trustbox&utm_source=TrustBoxReviewCollector">
          <Image
            src={trustpilot}
            alt="trustpilot logo"
            className="mt-6 w-[270px] lg:w-[300px]"
          />
        </Link>

        <Image
          src={hero3}
          alt="trustpilot logo"
          className="mt-14 lg:hidden"
          priority
        /> 
      </section>


      <div className="w-[40%] hidden lg:flex">
      <Image 
        src={hero2}
        alt="hero image one"
        priority
      />
      </div>
    </div>
  )
}

export default Hero2