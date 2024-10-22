import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import Image from 'next/image'
import React from 'react'
import primetort1 from '../../public/assets/images/gallery3.png'
import primetort2 from '../../public/assets/images/primetort2.png'
import primetort3 from '../../public/assets/images/work3.png'
import primetort4 from '../../public/assets/images/primetort3.png'
import primetort5 from '../../public/assets/images/primetort4.png'
import primetort6 from '../../public/assets/images/primetort5.png'

const Primetort = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50">
        <Navbar />

        <section className="w-full flex flex-col justify-center items-center mt-56">
        <div className="flex flex-col gap-4 w-full md:w-4/6 p-2">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-white bg-slate-900">Lead Generation</p>
                <TextGenerateEffect words="PrimeTort Leads"/>
                {/* <p>Whatever your unique idea or needs, weve got the tools and know how to build your custom solution from discovery to deployment.</p> */}
            </div>
            <div className="w-[92%] md:w-[70%] mt-6 md:mt-20">
                <Image
                    src={primetort1}
                    alt="Yasolutions logo banner"
                    className="w-full"
                />
            </div>


            <div className="w-full px-6 md:px-2 p-2 md:w-4/6 flex flex-col gap-4 mt-20">
                <p className="text-2xl md:text-5xl font-bold">Mass Tort Acquisition</p>
                <p>
                PrimeTort Leads, the marketing arm of YA Solutions Inc, specializes in Mass Tort Case Acquisition. Through targeted digital marketing strategies across various channels, PrimeTort Leads excels at uncovering valuable leads, delivering significant marketing results, and achieving measurable KPIs. With a focus on precision and effectiveness, PrimeTort Leads is your trusted partner in finding the needle in the haystack.
               </p>
            </div>

                <div className="grid md:grid-cols-2 gap-4 mt-36 w-[92%] md:w-[70%]">
                    <Image
                        src={primetort2}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={primetort3}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={primetort4}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={primetort5}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                </div>

                <div className="bg-slate-900 w-full flex justify-center items-center mt-24 p-12">
                    <Image
                        src={primetort6}
                        alt="Yasolutions logo banner"
                        className="w-[94%] md:w-[88%]"
                    />
                </div>
        </section>

        <div className="flex justify-center w-full">
        <footer className="flex justify-between items-center w-full lg:w-4/5 px-2 mt-16 mb-16">
            <p className="mt-8 lg:text-2xl font-semibold">Next Case Study</p>
            <a href="/yasolutions" className="mt-8 lg:text-2xl font-semibold">YA Solutions</a>
        </footer>
        </div>
    </div>
  )
}
export default Primetort