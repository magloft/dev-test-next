import clsx from 'clsx'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import styles from './NavBar.module.scss'

export interface MenuItem {
  url: string
  title: string
  active: boolean
}

export interface NavBarProps {
  title: string
  section: string
}

export const NavBar: FunctionComponent<NavBarProps> = ({ title, section }) => {
  const items: MenuItem[] = [
    { url: '/', title: 'Home', active: section === 'home' },
    { url: '/upcoming', title: 'Upcoming', active: section === 'upcoming' },
    { url: '/trending', title: 'Trending', active: section === 'trending' }
  ]
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
          <input type='text' placeholder='Search ...'></input>
        </div>
      </nav>
    </header>
  )
}
