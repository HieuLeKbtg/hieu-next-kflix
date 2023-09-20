'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
    Card,
    CardEntities,
    CardGroup,
    CardImage,
    CardMeta,
    CardText,
    CardTitle,
    MainCardFeature,
    MainCardItem,
    Player,
    PlayerButton,
    PlayerVideo
} from 'src/components'
import { seriesServices } from 'src/services'
import { filmServices } from 'src/services/FilmServices'
import { ContentStates, ImageConfigs, SearchStates } from 'src/types'

type SlideRowsProps = {
    category: 'series' | 'films' | 'multi'
    imageConfigs: ImageConfigs
    data?: ContentStates[]
    dataOnBrowse?: SearchStates[]
}

const DEFAULT_ITEM: ContentStates = {
    id: -1,
    title: '',
    description: '',
    backdrop_path: '',
    poster_path: '',
    genres: []
}

export const SlideRows = (props: SlideRowsProps) => {
    const { category, imageConfigs, data, dataOnBrowse } = props
    const [item, setItem] = useState<ContentStates>(DEFAULT_ITEM)

    const [videoKey, setVideoKey] = useState<string>('')
    const cardFeatureRef = useRef(null)
    const slideItemRef = useRef(null)

    const getVideoDetail = async (id: number, cat: string) => {
        const videoDetail =
            cat === 'films'
                ? await filmServices.getFilmKey(id)
                : await seriesServices.getSeriesKey(id)
        if (videoDetail?.results?.length) {
            setVideoKey(videoDetail.results[0]?.key)
        } else {
            setVideoKey('')
        }
    }

    const getVideokey = async (id: number) => {
        // Browse route
        if (category === 'multi') {
            const currentContent =
                dataOnBrowse?.find((item) => item.id === id) || null
            if (currentContent) {
                let realCat = ''
                if (currentContent.mediaType === 'movie') {
                    realCat = 'films'
                }
                if (currentContent.mediaType === 'tv') {
                    realCat = 'series'
                }
                getVideoDetail(id, realCat)
            }
            // series and films routes
        } else {
            getVideoDetail(id, category)
        }
    }

    const handleClickOutside = (e) => {
        if (cardFeatureRef.current) {
            if (
                !cardFeatureRef.current.contains(e.target) &&
                !slideItemRef.current.contains(e.target)
            ) {
                setItem(DEFAULT_ITEM)
            }
        }
    }

    const renderList = (data) => {
        return data.map((slideItem) => (
            <Card
                onClick={() => {
                    setItem(slideItem)
                }}
                key={slideItem.id}
            >
                <CardTitle>{slideItem.title}</CardTitle>
                <CardEntities>
                    <MainCardItem key={slideItem.id} item={slideItem}>
                        <CardImage
                            src={`${imageConfigs.secure_base_url}/original/${slideItem.backdrop_path}`}
                        />
                        <CardMeta>
                            <CardText>{slideItem.description}</CardText>
                        </CardMeta>
                    </MainCardItem>
                </CardEntities>
            </Card>
        ))
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('click', handleClickOutside)
        }

        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <>
            <CardGroup
                $flexDirection='row'
                $flexWrap='wrap'
                $justifyContent='space-evenly'
                ref={slideItemRef}
            >
                {renderList(dataOnBrowse || data)}
            </CardGroup>

            {item.id !== -1 ? (
                <div ref={cardFeatureRef}>
                    <MainCardFeature
                        genres={item.genres}
                        item={item}
                        url={`${imageConfigs.secure_base_url}/original/${item.poster_path}`}
                        onClose={() => setItem(DEFAULT_ITEM)}
                    >
                        <Player>
                            <PlayerButton
                                onClick={() => getVideokey(item.id)}
                            />
                            {videoKey ? (
                                <PlayerVideo
                                    src={`https://www.youtube.com/embed/${videoKey}`}
                                />
                            ) : null}
                        </Player>
                    </MainCardFeature>
                </div>
            ) : null}
        </>
    )
}
