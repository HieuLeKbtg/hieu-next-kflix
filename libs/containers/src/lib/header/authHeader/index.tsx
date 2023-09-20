import React from 'react'
import {
    Header,
    HeaderFeature,
    HeaderFeatureCallOut,
    HeaderFrame,
    HeaderPlayButton,
    HeaderText
} from 'src/components'

import LeftNavHeader from './LeftNavHeader'
import RightNavHeader from './RightNavHeader'

const AuthHeader = () => {
    return (
        <Header src='joker1'>
            <>
                <HeaderFrame>
                    <LeftNavHeader />
                    {/* @ts-expect-error Async Server Component */}
                    <RightNavHeader />
                </HeaderFrame>

                <HeaderFeature>
                    <HeaderFeatureCallOut>Watch Joker Now</HeaderFeatureCallOut>
                    <HeaderText>
                        Forever alone in a crowd, failed comedian Arthur Fleck
                        seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for his day
                        job as a clown, and the guise he projects in a futile
                        attempt to feel like he's part of the world around him.
                    </HeaderText>
                    <HeaderPlayButton>Play</HeaderPlayButton>
                </HeaderFeature>
            </>
        </Header>
    )
}

export default AuthHeader
