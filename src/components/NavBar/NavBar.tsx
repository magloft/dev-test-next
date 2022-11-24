import clsx from 'clsx'
import { MovieDataFragment } from 'graphql'
import debounce from 'lodash.debounce'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, FunctionComponent, SetStateAction, useEffect, useMemo, useState } from 'react'
import styles from './NavBar.module.scss'

export interface MenuItem {
  url: string
  title: string
  active: boolean
}

export interface NavBarProps {
  title: string
  section: string
  presearched?: string
  focusInputWhenSearch?: boolean
  setSearchedResult?: Dispatch<SetStateAction<MovieDataFragment[]>>
}

export const NavBar: FunctionComponent<NavBarProps> = ({
  title,
  section,
  presearched,
  focusInputWhenSearch,
  setSearchedResult
}) => {
  const router = useRouter()
  const [search, setSearch] = useState<string>(presearched || '')
  const baseSearchURL = useMemo(() => '/search?term=', [])

  // const [getSearchedMovies, searchedMoviesResponse] = useSearchMoviesLazyQuery()
  // if the query was present it could be used

  const debouncedFetchData = debounce((searchTerm: string) => {
    console.log({ searchTerm })
    // getSearchedMovies
   }, 1000)

  const handleTextInput = (e: { target: { value: string } }) => {
    if (e.target.value.length < search.length) {
      router.back()
      setSearch(e.target.value)
    } else {
      setSearch(e.target.value)
    }
  }
  const items: MenuItem[] = [
    { url: '/', title: 'Home', active: section === 'home' },
    { url: '/upcoming', title: 'Upcoming', active: section === 'upcoming' },
    { url: '/trending', title: 'Trending', active: section === 'trending' }
  ]

  useEffect(() => {
    if (search) {
      router.push(`${baseSearchURL}${search}`)
      debouncedFetchData(search)
    }
  }, [search])

  // useEffect(() => {
  // for working search api once we get the response we will update the searched movies
  //   setSearchedResult(searchedMoviesResponse?.data)
  // }, [searchedMoviesResponse?.data])

  return (
    <header className={styles['navbar']}>
      <nav className={styles['container']}>
        <Link prefetch={false} href='/'>
          <a className={styles['navbar-brand']} aria-label={title}>
            <div className={styles['navbar-title']}>{title}</div>
          </a>
        </Link>
        <div className={styles.menu}>
          {items.map((item, index) => (
            <Link prefetch={false} key={index} href={item.url}>
              <a className={clsx(styles['menu-item'], item.active && styles['active'])}>
                <div className={styles['menu-item-title']}>{item.title}</div>
              </a>
            </Link>
          ))}
        </div>
        <div className={styles['search-box']}>
          <input type='text' placeholder='Search ...' onChange={handleTextInput} value={search} autoFocus={focusInputWhenSearch}></input>
        </div>
      </nav>
    </header>
  )
}
