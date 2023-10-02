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

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                emailAddress,
                password
            )
            await updateProfile(user.user, { displayName: firstName })
            signIn('credentials', {
                email: emailAddress,
                password,
                redirect: true,
                callbackUrl: AppRoutesWithTempRoutes.HOME
            })
        } catch (error) {
            setError((error as Error).message)
        }
    }

    return (
        <FormContainer>
            <FormTitle>Sign Up</FormTitle>
            {error && <FormError>{error}</FormError>}

            <FormBase>
                <FormInput
                    placeholder='First name'
                    value={firstName}
                    onChange={({ target }) =>
                        setFirstName((target as HTMLInputElement).value)
                    }
                />
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
                />
            </FormBase>
            <FormSubmit
                disabled={isInvalid}
                data-testid='sign-up'
                onClick={handleSignup}
            >
                Sign Up
            </FormSubmit>

            <FormText>
                Already a user? <FormLink href='/signin'>Sign in now</FormLink>
            </FormText>
            <FormTextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot Learn more
            </FormTextSmall>
        </FormContainer>
    )
}
