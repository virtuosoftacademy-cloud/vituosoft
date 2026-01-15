'use client'

import CountUp from "@/components/ui/CountUp"
import { Dot } from "lucide-react"

function Hero() {

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 ">
          {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <PixelSnow
              pixelResolution={460}
              speed={0.6}
              variant="round"
            />
          </div> */}
        </div>
        <div className="flex justify-center items-center flex-col h-80">
          <div className="-space-y-10">

            <h1 className="text-[100px] font-semibold italic">
              Technology
            </h1>
            <h4 className="text-[62px] mr-30">that turns vision</h4>
            <h3 className="text-[62px] flex items-center">into<span className="italic text-[100px] font-semibold">Impact</span><Dot className="size-10" /></h3>
          </div>
          <div className="flex justify-center text-lg">
            <p className="text-center font-light">We design technology that empowers businesses to innovate, evolve and lead with <br /> purpose, helping them to stay ahead and create real value.</p>
          </div>
        </div>
        <div>
          <div className="mt-13 flex justify-center items-center gap-6">
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-linear-[-90deg,white_5%,#D3E2FF] flex py-4 px-4 flex-col">
                <div className="text-lg font-bold">
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />+
                </div>
              </div>
              <div className="relative -top-5 -left-4">
                <img src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Vector-3.png" alt="Star Icon" />
              </div>
              <div className="stat-content">
                <div className="stat-title">Years of<br />Excellence</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-linear-[-90deg,white_5%,#D3E2FF] flex py-4 px-4 flex-col">
                <div className="text-lg font-bold">
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />+
                </div>
              </div>
              <div className="relative -top-5 -left-4">
                <img src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Vector-3.png" alt="Star Icon" />
              </div>
              <div className="stat-content">
                <div className="stat-title">Years of<br />Excellence</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-linear-[-90deg,white_5%,#D3E2FF] flex py-4 px-4 flex-col">
                <div className="text-lg font-bold">
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />+
                </div>
              </div>
              <div className="relative -top-5 -left-4">
                <img src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Vector-3.png" alt="Star Icon" />
              </div>
              <div className="stat-content">
                <div className="stat-title">Years of<br />Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
