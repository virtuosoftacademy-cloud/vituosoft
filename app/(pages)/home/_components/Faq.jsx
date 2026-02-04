import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../../components/ui/accordion'
import { Faq_Home } from '@/app/_constant'
import FaqCard from '../../../../components/ui/FaqCard'

function Faq() {
return (
        <div className='mx-auto max-w-[850] px-12 text-foreground'>
            <h4 className='lg:text-[42px] text-center mb-10'>Frequently Asked <span className='font-bold'>
                Questions
            </span>
            </h4>
            <Accordion type="single" collapsible>
                {Faq_Home.map((faq, index) => (
                    <FaqCard key={index} faq={faq} />
                ))}
            </Accordion>
        </div>
    )
}

export default Faq
