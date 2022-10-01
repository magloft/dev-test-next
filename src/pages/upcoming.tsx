import { MovieList } from 'components/MovieList/MovieList'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout/Layout'
import { MovieDataFragment, upcomingMovies } from '../graphql/index'

export interface UpcomingProps {
  movies: MovieDataFragment[]
}

const UpcomingPage: NextPage<UpcomingProps> = (props) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading ...</div>
  const { movies } = props
  return (
    <Layout title='Upcoming' section='upcoming'>
      <MovieList movies={movies} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<UpcomingProps> = async () => {
  const movies = await upcomingMovies({})
  return { props: { movies }, revalidate: 10 }
}

export default UpcomingPage
