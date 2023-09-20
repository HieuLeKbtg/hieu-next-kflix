import { render } from '@testing-library/react'

import Faqs from './faqs'

describe('Faqs', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Faqs />)
        expect(baseElement).toBeTruthy()
    })
})
