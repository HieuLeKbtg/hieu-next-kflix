'use client'

import { firebaseServices } from '@libs/services'
import { filmListStates, filmState } from '@libs/types'
import Table from 'libs/component/src/lib/table/table'
import { useEffect, useState } from 'react'

import FilmModal from './FilmModal'

const FilmListDataTable = () => {
    const [filmList, setFilmList] = useState<filmListStates>({})
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    // currentKey and currentFilm are for editing purpose only
    const [currentKey, setCurrentKey] = useState<string>('')
    const [currentFilm, setCurrentFilm] = useState<filmState | null>(null)

    const editFilm = (data: filmState) => {
        firebaseServices.EditFieldData<filmState>({
            path: `filmList/${currentKey}`,
            data,
            callback: () => setIsModalOpen(false)
        })
    }

    const deleteFilm = (key: string) => {
        firebaseServices.DeleteFieldData({
            path: `filmList/${key}`
        })
    }

    useEffect(() => {
        if (!isModalOpen) {
            setCurrentFilm(null)
            setCurrentKey('')
        }
    }, [isModalOpen, currentKey])

    useEffect(() => {
        firebaseServices.getFieldData<filmListStates>({
            path: 'filmList',
            callback: (values: filmListStates) => setFilmList(values)
        })
    }, [])

    return (
        <>
            <FilmModal
                mode='edit'
                isOpen={isModalOpen}
                onOpenModal={setIsModalOpen}
                filmData={currentFilm}
                onEdit={editFilm}
            />
            <Table
                data={filmList}
                onEdit={(key: string, data: filmState) => {
                    setIsModalOpen(true)
                    setCurrentFilm(data)
                    setCurrentKey(key)
                }}
                onDelete={deleteFilm}
            />
        </>
    )
}

export default FilmListDataTable
