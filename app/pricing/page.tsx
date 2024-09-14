import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import PricingChart from '@/components/PricingChart'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col bg-slate-50">
        <Navbar />
        <Pricing />
        <div className="flex justify-center w-full">
          <PricingChart />
        </div>
        <Faq />
        <Footer />
    </div>
  )
}

export default page