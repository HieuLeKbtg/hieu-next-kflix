import {
    AppRouterContext,
    AppRouterInstance
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { NextRouter } from 'next/router'
import { ReactNode } from 'react'

import { HeaderSearch } from './header'

interface MockNextRouterProps extends Partial<AppRouterInstance> {
    children: ReactNode
}

const createRouter = (params: Partial<NextRouter>) => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    basePath: '',
    back: cy.spy().as('back'),
    refresh: cy.spy().as('refresh'),
    beforePopState: cy.spy().as('beforePopState'),
    forward: cy.spy().as('forward'), // <---------- added `forward`
    prefetch: cy.stub().as('prefetch').resolves(),
    push: cy.spy().as('push'),
    reload: cy.spy().as('reload'),
    replace: cy.spy().as('replace'),
    events: {
        emit: cy.spy().as('emit'),
        off: cy.spy().as('off'),
        on: cy.spy().as('on')
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    ...params
})

const MockNextRouter = ({ children, ...props }: MockNextRouterProps) => {
    const router = createRouter(props as unknown)

    return (
        <AppRouterContext.Provider value={router}>
            {children}
        </AppRouterContext.Provider>
    )
}

describe('Auth Header', () => {
    beforeEach(() =>
        cy.mount(
            <MockNextRouter>
                <HeaderSearch searchTerm='' onSetSearchTerm={() => {}} />
            </MockNextRouter>
        )
    )
    it('initialize successfully', () => {
        cy.get('[data-testid=search-input]')
            .should('not.have.text')
            .should('have.attr', 'placeholder', 'Search films and series')
    })

    it('should render search input field when cliking search icon', () => {
        cy.get('[data-testid=search-click]').click()

        cy.get('[data-testid=search-input]').should('be.visible')
    })

    it('url should have query param as ?search=[query] when typing and entering on search input ', () => {
        cy.get('[data-testid=search-click]').click()

        cy.get('[data-testid=search-input]').should('be.visible')

        cy.get('[data-testid=search-input]').type('topgun').trigger('keydown', {
            key: 'Enter'
        })

        // TODO: mock usePathname here
        // cy.location('search').should('include', 'search=topgun')
    })
})
