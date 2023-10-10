'use client'
import { firebaseServices } from '@libs/services'
import { ContentStates } from '@libs/types'
import Table from 'libs/component/src/lib/table/table'
import { useEffect, useState } from 'react'

const FilmListDataTable = () => {
    const [filmList, setFilmList] = useState<ContentStates[]>([])

    const editFilm = () => {}
    const deleteFilm = () => {}

    useEffect(() => {
        firebaseServices.getFieldData<ContentStates[]>({
            path: 'filmList',
            callback: (values: ContentStates[]) =>
                setFilmList(Object.values(values))
        })
    }, [])

    return <Table data={filmList} onEdit={editFilm} onDelete={deleteFilm} />
}

export default FilmListDataTable
