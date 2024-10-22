
import ContactHero from '@/components/ContactHero'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-green-50">
        <ContactHero />
        <Toaster />
    </div>
  )
}

export default Contact