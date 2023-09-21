'use client'

import { HeaderGroup, HeaderLink, HeaderLogo } from '@libs/component'
import { appRoutes } from '@libs/utils'
import { usePathname } from 'next/navigation'

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
