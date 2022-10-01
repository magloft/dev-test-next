import { MovieList } from 'components/MovieList/MovieList'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout/Layout'
import { MovieDataFragment, trendingMovies } from '../graphql/index'

export interface TrendingProps {
  movies: MovieDataFragment[]
}

const TrendingPage: NextPage<TrendingProps> = (props) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading ...</div>
  const { movies } = props
  return (
    <Layout title='Trending' section='trending'>
      <MovieList movies={movies} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<TrendingProps> = async () => {
  const movies = await trendingMovies({})
  return { props: { movies }, revalidate: 10 }
}

export default TrendingPage
