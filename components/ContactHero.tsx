"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { GiCheckMark } from 'react-icons/gi';
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/hooks/use-toast"
import Link from 'next/link';

const ContactHero = () => {
  const [emailError, setEmailError] = useState("")
  const [nameError, setNameError] = useState("")

  const { toast } = useToast()
  const sendEmail = (e:any) => {
    e.preventDefault();

    try {
      if (e.target.email.value === "" || e.target.full_name.value === "") {

          if (e.target.email.value === "") {
            setEmailError("Email is required")
            if (e.target.full_name.value === "") {
              setNameError("Fullname is required")
            }
          } 
 
      } else {

          emailjs.sendForm('service_luvg8op', 'template_sx6i957' , e.target , '1MxDwCSvQF6Leln4f');
           e.target.reset()
           setEmailError("")
           setNameError("")

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
    <div className="flex flex-col items-start justify-start w-full">
    <div className="flex justify-center w-full lg:h-[100vh] mb-24 md:mb-2">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full lg:w-full px-8 z-20">
        <div className="flex flex-col lg:w-[55%] xl:w-[35%] h-full text-lg">

            <Link href="/">
              <Image
                height={170}
                width={170}
                src="/assets/images/third-logo.png"
                alt="figment studios logo"
              />
            </Link>
            <p className="text-4xl md:text-5xl lg:text-[4.2rem] leading-[1] font-extrabold mt-24 md:mt-36">Reserve a 30 minute call with our team</p>
            <p className="mt-8 text-xl font-semibold">What we&apos;ll cover</p>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex gap-4 items-center">
                <div className="w-[24px] h-[24px] flex justify-center items-center text-green-100 bg-green-500 rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p className="w-[85%]">Your vision for the website</p>

              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[24px] h-[24px] flex justify-center items-center text-green-100 bg-green-500 rounded-full">
                  <GiCheckMark size={12}/>
                </div>
                <p className="w-[85%]">Your deadline, budget, and target audience</p>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[24px] h-[24px] flex justify-center items-center text-green-100 bg-green-500 rounded-full">
                  <GiCheckMark size={12}/>
                </div>
                <p className="w-[85%]">Collaborate on potential design concepts</p>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[24px] h-[24px] flex justify-center items-center text-green-100 bg-green-500 rounded-full">
                  <GiCheckMark size={12}/>
                </div>
                <p className="w-[85%]">Q&A Session</p>
              </li>
            </ul>
            <Image
              width={300}
              height={300}
              src="/assets/images/trustpilot.png"
              alt="trustpilot logo"
              className="mt-6"
            />
        </div>

        

        <form className="max-w-[530px] w-full lg:w-1/3 xl:w-3/6 h-[430px] shadow-lg bg-white rounded-lg flex flex-col items-center gap-4 -mt-4" onSubmit={sendEmail}>
        <div className="flex w-5/6 justify-center items-center gap-2 mt-8">
        <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Name</p> */}
            <input 
              type="text" 
              name="full_name"
              placeholder="Full Name*"
              className="w-full border-[1px] h-[44px] border-slate-200 p-2 rounded-md outline-none"/>
              <p className="ml-1 text-red-600">{nameError}</p>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Email</p> */}
            <input 
              type="text" 
              name="email" 
              placeholder="Email*" 
              className="w-full border-[1px] h-[44px] border-slate-200 p-2 rounded-md outline-none"/>
              <p className="ml-1 text-red-600">{emailError}</p>
          </div>
        </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Company Name (optional)</p> */}
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone Number" 
              className="w-full border-[1px] h-[44px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Company URL (optional)</p> */}
            <input 
              type="text" 
              name="company"
              placeholder="Company Name" 
              className="w-full border-[1px] h-[44px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>
          
          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Notes (optional)</p> */}
            <textarea placeholder="Tell us more about your project" name="message" className="w-full border-[1px] h-[100px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>      
          <Button type="submit" className="w-5/6 h-[52px] shadow mt-2 mb-2 text-base">Reserve a call</Button>
        </form>
        </div>
    </div>
    </div>
  )
}

export default ContactHero