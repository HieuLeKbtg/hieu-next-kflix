import { AppRoutesWithTempRoutes } from '@libs/utils'

describe('Renderings', () => {
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
            .and('contain', AppRoutesWithTempRoutes.SIGN_UP)
    })
})

describe('Interact with components', () => {
    beforeEach(() => cy.visit('/'))

    it('should redirect to signup page when click to signup tag', () => {
        cy.get('[data-testid=sign-up-btn').click()

        cy.get('[data-testid=title]').should('have.text', 'Sign Up')
    })
})

describe('Login with an account', () => {
    beforeEach(() => cy.visit('/'))

    it('login with incorrect email and password', () => {
        cy.get('[data-testid=email]').type('test@yahoo.com')
        cy.get('[data-testid=password]').type('password')

        cy.get('[data-testid=submit-btn]').should('be.enabled')

        cy.get('[data-testid=submit-btn]').click()

        cy.get('[data-testid=error]')
            .should('exist')
            .should(
                'have.text',
                'Firebase: Error (auth/invalid-login-credentials).'
            )
    })

    it('login with invalid email', () => {
        cy.get('[data-testid=email]').type('invalid')
        cy.get('[data-testid=password]').type('password')

        cy.get('[data-testid=submit-btn]').should('be.enabled')

        cy.get('[data-testid=submit-btn]').click()

        cy.get('[data-testid=error]')
            .should('exist')
            .should('have.text', 'Firebase: Error (auth/invalid-email).')
    })

    it('login with correct username and password', () => {
        // TODO: add mock service work here to test correct case
    })
})
