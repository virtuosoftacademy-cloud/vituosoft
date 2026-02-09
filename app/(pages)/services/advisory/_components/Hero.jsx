'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Hero({ category, showAll = true }) {
    const {
        title,
        subtitletop,
        subtitlebottom,
        bgColor,
        textColor,
        imagePosition,
        accentImage,
        cta,
        services,
    } = category
    return (
        <div className={`px-6 md:px-10 lg:px-16 xl:px-30`}>
            <section
                className=
                {`relative 
        py-20 px-10 md:px-20 lg:px-32 
        text-left 
        overflow-hidden 
        shadow-2xl shadow-black/15
      ${bgColor} ${textColor}`}
            >
                {accentImage &&
                    <img
                        src={accentImage}
                        alt={title}
                        className=
                        {`${imagePosition} w-[360]
          absolute hidden lg:flex
          object-contain object-top-right 
          opacity-90 pointer-events-none z-10
          `}
                        aria-hidden="true"
                    />
                }
                <div>
                    <div className="max-w-4xl pb-10 md:pb-14 text-center md:text-left">
                        <p className="text-lg md:text-3xl font-light">
                            Artificial Intelligence
                        </p>
                        <h2 className="text-4xl pb-2 lg:pb-0 sm:text-5xl md:text-6xl lg:text-7xl font-semibold italic leading-tight mt-2">
                            AI Agents
                        </h2>
                        <p className="text-sm md:text-sm opacity-90 max-w-lg font-light">
                            Empower your organization with intelligent AI agents that streamline operations, automate workflows, and deliver faster, data-driven decisions. At Virtuosoft, we build custom AI solutions that optimize efficiency, improve customer experiences, and unlock new levels of performance and growth.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <Button className={'text-sm bg-white text-primary border-2 hover:text-accent font-bold capitalize md:text-lg'}>
                            <Link href={'/contact'}>
                                <h2>
                                    {cta}
                                </h2>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section >
        </div >

    )
}