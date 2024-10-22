"use client"
import Navbar from '@/components/Navbar'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { studyHiveFeatures } from '@/data'
import Image from 'next/image'
import React from 'react'
import studyhive1 from '../../public/assets/images/gallery6.png'
import studyhive2 from '../../public/assets/images/studyhive2.png'
import studyhive3 from '../../public/assets/images/studyhive3.png'
import studyhive4 from '../../public/assets/images/studyhive4.png'
import studyhive5 from '../../public/assets/images/studyhive5.png'
import studyhive6 from '../../public/assets/images/studyhive6.png'

const StudyHive = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50">
        <Navbar />

        <section className="w-full flex flex-col justify-center items-center mt-56">
            <div className="flex flex-col gap-4 w-full md:w-4/6 p-2">
                <p className="text-sm flex justify-center items-center p-1 rounded-full w-[180px] shadow text-white bg-slate-900">Study Platform</p>
                <TextGenerateEffect words="StudyHive"/>
            </div>
            <div className="w-[92%] md:w-[70%] mt-6 md:mt-20">
                <Image
                    src={studyhive1}
                    alt="studyhive logo banner"
                    className="w-full"
                />
            </div>

            <div className="w-full px-6 md:px-2 p-2 md:w-4/6 flex flex-col gap-4 mt-20">
                <p className="text-2xl md:text-5xl font-bold">Overview</p>
                <p>
                The software allows college students to create personalized flashcard study decks and use various quizzing methods to test their knowledge. In addition to creating their own decks, students can view and study from flashcard decks made by other users, enhancing collaborative learning. The platform also supports the creation of study servers dedicated to specific college courses. By joining these servers, students gain access to chat with other users and use all flashcard decks related to the course, fostering a community-based learning environment. Notably, WebSockets were used to develop the live chat feature within the study servers, ensuring real-time communication among users.
               </p>
            </div>

                <div className="grid md:grid-cols-2 gap-4 mt-36 w-[92%] md:w-[70%]">
                    <div className="bg-black flex justify-center items-center overflow-hidden rounded-lg">
                        <video  autoPlay loop muted className="border-[1px] border-slate-900 rounded-lg w-full">
                            <source src="/assets/videos/video3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                   
                    <Image
                        src={studyhive3}
                        alt="studyhive logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={studyhive4}
                        alt="studyhive logo banner"
                        className="rounded-lg"
                    />
                    <Image
                        src={studyhive2}
                        alt="studyhive logo banner"
                        className="rounded-lg"
                    />
                </div>

                <HoverEffect items={studyHiveFeatures} />

                <div className="bg-slate-900 w-full flex justify-center items-center mt-24 p-12">
                    <Image
                        src={studyhive5}
                        alt="studyhive logo banner"
                        className="w-[94%] md:w-[88%]"
                    />
                </div>
        </section>

        <div className="flex justify-center w-full">
        <footer className="flex justify-between items-center w-full lg:w-4/5 px-2 mt-16 mb-16">
            <p className="mt-8 lg:text-2xl font-semibold">Next Case Study</p>
            <a href="/foodbyte" className="mt-8 lg:text-2xl font-semibold">Foodbyte</a>
        </footer>
        </div>

    </div>
  )
}
export default StudyHive