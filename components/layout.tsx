import { ReactNode, useEffect } from 'react'
import SideBar from './sideBar'
import Wrapper from './wrapper'
import Head from 'next/head'
import LoadingProxy from '../components/loadingProxy'
import { useRouter } from 'next/router'
import LightDarkMode from './light-DarkMode'
import { useQuery } from 'react-query'
import axios from 'axios'
import { userSchema } from '../utils/zod'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const { data, error, isFetched } = useQuery('me', async () => {
    const res = await axios.get('/api/user', { withCredentials: true })
    console.log(res)
    if (res.data) {
      return userSchema.parse(res.data)
    } else {
      router.push('/welcome')
    }
  }, {
    retry: 0
  })

  if (isFetched && data) {
    return (
      <Wrapper>
        <Head>
          <title>Notes</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <SideBar />
        <main className='max-w-4xl mt-5 px-3 sm:px-6 w-full mx-auto'>
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