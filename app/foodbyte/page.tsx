
import Navbar from '@/components/Navbar'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import Image from 'next/image'
import React from 'react'
import foodbyte1 from '../../public/assets/images/gallery2.png'
import foodbyte2 from '../../public/assets/images/foodbyte2.png'
import foodbyte3 from '../../public/assets/images/foodbyte3.png'
import foodbyte4 from '../../public/assets/images/foodbyte4.png'
import foodbyte5 from '../../public/assets/images/foodbyte5.png'
import foodbyte6 from '../../public/assets/images/foodbyte6.png'

const Foodbyte = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50">
        <Navbar />

        <section className="w-full flex flex-col justify-center items-center mt-56">
            <div className="flex flex-col gap-4 w-full md:w-4/6 p-2">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-white bg-slate-900">Business Management</p>
                <TextGenerateEffect words="Foodbyte"/>
            </div>
            <div className="w-[92%] md:w-[70%] mt-6 md:mt-20">
                <Image
                    src={foodbyte1}
                    alt="Yasolutions logo banner"
                    className="w-full"
                />
            </div>

            <div className="w-5/6 md:w-4/6 md:px-2 p-2 flex flex-col gap-4 mt-20">
                <p className="text-5xl font-bold">Streamlined Ordering System</p>
                <p>Our software offers a cost-effective, tablet-based kiosk ordering solution designed for fast food dining establishments. Perfect for small restaurants, this system allows customers to place orders directly from company-owned tablets via the internet, eliminating the need for expensive hardware kiosks. Customers can easily browse the menu and place orders using these tablets, enhancing their overall dining experience.
               </p>

                <p>
                Store managers benefit from a robust menu management system, enabling them to add or remove menu items and categories with ease. Additionally, the software features an analytics dashboard that provides valuable insights, such as estimated profit, total revenue, and highest-grossing products, allowing managers to make informed business decisions. This software not only streamlines operations but also helps small restaurants thrive by offering a modern, efficient ordering solution.</p>
            </div>

                <div className="grid md:grid-cols-2 gap-4 mt-36 w-[92%] md:w-[70%]">
                    <Image
                        src={foodbyte2}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                   
                    <Image
                        src={foodbyte3}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={foodbyte4}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={foodbyte5}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                </div>

                <div className="bg-gray-200 w-full flex justify-center items-center mt-24 p-12">
                    <Image
                        src={foodbyte6}
                        alt="Yasolutions logo banner"
                        className="w-[94%] md:w-[88%]"
                    />
                </div>
        </section>
        <div>
            
        </div>

        <div className="flex justify-center w-full">
        <footer className="flex justify-between items-center w-full lg:w-4/5 px-2 mt-16 mb-16">
            <p className="mt-8 lg:text-2xl font-semibold">Next Case Study</p>
            <a href="/primetort" className="mt-8 lg:text-2xl font-semibold">Primetort Leads</a>
        </footer>
        </div>

    </div>
  )
}
export default Foodbyte