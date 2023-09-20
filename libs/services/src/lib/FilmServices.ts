import { FilmStates, Genres, ResponseFilms, ResponseVideo } from 'src/types'

import { BaseServices } from './BaseServices'

class FilmServices extends BaseServices {
    private async _parseFilms(
        responseFilmsResult: ResponseFilms,
        genres: Genres[]
    ): Promise<FilmStates[]> {
        return responseFilmsResult.results.map((film) => {
            return {
                id: film.id,
                title: film.title,
                description: film.overview,
                backdrop_path: film.backdrop_path,
                poster_path: film.poster_path,
                genres: genres.filter((item) =>
                    film.genre_ids.includes(item.id)
                )
            }
        })
    }

    public async getPopularFilms(genres: Genres[]): Promise<FilmStates[]> {
        const responseFilmsResult: ResponseFilms = await this.getRequest({
            api: `movie/popular?page=1&append_to_response=videos`
        })

        if (!responseFilmsResult) {
            return []
        }

        return this._parseFilms(responseFilmsResult, genres)
    }

    public async getFilmKey(filmId: number): Promise<ResponseVideo> {
        return this.getRequest({
            api: `movie/${filmId}/videos`
        })
    }

    public async searchFilms(
        keywords: string,
        genres: Genres[]
    ): Promise<FilmStates[]> {
        const searchedFilmResponse: ResponseFilms = await this.getRequest({
            api: `search/movie?query=${keywords}`
        })

        if (!searchedFilmResponse) {
            return []
        }

        return this._parseFilms(searchedFilmResponse, genres)
    }
}

export const filmServices: FilmServices = new FilmServices()
