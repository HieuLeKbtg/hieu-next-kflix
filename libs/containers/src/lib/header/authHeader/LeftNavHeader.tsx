'use client'

import { HeaderGroup, HeaderLink, HeaderLogo } from '@libs/component'
import { AppRoutesWithTempRoutes } from '@libs/utils'
import { usePathname } from 'next/navigation'

const LeftNavHeader = () => {
    const pathname = usePathname()

    return (
        <HeaderGroup>
            <HeaderLogo
                data-testid='header-logo'
                to={AppRoutesWithTempRoutes.HOME}
                src='assets/images/icons/logo.svg'
                alt='Netflix'
            />
            <HeaderLink
                data-testid='header-link-series'
                $active={pathname === '/series'}
                href={AppRoutesWithTempRoutes.SERIES}
            >
                Series
            </HeaderLink>
            <HeaderLink
                data-testid='header-link-films'
                $active={pathname === '/films'}
                href={AppRoutesWithTempRoutes.FILMS}
            >
                Films
            </HeaderLink>
            <HeaderLink
                data-testid='header-link-realtime-films'
                $active={pathname === '/realtime-films'}
                href={AppRoutesWithTempRoutes.REALTIME_FILMS}
            >
                Realtime Films
            </HeaderLink>
        </HeaderGroup>
    )
}

export default LeftNavHeader
