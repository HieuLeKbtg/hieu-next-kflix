import * as React from 'react'
import RightNavHeader from './RightNavHeader'

describe(RightNavHeader.name, () => {
    it('renders', () => {
        cy.mount(<RightNavHeader />)
    })
})
