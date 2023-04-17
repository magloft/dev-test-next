import { MovieCard } from 'components/MovieCard/MovieCard'
import {
  MovieDataFragment, MovieListDataFragment
} from 'graphql/index'
import { FunctionComponent, useMemo, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import styles from './MovieList.module.scss'

export interface MovieListProps {
  movies: MovieDataFragment[]
  pageInfo: {
    pageType: string
    hasNextPage: boolean
    endCursor: string
  }
  getMovies: ({ first, after }: { first: number; after: string }) => Promise<MovieListDataFragment>
}

export const MovieList: FunctionComponent<MovieListProps> = ({ movies, pageInfo, getMovies }) => {
  const [currentPageInfo, setCurrentPageInfo] = useState<typeof pageInfo>(pageInfo)
  const offSet = useMemo(() => 12, [])

  const [movieList, setMovieList] = useState<MovieDataFragment[]>(movies)

  const handleLoadMore = async () => {
    try{
      if (currentPageInfo.hasNextPage) {
        const fetchedMovies = await getMovies({
          first: offSet,
          after: currentPageInfo.endCursor
        })

        setCurrentPageInfo({
          pageType: currentPageInfo.pageType,
          endCursor: fetchedMovies.pageInfo.endCursor || '',
          hasNextPage: fetchedMovies.pageInfo.hasNextPage
        })
        setMovieList([
          ...movieList,
          ...fetchedMovies.edges!.map((edge) => edge!.node!)
        ])
      }
    } catch(e) {
      console.log({ e })
    }
  }

  return (
    <InfiniteScroll
      dataLength={movieList.length}
      next={handleLoadMore}
      hasMore={currentPageInfo.hasNextPage}
      loader={<h2>Loading...</h2>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
    <div className={styles['movie-list']} >
      {movieList.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
    </InfiniteScroll>
  )
}
