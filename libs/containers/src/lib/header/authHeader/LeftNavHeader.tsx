'use client'

import { appRoutes } from 'app/routes'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HeaderGroup, HeaderLink, HeaderLogo } from 'src/components'

const LeftNavHeader = () => {
    const pathname = usePathname()

    return (
        <HeaderGroup>
            <HeaderLogo
                to={appRoutes.HOME}
                src='/images/icons/logo.svg'
                alt='Netflix'
            />
            <HeaderLink $active={pathname === '/series'} href='/series'>
                Series
            </HeaderLink>
            <HeaderLink $active={pathname === '/films'} href='films'>
                Films
            </HeaderLink>
        </HeaderGroup>
    )
}

export default LeftNavHeader
