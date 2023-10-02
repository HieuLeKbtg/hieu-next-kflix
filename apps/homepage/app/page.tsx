import {
    FeatureContainer,
    FeatureSubTitle,
    FeatureTitle,
    OptFormBreak,
    OptFormButton,
    OptFormContainer,
    OptFormInput,
    OptFormText
} from '@libs/component'
import {
    FaqsContainer,
    MainFooter,
    MainJumbotron,
    PublicHeader
} from '@libs/containers'
import { AppRoutesWithTempRoutes } from '@libs/utils'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Homepage() {
    const session = await getServerSession(authOptions)

    if (session?.user && session?.user.name !== 'FirebaseError') {
        redirect(AppRoutesWithTempRoutes.BROWSE)
    }

    return (
        <>
            <PublicHeader>
                <FeatureContainer>
                    <FeatureTitle data-cy='feature-title'>
                        Unlimited films, TV programmes and more
                    </FeatureTitle>
                    <FeatureSubTitle data-cy='feature-sub-title'>
                        Watch anywhere Cancel at any time
                    </FeatureSubTitle>
                    <OptFormContainer>
                        <OptFormInput placeholder='Email address' />
                        <OptFormButton>Try it now</OptFormButton>
                        <OptFormBreak />
                        <OptFormText data-cy='email-membership'>
                            Ready to watch? Enter your email to create or
                            restart your membership
                        </OptFormText>
                    </OptFormContainer>
                </FeatureContainer>
            </PublicHeader>

            <MainJumbotron />
            <FaqsContainer />
            <MainFooter />
        </>
    )
}
