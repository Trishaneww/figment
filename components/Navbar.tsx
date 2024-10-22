"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { navItems } from '@/data'
import { FaArrowRightLong } from "react-icons/fa6";
import { cn } from '@/lib/utils'
import '../styles/global.scss';
import Image from 'next/image'
import logo from '../public/assets/images/third-logo.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const switch_menu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="flex w-full justify-between items-center h-[80px] p-6 lg:px-12 backdrop-blur-md navbar self-center scroll-smooth z-30 fixed mb-20 bg-slate-50 border-b-[1px] border-b-gray-200">
    <div className="flex gap-6">
      <Link href='/' className={cn(
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-800 dark:hover:text-slate-300 hover:text-slate-500 w-[150px]"
          )}>
            <Image 
              alt="figment studios logo"
              src={logo}
              priority
            />
      </Link>

      {navItems.map((navItem: any, idx: number) => (
        <Link 
          key={idx} 
          href={navItem.link}
          className={cn(
            "relative dark:text-slate-50 items-center hidden md:flex space-x-1 text-slate-800 dark:hover:text-slate-300 hover:text-slate-500"
          )}
        >
          <span className="!cursor-pointer text-base">{navItem.name}</span>
        </Link>
      ))}
    </div>
    <div className="hidden md:flex gap-10 justify-center items-center">
    {/* bg-[#60d58b]  */}
        <Link href="/contact">
            <Button className="w-[190px] h-[41px] bg-black rounded-full text-base text-white  shadow ">Get a free quote <FaArrowRightLong className="ml-2" /></Button>
        </Link>
    </div>



    <nav className="md:hidden">
    <input type="checkbox" id="sidebar-active" />
    <label htmlFor="sidebar-active" className="open-sidebar-button">
      <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </label>
    <label id="overlay" htmlFor="sidebar-active"></label>
    <div className="links-container">
      <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </label>

      <a href="/#faq">FAQ</a> 
      <a href="/portfolio">Portfolio</a>
      <a href="/services">Services</a>
      <a href="/pricing">Pricing</a>
      <Link href="/contact">
            <Button className="w-[320px] h-[55px] text-lg bg-black rounded-lg text-white  shadow mt-12">Get a free quote <FaArrowRightLong className="ml-2" size={20}/></Button>
        </Link>
      
    </div>
  </nav>
  </div>
  )}

export default Navbar