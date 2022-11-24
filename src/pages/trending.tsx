import { MovieList } from 'components/MovieList/MovieList'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout/Layout'
import { MovieListDataFragment, trendingMovies } from '../graphql/index'

export interface TrendingProps {
  list: MovieListDataFragment
}

const TrendingPage: NextPage<TrendingProps> = (props) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading ...</div>
  const movies = props.list.edges!.map((edge) => edge!.node!)
  const pageInfo = {
    pageType: 'ALL_MOVIES',
    hasNextPage: props.list.pageInfo.hasNextPage,
    endCursor: props.list.pageInfo.endCursor || ''
  }

  return (
    <Layout title='Trending' section='trending'>
      <MovieList movies={movies} pageInfo={pageInfo} getMovies={trendingMovies} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<TrendingProps> = async () => {
  const list = await trendingMovies({ first: 12 })
  return { props: { list } }
}

export default TrendingPage
