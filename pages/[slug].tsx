import React, { ReactElement } from "react"
import Layout from "../components/layout"
import TaskLayout from "../components/tasksLayout"


export default function Theme() {


  return (
    <TaskLayout />
  )
}


Theme.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}