import { selectedWork, services } from '@/data'
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { Button } from './ui/button';
import Image from 'next/image';
import '../styles/global.scss';
import { GiCheckMark } from 'react-icons/gi';
import Link from 'next/link';

const Services = () => {
  return (
    <div>
    <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
        <h1 className="text-slate-800  text-3xl md:text-6xl font-semibold">View Our Plans</h1>
        <div className="flex flex-col md:flex-row gap-2 md:gap-16 md:justify-between items-center">
            <p className="text-slate-500 lg:text-xl">Explore our service plans to see tailored solutions designed to bring your website vision to life</p>
            <Link href="/services"><button className="w-[180px] h-[48px] p-2 bg-slate-100 rounded-xl">View our services</button></Link>
        </div>
    </section>

    <section className="flex flex-col justify-center items-center gap-4 w-full">
        {services.map((project) => (
            <div className="w-5/6 min-w-[360px] xl:w-4/6 xl:h-[34rem] flex flex-col xl:flex-row justify-between gap-6 bg-white p-8 border-slate-200 border-[1px] rounded-lg">
              <div className="flex flex-col justify-between xl:w-1/3">
                <div className="flex flex-col  gap-2">
                    <p className="text-2xl md:text-3xl font-bold">{project.title}</p>
                    <p>{project.descr}</p>
                    <ul className="flex flex-col gap-2 flex-wrap mt-6">
                        {project.featuresList.map((feature) => (
                             <li className="flex items-center gap-4">
                             {/* <div className="flex justify-center items-center border-[1px] border-green-500 w-[24px] h-[24px] rounded-full">
                                 <FaCheck size={12} />
                             </div> */}
                             <div className="w-[26px] h-[26px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                                 <GiCheckMark size={16}/>
                             </div>
                             <p className="text-md">{feature}</p>
                         </li>
                        ))}
                    </ul>
                </div>

                <a href="/pricing"><Button className="mt-10 xl:mt-0 w-[170px] shadow text-base">View Plans</Button></a>
              </div>

              <div className="flex w-full xl:w-2/3 overflow-hidden self-end">
                <Image
                  width={1000}
                  height={1000}
                  src={project.src2}
                  alt="services image"
                  className="rounded-lg"
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