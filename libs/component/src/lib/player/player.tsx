'use client'

import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'

const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    margin: 0 20px;
`

const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    height: 50%;
    margin: auto;
`

const Close = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 22px;
    height: 22px;
    opacity: 0.3;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    &:before,
    &:after {
        position: absolute;
        left: 10px;
        top: 0;
        content: ' ';
        height: 22px;
        width: 2px;
        background-color: #333;
    }

    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`

const Button = styled.button`
    background-color: #e50914;
    border-color: #ff0a16;
    width: 115px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: 18px;
    height: 45px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;

    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }
`

const PlayerContext = createContext(null)

export function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false)

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <div {...restProps}>{children}</div>
        </PlayerContext.Provider>
    )
}

export const PlayerVideo = ({ src }) => {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return showPlayer
        ? ReactDOM.createPortal(
              <Overlay
                  onClick={() => setShowPlayer(false)}
                  data-testid='player'
              >
                  <Inner>
                      <iframe
                          style={{ width: '100%', height: '100%' }}
                          id='netflix-player'
                          src={src}
                          allow='autoplay; fullscreen;encrypted-media;'
                      />

                      <Close />
                  </Inner>
              </Overlay>,
              document.body
          )
        : null
}

export const PlayerButton = ({ onClick, ...restProps }) => {
    const { setShowPlayer } = useContext(PlayerContext)

    return (
        <Button
            onClick={() => {
                onClick()
                setShowPlayer(true)
            }}
            {...restProps}
        >
            Play
        </Button>
    )
}
