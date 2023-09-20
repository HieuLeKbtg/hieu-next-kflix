import { ResponseGenres } from 'src/types'

import { BaseServices } from './BaseServices'

class GenreServices extends BaseServices {
    public async getGenreMoveList(): Promise<ResponseGenres> {
        return this.getRequest({
            api: `genre/movie/list`
        })
    }

    public async getGenreTvList(): Promise<ResponseGenres> {
        return this.getRequest({
            api: `genre/tv/list`
        })
    }
}

export const genreServices: GenreServices = new GenreServices()
