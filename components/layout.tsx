import { ReactNode, useEffect } from 'react'
import SideBar from './sideBar'
import Wrapper from './wrapper'
import Head from 'next/head'
import LoadingProxy from '../components/loadingProxy'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import axios from 'axios'
import { userSchema } from '../utils/zod'
import { useIsUser } from '../utils/hooks'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const { data, isFetched } = useIsUser()

  // const { data, isLoading, } = useQuery('me', async () => {
  //   const res = await axios.get('/api/user', { withCredentials: true })
  //   return userSchema.parse(res.data)
  // })

  useEffect(() => {
    if (isFetched && !data) {
      router.push('/login')
    }
  }, [isFetched, data, router])


  if (!isFetched || !data) {
    return (
      <Wrapper>
        <LoadingProxy />
      </Wrapper>
    )
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