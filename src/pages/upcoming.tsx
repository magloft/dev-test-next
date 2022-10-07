import { MovieList } from 'components/MovieList/MovieList'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout/Layout'
import { MovieListDataFragment, upcomingMovies } from '../graphql/index'

export interface UpcomingProps {
  list: MovieListDataFragment
}

const UpcomingPage: NextPage<UpcomingProps> = (props) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading ...</div>
  const movies = props.list.edges!.map((edge) => edge!.node!)
  return (
    <Layout title='Upcoming' section='upcoming'>
      <MovieList movies={movies} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<UpcomingProps> = async () => {
  const list = await upcomingMovies({ first: 10 })
  return { props: { list }, revalidate: 10 }
}

export default UpcomingPage
