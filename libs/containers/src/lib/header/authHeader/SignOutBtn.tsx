'use client'

import { HeaderGroup } from '@libs/component'
import { appRoutes } from '@libs/utils'
import { signOut } from 'next-auth/react'

const SignOutBtn = () => {
    return (
        <HeaderGroup>
            <button
                style={{ width: '100%' }}
                onClick={() => signOut({ callbackUrl: appRoutes.HOME })}
            >
                Sign out
            </button>
        </HeaderGroup>
    )
}

export default SignOutBtn
