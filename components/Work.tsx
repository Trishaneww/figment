import React from 'react'
import Image from 'next/image';
import img1 from '../public/assets/images/clinic3.png'
import img2 from '../public/assets/images/foodbyte2.png'
import img3 from '../public/assets/images/primetort2.png'

const Work = () => {
  return (
    <div className="mt-20 lg:mt-52">
        <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
            <h1 className="text-slate-800  text-4xl md:text-6xl font-semibold">Selected Work</h1>
        </section>

        <section className="flex flex-col justify-center items-center gap-4 w-full">
             <div className="flex flex-col-reverse md:flex-row w-[90%] xl:w-[67%] xl:min-w-[1200px] bg-white border-[1px] border-gray-200 rounded-xl p-2 px-6 xl:h-[420px] gap-6 xl:gap-16">
              <section className="flex flex-col md:w-3/4 lg:w-1/2 items-start gap-2 justify-start py-4 mt-6 lg:mt-0 mb-2 lg:mb-0">
              <p className="font-semibold text-xl lg:text-3xl">Argus Medical Clinic</p>
              <p>Our software streamlines patient management by allowing clinics to easily organize appointments, securely manage medical records, and enhance patient communication.</p>
              </section>
              <div className="flex justify-end items-center md:w-1/2">
              <Image
                  src={img1}
                  alt="image one"
                  className="rounded-md"
              />
              </div>
             </div>

             <div className="flex flex-col-reverse md:flex-row w-[90%] xl:w-[67%] xl:min-w-[1200px] bg-white border-[1px] border-gray-200 rounded-xl p-2 px-6 xl:h-[420px] gap-6 xl:gap-16">
              <section className="flex flex-col md:w-3/4 lg:w-1/2 items-start gap-2 justify-start py-4 mt-6 lg:mt-0 mb-2 lg:mb-0">
              <p className="font-semibold text-xl lg:text-3xl">Foodbyte</p>
              <p>Foodbyte&apos;s software provides an affordable tablet-based kiosk ordering system for small restaurants, enabling customers to place orders online without costly hardware. Managers can easily manage menus and access an analytics dashboard for insights on profit, revenue, and top-selling products, helping them make informed decisions.
              </p>
              </section>
  
              <div className="flex justify-end items-center md:w-1/2">
              <Image
                  src={img2}
                  alt="image one"
                  className="rounded-md"
              />
              </div>
             </div>

             <div className="flex flex-col-reverse md:flex-row w-[90%] xl:w-[67%] xl:min-w-[1200px] bg-white border-[1px] border-gray-200 rounded-xl p-2 px-6 xl:h-[420px] gap-6 xl:gap-16">
              <section className="flex flex-col md:w-3/4 lg:w-2/4 items-start gap-2 justify-start py-4 mt-6 lg:mt-0 mb-2 lg:mb-0">
              <p className="font-semibold text-xl lg:text-3xl">Prime Tort Leads</p>
              <p>PrimeTort Leads, the marketing arm of YA Solutions Inc, specializes in Mass Tort Case Acquisition. Through targeted digital marketing strategies across various channels, PrimeTort Leads excels at uncovering valuable leads, delivering significant marketing results, and achieving measurable KPIs.</p>
              </section>
  
              <div className="flex justify-end items-center md:w-1/2">
              <Image
                  src={img3}
                  alt="image one"
                  className="rounded-md"
              />
              </div>
             </div>
        </section>
    </div>
  )
}

export default Work