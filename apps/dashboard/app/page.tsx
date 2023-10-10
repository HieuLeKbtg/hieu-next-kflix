import { AuthHeader, MainFooter } from '@libs/containers'

import AddFilmModal from './AddFilmModal'
import FilmListDataTable from './FilmListDataTable'

const Dashboard = () => {
    return (
        <>
            <AuthHeader />

            <AddFilmModal />

            <FilmListDataTable />

            <MainFooter />
        </>
    )
}

export default Dashboard
