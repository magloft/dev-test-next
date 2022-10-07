import Head from 'next/head'
import { FunctionComponent, PropsWithChildren } from 'react'
import { NavBar } from '../NavBar/NavBar'

interface LayoutProps extends PropsWithChildren {
  title: string
  section: string
}

export const Layout: FunctionComponent<LayoutProps> = ({ title, section, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content='#7b46f6' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=5.0'></meta>
        <meta charSet='utf-8' />
        <meta itemProp='name' content={title} />
        <meta property='og:title' content={title} />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@magloft' />
        <meta name='twitter:creator' content='@magloft' />
        <meta name='twitter:title' content={title} />
      </Head>
      <NavBar title='Movie Explorer' section={section} />
      {children}
    </>
  )
}
