import React from "react"
import Link from "next/link"
import Wrapper from "../components/wrapper"

const Welcome = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center pt-64">
        <h1 className="dark:text-dark-sec text-4xl">Welcome page</h1>
        <div className="flex mt-5">
          <Link href="/login">
            <a className="dark:text-dark-sec text-xl hover:underline">Login</a>
          </Link>
          <Link href="/register">
            <a className="dark:text-dark-sec ml-3 text-xl hover:underline">Register</a>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Welcome