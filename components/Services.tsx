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
      ))}
        
    </section>
</div>
  )
}

export default Services