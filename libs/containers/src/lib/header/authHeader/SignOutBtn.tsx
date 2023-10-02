'use client'

import { HeaderGroup } from '@libs/component'
import { AppRoutesWithTempRoutes } from '@libs/utils'
import { signOut } from 'next-auth/react'

const SignOutBtn = () => {
    return (
        <HeaderGroup>
            <button
                style={{ width: '100%' }}
                onClick={() =>
                    signOut({ callbackUrl: AppRoutesWithTempRoutes.HOME })
                }
            >
                Sign out
            </button>
        </HeaderGroup>
    )
}

export default SignOutBtn
