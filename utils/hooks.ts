import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { userSchema } from "./zod";

export const useIsUser = (redirect?: string) => {
  const router = useRouter()
  const { data, isFetched } = useQuery('me', async () => {
    try {
      const res = await axios.get('/api/user', { withCredentials: true })
      return userSchema.parse(res.data)
    } catch (err) {
      console.log('unloged')
    }
  }, {
    onSuccess: () => {
      if (redirect) {
        router.push(redirect)
      }
    },
    retry: 0
  })

  return { data, isFetched }
}