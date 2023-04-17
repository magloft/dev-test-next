import { MovieList } from 'components/MovieList/MovieList'
import { GetServerSideProps, NextPage } from 'next'
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
  const pageInfo = {
    pageType: 'UPCOMING_MOVIES',
    hasNextPage: props.list.pageInfo.hasNextPage,
    endCursor: props.list.pageInfo.endCursor || ''
  }

  return (
    <Layout title='Upcoming' section='upcoming'>
      <MovieList movies={movies} pageInfo={pageInfo} getMovies={upcomingMovies}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<UpcomingProps> = async () => {
  const list = await upcomingMovies({ first: 12 })
  return { props: { list } }
}

export default UpcomingPage
