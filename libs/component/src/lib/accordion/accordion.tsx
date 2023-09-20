'use client'

import { createContext, useContext, useState } from 'react'
import { styled } from 'styled-components'

export const AccordionContainer = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`

export const AccordionFrame = styled.div`
    margin-bottom: 40px;
`

export const AccordionInner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`

export const AccordionTitle = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`

export const Item = styled.div`
    color: white;
    margin: auto;
    margin-bottom: 10px;
    max-width: 728px;
    width: 100%;

    &:first-of-type {
        margin-top: 3em;
    }
    &:last-of-type {
        margin-bottom: 0;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
        user-select: none;

        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
`

export const Body = styled.div`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    white-space: pre-wrap;
    user-select: none;
    overflow: hidden;

    &.closed {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }
    &.open {
        max-height: 1200px;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    span {
        display: block;
        padding: 0.8em 2.2em 0.8em 1.2em;
    }

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`

const ToggleContext = createContext(null)

export function MainAccordion({ children, ...restProps }) {
    return (
        <AccordionContainer {...restProps}>
            <AccordionInner>{children}</AccordionInner>
        </AccordionContainer>
    )
}

export const AccordionItem = ({ children, ...restProps }) => {
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}
export const AccordionHeader = ({ children, ...restProps }) => {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)
    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src='/images/icons/close-slim.png' alt='Close' />
            ) : (
                <img src='/images/icons/add.png' alt='Open' />
            )}
        </Header>
    )
}

export const AccordionBody = ({ children, ...restProps }) => {
    const { toggleShow } = useContext(ToggleContext)

    return (
        <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
            <span>{children}</span>
        </Body>
    )
}
