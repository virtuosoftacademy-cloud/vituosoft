'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import CTAMain from '@/public/ctamain.svg'
import CTA from '@/public/cta.svg'
import Link from "next/link"
function Cta() {
    return (
        <div className="px-10 lg:px-30 xl:px-20 text-secondary my-30">
            <div className="bg-linear-to-r to-[#00328c] from-primary py-8 md:py-8 px-8 relative text-center lg:text-left">
                <div className="lg:w-1/2 space-y-2">
                    <h4 className="text-4xl lg:text-5xl xl:text-7xl capitalize">Talk to an <span className="font-semibold italic">Expert
                    </span>
                    </h4>
                    <div className="md:-space-y-1.5 mt-4 md:mt-0">
                    <p className="text-sm lg:text-lg">Get professional insights to take your business to the next level.
                    </p>
                    <p className="text-sm lg:text-lg">Connect with our experts and start your journey toward growth today.</p>
                    </div>
                    <div className="mt-4">
                        <Button variant="secondary" size="xl">
                            <Link href={'/contact'}>
                                Get Started
                            </Link>
                        </Button>
                    </div>
                    <div className="transition-all relative">
                        <Image className="max-w-lg md:w-lg xl:max-w-sm hidden sm:hidden xl:block absolute md:left-175 xl:left-245 md:bottom-4 xl:bottom-0" src={CTAMain} alt="CTA" />
                        <div className="flex justify-center items-center pt-6">
                        <Image className="max-w-xs md:w-3xs lg:hidden" src={CTA} alt="CTA" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta
