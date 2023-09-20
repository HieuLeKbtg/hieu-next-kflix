'use client'

import 'normalize.css'

import isPropValid from '@emotion/is-prop-valid'
import { ReactNode } from 'react'
import { StyleSheetManager } from 'styled-components'

import { StyledComponentsRegistry } from '@/lib/styledComponentRegistry'

import GlobalStyles from './globalStyles'

type CustomProviderProps = {
    children: ReactNode
}

const CustomProvider = (props: CustomProviderProps) => {
    const { children } = props
    return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <StyledComponentsRegistry>
                <GlobalStyles />
                {children}
            </StyledComponentsRegistry>
        </StyleSheetManager>
    )
}

export default CustomProvider
