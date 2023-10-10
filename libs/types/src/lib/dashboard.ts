import { ContentStates } from './general'

export type filmState = Omit<ContentStates, 'id' | 'genres'>

export type filmListStates = {
    [key: string]: filmState
}
