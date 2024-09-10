import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { Button } from './ui/button'
import { navItems } from '@/data'
import { cn } from '@/lib/utils'
import '../styles/global.scss';

const Navbar = () => {
  return (
    <div className="flex w-full lg:w-[74%] justify-between items-center h-[80px] rounded-3xl p-6 mt-6 backdrop-blur-md navbar self-center scroll-smooth z-30 fixed mb-20 bg-transparent">
    <div className="flex gap-6">
      <Link href='/' className={cn(
            "relative  dark:text-slate-50 items-center flex space-x-1 text-slate-800 dark:hover:text-slate-300 hover:text-slate-500"
          )}><span className="text-2xl !cursor-pointer font-bold hidden md:flex">Figment Studios</span>
      </Link>

      {navItems.map((navItem: any, idx: number) => (
        <Link 
          key={idx} 
          href={navItem.link}
          className={cn(
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-800 dark:hover:text-slate-300 hover:text-slate-500"
          )}
        >
          <span className="!cursor-pointer text-base">{navItem.name}</span>
        </Link>
      ))}
    </div>
    <div className="flex gap-10 justify-center items-center">
        <Link href="/contact">
            <Button className="w-[150px] shadow text-base">Contact Us</Button>
        </Link>
    </div>


    </div>
  )
}

export default Navbar