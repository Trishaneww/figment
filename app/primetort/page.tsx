import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Primetort = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50">
        <Navbar />

        <section className="w-full flex flex-col justify-center items-center mt-56">
            <div className="bg-blue-800 w-[92%] md:w-[70%]">
                <Image
                    width={1000}
                    height={1000}
                    src='/assets/images/primetort1.png'
                    alt="Yasolutions logo banner"
                    className="w-full"
                />
            </div>

                <div className="grid md:grid-cols-2 gap-4 mt-36 w-[92%] md:w-[70%]">
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/primetort2.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                   
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/work3.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/primetort3.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/primetort4.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                </div>

                <div className="bg-slate-900 w-full flex justify-center items-center mt-24 p-12">
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/primetort5.png'
                        alt="Yasolutions logo banner"
                        className="w-[94%] md:w-[88%]"
                    />
                </div>
        </section>
        <Footer />
    </div>
  )
}
export default Primetort