import { contactData, companyData, supportData} from '@/data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-32 p-10 xl:items-center w-full xl:h-[24rem] bg-slate-50  mt-20">
        <section className="xl:1/4 flex flex-col gap-4 justify-start">
            <h1 className="text-slate-900 font-bold text-3xl xl:text-5xl xl:ml-20">Figment Studios</h1>
            <p className="text-slate-900 xl:ml-20 mb-9 xl:mb-0">@2024 Argus Doctors. All rights reserved</p>
        </section>

        <section className="flex gap-12 xl:justify-center items-start xl:w-3/5 flex-wrap">
            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold">Comapny</p>
                {companyData.map((link) => (
                    <Link href='/' className="text-slate-700">
                        <p>{link.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold">Contact Us</p>
                {contactData.map((link) => (
                    <Link href='/' className="text-slate-700">
                        <p>{link.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold">Support</p>
                {supportData.map((link) => (
                    <Link href='/' className="text-slate-700">
                        <p>{link.name}</p>
                    </Link>
                ))}
            </div>

            {/* <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold">Hours Of Operation</p>
                <div>
                    <p className="text-slate-700 font-semibold">Monday - Friday</p>
                    <p className="text-slate-700">9:00 AM to 5:00 PM</p>
                </div>
                <div>
                    <p className="text-slate-700 font-semibold">Saturday - Sunday</p>
                    <p className="text-slate-700">Closed</p>
                </div>
            </div> */}

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold">Legal</p>
                <p className="text-slate-700">Terms & Conditions</p>
                <p className="text-slate-700">Privacy Policy</p>
            </div>
        </section>

    </div>
  )
}

export default Footer