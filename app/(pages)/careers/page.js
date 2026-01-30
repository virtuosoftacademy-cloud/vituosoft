'use client'
import React from 'react'
import Hero from './_components/Hero'
import { ReactLenis } from 'lenis/react'
import Cta from '@/components/common/Cta'
import Collaboration from './_components/Collaboration'
import Job from './_components/Job'

function Careers() {
  return (
    <>
      <div className='mx-auto'>
        <ReactLenis root>
          <Hero />
          <Collaboration/>
          <Job/>
          <Cta />
        </ReactLenis>
      </div>
    </>
  )
}

export default Careers
