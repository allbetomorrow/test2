import axios, { AxiosError } from "axios"
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.req.cookies.qid) {
    return {
      redirect: {
        destination: '/welcome',
        permanent: false
      }
    }
  }
  try {
    const qid = context.req.cookies.qid

    const user = axios.get(`http://localhost:3005/users`,
      { headers: { cookie: `qid=${qid}` } }
    )
    const sections = axios.get(`http://localhost:3005/sections`,
      { headers: { cookie: `qid=${qid}` } }
    )

    const { data: props, error } = await Promise.all([user, sections]).then(res => {
      const data: { user: User, sections: Section[] | [] } = {
        user: res[0].data,
        sections: res[1].data
      }
      return { data, error: null }
    }).catch(_err => {
      return { data: null, error: { status: '404', message: 'Not Found' } }
    })

    if (error) {
      throw new AxiosError(error.message, error.status)
    }

    return { props }
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
  }
  return { props: {} }
}
