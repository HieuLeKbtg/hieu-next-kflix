import {
    AccordionBody,
    AccordionFrame,
    AccordionHeader,
    AccordionItem,
    AccordionTitle,
    MainAccordion,
    OptFormBreak,
    OptFormButton,
    OptFormContainer,
    OptFormInput,
    OptFormText
} from '@libs/component'
import { faqData } from '@libs/fixtures'

export function FaqsContainer() {
    return (
        <MainAccordion>
            <AccordionTitle>Frequently Asked Questions</AccordionTitle>
            <AccordionFrame>
                {faqData.map((item) => (
                    <AccordionItem key={item.id}>
                        <AccordionHeader>{item.header}</AccordionHeader>
                        <AccordionBody>{item.body}</AccordionBody>
                    </AccordionItem>
                ))}
            </AccordionFrame>

            <OptFormContainer>
                <OptFormInput placeholder='Email address' />
                <OptFormButton>Try it now</OptFormButton>
                <OptFormBreak />
                <OptFormText>
                    Ready to watch? Enter your email to create or restart your
                    membership
                </OptFormText>
            </OptFormContainer>
        </MainAccordion>
    )
}
