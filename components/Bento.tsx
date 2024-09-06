import React from 'react'

const Bento = () => {
  return (
    <div className="flex flex-col justify-center items-center w-3/5 mt-44 gap-4">
        <div className="flex gap-4 w-full">
            <div className="flex w-1/2 h-[400px] bg-slate-900 rounded-lg">
                    hi
            </div>

            <div className="flex w-1/2 h-[400px] bg-white border-[1px] border-gray-300 rounded-lg">
                hi
            </div>
        </div>
        <div className="flex w-full h-[310px] bg-white rounded-lg c overflow-hidden">
            <div className="w-full h-[750px] left-52 top-32 bg-gradient-to-r from-green-100 to-green-200 rounded-full relative z-10 blur-[40px] -rotate-45"></div>
        </div>
    </div>
  )
}

export default Bento