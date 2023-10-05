import { AuthHeader, MainFooter, SlideRows } from '@libs/containers'
import { configServices, filmServices, genreServices } from '@libs/services'
import { FilmStates, ResponseConfiguration, ResponseGenres } from '@libs/types'

type FilmsProps = {
    searchParams: Record<PropertyKey, string>
}

const RealtimeFilms = async (props: FilmsProps) => {
    const { searchParams } = props
    const genreResult: ResponseGenres = await genreServices.getGenreMoveList()
    const filmList: FilmStates[] = await filmServices.getPopularFilms(
        genreResult.genres
    )

    const searchedFilmList: FilmStates[] = await filmServices.searchFilms(
        searchParams?.search ?? '',
        genreResult.genres
    )

    const configResult: ResponseConfiguration = await configServices.getDetail()

    return (
        <>
            <AuthHeader />

            <SlideRows
                category='films'
                imageConfigs={configResult.images}
                data={searchedFilmList.length ? searchedFilmList : filmList}
            />

            <MainFooter />
        </>
    )
}

export default RealtimeFilms
