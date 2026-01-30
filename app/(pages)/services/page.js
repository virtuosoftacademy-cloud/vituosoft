

import Cta from '@/components/common/Cta'
import React from 'react'
import Hero from './_components/Hero'
import ServicesSection from './_components/ServicesSection'
import { ReactLenis } from 'lenis/react'
import Different from './_components/Different'
import Faq from '@/components/common/Faq'

function Services() {
    return (
        <div className='mx-auto'>
            <ReactLenis root>
                <Hero />
                <ServicesSection />
                <Different />
                <div className='py-20'>
                <Faq/>
                </div>
                <Cta />
            </ReactLenis>
        </div>
    )
}

export default Services
