'use client'
import React from 'react'
import Hero from './_components/Hero'
import { ReactLenis } from 'lenis/react'
import Cta from '@/components/common/Cta'

function Careers() {
  return (
    <>
      <div className='mx-auto'>
        <ReactLenis root>
          <Hero />
          
          <Cta />
        </ReactLenis>
      </div>
    </>
  )
}

export default Careers
