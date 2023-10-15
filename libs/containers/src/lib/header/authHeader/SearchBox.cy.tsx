import { MockNextRouter } from '../../../../cypress/support/router.cy'
import SearchBox from './SearchBox'

it('render SearchBox', () => {
    cy.mount(
        <MockNextRouter>
            <SearchBox />
        </MockNextRouter>
    )
})
