describe('Signin Page', () => {
    beforeEach(() => cy.visit('/'))

    it('render signin page', () => {
        cy.get('[data-testid=title]').should('have.text', 'Sign In')
        cy.get('[data-testid=error]').should('not.exist')
        cy.get('[data-testid=email]').should('not.have.text')
        cy.get('[data-testid=password]').should('not.have.text')
        cy.get('[data-testid=submit-btn]').should('be.disabled')
        cy.get('[data-testid=sign-up-btn')
            .should('have.text', 'Sign up now')
            .and('have.attr', 'href')
            .and('contain', '/signup')
    })

    it('login with incorrect username and password', () => {
        cy.get('[data-testid=email]').type('test@yahoo.com')
        cy.get('[data-testid=password]').type('password')

        cy.get('[data-testid=submit-btn]').should('be.enabled')

        cy.get('[data-testid=submit-btn]').click()

        cy.get('[data-testid=error]').should('exist')
    })

    it('login with correct username and password', () => {
        // TODO: add mock service work here to test correct case
    })
})
