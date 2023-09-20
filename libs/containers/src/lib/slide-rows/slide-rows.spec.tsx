import { render } from '@testing-library/react'

import SlideRows from './slide-rows'

describe('SlideRows', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SlideRows />)
        expect(baseElement).toBeTruthy()
    })
})
