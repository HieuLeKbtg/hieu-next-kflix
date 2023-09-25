import { AuthHeader, MainFooter, SlideRows } from '@libs/containers'
import {
    configServices,
    genreServices,
    seriesServices
} from '@libs/services'
import {
    ResponseConfiguration,
    ResponseGenres,
    SeriesStates
} from '@libs/types'

type SeriesProps = {
    searchParams: Record<PropertyKey, string>
}

const Series = async (props: SeriesProps) => {
    const { searchParams } = props
    const genreResult: ResponseGenres = await genreServices.getGenreTvList()

    const seriesList: SeriesStates[] = await seriesServices.getPopularSeries(
        genreResult.genres
    )

    const searchedSeriesList: SeriesStates[] =
        await seriesServices.searchSeries(
            searchParams?.search ?? '',
            genreResult.genres
        )

    const configResult: ResponseConfiguration = await configServices.getDetail()

    return (
        <>
            <AuthHeader />

            <SlideRows
                category='series'
                imageConfigs={configResult.images}
                data={
                    searchedSeriesList.length ? searchedSeriesList : seriesList
                }
            />
            <MainFooter />
        </>
    )
}

export default Series
