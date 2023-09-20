import { Genres } from './genres'

export type ResponseListType<T> = {
    page: number
    results: T[]
    total_pages: number
    total_results: number
}

export type Video = {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: string
    type: string
    official: string
    published_at: string
    id: string
}

export type ResponseVideo = {
    id: number
    results: Video[]
}

export type ContentStates = {
    id: number
    title: string
    description: string
    backdrop_path: string
    poster_path: string
    genres: Genres[]
}
