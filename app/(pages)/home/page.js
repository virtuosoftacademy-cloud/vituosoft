'use client'

import Hero from "./_components/Hero"
import InnovativeSolutions from "./_components/InnovativeSolutions"
import LogoCloud from "./_components/LogoCloud"
import { ReactLenis } from 'lenis/react'
import Technology from "./_components/Technology"
function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="mx-auto">
          <Hero />
          <LogoCloud />
          <InnovativeSolutions />
          <Technology />
        </div>
      </ReactLenis>
    </>
  )
}

export default Home
