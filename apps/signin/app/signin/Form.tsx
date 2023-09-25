'use client'

import {
    FormBase,
    FormContainer,
    FormError,
    FormInput,
    FormLink,
    FormSubmit,
    FormText,
    FormTextSmall,
    FormTitle
} from '@libs/component'
import { appRoutes } from '@libs/utils'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignInForm() {
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const isInvalid = password === '' || emailAddress === ''

    const handleSignin = () => {
        if (isInvalid) return

        signIn('credentials', {
            email: emailAddress,
            password,
            redirect: true,
            callbackUrl: appRoutes.BROWSE
        }).catch((err) => {
            setError(err.message)
        })
    }

    return (
        <FormContainer>
            <FormTitle>Sign In</FormTitle>
            {error && <FormError data-testid='error'>{error}</FormError>}

            <FormBase>
                <FormInput
                    placeholder='Email address'
                    value={emailAddress}
                    onChange={({ target }) =>
                        setEmailAddress((target as HTMLInputElement).value)
                    }
                />
                <FormInput
                    type='password'
                    value={password}
                    autoComplete='off'
                    placeholder='Password'
                    onChange={({ target }) =>
                        setPassword((target as HTMLInputElement).value)
                    }
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            handleSignin()
                        }
                    }}
                />
            </FormBase>

            <FormSubmit
                disabled={isInvalid}
                data-testid='sign-in'
                onClick={handleSignin}
            >
                Sign In
            </FormSubmit>

            <FormText>
                New to Netflix? <FormLink href='/signup'>Sign up now</FormLink>
            </FormText>
            <FormTextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot Learn more
            </FormTextSmall>
        </FormContainer>
    )
}
