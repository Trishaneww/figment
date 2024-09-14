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
    <div className="mt-40 scroll-smooth">
        <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
            <h1 className="text-slate-800  text-3xl md:text-5xl lg:text-6xl font-semibold">Frequently Asked Questions</h1>
            <p className="text-slate-500 w-full lg:text-xl">Find the answers to your questions here</p>
        </section>

        <div className="flex justify-center gap-6 w-full p-4">
            <Accordion type="single" collapsible className="flex flex-col gap-4 md:w-3/5">
                {faqData.map((accordion:any, idx:number) => (
                    <AccordionItem value={`item-${idx}`} className="border-none p-4  rounded-2xl">
                    <AccordionTrigger className="lg:text-xl text-left">{accordion.item}</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            {accordion.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 5'}>
                <AccordionTrigger className="lg:text-xl text-left">When can I expect to have my website ready?</AccordionTrigger>
                    <AccordionContent className="text-lg flex flex-col gap-2">
                        <p>The timeline for delivering a finished website depends on the complexity and scope of the project:</p>
                        <ul className="list-decimal">
                            <li className="list-decimal">
                                <span className="font-bold">Standard Plan:</span> Ideal for one-page websites, this plan typically takes 1-2 weeks to complete, providing a quick turnaround for straightforward projects.
                            </li>
                            <li>
                                <span className="font-bold">Core Package:</span> Best suited for multi-page websites, this package usually requires 3-5 weeks to deliver, covering more detailed design and content needs.
                            </li>
                            <li>
                                <span className="font-bold">Business and Business Elite Packages:</span> Designed for complex projects that involve multiple pages, third-party integrations, and custom functionalities, these packages generally take 6-10 weeks to complete, depending on the specific requirements and features involved.
                            </li>
                        </ul>
                        <p>We work closely with you throughout the process to ensure timely delivery and a high-quality end product that meets your business goals.</p>
                        
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 6'}>
                <AccordionTrigger className="lg:text-xl text-left">Can you redesign an existing website?</AccordionTrigger>
                    <AccordionContent className="text-lg flex flex-col gap-2">
                        <p>We offer a comprehensive redesign service for existing websites to give them a fresh, modern look and improve their performance. Our redesign process starts with an in-depth consultation to understand your goals, brand identity, and what aspects of your current site need improvement.</p>

                        <p>We then create a customized redesign plan that could include updating the layout, enhancing the user experience, optimizing for mobile devices, integrating new functionalities, and improving SEO. Throughout the process, we collaborate with you to ensure the new design aligns with your vision and business objectives.</p>

                        <p>Whether you want a complete overhaul or just some tweaks to enhance your site, we are here to transform your existing website into a more effective tool for your business.</p>
                        
                    </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
    </div> 
)}

export default Faq