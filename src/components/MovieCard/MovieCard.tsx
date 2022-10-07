import { MovieDataFragment } from 'graphql'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from './MovieCard.module.scss'

export interface MovieCardProps {
  movie: MovieDataFragment
}

export const MovieCard: FunctionComponent<MovieCardProps> = ({ movie }) => {
  const backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url(${movie.backdrop})`
  return (
    <div className={styles['movie-card']} style={{ backgroundImage }}>
      <div className={styles['movie-poster']}>
        <Image src={movie.poster} alt={movie.title} width={92} height={138} />
      </div>
      <div className={styles['movie-body']}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}
