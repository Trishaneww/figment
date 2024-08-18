import React from 'react'
import video2 from '../public/assets/images/bg2.png'
import { Button } from './ui/button'

const Process = () => {
  return (
    <div className="mt-40">
        <section className="flex gap-4 justify-center">
            <div className="flex flex-col w-2/5 gap-6">
                <p className="text-sm flex justify-center items-center p-1 border-2 border-slate-600 rounded-full w-[180px]">Designed for developers</p>
                <h1 className="text-5xl font-bold">Our essential design process</h1>
                <p>Save engineering time with unified payments functionality. We obsess over the maze of gateways, payments rails, and financial institutions that make up the global economic landscape so that your teams can build what you need on one platform.</p>
                <Button className="w-[250px] shadow">Read the docs</Button>
            </div>

            <video width="400" height="620" autoPlay loop muted className="border-2 border-blue-200 rounded-lg">
                <source src="/assets/videos/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>

    </div>
  )
}

export default Process