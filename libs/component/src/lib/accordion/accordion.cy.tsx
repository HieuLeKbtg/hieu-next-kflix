import * as React from 'react'

import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    MainAccordion
} from './accordion'

describe(AccordionItem.name, () => {
    it('renders', () => {
        cy.mount(<AccordionItem />)
    })
})

describe(AccordionHeader.name, () => {
    it('renders', () => {
        cy.mount(<AccordionHeader />)
    })
})

describe(AccordionBody.name, () => {
    it('renders', () => {
        cy.mount(<AccordionBody />)
    })
})

describe(MainAccordion.name, () => {
    it('renders', () => {
        cy.mount(<MainAccordion />)
    })
})
