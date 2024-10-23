import React from 'react'
import { ListMoviesProps } from './ListMovies.types'
import { BlockMovies } from '@/components/shared/BlockMovies';

export const ListMovies = (props: ListMoviesProps) => {

    const { movies } = props;

    return (
    <div>
        <BlockMovies title="Peliculas más recientes" movies={movies} isMyList={false} />
    </div>
  )
}
