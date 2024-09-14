import React from 'react'

const Insights = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-52">
         <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
            <h1 className="text-slate-800  text-3xl md:text-6xl font-semibold">Your Partner for Proven Success</h1>
            <p className="text-slate-500 w-full lg:text-xl">Proven results that elevate your website and drive your business forward</p>
        </section>

        <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center flex-wrap">
            <div className="h-[180px] w-[80%] lg:w-[500px] overflow-hidden rounded-2xl border-[1px] border-gray-200 flex flex-col items-center justify-center shadow-lg">
                <div className="w-[500px] h-[250px] top-32 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px]"></div>
                <div className="relative z-20 -top-10 flex flex-col justify-center items-center text-center p-2">
                    <p className="z-20 text-2xl md:text-4xl font-semibold">1.5x User Traffic</p>
                    <p className="z-20">Optimize your site for mobile and watch your traffic grow with our responsive design.</p>
                </div>
            </div>

            <div className="h-[180px] w-[80%] lg:w-[500px] overflow-hidden rounded-2xl border-[1px] border-gray-200 flex flex-col items-center justify-center shadow-lg">
                <div className="w-[500px] h-[250px] top-32 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px]"></div>
                <div className="relative z-20 -top-10 flex flex-col justify-center items-center text-center p-2">
                    <p className="z-20 text-2xl md:text-4xl font-semibold">24% More Visibility</p>
                    <p className="z-20">Boost your site's visibility and attract more visitors with our expert SEO strategies.</p>
                </div>
            </div>

            <div className="h-[180px] w-[80%] lg:w-[500px] overflow-hidden rounded-2xl border-[1px] border-gray-200 flex flex-col items-center justify-center shadow-lg">
                <div className="w-[500px] h-[250px] top-32 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px]"></div>
                <div className="relative z-20 -top-10 flex flex-col justify-center items-center text-center p-2">
                    <p className="z-20 text-2xl md:text-4xl font-semibold">3x More Social Shares</p>
                    <p className="z-20">Boost your social media presence with our share-friendly website designs."</p>
                </div>
            </div>

          

            
            
        </div>
    </div>
  )
}

export default Insights