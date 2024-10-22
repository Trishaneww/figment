
import Navbar from '@/components/Navbar'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import Image from 'next/image'
import React from 'react'
import yasolutions1 from '../../public/assets/images/gallery1.png'
import yasolutions2 from '../../public/assets/images/yasolutions2.png'
import yasolutions3 from '../../public/assets/images/yasolutions3.png'
import yasolutions4 from '../../public/assets/images/yasolutions4.png'
import yasolutions5 from '../../public/assets/images/yasolutions5.png'
import yasolutions6 from '../../public/assets/images/yasolutions6.png'

const YaSolutions = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50">
        <Navbar />

        <section className="w-full flex flex-col justify-center items-center mt-56">

            <div className="flex flex-col gap-4 w-full md:w-4/6 p-2">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-white bg-slate-900">Digital Marketing</p>
                <TextGenerateEffect words="YaSolutions Inc"/>
                {/* <p>Whatever your unique idea or needs, weve got the tools and know how to build your custom solution from discovery to deployment.</p> */}
            </div>
            <div className="w-[92%] md:w-[70%] mt-6 md:mt-20">
                <Image
                    src={yasolutions1}
                    alt="Yasolutions logo banner"
                    className="w-full"
                />
            </div>

            <div className="w-full p-2 md:w-4/6 flex flex-col gap-4 mt-20">
                <p className="text-2xl md:text-5xl font-bold">Lead Generation</p>
                <p>YaSolutionsInc is a lead generation company specializing in delivering high-quality leads across various industries. Their tailored strategies and cutting-edge technologies help businesses connect with potential customers, driving growth and increasing sales. Their skilled team employs tailored technology to identify premium leads and facilitate their conversion into sales. Having spent years refining this proprietary technology and witnessing its effectiveness firsthand, they posses a system that truly delivers results. The combination of their technology and talented workforce forms the essential elements of their unique advantage.
               </p>
            </div>

                <div className="grid md:grid-cols-2 gap-4 mt-36 w-[92%] md:w-[70%]">
                    <Image
                        src={yasolutions2}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={yasolutions3}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={yasolutions4}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={yasolutions5}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                </div>

                <div className="bg-slate-900 w-full flex justify-center items-center mt-24 py-32">
                    <Image
                        src={yasolutions6}
                        alt="Yasolutions logo banner"
                        className="w-[94%] md:w-[74%]"
                    />
                </div>
        </section>

        <div className="flex justify-center w-full">
        <footer className="flex justify-between items-center w-full lg:w-4/5 px-2 mt-16 mb-16">
            <p className="mt-8 lg:text-2xl font-semibold">Next Case Study</p>
            <a href="/clinic" className="mt-8 lg:text-2xl font-semibold">Clinic Software</a>
        </footer>
        </div>

    </div>
  )
}

export default YaSolutions