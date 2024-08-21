import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const YaSolutions = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50">
        <Navbar />

        <section className="w-full flex flex-col justify-center items-center mt-56">

            <div className="flex flex-col gap-4">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] border-2 border-slate-900 text-slate-900">Designed for developers</p>
                <h1 className="font-bold text-8xl">YaSolutions Inc</h1>
                <p>Whatever your unique idea or needs, weve got the tools and know how to build your custom solution from discovery to deployment.</p>

            </div>
            <div className="bg-blue-800 w-[92%] md:w-[70%] mt-20">
                <Image
                    width={1000}
                    height={1000}
                    src='/assets/images/yasolutions1.png'
                    alt="Yasolutions logo banner"
                    className="w-full"
                />
            </div>

                <div className="grid md:grid-cols-2 gap-4 mt-36 w-[92%] md:w-[70%]">
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/yasolutions2.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/yasolutions3.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/yasolutions4.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/yasolutions5.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                </div>

                <div className="bg-slate-900 w-full flex justify-center items-center mt-24 py-32">
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/yasolutions6.png'
                        alt="Yasolutions logo banner"
                        className="w-[94%] md:w-[74%]"
                    />
                </div>
        </section>

        <Footer />

    </div>
  )
}

export default YaSolutions