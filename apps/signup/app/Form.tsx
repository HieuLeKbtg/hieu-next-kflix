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
import { auth } from '@libs/registries'
import { AppRoutesWithTempRoutes } from '@libs/utils'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignUpForm() {
    const [firstName, setFirstName] = useState<string>('')
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const isInvalid = firstName === '' || password === '' || emailAddress === ''

    const handleSignup = async () => {
        if (isInvalid) return

        await createUserWithEmailAndPassword(auth, emailAddress, password).then(
            async (userCredential) => {
                await updateProfile(userCredential.user, {
                    displayName: firstName
                })

                signIn('credentials', {
                    email: emailAddress,
                    password,
                    callbackUrl: AppRoutesWithTempRoutes.HOME
                })
            },
            (error) => {
                setError(error.message)
            }
        )
    }

    return (
        <FormContainer>
            <FormTitle data-testid='title'>Sign Up</FormTitle>
            {error && <FormError data-testid='error'>{error}</FormError>}

            <FormBase>
                <FormInput
                    data-testid='first-name'
                    placeholder='First name'
                    value={firstName}
                    onChange={({ target }) =>
                        setFirstName((target as HTMLInputElement).value)
                    }
                />
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
                />
            </FormBase>
            <FormSubmit
                data-testid='signup-btn'
                disabled={isInvalid}
                onClick={handleSignup}
            >
                Sign Up
            </FormSubmit>

            <FormText>
                Already a user?{' '}
                <FormLink
                    data-testid='sign-in-btn'
                    href={AppRoutesWithTempRoutes.SIGN_IN}
                >
                    Sign in now
                </FormLink>
            </FormText>
            <FormTextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot Learn more
            </FormTextSmall>
        </FormContainer>
    )
}
