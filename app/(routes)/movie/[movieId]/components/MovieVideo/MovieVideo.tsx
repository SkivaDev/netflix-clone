"use client";
import React from 'react'
import { MovieVideoProps } from './MovieVideo.types'
import dynamic from 'next/dynamic';


const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const MovieVideo = (props: MovieVideoProps) => {

    const { currentMovie } = props;

  return (
    <ReactPlayer
    url={currentMovie}
    loop={true}
    width="100%"
    height="100%"
    playing={true}
    muted={true}
    controls={false}
  />
  )
}
