import Bento from '@/components/Bento'
import ContactHero from '@/components/ContactHero'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50">
        <Navbar />
        <ContactHero />

        <Bento />

        <div className="w-full">
        <Faq />
        </div>

 

        <Footer />

    </div>
  )
}

export default Contact