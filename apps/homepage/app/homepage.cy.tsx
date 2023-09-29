import { mount } from 'cypress/react18'

import Homepage from './page'

describe('Homepage rendering successfully', () => {
    it('Feature Title', async () => {
        const homepageNode = await Homepage()
        mount(homepageNode)
        // cy.get('[data-cy=feature-title]').should(
        //     'have.text',
        //     'Unlimited films, TV programmes and more'
        // )
    })
})
