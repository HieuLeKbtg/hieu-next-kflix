'use client'
import {
    Header,
    HeaderButtonLink,
    HeaderFrame,
    HeaderLogo
} from '@libs/component'
import { AppRoutesWithTempRoutes } from '@libs/utils'
import { ReactNode, useEffect, useState } from 'react'

export const PublicHeader = ({ children }: { children: ReactNode }) => {
    const [path, setPath] = useState<string>('')

    useEffect(() => {
        if (typeof window !== 'undefined' && window?.location) {
            setPath(window.location.origin)
        }
    }, [])

    const isOnAuthPages = !![
        AppRoutesWithTempRoutes.SIGN_IN,
        AppRoutesWithTempRoutes.SIGN_UP
    ].includes(path as AppRoutesWithTempRoutes)

    return (
        <Header>
            <>
                <HeaderFrame>
                    <HeaderLogo
                        to={AppRoutesWithTempRoutes.HOME}
                        src='assets/images/icons/logo.svg'
                        alt='Netflix'
                    />
                    {!isOnAuthPages && (
                        <HeaderButtonLink
                            href={AppRoutesWithTempRoutes.SIGN_IN}
                        >
                            Sign In
                        </HeaderButtonLink>
                    )}
                </HeaderFrame>
                {children}
            </>
        </Header>
    )
}
