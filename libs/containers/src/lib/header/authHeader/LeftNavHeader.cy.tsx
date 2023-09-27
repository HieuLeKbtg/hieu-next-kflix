import * as React from 'react'
import LeftNavHeader from './LeftNavHeader'

describe(LeftNavHeader.name, () => {
    it('renders', () => {
        cy.mount(<LeftNavHeader />)
    })
})
