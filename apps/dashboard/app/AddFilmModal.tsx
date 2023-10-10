'use client'

import { Button } from '@libs/component'
import { firebaseServices } from '@libs/services'
import { filmState } from '@libs/types'
import { useState } from 'react'

import FilmModal from './FilmModal'

const AddFilmModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const addFilm = (data: filmState) => {
        firebaseServices.addFieldData({
            path: 'filmList',
            data,
            callback: () => setIsModalOpen(false)
        })
    }

    return (
        <>
            <Button
                onClick={() => setIsModalOpen(true)}
                style={{
                    fontSize: '20px',
                    padding: '16px',
                    marginLeft: '20px',
                    height: 'auto',
                    textTransform: 'none'
                }}
            >
                New Film
            </Button>

            <FilmModal
                mode='add'
                isOpen={isModalOpen}
                onOpenModal={setIsModalOpen}
                onAdd={addFilm}
            />
        </>
    )
}

export default AddFilmModal
