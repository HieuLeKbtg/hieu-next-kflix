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
import { AppRoutesWithTempRoutes } from '@libs/utils'
import { useRouter } from 'next/navigation'
import { signIn, SignInResponse } from 'next-auth/react'
import { useState } from 'react'

export default function SignInForm() {
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const router = useRouter()

    const isInvalid = password === '' || emailAddress === ''

    const handleSignin = async () => {
        if (isInvalid) return

        const signinRes: SignInResponse | undefined = await signIn(
            'credentials',
            {
                email: emailAddress,
                password,
                redirect: false
            }
        )

        if (signinRes?.error) {
            setError(signinRes.error)
        } else {
            router.push(AppRoutesWithTempRoutes.BROWSE)
        }
    }

    return (
        <FormContainer>
            <FormTitle data-testid='title'>Sign In</FormTitle>
            {error && <FormError data-testid='error'>{error}</FormError>}

            <FormBase>
                <FormInput
                    data-testid='email'
                    placeholder='Email address'
                    value={emailAddress}
                    onChange={({ target }) =>
                        setEmailAddress((target as HTMLInputElement).value)
                    }
                />
                <FormInput
                    data-testid='password'
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
                type='submit'
                data-testid='submit-btn'
                disabled={isInvalid}
                onClick={handleSignin}
            >
                Sign In
            </FormSubmit>

            <FormText>
                New to Netflix?{' '}
                <FormLink
                    data-testid='sign-up-btn'
                    href={AppRoutesWithTempRoutes.SIGN_UP}
                >
                    Sign up now
                </FormLink>
            </FormText>
            <FormTextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot Learn more
            </FormTextSmall>
        </FormContainer>
    )
}
