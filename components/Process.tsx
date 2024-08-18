import React from 'react'
import video2 from '../public/assets/images/bg2.png'
import { Button } from './ui/button'
import { FaPager } from "react-icons/fa";
import { TbDatabaseImport } from "react-icons/tb";
import { CgDatabase } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Process = () => {
  return (
    <div className="mt-40 flex justify-center items-center h-[100vh] bg-slate-950 text-slate-50">
    <div className="flex flex-col gap-16 w-3/5">
        <section className="flex justify-between  w-full p-2">
            <div className="flex flex-col w-2/4 gap-6">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-green-200">Designed for developers</p>
                <h1 className="text-5xl font-bold">Our essential design process</h1>
                <p>Save engineering time with unified payments functionality. We obsess over the maze of gateways, payments rails, and financial institutions that make up the global economic landscape so that your teams can build what you need on one platform.</p>
                <Button className="w-[250px] shadow">Read the docs</Button>
            </div>

            <div className="">
                <video width="400" height="620" autoPlay loop muted className="flex border-[1px] border-slate-900 rounded-lg">
                    <source src="/assets/videos/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-8 justify-between p-2">
            <div className="flex flex-col justify-between w-1/4 h-[200px]">
                <div className="flex flex-col gap-2">
                    <div>
                        <FaPager size={36} className="text-green-300 relative"/>
                        {/* <FaCode size={18} className="text-purple-300 relative -top-3 left-2 opacity-70" /> */}
                    </div>
                    <p className="font-bold mt-2">Use Stripe with your stack</p>
                    <p className="text-sm">We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>
                </div>
                <div className="flex self-baseline items-center gap-2">
                    <p>See more</p>
                    <IoIosArrowForward />
                </div>
            </div>

            <div className="flex flex-col justify-between w-1/4 h-[200px]">
                <div className="flex flex-col gap-2">
                    <div>
                        <FaPager size={36} className="text-green-300 relative"/>
                        {/* <FaCode size={18} className="text-purple-300 relative -top-3 left-2 opacity-70" /> */}
                    </div>
                    <p className="font-bold mt-2">Use Stripe with your stack</p>
                    <p className="text-sm">We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>
                </div>
                <div className="flex self-baseline items-center gap-2">
                    <p>See more</p>
                    <IoIosArrowForward />
                </div>
            </div>

            <div className="flex flex-col justify-between w-1/4 h-[200px]">
                <div className="flex flex-col gap-2">
                    <div>
                        <FaPager size={36} className="text-green-300 relative"/>
                        {/* <FaCode size={18} className="text-purple-300 relative -top-3 left-2 opacity-70" /> */}
                    </div>
                    <p className="font-bold mt-2">Use Stripe with your stack</p>
                    <p className="text-sm">We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>
                </div>
                <div className="flex self-baseline items-center gap-2">
                    <p>See more</p>
                    <IoIosArrowForward />
                </div>
            </div>

            <div className="flex flex-col justify-between w-1/4 h-[200px]">
                <div className="flex flex-col gap-2">
                    <div>
                        <FaPager size={36} className="text-green-300 relative"/>
                        {/* <FaCode size={18} className="text-purple-300 relative -top-3 left-2 opacity-70" /> */}
                    </div>
                    <p className="font-bold mt-2">Use Stripe with your stack</p>
                    <p className="text-sm">We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>
                </div>
                <div className="flex self-baseline items-center gap-2">
                    <p>See more</p>
                    <IoIosArrowForward />
                </div>
            </div>
        </section>

    </div>
    </div>
  )
}

export default Process