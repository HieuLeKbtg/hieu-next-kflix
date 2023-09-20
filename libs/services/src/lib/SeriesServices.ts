import { Genres, ResponseSeries, ResponseVideo, SeriesStates } from 'src/types'

import { BaseServices } from './BaseServices'

class SeriesServices extends BaseServices {
    private async _parseFilms(
        responseSeriesResult: ResponseSeries,
        genres: Genres[]
    ): Promise<SeriesStates[]> {
        return responseSeriesResult.results.map((serie) => {
            return {
                id: serie.id,
                title: serie.name,
                description: serie.overview,
                backdrop_path: serie.backdrop_path,
                poster_path: serie.poster_path,
                genres: genres.filter((item) =>
                    serie.genre_ids.includes(item.id)
                )
            }
        })
    }

    public async getPopularSeries(genres: Genres[]): Promise<SeriesStates[]> {
        const responseSeriesResult: ResponseSeries = await this.getRequest({
            api: `tv/popular`
        })

        if (!responseSeriesResult) {
            return []
        }

        return this._parseFilms(responseSeriesResult, genres)
    }

    public async getSeriesKey(seriesId: number): Promise<ResponseVideo> {
        return this.getRequest({
            api: `tv/${seriesId}/videos`
        })
    }

    public async searchSeries(
        keywords: string,
        genres: Genres[]
    ): Promise<SeriesStates[]> {
        const responseSeriesResult: ResponseSeries = await this.getRequest({
            api: `search/tv?query=${keywords}`
        })

        if (!responseSeriesResult) {
            return []
        }

        return this._parseFilms(responseSeriesResult, genres)
    }
}

export const seriesServices: SeriesServices = new SeriesServices()
