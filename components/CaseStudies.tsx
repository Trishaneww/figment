import React from 'react'

const CaseStudies = () => {
  return (
    <div>
         <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
            <h1 className="text-slate-800  text-3xl md:text-6xl font-semibold">Case Studies</h1>
            <div className="flex w-2/5 gap-8 justify-between items-center">
                <p className="text-slate-500 lg:text-xl">Find the answers to your questions here</p>
                <button className="w-[180px] h-[50px] p-2 bg-slate-200 rounded-xl">See All Case Studies</button>
            </div>
    
        </section>

    </div>
  )
}

export default CaseStudies