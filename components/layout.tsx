import { ReactNode, useEffect } from 'react'
import SideBar from './sideBar'
import Wrapper from './wrapper'
import Head from 'next/head'
import LoadingProxy from '../components/loadingProxy'
import { useRouter } from 'next/router'
import { useIsUser } from '../utils/hooks'
import LightDarkMode from './light-DarkMode'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const { data, isFetched } = useIsUser()

  useEffect(() => {
    if (isFetched && !data) {
      router.push('/welcome')
    }
  }, [isFetched, data, router])


  if (isFetched && data) {
    return (
      <Wrapper>
        <Head>
          <title>Notes</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <LightDarkMode />
        <SideBar />
        <main className='max-w-5xl w-full mx-auto'>
          {children}
        </main>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <LoadingProxy />
    </Wrapper>
  )
}