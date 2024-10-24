
import Navbar from '@/components/Navbar'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import Image from 'next/image'
import React from 'react'
import '../../styles/global.scss';
import clinic1 from '../../public/assets/images/gallery4.png'
import clinic2 from '../../public/assets/images/clinic2.png'
import clinic3 from '../../public/assets/images/clinic3.png'
import clinic4 from '../../public/assets/images/clinic4.png'
import clinic5 from '../../public/assets/images/clinic5.png'
import clinic6 from '../../public/assets/images/clinic6.png'

const Clinic = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50">
        <Navbar />

        <section className="w-full flex flex-col justify-center items-center mt-56">
            <div className="flex flex-col gap-4 w-full md:w-4/6 p-2">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-white bg-slate-900">Booking System</p>
                <TextGenerateEffect words="Clinic Software"/>
                {/* <p>Whatever your unique idea or needs, weve got the tools and know how to build your custom solution from discovery to deployment.</p> */}
            </div>
            <div className="w-[92%] md:w-[70%] mt-6 md:mt-20">
                <Image
                    src={clinic1}
                    alt="Yasolutions logo banner"
                    className="w-full"
                />
            </div>

            <div className="w-full px-6 md:px-2 p-2 md:w-4/6 flex flex-col gap-4 mt-20">
                <p className="text-2xl md:text-5xl font-bold">Streamlined Patient Management</p>
                <p>
                Our software enables medical clinics to efficiently manage patient appointments, medical records, and communication in one secure platform. Clinics can easily schedule and organize appointments, track patient history, and streamline administrative tasks, while patients benefit from the convenience of booking appointments online, accessing their medical information, and receiving automated reminders. This all-in-one solution enhances the overall patient experience and optimizes clinic operations.
               </p>
            </div>

                <div className="grid md:grid-cols-2 gap-4 mt-36 w-[92%] md:w-[70%]">
                    <Image
                        src={clinic2}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={clinic3}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={clinic4}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={clinic5}
                        alt="Yasolutions logo banner"
                        className="rounded-lg"
                    />
                </div>

                <div className="bg-slate-900 w-full flex justify-center items-center mt-24 p-12">
                    <Image
                        src={clinic6}
                        alt="Yasolutions logo banner"
                        className="w-[94%] md:w-[88%]"
                    />
                </div>
        </section>

        <div className="flex justify-center w-full">

        <footer className="flex justify-between items-center w-full lg:w-4/5 px-2 mt-16 mb-16">
            <p className="mt-8 lg:text-2xl font-semibold">Next Case Study</p>
            <a href="/digitalwealth" className="mt-8 lg:text-2xl font-semibold">Digital Wealth</a>
        </footer>

        </div>
    </div>
  )
}

export default Clinic