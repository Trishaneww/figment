import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import hero9 from '../public/assets/images/hero9.png'
import hero10 from '../public/assets/images/hero10.png'

const CTA3 = () => {
  return (
    <div className="flex flex-col items-center mt-36">
        <h1 className="text-slate-800  text-3xl md:text-5xl font-semibold w-[90%] xl:w-[45%] text-center">Trusted by top teams to build high-impact Websites.</h1>
        <div className="flex w-full">
        <Image
            src={hero10}
            alt="third call to action"
            className="w-full hidden lg:flex"
        />
        <Image
            src={hero9}
            alt="third call to action"
            className="w-full lg:hidden"
        />
        </div>
        <div className="flex flex-col items-center w-[90%] lg:w-2/4 xl:w-1/3 text-center gap-6 -mt-32">
            <p className="text-lg xl:text-xl">The best teams are ahead of their competition by designing and launching their website with Figment Studios.</p>
            <Link href="/contact">
              <Button className="w-[320px] h-[55px] text-lg bg-black rounded-lg text-white  shadow mt-4">Get a free quote <FaArrowRightLong className="ml-2" size={20}/></Button>
            </Link>
        </div>
    </div>
  )
}

export default CTA3