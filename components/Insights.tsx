import React from 'react'

const Insights = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
         <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
            <h1 className="text-slate-800  text-3xl md:text-6xl font-semibold">Insights to success</h1>
            <p className="text-slate-500 w-full lg:text-xl">Find the answers to your questions here</p>
        </section>

        <div className="flex gap-4 w-full justify-center">
            <div className="h-[180px] w-[30%] overflow-hidden rounded-2xl border-[1px] border-gray-200 flex flex-col items-center justify-center shadow-lg">
                <div className="w-[500px] h-[250px] top-32 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px]"></div>
                <div className="relative z-20 -top-16 flex flex-col justify-center items-center">
                    <p className="z-20 text-4xl">50% Less</p>
                    <p className="z-20">Compared to hiring a full-time agency & growth team</p>
                </div>
            </div>

            <div className="h-[180px] w-[30%] overflow-hidden rounded-2xl border-[1px] border-gray-200 flex flex-col items-center justify-center shadow-lg">
                <div className="w-[500px] h-[250px] top-32 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px]"></div>
                <div className="relative z-20 -top-16 flex flex-col justify-center items-center">
                    <p className="z-20 text-4xl">50% Less</p>
                    <p className="z-20">Compared to hiring a full-time agency & growth team</p>
                </div>
            </div>

            <div className="h-[180px] w-[30%] overflow-hidden rounded-2xl border-[1px] border-gray-200 flex flex-col items-center justify-center shadow-lg">
                <div className="w-[500px] h-[250px] top-32 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px]"></div>
                <div className="relative z-20 -top-16 flex flex-col justify-center items-center">
                    <p className="z-20 text-4xl">50% Less</p>
                    <p className="z-20">Compared to hiring a full-time agency & growth team</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Insights