'use client'

import { appRoutes } from 'app/routes'
import { signOut } from 'next-auth/react'

import { HeaderGroup } from '../../../components'

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
