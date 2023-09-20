import { ContentStates, ResponseListType } from './general'

export type SearchMultiContent = {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: 'movie' | 'tv' | 'person'
    genre_ids: number[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number

    // Infor for Person
    name: string
    original_name: string
    gender: number
    known_for_department: string
    profile_path: string
    known_for: SearchMultiContent[]
}

export type SearchStates = ContentStates & {
    mediaType: 'movie' | 'tv' | 'person'
}

export type ResponseSearch = ResponseListType<SearchMultiContent>
