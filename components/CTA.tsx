import React from 'react'
import '../styles/global.scss';
import Image from 'next/image';
import { companiesList, companyData } from '@/data';
import { Button } from './ui/button';

const CTA = () => {
  return (
    <div className="flex mt-20 md:w-3/4 self-center">
        <div className="flex flex-col md:flex-row w-full gap-4 wrapper py-10 text-3xl md:text-5xl">
            <div className="flex flex-col gap-2 justify-center md:w-2/4 font-bold ml-10">
                <p className="">We work with</p>
                <div className="flex flex-wrap gap-4">
                    <p>brands in</p>
                    <div className="overflow-hidden h-14 ">
                        <span className="span bg-gradient-to-r from-green-300 to bg-slate-900 bg-clip-text text-transparent">Marketting</span>
                        <span className="span bg-gradient-to-r from-green-300 to bg-slate-900 bg-clip-text text-transparent">Ecommerce</span>
                        <span className="span bg-gradient-to-r from-green-300 to bg-slate-900 bg-clip-text text-transparent">Medical</span>
                        <span className="span bg-gradient-to-r from-green-300 to bg-slate-900 bg-clip-text text-transparent">Tech</span>
                        <span className="span bg-gradient-to-r from-green-300 to bg-slate-900 bg-clip-text text-transparent">Marketting</span>
                    </div>
                </div>
                <Button className="w-[160px] md:w-[250px] shadow md:mt-8">Book a meeting</Button>
            </div>
           
            <div className="grid grid-cols-3 md:w-2/4 opacity-40 p-8">
                {companiesList.map((company) => (
                    <Image
                        width={130}
                        height={120}
                        src={company.src}
                        alt="company logo"
                        className="grayscale"
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default CTA