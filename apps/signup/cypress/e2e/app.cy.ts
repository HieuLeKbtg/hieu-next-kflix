import { AppRoutesWithTempRoutes } from '@libs/utils'

describe('Renderings', () => {
    beforeEach(() => cy.visit('/'))

    it('render signup page', () => {
        cy.get('[data-testid=title]').should('have.text', 'Sign Up')
        cy.get('[data-testid=error]').should('not.exist')

        cy.get('[data-testid=first-name]').should('not.have.text')
        cy.get('[data-testid=email]').should('not.have.text')
        cy.get('[data-testid=password]').should('not.have.text')

        cy.get('[data-testid=signup-btn]').should('be.disabled')
        cy.get('[data-testid=sign-in-btn]')
            .should('have.text', 'Sign in now')
            .and('have.attr', 'href')
            .and('contain', AppRoutesWithTempRoutes.SIGN_IN)
    })

    it('signup btn should disable when firstname is empty', () => {
        cy.get('[data-testid=email]').type('email@yahoo.com')
        cy.get('[data-testid=password]').type('password')
        cy.get('[data-testid=signup-btn]').should('be.disabled')
    })

    it('signup btn should disable when email is empty', () => {
        cy.get('[data-testid=first-name]').type('first name')
        cy.get('[data-testid=password]').type('password')
        cy.get('[data-testid=signup-btn]').should('be.disabled')
    })

    it('signup btn should disable when password is empty', () => {
        cy.get('[data-testid=first-name]').type('first name')
        cy.get('[data-testid=email]').type('email@yahoo.com')
        cy.get('[data-testid=signup-btn]').should('be.disabled')
    })
})

describe('Interact with components', () => {
    beforeEach(() => cy.visit('/'))

    it('should redirect to signin page when click to signin tag', () => {
        cy.get('[data-testid=sign-in-btn]').click()

        cy.get('[data-testid=title]').should('have.text', 'Sign In')
    })
})

describe('signup new account', () => {
    beforeEach(() => cy.visit('/'))

    it('signup with incorrect email', () => {
        cy.get('[data-testid=first-name]').type('first name')
        cy.get('[data-testid=email]').type('notvalidEmail')
        cy.get('[data-testid=password]').type('password')

        cy.get('[data-testid=signup-btn]').should('be.enabled')

        cy.get('[data-testid=signup-btn]').click()

        cy.get('[data-testid=error]').should('exist')
    })

    it('signup with existed email', () => {
        cy.get('[data-testid=first-name]').type('first name')
        cy.get('[data-testid=email]').type('hieu.l@kbtgvn.tech')
        cy.get('[data-testid=password]').type('password')

        cy.get('[data-testid=signup-btn]').should('be.enabled')

        cy.get('[data-testid=signup-btn]').click()

        cy.get('[data-testid=error]').should(
            'have.text',
            'Firebase: Error (auth/email-already-in-use).'
        )
    })

    it('signup with correct email', () => {
        // TODO: add mock service work here to test correct case
    })
})
