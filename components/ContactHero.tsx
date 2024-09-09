import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { GiCheckMark } from 'react-icons/gi';

const ContactHero = () => {
  return (
    <div className="flex justify-center w-full">
        <div className="w-1/5 h-4/5 bg-gradient-to-r from-green-200 to-green-300 rounded-full absolute z-1 top-[140%] md:top-[53%] left-[30%] md:left-[72%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-24 w-full lg:w-4/5 p-8 z-20">
        <div className="flex flex-col w-full">
            <Image
                width={1000}
                height={1000}
                alt="contact image banner"
                src="/assets/images/contact.png"
                className="md:-ml-6 lg:-ml-14"
            />

            <p className="text-2xl md:text-5xl  font-bold mt-6">Accelerate your business with us</p>
            <p className="mt-4">Get the free, personalized insights you need to boost your site's conversion rate and elevate your brand.</p>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex gap-2 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-green-500 rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p>Fully designed, custom mobile and desktop mockups</p>
              </li>

              <li className="flex gap-2 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-green-500 rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p>Fully designed, custom mobile and desktop mockups</p>
              </li>

              <li className="flex gap-2 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-green-500 rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p>Fully designed, custom mobile and desktop mockups</p>
              </li>


            </ul>

        </div>

        <form className="max-w-[500px] w-full md:w-4/6 lg:w-3/6 h-[95%] shadow-lg bg-white rounded-lg flex flex-col items-center gap-4 mt-20">
          <div className="flex flex-col items-start w-5/6 mt-6 gap-2">
            <p className="flex justify-start text-slate-900">Name</p>
            <input 
              type="text" 
              name="tabs"
              placeholder="John Doe"
              className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Email</p>
            <input 
              type="text" 
              name="tabs" 
              placeholder="john@gmail.com" 
              className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Company Name</p>
            <input 
              type="text" 
              name="tabs" 
              placeholder="YA Solutions Inc" 
              className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Website URL</p>
            <input 
              type="text" 
              name="tabs"
              placeholder="https://primetort.com" 
              className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Notes</p>
            <textarea placeholder="Example notes" className="w-full border-[1px] h-[110px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>
   
        
                   

          <Button className="w-5/6 shadow mt-10">Submit</Button>

        </form>
        </div>

    </div>
  )
}

export default ContactHero