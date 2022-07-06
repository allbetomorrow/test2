import { ReactNode, useEffect } from 'react'
import SideBar from './sideBar'
import Wrapper from './wrapper'
import Head from 'next/head'
import LoadingProxy from '../components/loadingProxy'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import axios from 'axios'
import { userSchema } from '../utils/zod'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()

  const { data, isLoading } = useQuery('me', async () => {
    const res = await axios.get('/api/user', { withCredentials: true })
    return userSchema.parse(res.data)
  })


  if (!isLoading && !data) {
    router.replace('/login')
  }


  if (isLoading || !data) {
    return <Wrapper>
      <LoadingProxy />
    </Wrapper>
  }

  return (
    <Wrapper>
      <Head>
        <title>Notes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SideBar />
      <main className='max-w-5xl w-full mx-auto'>
        {children}
      </main>
    </Wrapper>
  )
}