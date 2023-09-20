import { render } from '@testing-library/react'

import OptForm from './opt-form'

describe('OptForm', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<OptForm />)
        expect(baseElement).toBeTruthy()
    })
})
