'use client'

import Masonry from "@/components/Masonry"
import { HeroRegular, Italic } from "./Styles/StyleClasses"

function InnovativeSolutions() {

    const items = [
        {
            id: "1",
            img: "https://picsum.photos/id/1015/400/900?grayscale",
            url: "https://example.com/one",
            alt: 'alt',
            height: 500,
        },
        {
            id: "2",
            img: "https://picsum.photos/id/1011/400/900?grayscale",
            url: "https://example.com/two",
            alt: 'alt',
            height: 500,
        },
        {
            id: "3",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            alt: 'alt',
            height: 1000,
        },
        {
            id: "4",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            alt: 'alt',
            height: 1100,
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-10 my-10">
            <div className="-space-y-3 lg:-space-y-8">
                <h1 className={HeroRegular}>
                    Innovation{" "}
                    <span className={Italic}>Solutions</span>
                </h1>
                <div className="text-5xl lg:text-[62px] font-light">
                    <div className="flex flex-row lg:gap-4 text-3xl lg:text-[62px] items-baseline">
                        <h3 className={HeroRegular}>
                            Real{" "}
                            <strong className={Italic}>
                                Results
                            </strong>
                        </h3>
                        <div className="bg-[#FF5500] rounded-full size-2 lg:size-4 mt-5" />
                    </div>
                </div>
                <div className="lg:text-7xl font-semibold">
                    <p className="text-gray-200">Smart Service.</p>
                </div>
            </div>
            <div className="mt-12">
                <Masonry
                    items={items}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={0.95}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                />
            </div>
        </div>
    )
}

export default InnovativeSolutions
