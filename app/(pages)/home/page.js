'use client'

import Hero from "./_components/Hero"
import InnovativeSolutions from "./_components/InnovativeSolutions"
import LogoCloud from "./_components/LogoCloud"
import { ReactLenis } from 'lenis/react'
function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="mx-auto">
          <Hero />
          <LogoCloud />
          <InnovativeSolutions />
        </div>
      </ReactLenis>
    </>
  )
}

export default Home
