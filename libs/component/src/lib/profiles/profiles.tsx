'use client'

import styled from 'styled-components/macro'

export const ProfilesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`

export const ProfilesTitle = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 48px;
    text-align: center;
    font-weight: 500;
`

export const ProfilesList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`

export const ProfilesName = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`

export const ProfilesPicture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;
`

export const ProfilesItem = styled.li`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;

    &:hover > ${ProfilesPicture} {
        border: 3px solid white;
    }

    &:hover ${ProfilesName} {
        font-weight: bold;
        color: white;
    }

    &:last-of-type {
        margin-right: 0;
    }
`

export const MainProfilesPicture = ({
    src,
    ...restProps
}: {
    src?: string
}) => {
    return (
        <ProfilesPicture
            src={src || '/images/misc/loading.gif'}
            {...restProps}
        />
    )
}
