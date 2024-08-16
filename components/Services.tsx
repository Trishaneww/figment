import { selectedWork } from '@/data'
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { Button } from './ui/button';
import Image from 'next/image';

const Services = () => {
  return (
    <div>
    <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
        <h1 className="text-slate-800  text-3xl md:text-6xl font-semibold">Selected Work</h1>
        <div className="flex w-2/5 gap-8 justify-between items-center">
            <p className="text-slate-500 lg:text-xl">Find the answers to your questions here</p>
            <button className="w-[180px] h-[48px] p-2 bg-slate-100 rounded-xl">See All Case Studies</button>
        </div>
    </section>

    <section>
        {selectedWork.map((project) => (
            <div className="w-4/6 h-[32rem] flex gap-6 bg-white p-8 border-slate-200 border-[1px] rounded-lg">
              <div className="flex flex-col justify-between w-1/3">
                <div className="flex flex-col  gap-2">
                  <p className="text-3xl font-bold">{project.title}</p>
                  <p>{project.descr}</p>
                </div>
                
                <ul className="flex gap-2 flex-wrap">
                  {project.featuresList.map((feature) => (
                    <li className="flex justify-center items-center h-[36px] rounded-lg p-2 bg-green-100">
                        <FaCheck />
                        <p className="text-green-600 text-sm">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-2/3 overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={project.src}
                  alt="services image"
                />
              </div>
            </div>
          ))}
      {/* {selectedWork.map((project) => (
        <div>
          <div>
            <p>{project.title}</p>
            <p>{project.descr}</p>

            <ul>
              {project.featuresList.map((feature) => (
                <li>
                  <FaCheck />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>

            <Button>View Plans</Button>
          </div>

          <div>
            <Image
              width={1000}
              height={1000}
              src="/assets/images/foodbyte1.png"
              alt="services image"
            />
          </div>

        </div>
      ))} */}
        
    </section>
</div>
  )
}

export default Services