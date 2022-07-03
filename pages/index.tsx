import { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'


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