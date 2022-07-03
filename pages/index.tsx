import axios from 'axios'
import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { useQuery } from 'react-query'
import Layout from '../components/layout'
import { userSchema } from '../utils/yupSchemas'
import type { NextPageWithLayout } from './_app'


const Home: NextPageWithLayout = () => {
  const { data, error } = useQuery('me', async () => {
    const res = await axios.get('/api/user', { withCredentials: true })
    return userSchema.validate(res.data)
  })
  console.log(data)
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