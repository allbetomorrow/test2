import { ReactNode, useEffect } from 'react'
import SideBar from './sideBar'
import Wrapper from './wrapper'
import Head from 'next/head'
import LoadingProxy from '../components/loadingProxy'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { userSchema } from '../utils/yupSchemas'
import axios from 'axios'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()

  const { data, isLoading } = useQuery('me', async () => {
    const res = await axios.get('/api/user', { withCredentials: true })
    return userSchema.validate(res.data)
  })

  useEffect(() => {
    if (!isLoading && !data) {
      router.replace('/login')
    }
  }, [isLoading, data, router])

  if (isLoading || !data) {
    return <Wrapper>
      <LoadingProxy />
    </Wrapper>
  }

  return (
    <Wrapper>
      <Head>
        <title>Booknotes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SideBar />
      <main className='max-w-5xl w-full mx-auto'>
        {children}
      </main>
    </Wrapper>
  )
}