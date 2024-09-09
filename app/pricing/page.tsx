import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Insights from '@/components/Insights'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col bg-slate-50">
        <Navbar />
        <Pricing />
        <Insights />
        <Faq />
        <Footer />
    </div>
  )
}

export default page