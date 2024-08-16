import { selectedWork } from '@/data'
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { Button } from './ui/button';
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';

const Work = () => {
  return (
    <div className="mt-52">
        <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
            <h1 className="text-slate-800  text-3xl md:text-6xl font-semibold">Selected Work</h1>
            {/* <div className="flex w-2/5 gap-8 justify-between items-center">
                <p className="text-slate-500 lg:text-xl">Find the answers to your questions here</p>
                <button className="w-[180px] h-[48px] p-2 bg-slate-100 rounded-xl">See All Case Studies</button>
            </div> */}
        </section>

        <section className="flex flex-col justify-center items-center gap-4 w-full">
          {selectedWork.map((project) => (
            <div className="w-4/6 h-[32rem] flex gap-6 bg-white p-8 border-slate-200 border-[1px] rounded-lg">
              <div className="flex flex-col justify-between w-1/3">
                <div className="flex flex-col  gap-2">
                  <p className="text-3xl font-bold">{project.title}</p>
                  <p>{project.descr}</p>
                  <div className="flex gap-2 items-center">
                    <a href={project.link}>View Live Website</a>
                    <IoIosArrowRoundForward size={25}/>
                  </div>
                </div>
                
                <ul className="flex gap-2 flex-wrap">
                  {project.featuresList.map((feature) => (
                    <li className="flex justify-center items-center h-[36px] rounded-lg p-2 bg-green-100">
                      <p className="text-green-600 text-sm">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-2/3 overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={project.href}
                  alt="services image"
                />
              </div>
            </div>
          ))}
            
        </section>
    </div>
  )
}

export default Work