import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from 'next/image'
import { faqData } from '@/data'


const Faq = () => {
  return (
    <div className="mt-40 scroll-smooth" id="faq">
        <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
            <h1 className="text-slate-800  text-3xl md:text-6xl font-semibold">Frequently Asked Questions</h1>
            <p className="text-slate-500 w-2/3 lg:text-xl">Find the answers to your questions here</p>
        </section>

        <div className="flex justify-center gap-6 w-full p-4">
            <Accordion type="single" collapsible className="flex flex-col gap-4 md:w-3/5">
                {faqData.map((accordion:any, idx:number) => (
                    <AccordionItem value={`item-${idx}`} className="border-none p-4  rounded-2xl">
                    <AccordionTrigger className="lg:text-xl text-left">{accordion.item}</AccordionTrigger>
                        <AccordionContent className="text-base">
                            {accordion.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </div>
  )
}

export default Faq