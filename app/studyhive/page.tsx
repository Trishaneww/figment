import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const StudyHive = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50">
        <Navbar />

        <section className="w-full flex flex-col justify-center items-center mt-56">
            <div className="bg-blue-800 w-[92%] md:w-[70%]">
                <Image
                    width={1000}
                    height={1000}
                    src='/assets/images/studyhive1.png'
                    alt="Yasolutions logo banner"
                    className="w-full"
                />
            </div>

                <div className="grid md:grid-cols-2 gap-4 mt-36 w-[92%] md:w-[70%]">
                    {/* <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/studyhive2.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    /> */}

                    <div className="bg-black flex justify-center items-center overflow-hidden rounded-lg">
                        <video  autoPlay loop muted className="border-[1px] border-slate-900 rounded-lg w-full">
                            <source src="/assets/videos/video3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                   
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/studyhive3.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/studyhive4.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/studyhive2.png'
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                </div>

                <div className="bg-slate-900 w-full flex justify-center items-center mt-24 p-12">
                    <Image
                        width={1000}
                        height={1000}
                        src='/assets/images/studyhive5.png'
                        alt="Yasolutions logo banner"
                        className="w-[94%] md:w-[88%]"
                    />
                </div>
        </section>

        <Footer />

    </div>
  )
}
export default StudyHive