import React from "react";
import Task from "./task";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axios from "axios";



const TaskLayout = () => {
  const router = useRouter()
  const slug = router.query.slug as string

  const { data: tasks } = useQuery(['tasks', slug], async () => {
    if (slug) {
      const res = await axios.post('/api/tasks', { url: slug }, { withCredentials: true })
      return res.data as Task[]
    }
  })

  if (!tasks) {
    return <div>Loading...</div>
  }
  return (
    <div className="grid grid-cols-1 px-5 gap-3
    sm:grid-cols-2 sm:px-6 sm:gap-4
    md:grid-cols-3 md:px-7 md:gap-5">
      {tasks.map(task => <Task key={task.id} task={task} />)}
    </div>
  )
}

export default TaskLayout