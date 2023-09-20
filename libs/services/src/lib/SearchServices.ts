import { Genres, ResponseSearch, SearchStates } from '../types'
import { BaseServices } from './BaseServices'

class SearchServices extends BaseServices {
    private async _parseContent(
        searchResult: ResponseSearch,
        genres: Genres[]
    ): Promise<SearchStates[]> {
        const filteredContent = searchResult.results.filter(
            (item) =>
                !!(item.media_type === 'tv' || item.media_type === 'movie')
        )

        return filteredContent.map((content) => {
            return {
                id: content.id,
                title: content.title,
                description: content.overview,
                backdrop_path: content.backdrop_path,
                poster_path: content.poster_path,
                genres: genres.filter((item) =>
                    content.genre_ids.includes(item.id)
                ),
                mediaType: content.media_type
            }
        })
    }

    public async searchMulti(
        keywords: string,
        genres: Genres[]
    ): Promise<SearchStates[]> {
        const searchResult: ResponseSearch = await this.getRequest({
            api: `search/multi?query=${keywords}&append_to_response=movie,tv`
        })

        if (!searchResult) return []

        return this._parseContent(searchResult, genres)
    }
}

export const searchServices: SearchServices = new SearchServices()
