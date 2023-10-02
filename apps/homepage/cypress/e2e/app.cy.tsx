describe('render homepage successfully', () => {
    beforeEach(() => cy.visit('/'))

    it('verify session successfully', async () => {
        // TODO: check session here
        // const session: Session | null = await getServerSession()
        // if (session?.user) {
        //     cy.url().should('include', appRoutes.BROWSE)
        // } else {
        //     cy.url().should('include', appRoutes.HOME)
        // }
    })

    it('display text', () => {
        cy.visit('/')
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
