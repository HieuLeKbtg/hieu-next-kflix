import * as React from 'react'
import { MainCardItem, MainCardFeature, Card } from './card'


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

