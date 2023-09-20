type BackdropSize = 'w300' | 'w780' | 'w1280' | 'original'

type LogoSizes = 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'original'

type PosterSize =
    | 'w92'
    | 'w154'
    | 'w185'
    | 'w342'
    | 'w500'
    | 'w780'
    | 'original'

type ProfileSizes = 'w45' | 'w185' | 'h632' | 'original'

type StillSizes = 'w92' | 'w185' | 'w300' | 'original'

export type ImageConfigs = {
    base_url: string
    secure_base_url: string
    backdrop_sizes: Record<BackdropSize, string>[]
    logo_sizes: Record<LogoSizes, string>[]
    poster_sizes: Record<PosterSize, string>[]
    profile_sizes: Record<ProfileSizes, string>[]
    still_sizes: Record<StillSizes, string>[]
}

export type ResponseConfiguration = {
    images: ImageConfigs
    change_keys: string[]
}
