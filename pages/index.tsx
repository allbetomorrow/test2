import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import Layout from '../components/layout'
import { getUser } from '../utils/swrHooks'
import type { NextPageWithLayout } from './_app'

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.req.cookies.qid) {
    return {
      redirect: {
        destination: '/welcome',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

const Home: NextPageWithLayout = () => {

  return (
    <div className='flex flex-wrap bg-slate-200'>
      weekly updates
    </div>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}