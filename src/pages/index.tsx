import { MovieList } from 'components/MovieList/MovieList'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout/Layout'
import { MovieDataFragment, popularMovies } from '../graphql/index'

export interface IndexProps {
  movies: MovieDataFragment[]
}

const IndexPage: NextPage<IndexProps> = (props) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading ...</div>
  const { movies } = props
  return (
    <Layout title='Home' section='home'>
      <MovieList movies={movies} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const movies = await popularMovies({})
  return { props: { movies }, revalidate: 10 }
}

export default IndexPage
