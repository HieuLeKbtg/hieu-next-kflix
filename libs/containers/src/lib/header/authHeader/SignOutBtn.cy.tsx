import * as React from 'react'
import SignOutBtn from './SignOutBtn'

describe(SignOutBtn.name, () => {
    it('renders', () => {
        cy.mount(<SignOutBtn />)
    })
})
