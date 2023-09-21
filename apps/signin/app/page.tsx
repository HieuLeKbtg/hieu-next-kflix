import { MainFooter, PublicHeader } from '@libs/containers'
import { appRoutes } from '@libs/utils'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import SignInForm from './Form'

export default async function SignIn() {
    const session = await getServerSession()

    if (session?.user) {
        redirect(appRoutes.BROWSE)
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
