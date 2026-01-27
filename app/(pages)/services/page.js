import Cta from '@/components/common/Cta'
import React from 'react'
import Hero from './_components/Hero'
import ServicesSection from './_components/ServicesSection'
import { ReactLenis } from 'lenis/react'

function Services() {
    return (
        <div className='mx-auto'>
            <ReactLenis root>
                <Hero />
                <ServicesSection />
                <Cta />
            </ReactLenis>
        </div>
    )
}

export default Services
