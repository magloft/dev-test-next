import { Layout } from 'components/Layout/Layout'
import { MovieCard } from 'components/MovieCard/MovieCard'
import { MovieDataFragment } from 'graphql'
import { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import styles from '../components/MovieList/MovieList.module.scss'


export interface SearchProps {
  term: string
}

const SearchPage: NextPage<SearchProps> = (props) => {
  // search logic as per the change in the prop
  const [movies, setMovies] = useState<MovieDataFragment[]>([])
  return (
    <Layout
      title='Search Movies'
      section={props.term}
      presearched={props.term}
      focusInputWhenSearch={true}
      setSearchedResult={setMovies}
    >
      Searched movies for: <p>{props.term}</p>
      <div className={styles['movie-list']} >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async ({ query }) => {
  try {
    const { term } = query
  return { props: { term: term as string } }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

export default SearchPage
