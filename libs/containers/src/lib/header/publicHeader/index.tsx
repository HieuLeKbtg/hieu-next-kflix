'use client'

import { appRoutes } from 'app/routes'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import {
    Header,
    HeaderButtonLink,
    HeaderFrame,
    HeaderLogo
} from 'src/components/header'

const PublicHeader = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const isOnAuthPages = !![appRoutes.SIGN_IN, appRoutes.SIGN_UP].includes(
        pathname as appRoutes
    )

    return (
        <Header>
            <>
                <HeaderFrame>
                    <HeaderLogo
                        to={appRoutes.HOME}
                        src='/images/icons/logo.svg'
                        alt='Netflix'
                    />
                    {!isOnAuthPages && (
                        <HeaderButtonLink href={appRoutes.SIGN_IN}>
                            Sign In
                        </HeaderButtonLink>
                    )}
                </HeaderFrame>
                {children}
            </>
        </Header>
    )
}

export default PublicHeader
