'use client'

import {
    Button,
    FormInput,
    FormLabel,
    FormSubmit,
    StyledModal
} from '@libs/component'
import { firebaseServices } from '@libs/services'
import { FilmStates } from '@libs/types'
import { ChangeEvent, useState } from 'react'
import { ModalProps } from 'styled-react-modal'

type FilmModalProps = Omit<ModalProps, 'isOpen'> & {
    mode: 'add' | 'edit'
    filmData?: FilmStates
}

enum EFilmData {
    title = 'title',
    description = 'description',
    backdrop_path = 'backdrop_path',
    poster_path = 'poster_path'
}

const FilmModal = (props: FilmModalProps) => {
    const { mode } = props

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [data, setData] = useState<Omit<FilmStates, 'genres' | 'id'>>({
        title: '',
        description: '',
        backdrop_path: '',
        poster_path: ''
    })

    const handleChangeFields = (value: string, type: EFilmData) => {
        setData({ ...data, [type]: value })
    }

    const submitFilm = () => {
        firebaseServices.addFieldData({ path: 'filmList', data })
    }

    const closeModal = () => setIsModalOpen(false)

    const title = mode === 'add' ? 'New Film' : 'Edit Film'

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
                {title}
            </Button>

            <StyledModal isOpen={isModalOpen} onEscapeKeydown={closeModal}>
                <h1>{title}</h1>

                <FormLabel htmlFor='title'>Title</FormLabel>
                <FormInput
                    name='title'
                    placeholder='Film Title'
                    value={data.title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        handleChangeFields(e.target.value, EFilmData.title)
                    }}
                />

                <FormLabel htmlFor='Description'>Description</FormLabel>
                <FormInput
                    name='Description'
                    placeholder='Film Description'
                    value={data.description}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        handleChangeFields(
                            e.target.value,
                            EFilmData.description
                        )
                    }}
                />

                <FormLabel htmlFor='poster_path'>Poster Path</FormLabel>
                <FormInput
                    name='poster_path'
                    placeholder='Film Poster Path'
                    value={data.poster_path}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        handleChangeFields(
                            e.target.value,
                            EFilmData.poster_path
                        )
                    }}
                />

                <FormLabel htmlFor='backdrop_path'>Backdrop Path</FormLabel>
                <FormInput
                    name='backdrop_path'
                    placeholder='Film Backdrop Path'
                    value={data.backdrop_path}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        handleChangeFields(
                            e.target.value,
                            EFilmData.backdrop_path
                        )
                    }}
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <FormSubmit
                        onClick={closeModal}
                        style={{ marginRight: '5px' }}
                    >
                        Close
                    </FormSubmit>
                    <FormSubmit onClick={submitFilm}>Submit</FormSubmit>
                </div>
            </StyledModal>
        </>
    )
}

export default FilmModal
