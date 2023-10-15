import { MockNextRouter } from '../../../cypress/support/router.cy'
import { HeaderSearch } from './header'

describe('Auth Header Initialize', () => {
    let searchTermKeyword = ''
    const setSearchTerm = (value: string) => {
        searchTermKeyword = value
    }

    beforeEach(() =>
        cy.mount(
            <MockNextRouter>
                <HeaderSearch
                    searchTerm={searchTermKeyword}
                    onSetSearchTerm={setSearchTerm}
                />
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

describe('Auth Header Interaction', () => {})
