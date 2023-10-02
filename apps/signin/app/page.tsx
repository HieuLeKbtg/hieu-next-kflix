import { MainFooter, PublicHeader } from '@libs/containers'
import { AppRoutesWithTempRoutes } from '@libs/utils'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import SignInForm from './Form'

export default async function SignIn() {
    const session = await getServerSession()

    if (session?.user && session?.user.name !== 'FirebaseError') {
        redirect(AppRoutesWithTempRoutes.BROWSE)
    }

    return (
        <>
            <PublicHeader>
                <SignInForm />
            </PublicHeader>
            <MainFooter />
        </>
    )
}
