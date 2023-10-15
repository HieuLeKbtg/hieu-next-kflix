'use client'

import { FormInput, FormLabel, FormSubmit, StyledModal } from '@libs/component'
import { filmState } from '@libs/types'
import { ChangeEvent, useEffect, useState } from 'react'
import { ModalProps } from 'styled-react-modal'

type FilmModalProps = Omit<ModalProps, 'isOpen'> & {
    mode: 'add' | 'edit'
    filmData?: filmState | null
    isOpen: boolean
    onOpenModal: (isOpen: boolean) => void
    onAdd?: (data: filmState) => void
    onEdit?: (data: filmState) => void
}

enum EFilmData {
    title = 'title',
    description = 'description',
    backdrop_path = 'backdrop_path',
    poster_path = 'poster_path'
}

const DEFAULT_DATA = {
    title: '',
    description: '',
    backdrop_path: '',
    poster_path: ''
}

const FilmModal = (props: FilmModalProps) => {
    const { mode, filmData, isOpen, onOpenModal, onAdd, onEdit } = props

    const [data, setData] = useState<filmState>(DEFAULT_DATA)

    const handleChangeFields = (value: string, type: EFilmData) => {
        setData({ ...data, [type]: value })
    }

    const submitFilm = () => {
        if (mode === 'add' && onAdd) {
            onAdd(data)
        }
        if (mode === 'edit' && onEdit) {
            onEdit(data)
        }
    }

    const closeModal = () => onOpenModal(false)

    useEffect(() => {
        if (!isOpen) {
            setData(DEFAULT_DATA)
        }
    }, [isOpen])

    useEffect(() => {
        if (filmData) {
            setData(filmData)
        }
    }, [filmData])

    return (
        <StyledModal isOpen={isOpen} onEscapeKeydown={closeModal}>
            <h1>{mode === 'add' ? 'New Film' : 'Edit Film'}</h1>

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
                    handleChangeFields(e.target.value, EFilmData.description)
                }}
            />

            <FormLabel htmlFor='poster_path'>Poster Path</FormLabel>
            <FormInput
                name='poster_path'
                placeholder='Film Poster Path'
                value={data.poster_path}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChangeFields(e.target.value, EFilmData.poster_path)
                }}
            />

            <FormLabel htmlFor='backdrop_path'>Backdrop Path</FormLabel>
            <FormInput
                name='backdrop_path'
                placeholder='Film Backdrop Path'
                value={data.backdrop_path}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChangeFields(e.target.value, EFilmData.backdrop_path)
                }}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <FormSubmit onClick={closeModal} style={{ marginRight: '5px' }}>
                    Close
                </FormSubmit>
                <FormSubmit onClick={submitFilm}>Submit</FormSubmit>
            </div>
        </StyledModal>
    )
}

export default FilmModal
