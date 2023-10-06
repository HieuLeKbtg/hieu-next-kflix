'use client'

import 'normalize.css'

import isPropValid from '@emotion/is-prop-valid'
import { StyledComponentsRegistry } from '@libs/registries'
import { ReactNode } from 'react'
import { StyleSheetManager } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'

import { GlobalStyles } from './globalStyles'

type CustomProviderProps = {
    children: ReactNode
}

const CustomProvider = (props: CustomProviderProps) => {
    const { children } = props
    return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
            {/* TODO: check types here */}
            <ModalProvider>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    {children}
                </StyledComponentsRegistry>
            </ModalProvider>
        </StyleSheetManager>
    )
}

export default CustomProvider
