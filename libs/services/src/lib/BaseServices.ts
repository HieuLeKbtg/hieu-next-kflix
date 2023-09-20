import { configEnv } from 'src/utils/configEnv'

type RequestProps = {
    api: string
    body?: string
    headers?: Headers
    callback?: () => void
}

export abstract class BaseServices {
    private baseApi = configEnv.THE_MOVIE_DB_ENDPOINT
    private apiKey = configEnv.API_KEY_THE_MOVIE_DB
    private baseHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`
    }

    protected async getRequest<T>(params: RequestProps): Promise<T> | null {
        const { api, body, headers, callback } = params

        const result = await fetch(`${this.baseApi}/${api}`, {
            method: 'GET',
            headers: { ...this.baseHeader, ...headers },
            body
        })
            .then((rs) => {
                if (rs.status !== 200) return null
                return rs.json()
            })
            .catch((err) => err)
            .finally(() => callback && callback)

        return result
    }

    protected async postRequest<T>(params: RequestProps): Promise<T> | null {
        const { api, body, headers, callback } = params
        const result = await fetch(`${this.baseApi}/${api}`, {
            method: 'POST',
            headers: { ...this.baseHeader, ...headers },
            body
        })
            .then((rs) => {
                if (rs.status !== 200) return null
                return rs.json()
            })
            .catch((err) => err)
            .finally(() => callback && callback)

        return result
    }
}
