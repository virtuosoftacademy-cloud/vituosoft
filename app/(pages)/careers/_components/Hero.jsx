'use client'

import { CommonHead, HeroHead, HeroHeadPages, HeroRegular, Italic } from "@/components/Styles/StyleClasses"
import CareerImg1 from '@/public/assets/Images/careers/careersImg1.png'
import CareerImg2 from '@/public/assets/Images/careers/careersImg2.png'
import CareerImg3 from '@/public/assets/Images/careers/careersImg3.png'
import Image from "next/image"
function Hero() {
    return (
        <div className="relative mt-30 max-w-7xl lg:mt-50 mx-auto px-10">
            <div className="flex justify-center items-center flex-col h-80 px-10 text-center">
                <div className="flex flex-col justify-center items-center text-6xl">
                    <h4 className={`${HeroRegular}`}>Build Your Future With</h4>
                    <h2 className={`py-2 ${HeroHeadPages}`}>
                        <strong className="flex flex-row gap-1 lg:gap-2">
                            <em>
                                Virtuosoft
                            </em>
                            <div className="bg-chart-1 rounded-full size-2 lg:size-4 mt-10 lg:mt-14" />
                        </strong>
                    </h2>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-12 transition-all w-full space-y-4 mt-14">
                <div className="flex flex-col transform -translate-y-18 w-4xl space-y-3">
                    <Image src={CareerImg1} alt="Our Career" width={400} height={400} className="w-2xl" />
                    <p className="text-[16px]">
                        <span className="font-bold">
                            At Virtuosoft,
                        </span> every challenge is a chance to create, connect and celebrate success.
                    </p>
                </div>
                <div className="flex flex-col w-4xl space-y-3">
                    <Image src={CareerImg2} alt="Our Career" width={400} height={400} className="w-2xl " />
                    <p className="text-[16px]">
                        <span className="font-bold">
                            We believe in balance: great work deserves great fun.
                        </span> From brainstorming sessions to coffee-fueled laughter, our culture thrives on creativity, teamwork, and shared success.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-50 text-center">
                <div className="flex flex-col">
                    <h3 className={Italic}>Every success story</h3>
                    <h4 className={CommonHead}>starts with people, and ours</h4>
                    <h4 className={HeroHeadPages}>starts with you</h4>
                    <div className="flex justify-center pb-10">
                    <p className="text-sm mt-10 text-gray-400/80 w-1/2">From brainstorming sessions to coffee-fueled laughter, our culture thrives on creativity, teamwork, and shared success.</p>
                    </div>
                </div>
                <Image src={CareerImg3} alt="Our Career" width={400} height={400} className="w-4xl rounded-2xl" />
            </div>

        </div>
    )
}

export default Hero
