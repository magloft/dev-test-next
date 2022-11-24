import { MovieList } from 'components/MovieList/MovieList'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout/Layout'
import { MovieListDataFragment, popularMovies } from '../graphql/index'

export interface IndexProps {
  list: MovieListDataFragment
}

const IndexPage: NextPage<IndexProps> = (props) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading ...</div>
  const movies = props.list.edges!.map((edge) => edge!.node!)
  const pageInfo = {
    pageType: 'ALL_MOVIES',
    hasNextPage: props.list.pageInfo.hasNextPage,
    endCursor: props.list.pageInfo.endCursor || ''
  }

  return (
    <Layout title='Home' section='home'>
      <MovieList movies={movies} pageInfo={pageInfo} getMovies={popularMovies}/>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const list = await popularMovies({ first: 12 })
  return { props: { list } }
}

export default IndexPage
