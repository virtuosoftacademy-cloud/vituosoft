'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Src from '@/public/assets/Images/service/as_service.png'

export default function Hero(heroData ) {
    const { title, topDescription, bottomDescription, btnTitle } = heroData
    return (
        <div className={`px-6 md:px-10 lg:px-16 xl:px-30`}>
            <section
                className=
                {`relative 
        py-10 md:py-20 px-10 md:px-20 lg:px-32 
        text-left 
        overflow-hidden 
        shadow-2xl shadow-black/15
      bg-linear-to-br from-[#084387] to-[#021021] text-white`}
            >
                <Image
                    width={120}
                    height={120}
                    src={Src}
                    alt="AI Agents"
                    className=
                    {`-top-6 -right-4 w-[360]
          absolute hidden lg:flex
          object-contain object-top-right 
          opacity-90 pointer-events-none z-10
          `}
                    aria-hidden="true"
                />

                <div>
                    <div className="max-w-3xl pb-10 md:pb-14 text-center md:text-left">
                        <p className="text-lg md:text-3xl font-light pl-3">
                            {topDescription}
                        </p>
                        <h2 className="text-4xl pb-2 lg:pb-0 sm:text-5xl md:text-6xl lg:text-7xl font-semibold italic my-2">
                            {title}
                        </h2>
                        <p className="text-sm md:text-sm opacity-90 max-w-lg font-light">
                            {bottomDescription}
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <Button className={'bg-white text-[#084387] hover:bg-[#084387] hover:text-accent font-bold capitalize text-lg'}>
                            <Link href={'/contact'}>
                                <h2>
                                    {btnTitle}
                                </h2>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section >
        </div >

    )
}