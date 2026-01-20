'use client'

import { Button } from "../ui/button"

function Cta() {
    return (
        <div className="lg:pl-40 px-10 lg:px-0 text-secondary my-30">
            <div className="bg-linear-to-r to-[#00328c] from-primary py-8 lg:py-12 px-8 relative text-center lg:text-left">
                <div className="lg:w-1/2 space-y-2">
                    <h4 className="text-4xl lg:text-5xl xl:text-7xl">Talk to an <span className="font-semibold italic">Expert
                    </span>
                    </h4>
                    <p className="text-sm lg:text-lg">Get professional insights to take your business to the next level.Connect with our experts and start your journey toward growth today.</p>
                    <div className="mt-4">
                        <Button variant="secondary" size="xl">
                            <h2>
                                Get Started
                            </h2>
                        </Button>
                    </div>
                <div className="transition-all relative right-5 -mb-20 lg:mb-0 top-10 lg:absolute lg:-top-9 lg:right-0">
                    <img className="max-w-xs lg:max-w-lg" src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Group-1000001654.png" alt="CTA" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cta
