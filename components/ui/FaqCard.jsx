'use client'

import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export default function FaqCard({faq}) {
    const{ answer,question,value } = faq;
    return (
        <>
            <AccordionItem value={value}>
                <AccordionTrigger>
                    <h4>
                        {question}
                    </h4>
                </AccordionTrigger>
                <AccordionContent>
                    {answer}
                </AccordionContent>
            </AccordionItem>
        </>
    )
}
