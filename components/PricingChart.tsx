import React from 'react'
import '../styles/global.scss';
import { GiCheckMark } from 'react-icons/gi';
import { pricingChart } from '@/data';
import { GoDash } from "react-icons/go";

const PricingChart = () => {
  return (
    <table className="hidden md:flex flex-col w-full mx-2 lg:mx-0 lg:w-5/6  mt-40 text-gray-600 text-lg">
        <section className="flex font-bold text-xl">
            <div className="h-[70px] w-[26%] justify-start px-4">
                <p></p>
            </div>
            <div className="h-[70px] w-[18.5%] flex flex-col gap-2  items-center justify-center">
                <p className="text-2xl text-center">Business Elite</p>
                <p>$2000</p>
            </div>
            <div className="h-[70px] w-[18.5%] flex flex-col gap-2  items-center justify-center">
                <p className="text-2xl">Business</p>
                <p>$1200</p>
            </div>
            <div className="h-[70px] w-[18.5%] flex flex-col gap-2  items-center justify-center">
                <p className="text-2xl">Core</p>
                <p>$800</p>
            </div>
            <div className="h-[70px] w-[18.5%] flex flex-col gap-2  items-center justify-center">
                <p className="text-2xl">Lite</p>
                <p>$400</p>
            </div>
        </section>

        <div className="flex h-[70px] w-full items-center justify-start px-4 font-bold rowBorder">
            <p>Project Managment</p>
        </div>

        {pricingChart.slice(0,5).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                    {value === true ? 
                    <div className="w-[26px] h-[22px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                        <GiCheckMark size={16}/>
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
            <p>Website Features</p>
        </div>

        {pricingChart.slice(5,11).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                    {value === true ? 
                    <div className="w-[26px] h-[22px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                        <GiCheckMark size={16}/>
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

        {pricingChart.slice(11,15).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                    {value === true ? 
                    <div className="w-[22px] h-[22px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                        <GiCheckMark size={16}/>
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
            <p>Manager Platform</p>
        </div>

        {pricingChart.slice(15,21).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center">
                    {value === true ? 
                    <div className="w-[22px] h-[22px] flex justify-center items-center bg-green-100 text-green-500 rounded-full">
                        <GiCheckMark size={16}/>
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