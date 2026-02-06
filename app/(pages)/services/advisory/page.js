import React from 'react'
import Hero from './_components/Hero'
import { aiCategory } from '@/app/_constant'
import { ReactLenis } from 'lenis/react'
import ValueSection from './_components/ValueSection'
import Success from './_components/Success'
import Empower from './_components/Empower'
import Engage from './_components/Engage'
import TimeLine from './_components/TimeLine'

function Advisory() {
    return (
        <>
            <ReactLenis root>
                <div className='pt-40 pb-10 px-6'>
                    <Hero category={aiCategory} />
                    <ValueSection />
                    <div className='px-16 md:px-26'>
                        <Success />
                        {/* <TimeLine/> */}
                        <Empower />
                    </div>
                </div>
                <Engage />
            </ReactLenis >
        </>
    )
}

export default Advisory
