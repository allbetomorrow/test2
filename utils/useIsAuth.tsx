import { useRouter } from "next/router"
import { useEffect } from "react"
import useSWR from "swr"
import { getUser } from "./swrHooks"

export const useIsAuth = () => {
  const { data: user, isValidating } = useSWR('/user/me', getUser)
  const router = useRouter()
  useEffect(() => {
    if (!user && !isValidating) {
      router.push('/login')
    }
  }, [isValidating, user, router])
}