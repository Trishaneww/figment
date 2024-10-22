import React from 'react'
import { Button } from './ui/button'
import { FaPager } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";

const Process = () => {
  return (
    <div className="mt-40 flex justify-center items-center py-52 bg-slate-950 text-slate-50 -skew-y-6">
    <div className="flex flex-col gap-28 lg:w-4/5 skew-y-6">
        <section className="flex flex-col xl:flex-row xl:justify-between w-full gap-4 p-2">
            <div className="flex flex-col xl:w-2/5 gap-6">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[190px] shadow text-green-200">Accelerate your business</p>
                <h1 className="text-3xl lg:text-5xl font-bold mt-2">Our essential design process</h1>
                <p>Our process begins by understanding your vision and goals, ensuring every aspect aligns with your brand identity. From wireframes to the final design, we focus on the smallest details—colors, typography, layout, and user experience—crafting a seamless and visually stunning website that stands out. We prioritize constant communication, working closely with you every step of the way to ensure your feedback is incorporated and your expectations are exceeded.</p>
                <a href="/services"><Button className="w-[220px] lg:w-[250px] shadow text-base">Learn More</Button></a>
            </div>

            <div className="flex justify-start items-end mt-10 xl:mt-0 h-full">
                <video width="780" height="620" autoPlay loop muted className="border-[1px] border-slate-900 rounded-lg">
                    <source src="/assets/videos/video7.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
        <section className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap gap-8 justify-between p-2">
            <div className="flex flex-col justify-between w-full md:w-[46%] lg:w-1/4">
                <div className="flex flex-col gap-2">
                    <div>
                        <FaPager size={36} className="text-green-300 relative"/>
                        {/* <FaCode size={18} className="text-purple-300 relative -top-3 left-2 opacity-70" /> */}
                    </div>
                    <p className="font-bold mt-2 text-lg">Planning & Wireframing</p>
                    <p className="text-base h-[120px] lg:h-[200px] xl:h-[170px]">The website development process begins with discovery and planning, where we collaborate to define the website&apos;s goals, target audience, key functionalities, and content requirements.</p>
                </div>
                <div className="flex self-baseline items-center gap-2">
                    <a href="/services/#process">See more</a>
                    <IoIosArrowForward />
                </div>
            </div>

            <div className="flex flex-col justify-between w-full md:w-[46%] lg:w-1/4">
                <div className="flex flex-col gap-2">
                    <div>
                        <FaPaintBrush size={36} className="text-green-300 relative"/>
                        {/* <FaCode size={18} className="text-purple-300 relative -top-3 left-2 opacity-70" /> */}
                    </div>
                    <p className="font-bold mt-2 text-lg">Designing</p>
                    <p className="text-base h-[120px] lg:h-[200px] xl:h-[170px]">we transform your vision into a visually compelling and user-friendly website. Our team focuses on creating layouts that blend aesthetics with functionality, ensuring an intuitive user experience. </p>
                </div>
                <div className="flex self-baseline items-center gap-2">
                <a href="/services/#process">See more</a>
                    <IoIosArrowForward />
                </div>
            </div>

            <div className="flex flex-col justify-between w-full md:w-[46%] lg:w-1/4 ">
                <div className="flex flex-col gap-2">
                    <div>
                        <FaCode size={36} className="text-green-300 relative"/>
                        {/* <FaCode size={18} className="text-purple-300 relative -top-3 left-2 opacity-70" /> */}
                    </div>
                    <p className="font-bold mt-2 text-lg">Development</p>
                    <p className="text-base h-[120px] lg:h-[200px] xl:h-[170px]">We build responsive websites that work flawlessly on all devices and integrate essential features and tools to enhance user experience. </p>
                </div>
                <div className="flex self-baseline items-center gap-2">
                    <a href="/services/#process">See more</a>
                    <IoIosArrowForward />
                </div>
            </div>

            <div className="flex flex-col justify-between w-full md:w-[46%] lg:w-1/4">
                <div className="flex flex-col gap-2">
                    <div>
                        <BsRocketTakeoff size={36} className="text-green-300 relative"/>
                        {/* <FaCode size={18} className="text-purple-300 relative -top-3 left-2 opacity-70" /> */}
                    </div>
                    <p className="font-bold mt-2 text-lg">Testing & Deployment</p>
                    <p className="text-base h-[120px] lg:h-[200px] xl:h-[170px]">We rigorously check your website for functionality, compatibility, and security across all devices. Once it meets our standards and gains your approval, we  launch it live.</p>
                </div>
                <div className="flex self-baseline items-center gap-2">
                    <a href="/services/#process">See more</a>
                    <IoIosArrowForward />
                </div>
            </div>
        </section>

    </div>
    </div>
  )
}

export default Process