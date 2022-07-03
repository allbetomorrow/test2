import { ReactNode, useEffect, useLayoutEffect } from 'react'
import SideBar from './sideBar'
import Wrapper from './wrapper'
import Head from 'next/head'
import LoadingProxy from '../components/loadingProxy'
import { useRouter } from 'next/router'
import { useQueryClient, useQuery } from 'react-query'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const queryClient = useQueryClient()


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