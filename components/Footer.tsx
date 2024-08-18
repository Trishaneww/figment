import { contactData, companyData, supportData} from '@/data'
import Link from 'next/link'
import React from 'react'
import '../styles/global.scss';

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-40 p-10 xl:items-center w-full xl:h-[24rem] bg-slate-50  mt-20 shadow">
        <section className="xl:1/4 flex flex-col gap-4 justify-start">
            <h1 className="text-slate-900 font-bold text-3xl xl:text-5xl xl:ml-20">Figment Studios</h1>
            <p className="text-slate-900 xl:ml-20 mb-9 xl:mb-0 text-lg">@2024 Figment Studios. All rights reserved</p>
        </section>

        <section className="flex gap-12 xl:justify-center items-start xl:w-3/5 flex-wrap">
            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Company</p>
                {companyData.map((link) => (
                    <Link href='/' className="text-slate-700">
                        <p className="text-lg">{link.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Contact Us</p>
                {contactData.map((link) => (
                    <Link href='/' className="text-slate-700">
                        <p className="text-lg">{link.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Support</p>
                {supportData.map((link) => (
                    <Link href='/' className="text-slate-700">
                        <p className="text-lg">{link.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Legal</p>
                <p className="text-slate-700 text-lg">Terms & Conditions</p>
                <p className="text-slate-700 text-lg">Privacy Policy</p>
            </div>
        </section>

    </div>
  )
}

export default Footer