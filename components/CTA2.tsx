"use client"
import { Input } from './ui/input'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import cta from '../public/assets/images/hero5.png'


const CTA2 = () => {
  const  [error, setError] = useState("");

  const { toast } = useToast()

  const sendEmail = (e:any) => {
    e.preventDefault();

    try {
      if (e.target.email.value === "") {
          setError("Email is required")
      } else {

          emailjs.sendForm('service_luvg8op', 'template_oirz684' , e.target , '1MxDwCSvQF6Leln4f');
           e.target.reset()
           setError("")

          toast({
              title: "Email Sent",
              description: "We will get back to you shortly",
    })

      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="flex flex-col lg:flex-row w-[90%] justify-center p-4 xl:px-12 bg-slate-950 rounded-xl text-white mt-24">
      <section className="flex flex-col items-center lg:items-start justify-center gap-2 w-full lg:w-[50%]">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-extrabold mt-20 text-center lg:text-left">Get Your Free Quote Today</h1>
        <p className="lg:w-[90%] text-center text-base lg:text-lg lg:text-left">We design your site to maximize user engagement and turn visitors into customers, helping you achieve your business goals.</p>
        <form className="flex flex-wrap justify-center lg:justify-start w-full gap-4 mt-6" onSubmit={sendEmail}>
          <div className="flex flex-col items-start w-full md:w-[270px]">
              <Input type="email" placeholder="Email" name="email" className="w-full md:w-[270px] h-[52px] text-lg border-2 border-white text-black"/>
              <p className="ml-1 text-red-600">{error}</p>
          </div>
          <Button type="submit" className="w-full md:w-[200px] h-[50px] text-lg shadow">Get a free quote</Button>
        </form>
      </section>

      <section className="lg:w-[45%] mt-12 lg:0">
        <Image
          src={cta}
          alt="Call to action image"
        />
      </section>
    </div>
  )
}

export default CTA2