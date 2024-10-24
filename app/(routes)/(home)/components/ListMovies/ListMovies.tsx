"use client";

import React from 'react'
import { ListMoviesProps } from './ListMovies.types'
import { BlockMovies } from '@/components/shared/BlockMovies';
import { useLovedFilms } from '@/hooks/use-loved-films';
import { useCurrentNetflixUser } from '@/hooks/use-current-user';

export const ListMovies = (props: ListMoviesProps) => {

    const { movies } = props;

    const { lovedFilmsByUser } = useLovedFilms();

    const { currentUser  } = useCurrentNetflixUser();

    const userNetflix = currentUser?.id;

    const lovedFilms = userNetflix ? lovedFilmsByUser[userNetflix] : [];

    return (
    <div>
        <BlockMovies title='Películas favoritas' movies={lovedFilms} isMyList={true} />

        <BlockMovies title="Peliculas más recientes" movies={movies} isMyList={false} />
    </div>
  )
}
