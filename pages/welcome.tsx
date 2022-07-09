import React from "react"
import Link from "next/link"
import Wrapper from "../components/wrapper"
import { useIsUser } from "../utils/hooks"
import LoadingProxy from "../components/loadingProxy"



export default function Welcome() {
  const { data, isFetched } = useIsUser('/')
  if (isFetched && !data) {
    return (
      <Wrapper>
        <main className="flex flex-col items-center mt-40">
          <h1 className="font-semibold text-4xl text-light-sec dark:text-dark-sec">Welcome page</h1>
          <div className="mt-5 dark:text-dark-sec text-xl decoration-dark-th underline-offset-4">
            <Link href="/login">
              <a className="hover:underline decoration-inherit">Sign in</a>
            </Link>
            <Link href="/#">
              <a className="ml-7 hover:underline decoration-inherit">Sign up</a>
            </Link>
          </div>
        </main>
      </Wrapper >
    )
  }
  return (
    <Wrapper>
      <LoadingProxy />
    </Wrapper>
  )
}