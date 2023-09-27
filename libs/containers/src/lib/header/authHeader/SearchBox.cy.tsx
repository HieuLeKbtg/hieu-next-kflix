import * as React from 'react'
import SearchBox from './SearchBox'

describe(SearchBox.name, () => {
    it('renders', () => {
        cy.mount(<SearchBox />)
    })
})
