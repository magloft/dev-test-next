import { MovieCard } from 'components/MovieCard/MovieCard'
import { MovieDataFragment } from 'graphql'
import { FunctionComponent } from 'react'
import styles from './MovieList.module.scss'

export interface MovieListProps {
  movies: MovieDataFragment[]
}

export const MovieList: FunctionComponent<MovieListProps> = ({ movies }) => {
  return (
    <div className={styles['movie-list']}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
