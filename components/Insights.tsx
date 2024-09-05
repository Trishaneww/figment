import React from 'react'

const Insights = () => {
  return (
    <div className="w-full flex flex-col justify-center">
        <p>Your co-pilot to sucess</p>

        <div className="flex gap-4 w-full">
            <div className="h-[200px] w-1/3 overflow-hidden rounded-2xl border-[1px] border-gray-200 flex flex-col items-center justify-center">
                <div className="w-[500px] h-[250px] top-24 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px]"></div>
                <div className="relative z-20 -top-16 flex flex-col justify-center items-center">
                    <p className="z-20 text-4xl">50% Less</p>
                    <p className="z-20">Compared to hiring a full-time agency & growth team</p>
                </div>
            </div>

            <div className="h-[200px] w-1/3 overflow-hidden rounded-2xl border-[1px] border-gray-200 flex flex-col items-center justify-center">
                <div className="w-[500px] h-[250px] top-24 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px]"></div>
                <div className="relative z-20 -top-16 flex flex-col justify-center items-center">
                    <p className="z-20 text-4xl">50% Less</p>
                    <p className="z-20">Compared to hiring a full-time agency & growth team</p>
                </div>
            </div>

            <div className="h-[200px] w-1/3 overflow-hidden rounded-2xl border-[1px] border-gray-200 flex flex-col items-center justify-center">
                <div className="w-[500px] h-[250px] top-24 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px]"></div>
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