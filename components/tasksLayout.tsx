import React from "react";
import Task from "./task";
import { useRouter } from "next/router";
import { useQuery } from "react-query";


const TaskLayout = () => {
  const router = useRouter()
  const slug = router.query.slug as string
  const { data: tasks } = useQuery(['tasks', slug], () => getTasks(slug))

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
  return <div>Task</div>
}

export default TaskLayout