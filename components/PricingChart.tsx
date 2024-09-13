import React from 'react'
import '../styles/global.scss';
import { GiCheckMark } from 'react-icons/gi';
import { pricingChart } from '@/data';
import { GoDash } from "react-icons/go";

const PricingChart = () => {
  return (
    <table className="flex flex-col w-5/6  mt-40 text-gray-600">
        <section className="flex font-bold text-lg">
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p></p>
            </div>
            <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                <p>Lite $400</p>
            </div>
            <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                <p>Core $800</p>
            </div>
            <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                <p>Business $1200</p>
            </div>
            <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                <p>Business Elite $2000</p>
            </div>
        </section>

        <div className="flex h-[70px] w-full items-center justify-start px-4 font-bold rowBorder">
            <p>Project Managment</p>
        </div>

        {pricingChart.slice(0,4).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                    {value === true ? 
                    <div className="w-[22px] h-[22px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                        <GiCheckMark size={12}/>
                    </div>
                    :  
                    <div className="w-[22px] h-[22px] flex justify-center items-center bg-red-100 text-red-500 rounded-full">
                     <GoDash size={16}/>
                    </div>}
                </div>
            ))}
           
            </section>
        ))}


        <div className="flex h-[70px] w-full items-center justify-start px-4 font-bold rowBorder">
            <p>Ecommerce</p>
        </div>

        {pricingChart.slice(0,4).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                    {value === true ? 
                    <div className="w-[22px] h-[22px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                        <GiCheckMark size={12}/>
                    </div>
                    :  
                    <div className="w-[22px] h-[22px] flex justify-center items-center bg-red-100 text-red-500 rounded-full">
                     <GoDash size={16}/>
                    </div>}
                </div>
            ))}
           
            </section>
        ))}
        <div className="flex h-[70px] w-full items-center justify-start px-4 font-bold rowBorder">
            <p>Software Support</p>
        </div>

        {pricingChart.slice(0,4).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                    {value === true ? 
                    <div className="w-[22px] h-[22px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                        <GiCheckMark size={12}/>
                    </div>
                    :  
                    <div className="w-[22px] h-[22px] flex justify-center items-center bg-red-100 text-red-500 rounded-full">
                     <GoDash size={16}/>
                    </div>}
                </div>
            ))}
           
            </section>
        ))}

    </table>
  )
}

export default PricingChart