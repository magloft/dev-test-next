import { MovieList } from 'components/MovieList/MovieList'
import { GetStaticProps, NextPage } from 'next'
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
  return (
    <Layout title='Trending' section='trending'>
      <MovieList movies={movies} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<TrendingProps> = async () => {
  const list = await trendingMovies({ first: 10 })
  return { props: { list }, revalidate: 10 }
}

export default TrendingPage
