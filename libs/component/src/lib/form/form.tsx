'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
`

export const FormError = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`

export const FormBase = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`

export const FormTitle = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
`

export const FormText = styled.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`

export const FormTextSmall = styled.p`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #8c8c8c;
`

export const FormLink = styled(Link)`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export const FormInput = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;
    display: block;
    width: 45%;
    &:last-of-type {
        margin-bottom: 30px;
    }
`

export const FormLabel = styled.label`
    font-weight: 700;
    display: block;
    margin-bottom: 5px;
`
export const FormSelect = styled.select`
    width: 100%;
    height: 200px;
    option {
        padding: 10px;
    }
`

export const FormSubmit = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`
