import SignOutBtn from './SignOutBtn'

describe(SignOutBtn.name, () => {
    it('renders', () => {
        cy.mount(<SignOutBtn />)
        cy.get('[data-testid="signout-btn"]')
            .should('be.visible')
            .should('have.attr', 'style', 'width: 100%;')
    })
})
