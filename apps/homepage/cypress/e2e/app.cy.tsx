describe('render homepage successfully', () => {
    beforeEach(() => cy.visit('/'))

    it('verify session successfully', async () => {
        // TODO: check session here
    })

    it('display text', () => {
        cy.get('[data-cy=feature-title]').should(
            'have.text',
            'Unlimited films, TV programmes and more'
        )
        cy.get('[data-cy=feature-sub-title]').should(
            'have.text',
            'Watch anywhere Cancel at any time'
        )
        cy.get('[data-cy=email-membership]').should(
            'have.text',
            'Ready to watch? Enter your email to create or restart your membership'
        )
    })
})
