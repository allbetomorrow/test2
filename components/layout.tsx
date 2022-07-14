import { ReactNode, useEffect, useState } from 'react'
import SideBar from './sideBar'
import Wrapper from './wrapper'
import Head from 'next/head'
import LoadingProxy from '../components/loadingProxy'
import { useRouter } from 'next/router'
import LightDarkMode from './light-DarkMode'
import { useQuery } from 'react-query'
import axios from 'axios'
import { userSchema } from '../utils/zod'
import SectionsLayout from './sectionsLayout'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [menu, setMenu] = useState(false)
  const handleMenu = () => setMenu(!menu)
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

        <div className='flex flex-col w-full h-full 
          md:flex-row'
        >
          <div className='md:w-72 dark:bg-slate-800 bg-light-main'>
            <SideBar handleMenu={handleMenu} />
            <SectionsLayout menu={menu} handleMenu={handleMenu} />
          </div>
          <main className='max-w-4xl mt-5 px-3 sm:px-6 w-full mx-auto'>
            {children}
          </main>
        </div>

      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <LoadingProxy />
    </Wrapper>
  )
}