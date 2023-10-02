import {
    HeaderDropdown,
    HeaderGroup,
    HeaderLink,
    HeaderPicture,
    HeaderProfile
} from '@libs/component'
import { AppRoutesWithTempRoutes } from '@libs/utils'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import SearchBox from './SearchBox'
import SignOutBtn from './SignOutBtn'

const RightNavHeader = async () => {
    const session = await getServerSession()

    if (!session?.user) {
        redirect(AppRoutesWithTempRoutes.HOME)
    }

    const { name, email } = session.user

    return (
        <HeaderGroup>
            <SearchBox />
            <HeaderProfile>
                <HeaderPicture src='2' />
                <HeaderDropdown>
                    <HeaderGroup>
                        <HeaderLink href='#'>{name || email || ''}</HeaderLink>
                    </HeaderGroup>
                    <SignOutBtn />
                </HeaderDropdown>
            </HeaderProfile>
        </HeaderGroup>
    )
}

export default RightNavHeader
