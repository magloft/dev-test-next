import clsx from 'clsx'
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
  setSearchTerm?: Dispatch<SetStateAction<string>>
}

export const NavBar: FunctionComponent<NavBarProps> = ({
  title,
  section,
  presearched,
  focusInputWhenSearch,
  setSearchTerm
}) => {
  const router = useRouter()
  const [search, setSearch] = useState<string>(presearched || '')
  const baseSearchURL = useMemo(() => '/search?term=', [])

  const debouncedFetchData = useMemo(() => {
    return debounce((searchTerm: string) => {
      if (setSearchTerm) setSearchTerm(searchTerm)
     }, 1000)
  }, [])

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
