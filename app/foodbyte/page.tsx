import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import Image from 'next/image'
import React from 'react'

const Foodbyte = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50">
        <Navbar />

        <section className="w-full flex flex-col justify-center items-center mt-56">
            <div className="flex flex-col gap-4 w-full md:w-4/6 p-2">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-white bg-slate-900">Business Management</p>
                <TextGenerateEffect words="Foodbyte"/>
                {/* <p>Whatever your unique idea or needs, weve got the tools and know how to build your custom solution from discovery to deployment.</p> */}
            </div>
            <div className="bg-blue-800 w-[92%] md:w-[70%] mt-6 md:mt-20">
                <Image
                    width={1000}
                    height={1000}
                    src='/assets/images/gallery2.png'
                    alt="Yasolutions logo banner"
                    className="w-full"
                />
            </div>

            <div className="w-4/6 flex flex-col gap-4 mt-20">
                <p className="text-5xl font-bold">Streamlined Ordering System</p>
                <p>Our software offers a cost-effective, tablet-based kiosk ordering solution designed for fast food dining establishments. Perfect for small restaurants, this system allows customers to place orders directly from company-owned tablets via the internet, eliminating the need for expensive hardware kiosks. Customers can easily browse the menu and place orders using these tablets, enhancing their overall dining experience.
               </p>

                <p>
                Store managers benefit from a robust menu management system, enabling them to add or remove menu items and categories with ease. Additionally, the software features an analytics dashboard that provides valuable insights, such as estimated profit, total revenue, and highest-grossing products, allowing managers to make informed business decisions. This software not only streamlines operations but also helps small restaurants thrive by offering a modern, efficient ordering solution.</p>
            </div>

                <div className="grid md:grid-cols-2 gap-4 mt-36 w-[92%] md:w-[70%]">
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/foodbyte2.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                   
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/foodbyte3.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/foodbyte4.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/foodbyte5.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                </div>

                <div className="bg-gray-200 w-full flex justify-center items-center mt-24 p-12">
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/foodbyte6.png'
                        alt="Yasolutions logo banner"
                        className="w-[94%] md:w-[88%]"
                    />
                </div>
        </section>
        <div>
            
        </div>

        <Footer />

    </div>
  )
}
export default Foodbyte