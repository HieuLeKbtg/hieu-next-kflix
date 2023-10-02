'use client'

import {
    Header,
    HeaderButtonLink,
    HeaderFrame,
    HeaderLogo
} from '@libs/component'
import { AppRoutesWithTempRoutes } from '@libs/utils'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export const PublicHeader = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const isOnAuthPages = !![
        AppRoutesWithTempRoutes.SIGN_IN,
        AppRoutesWithTempRoutes.SIGN_UP
    ].includes(pathname as AppRoutesWithTempRoutes)

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
