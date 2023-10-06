import { AuthHeader, MainFooter, SlideRows } from '@libs/containers'
import { configServices, genreServices } from '@libs/services'
import { ResponseConfiguration, ResponseGenres } from '@libs/types'

import FilmModal from './FilmModal'

const Dashboard = async () => {
    const configResult: ResponseConfiguration = await configServices.getDetail()
    const genreResult: ResponseGenres = await genreServices.getGenreMoveList()

    const dumpData = [
        {
            backdrop_path: '/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg',
            description:
                'In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.',
            genres: [
                { id: 27, name: 'Horror' },
                { id: 9648, name: 'Mystery' },
                { id: 53, name: 'Thriller' }
            ],
            id: 968051,
            poster_path: '/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg',
            title: 'The Nun II'
        }
    ]

    return (
        <>
            <AuthHeader />

            <FilmModal mode='add' genres={genreResult.genres}>
                content here
            </FilmModal>

            {dumpData.length ? (
                <SlideRows
                    category='films'
                    imageConfigs={configResult.images}
                    data={dumpData}
                />
            ) : (
                'No Films'
            )}

            <MainFooter />
        </>
    )
}

export default Dashboard
