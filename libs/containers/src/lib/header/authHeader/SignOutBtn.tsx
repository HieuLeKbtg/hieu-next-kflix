'use client'

import { AppRoutesWithTempRoutes } from '@libs/utils'
import { signOut } from 'next-auth/react'

const SignOutBtn = () => {
    return (
        <button
            data-testid='signout-btn'
            style={{ width: '100%' }}
            onClick={() =>
                signOut({ callbackUrl: AppRoutesWithTempRoutes.HOME })
            }
        >
            Sign out
        </button>
    )
}

export default SignOutBtn
