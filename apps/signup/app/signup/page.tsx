import { MainFooter, PublicHeader } from '@libs/containers'
import { AppRoutesWithTempRoutes } from '@libs/utils'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import SignUpForm from './Form'

export default async function SignUp() {
    const session = await getServerSession()

    if (session?.user) {
        redirect(AppRoutesWithTempRoutes.BROWSE)
    }

    return (
        <>
            <PublicHeader>
                <SignUpForm />
            </PublicHeader>
            <MainFooter />
        </>
    )
}
