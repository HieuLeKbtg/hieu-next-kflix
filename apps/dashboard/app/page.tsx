import { AuthHeader, MainFooter } from '@libs/containers'

import AddFilm from './AddFilm'

const Dashboard = () => {
    return (
        <>
            <AuthHeader />

            <AddFilm mode='add'>content here</AddFilm>

            {/** TODO: list films here */}

            <MainFooter />
        </>
    )
}

export default Dashboard
