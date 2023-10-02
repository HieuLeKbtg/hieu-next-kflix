import * as React from 'react'

import { Card,MainCardFeature, MainCardItem } from './card'

describe(MainCardItem.name, () => {
    it('renders', () => {
        cy.mount(<MainCardItem />)
    })
})

describe(MainCardFeature.name, () => {
    it('renders', () => {
        cy.mount(<MainCardFeature />)
    })
})

describe(Card.name, () => {
    it('renders', () => {
        cy.mount(<Card />)
    })
})
