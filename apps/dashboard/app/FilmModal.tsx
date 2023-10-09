'use client'

import {
    Button,
    FormInput,
    FormLabel,
    FormSelect,
    FormSubmit,
    StyledModal
} from '@libs/component'
import { FilmStates, Genres } from '@libs/types'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { ModalProps } from 'styled-react-modal'

type FilmModalProps = Omit<ModalProps, 'isOpen'> & {
    mode: 'add' | 'edit'
    genres: Genres[]
    filmData?: FilmStates
}

enum EFilmData {
    title = 'title',
    description = 'description',
    backdrop_path = 'backdrop_path',
    poster_path = 'poster_path',
    genres = 'genres'
}

const FilmModal = (props: FilmModalProps) => {
    const { mode, genres } = props

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [data, setData] = useState<
        Omit<FilmStates, 'genres'> & { genres: string[] }
    >({
        id: -1,
        title: '',
        description: '',
        backdrop_path: '',
        poster_path: '',
        genres: []
    })

    const handleChangeFields = (value: string, type: EFilmData) => {
        if (type !== EFilmData.genres) {
            setData({ ...data, [type]: value })
        } else {
            let updatedGernes: string[] = []
            if (data.genres.includes(value)) {
                updatedGernes = data.genres.filter((genre) => genre !== value)
            } else {
                updatedGernes = [...data.genres, value]
            }

            setData({ ...data, genres: updatedGernes })
        }
    }

    const submitFilm = () => {
        console.log('data', data)
    }

    const closeModal = () => setIsModalOpen(false)

    const title = mode === 'add' ? 'New Film' : 'Edit Film'

    // {
    //     backdrop_path: '/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg',
    //     description:
    //         'In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.',
    //     genres: [
    //         { id: 27, name: 'Horror' },
    //         { id: 9648, name: 'Mystery' },
    //         { id: 53, name: 'Thriller' }
    //     ],
    //     id: 968051,
    //     poster_path: '/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg',
    //     title: 'The Nun II'
    // }

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

                <FormLabel htmlFor='genres'>Genres</FormLabel>
                <FormSelect
                    name='genres'
                    multiple
                    value={data.genres}
                    onClick={(e: MouseEvent<HTMLSelectElement>) => {
                        handleChangeFields(
                            (e.target as HTMLInputElement).value,
                            EFilmData.genres
                        )
                    }}
                >
                    {genres.map((genre: Genres) => {
                        return (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        )
                    })}
                </FormSelect>

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
