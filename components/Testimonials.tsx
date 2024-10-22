import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center -mt-4 lg:mt-8 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between p-2 gap-6 text-left w-full">
            <div className="flex flex-col items-start w-full lg:w-1/2">
                <h1 className="text-slate-800  text-3xl md:text-5xl font-semibold">What our clients have to say</h1>
                <p className="text-slate-500 w-full lg:text-xl">Our client&apos;s success stories speak for themselves—discover how we&apos;ve helped businesses like yours thrive online.</p>
            </div>
            <Link href="https://www.trustpilot.com/review/figmentstudios.ca?utm_medium=trustbox&utm_source=TrustBoxReviewCollector">
                <Image
                    width={400}
                    height={400}
                    src="/assets/images/trustpilot.png"
                    alt="5 star trustpilot review"
                />
            </Link>
        </div>

        <section className="flex flex-row justify-center lg:justify-between items-center flex-wrap gap-6 lg:gap-0 mt-12 mb-12 w-full">
            <div className="flex flex-col gap-2 w-[320px] lg:w-[32%] lg:min-w-[430px] mb-8 h-[330px] xl:h-[260px] bg-white rounded-xl shadow-lg text-lg lg:text-xl px-8 py-12 items-start justify-start">
                {/* <p className="font-semibold">"I thought getting a professional website would be too expensive, but Figment Studios proved me wrong."</p> */}
                <div className="flex justify-start items-center gap-4">
                    <p className="font-bold">Yohan Wijeyawickrema</p>
                    <Image
                        height={200}
                        width={100}
                        alt="5 star review logo"
                        src="/assets/images/5stars.png"/>
                </div>
                <p>&quot;Their affordable pricing gave me a stunning site without breaking the bank, and since launching, my sales have increased significantly.&quot;</p>
            </div>

            <div className="flex flex-col gap-2 w-[320px] lg:w-[32%] lg:min-w-[430px] mb-8 h-[330px] xl:h-[260px] bg-white rounded-xl shadow-lg text-lg lg:text-xl px-8 py-12 ">
                <div className="flex justify-start items-center gap-4">
                    <p className="font-bold">Justin Neale</p>
                    <Image
                        height={200}
                        width={100}
                        alt="5 star review logo"
                        src="/assets/images/5stars.png"/>
                </div>
                <p>&quot;I feared my website would blend in with the competition, but they created a site that truly captures my brand&apos;s personality. It stands out and consistently receives compliments from customers!&quot;</p>
            </div>

            <div className="flex flex-col gap-2 w-[320px] lg:w-[32%] lg:min-w-[430px] mb-8 h-[330px] xl:h-[260px] bg-white rounded-xl shadow-lg text-lg lg:text-xl px-8 py-12 ">
                <div className="flex justify-start items-center gap-4">
                    <p className="font-bold">Mark Sanadi</p>
                    <Image
                        height={200}
                        width={100}
                        alt="5 star review logo"
                        src="/assets/images/5stars.png"/>
                </div>
                <p>&quot;Timing was crucial for our project, and we were worried about delays. Figment&apos;s team stuck to the timeline and launched our website right on schedule. Their professionalism made the entire process stress-free!&quot;</p>
            </div>
        </section>
    </div>
  )
}

export default Testimonials