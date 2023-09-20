import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import React from 'react'
import { FaqsContainer, MainFooter, MainJumbotron } from 'src'
import {
    FeatureContainer,
    FeatureSubTitle,
    FeatureTitle,
    OptFormBreak,
    OptFormButton,
    OptFormContainer,
    OptFormInput,
    OptFormText
} from 'src/components'

import PublicHeader from '@/containers/header/publicHeader'

import { authOptions } from './api/auth/[...nextauth]/route'
import { appRoutes } from './routes'

export default async function Homepage() {
    const session = await getServerSession(authOptions)

    if (session?.user) {
        redirect(appRoutes.BROWSE)
    }

    return (
        <>
            <PublicHeader>
                <FeatureContainer>
                    <FeatureTitle>
                        Unlimited films, TV programmes and more
                    </FeatureTitle>
                    <FeatureSubTitle>
                        Watch anywhere Cancel at any time
                    </FeatureSubTitle>
                    <OptFormContainer>
                        <OptFormInput placeholder='Email address' />
                        <OptFormButton>Try it now</OptFormButton>
                        <OptFormBreak />
                        <OptFormText>
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
