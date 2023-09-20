'use client'
import React, { createContext, useContext, useState } from 'react'
import styled from 'styled-components/macro'

export const CardTitle = styled.p`
    font-size: 18px;
    color: #e5e5e5;
    font-weight: bold;
    margin-top: 0;
`

export const CardContainer = styled.div`
    text-align: center;
    margin-bottom: 50px;
    margin: 0 36px 24px;
    flex-basis: calc(25% - 72px);
    position: relative;

    > ${CardTitle} {
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

export const CardGroup = styled.div<{
    $flexDirection?: string
    $alignItems?: string
    $justifyContent?: string
    margin?: string
    $flexWrap?: string
}>`
    display: flex;
    flex-direction: ${({ $flexDirection }) =>
        $flexDirection === 'row' ? 'row' : 'column'};
    ${({ $alignItems }) => $alignItems && `align-items: ${$alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};
    flex-wrap: ${({ $flexWrap }) => $flexWrap || 'nowrap'};
    justify-content: ${({ $justifyContent }) =>
        $justifyContent || 'flex-start'};
`

export const CardSubTitle = styled.p`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`

export const CardText = styled.p`
    margin-top: 5px;
    font-size: 14px;
    color: #fff;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    -webkit-line-clamp: 3;
`

export const CardEntities = styled.div``

export const CardMeta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #0000008f;
    width: 100%;
`

export const CardImage = styled.img`
    border: 0;
    width: 100%;
    height: 212px;
    cursor: pointer;
    padding: 0;
    margin: 0;
`

export const CardItem = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
        z-index: 99;
    }

    @media (min-width: 1200px) {
        &:hover ${CardMeta}, &:hover ${CardText}, &:hover ${CardSubTitle} {
            display: block;
            z-index: 100;
        }
    }
`

export const CardFeatureText = styled.p<{ fontWeight?: string }>`
    font-size: 18px;
    color: white;
    font-weight: ${({ fontWeight }) =>
        fontWeight === 'bold' ? 'bold' : 'normal'};
    margin: 0;

    @media (max-width: 600px) {
        line-height: 22px;
    }
`

export const CardFeature = styled.div<{ src: string }>`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: cover;
    position: fixed;
    padding: 16px;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    height: 300px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;

    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;

        ${CardTitle} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${CardFeatureText} {
            font-size: 14px;
        }
    }
`

export const CardFeatureTitle = styled(CardTitle)`
    margin-left: 0;
`

export const CardFeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`

export const CardContent = styled.div`
    line-height: normal;
    text-align: left;
    @media (max-width: 1000px) {
        margin: 30px;
        max-width: none;
    }
`

export const CardMaturity = styled.div<{ rating: number }>`
    background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
    border-radius: 15px;
    width: 28px;
    line-height: 28px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`

const FeatureContext = createContext(null)

export function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider
            value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
        >
            <CardContainer {...restProps}>{children}</CardContainer>
        </FeatureContext.Provider>
    )
}

export const MainCardItem = ({ item, children, ...restProps }) => {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)

    return (
        <CardItem
            onClick={() => {
                setItemFeature(item)
                setShowFeature(true)
            }}
            {...restProps}
        >
            {children}
        </CardItem>
    )
}

export const MainCardFeature = (props) => {
    const { children, url, item, onClose, ...restProps } = props

    const genresTextNode = item.genres.reduce((total, current) => {
        if (!total) return current.name
        return (total = `${total}, ${current.name}`)
    }, '')

    return (
        <CardFeature {...restProps} src={url}>
            <CardContent>
                <CardFeatureTitle>{item.title}</CardFeatureTitle>
                <CardFeatureText>{item.description}</CardFeatureText>
                <CardFeatureClose onClick={onClose}>
                    <img src='/images/icons/close.png' alt='Close' />
                </CardFeatureClose>

                <CardGroup
                    margin='18px 0'
                    $flexDirection='row'
                    $alignItems='center'
                >
                    <CardFeatureText fontWeight='bold'>
                        {genresTextNode}
                    </CardFeatureText>
                </CardGroup>

                {children}
            </CardContent>
        </CardFeature>
    )
}
