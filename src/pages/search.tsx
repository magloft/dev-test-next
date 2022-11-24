import { Layout } from 'components/Layout/Layout'
import { MovieCard } from 'components/MovieCard/MovieCard'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import styles from '../components/MovieList/MovieList.module.scss'
import { MovieDataFragment, searchMovies } from '../graphql/index'


export interface SearchProps {
  term: string
}

const SearchPage: NextPage<SearchProps> = (props) => {
  const [movies, setMovies] = useState<MovieDataFragment[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentPageInfo, setCurrentPageInfo] = useState<{
    pageType: string
    hasNextPage: boolean
    endCursor: string
  }>()

  const handleSearchMovies = async (term: string) => {
    try {
      const searchedMovies = await searchMovies({
        term: term,
        first: 12
      })
      const movies = searchedMovies.edges?.map((edge) => edge?.node)
      setCurrentPageInfo({
        pageType: 'SEARCH',
        hasNextPage: searchedMovies?.pageInfo?.hasNextPage,
        endCursor: searchedMovies?.pageInfo?.endCursor || ''
      })
      setMovies(movies as MovieDataFragment[])
    } catch (error) {
      console.log({ error })
    }
  }

  const handleLoadMore = async () => {
    try{
      if (currentPageInfo?.hasNextPage) {
        const fetchedMovies = await searchMovies({
          term: searchTerm,
          first: 12,
          after: currentPageInfo.endCursor
        })

        setCurrentPageInfo({
          pageType: currentPageInfo.pageType,
          endCursor: fetchedMovies.pageInfo.endCursor || '',
          hasNextPage: fetchedMovies.pageInfo.hasNextPage
        })
        setMovies([
          ...movies,
          ...fetchedMovies.edges!.map((edge) => edge!.node!)
        ])
      }
    } catch(e) {
      console.log({ e })
    }
  }

  useEffect(() => {
    handleSearchMovies(searchTerm)
  }, [searchTerm])

  return (
    <Layout
      title='Search Movies'
      section={props.term}
      presearched={props.term}
      focusInputWhenSearch={true}
      setSearchTerm={setSearchTerm}
    >
      <InfiniteScroll
      dataLength={movies.length}
      next={handleLoadMore}
      hasMore={currentPageInfo?.hasNextPage || false}
      loader={<h2>Loading...</h2>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      >
        <h3 style={{ color: 'white', paddingLeft: '25px' }}>Explore movies related to:</h3>
        <p style={{ color: 'white', paddingLeft: '25px' }}>{props.term}</p>
        <div className={styles['movie-list']} >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
      </InfiniteScroll>
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
