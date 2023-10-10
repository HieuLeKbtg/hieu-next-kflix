import { AuthHeader, MainFooter } from '@libs/containers'

import FilmListDataTable from './FilmListDataTable'
import FilmModal from './FilmModal'

const Dashboard = async () => {
    return (
        <>
            <AuthHeader />

            <FilmModal mode='add' />

            <FilmListDataTable />

            <MainFooter />
        </>
    )
}

export default Dashboard
