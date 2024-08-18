import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col">
        <Navbar />
        <Pricing />
        <Faq />
        <Footer />
    </div>
  )
}

export default page