'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import CTA from '@/public/assets/Images/cta.png'
import Link from "next/link"
function Cta() {
    return (
        <div className="px-10 md:px-30 text-secondary my-30">
            <div className="bg-linear-to-r to-[#00328c] from-primary py-8 lg:py-12 px-8 relative text-center lg:text-left">
                <div className="lg:w-1/2 space-y-2">
                    <h4 className="text-4xl lg:text-5xl xl:text-7xl capitalize">Talk to an <span className="font-semibold italic">Expert
                    </span>
                    </h4>
                    <p className="text-sm lg:text-lg">Get professional insights to take your business to the next level.Connect with our experts and start your journey toward growth today.</p>
                    <div className="mt-4">
                        <Button variant="secondary" size="xl">
                            <Link href={'/contact'}>
                                Get Started
                            </Link>
                        </Button>
                    </div>
                    <div className="transition-all relative pt-10 md:pt-0 md:-mb-20 lg:mb-0 md:top-10 lg:absolute lg:right-8">
                        <Image className="max-w-xs md:w-2xl" src={CTA} alt="CTA" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta
