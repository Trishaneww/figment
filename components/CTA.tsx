import React from 'react'
import '../styles/global.scss';
import Image from 'next/image';

const CTA = () => {
  return (
    <div className="flex w-full mt-20">
        <div className="flex w-2/4 gap-4 wrapper py-10 text-4xl">
            <p className="">We work with</p>
            <div className="overflow-hidden h-10 text-blue-700 font-bold">
                <span className="span">Marketting</span>
                <span className="span">Ecommerce</span>
                <span className="span">Medical</span>
                <span className="span">Tech</span>
                <span className="span">Marketting</span>
            </div>
        </div>

        <div className="grid grid-cols-3 w-2/4 bg-blue-500">
            <Image
                width={200}
                height={200}
                src="/assets/images/company3.png"
                alt="company logo"
            />
            
        </div>


    </div>
  )
}

export default CTA