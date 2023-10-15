import 'cypress-real-events/support'

import { AppRoutesWithTempRoutes } from '@libs/utils'

import LeftNavHeader from './LeftNavHeader'

describe('Left Navigation Header', () => {
    beforeEach(() => cy.mount(<LeftNavHeader />))
    it('render logo', () => {
        cy.get('[data-testid="header-logo"]')
            .should('be.visible')
            .should('have.attr', 'src', 'assets/images/icons/logo.svg')
            .should('have.attr', 'alt', 'Netflix')
            .and('have.prop', 'naturalWidth')
        // .should('be.greaterThan', 0)
    })

    it('render series link', () => {
        cy.get('[data-testid="header-link-series"]')
            .should('be.visible')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
            .should('have.attr', 'href', AppRoutesWithTempRoutes.SERIES)
            .should('have.text', 'Series')

        // TODO: re-check cypress-real-events for testing hover action
        // cy.get('[data-testid="header-link-series"]')
        //     .trigger('mouseover')
        //     .should('have.css', 'font-weight', '700')
    })

    it('render films link', () => {
        cy.get('[data-testid="header-link-films"]')
            .should('be.visible')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
            .should('have.attr', 'href', AppRoutesWithTempRoutes.FILMS)
            .should('have.text', 'Films')
    })

    it('render Dashboard link', () => {
        cy.get('[data-testid="header-link-dashboard"]')
            .should('be.visible')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
            .should('have.attr', 'href', AppRoutesWithTempRoutes.DASHBOARD)
            .should('have.text', 'Dashboard')
    })
})
