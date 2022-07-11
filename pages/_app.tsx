import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import useIsomorphicLayoutEffect from '../utils/useIsomorphicLayoutEffect'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity
    }
  }
})

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  useIsomorphicLayoutEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(
        <Component {...pageProps} />
      )}
    </QueryClientProvider>
  )


}

export default MyApp
