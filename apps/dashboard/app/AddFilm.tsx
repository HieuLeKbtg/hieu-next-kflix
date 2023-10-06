'use client'

import { Button, StyledModal } from '@libs/component'
import { useState } from 'react'
import { ModalProps } from 'styled-react-modal'

type AddFilmProps = Omit<ModalProps, 'isOpen'> & {
    mode: 'add' | 'edit'
}

const AddFilm = (props: AddFilmProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const { mode, children } = props

    const closeModal = () => setIsModalOpen(false)

    const title = mode === 'add' ? 'New Film' : 'Edit Film'

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>{title}</Button>

            <StyledModal
                isOpen={isModalOpen}
                onBackgroundClick={closeModal}
                onEscapeKeydown={closeModal}
            >
                <h1>{title}</h1>
                {children}
            </StyledModal>
        </>
    )
}

export default AddFilm
