'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styled from 'styled-components'

type HeaderBgProps = {
    src?: string
    dontShowOnSmallViewPort?: boolean
}

export const HeaderBackground = styled.div<HeaderBgProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.35)
        ),
        url(${({ src }) =>
                src
                    ? `../images/misc/${src}.jpg`
                    : '../images/misc/home-bg.jpg'})
            top left / cover no-repeat;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) =>
            dontShowOnSmallViewPort && `background: none;`}
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    margin: 0 56px;
    height: 100px;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`

export const HeaderLink = styled(Link)<{ $active?: boolean }>`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ $active }) => ($active === true ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`

export const HeaderGroup = styled.div`
    display: flex;
    align-items: center;
`

export const SearchInput = styled.input<{ $active: boolean }>`
    background-color: rgba(64, 64, 64, 0.5);
    color: white;
    border: 1px solid white;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    border-radius: 4px;
    margin-left: ${({ $active }) => ($active === true ? '10px' : '0')};
    padding: ${({ $active }) => ($active === true ? '0 10px' : '0')};
    opacity: ${({ $active }) => ($active === true ? '1' : '0')};
    width: ${({ $active }) => ($active === true ? '200px' : '0px')};

    &:focus {
        background-color: rgba(0, 0, 0, 0.8);
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg {
        color: white;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        display: none;
    }
`

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
    height: 32px;
    width: 32px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`

export const HeaderButtonLink = styled(Link)`
    display: block;
    background-color: #e50914;
    width: max-content;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: #f40612;
    }
`

export const Picture = styled.button<{ src: string }>`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`

export const HeaderDropdown = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    padding: 10px;
    top: 32px;
    right: 10px;

    ${HeaderGroup}:last-of-type ${HeaderLink} {
        cursor: pointer;
    }

    ${HeaderGroup} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }

        ${HeaderLink} {
            cursor: pointer;
        }

        ${Picture} {
            cursor: default;
        }
    }

    button {
        margin-right: 10px;
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`

export const HeaderProfile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${HeaderDropdown} {
        display: flex;
        flex-direction: column;
    }
`

export const HeaderFeature = styled(HeaderContainer)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`

export const HeaderFeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`

export const HeaderText = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const Logo = styled.img`
    height: 36px;
    width: 134px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`

export const HeaderPlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`

export const Header = (props: {
    src?: string
    bg?: boolean
    children: JSX.Element
}) => {
    const { bg = true, children, ...restProps } = props
    if (bg) {
        return (
            <HeaderBackground data-testid='header-bg' {...restProps}>
                {children}
            </HeaderBackground>
        )
    }
    return children
}

export const HeaderFrame = ({ children, ...restProps }) => {
    return <HeaderContainer {...restProps}>{children}</HeaderContainer>
}

export const HeaderLogo = ({ to, ...restProps }) => {
    return (
        <Link href={to}>
            <Logo {...restProps} />
        </Link>
    )
}

export const HeaderSearch = ({ searchTerm, setSearchTerm, ...restProps }) => {
    const [searchActive, setSearchActive] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    return (
        <Search {...restProps}>
            <SearchIcon
                onClick={() => setSearchActive((searchActive) => !searchActive)}
                data-testid='search-click'
            >
                <img src='/images/icons/search.png' alt='Search' />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder='Search films and series'
                $active={searchActive}
                data-testid='search-input'
                onKeyDown={(e) => {
                    if (e.key !== 'Enter') return
                    const newPathname = searchTerm
                        ? `${pathname}?search=${searchTerm}`
                        : pathname
                    router.push(newPathname)
                }}
            />
        </Search>
    )
}

export const HeaderPicture = ({ src, ...restProps }) => {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />
}
