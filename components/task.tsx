import { Field, Form, Formik } from "formik";
import React, { useReducer } from "react";


interface TaskProps {
  task: Task
}

const reducer = (state: Record<keyof any, any>, action: { type: string }) => {
  const newState = { ...state }
  newState[action.type] = !state[action.type]
  return newState
}

const getInitialState = (task: Task) => {
  const initialState = Object.keys(task).reduce((acc: Record<keyof any, unknown>, cur: string) => {
    acc[cur] = task[cur as keyof Task]
    if (cur !== 'id') acc[`${cur}Active`] = false
    return acc
  }, {})
  return initialState
}

const Task = ({ task }: TaskProps) => {

  const [state, dispatch] = useReducer(reducer, getInitialState(task))
  return (
    <Formik
      initialValues={{ title: task.title, content: task.content }}
      onSubmit={async (values) => {
        console.log(values)
      }}
    >
      {({ isSubmitting, values }) => (

        <Form className="flex flex-col mb-3">
          {state.titleActive ? <Field name="title" type="text" /> : <div onClick={() => dispatch({ type: "titleActive" })}>{task.title}</div>}

          <Field name="content" type="text" />
        </Form>
      )
      }
    </Formik>
  )
}

export default Task