import { Field, Form, Formik } from "formik";
import React, { useReducer, useState, ReactNode } from "react";
import z from 'zod'

interface TaskProps {
  task: Task
}

interface FieldWrapper {
  children: ReactNode,
  dispatch: () => void,
  isActive: boolean
}

const activeSchema = z.object({
  titleActive: z.boolean(),
  contentActive: z.boolean()
})

const init = (task: Task) => {
  const { id, ...rest } = task
  const state: { [key: string]: boolean } = {}
  // let k: keyof typeof rest
  for (let k in rest) {
    state[`${k}Active`] = false
  }
  return activeSchema.parse(state)
}

const reducer = (state: z.infer<typeof activeSchema>, action: { type: keyof z.infer<typeof activeSchema> }) => {
  const property = action.type
  return activeSchema.parse({ ...state, [property]: !state[property] })
}

const FieldWrapper = ({ children, dispatch, isActive }: FieldWrapper) => {
  return (
    <div className="flex">
      {children}
      <button className="" type="button" onClick={dispatch}>
        {isActive
          ? <svg className="w-8 h-8 dark:fill-dark-sec" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
          : <svg className="w-8 h-8 dark:stroke-dark-sec" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z" />
            <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" /></g>
          </svg>}

      </button>
    </div>
  )
}

const Task = ({ task }: TaskProps) => {
  const [state, dispatch] = useReducer(reducer, task, init)
  console.log(state)
  return (
    <Formik
      initialValues={{ title: task.title, content: task.content }}
      onSubmit={async (values) => {
        console.log(values)
      }}
    >
      {({ isSubmitting, values }) => (

        <Form className="flex flex-col mb-3">

          <FieldWrapper dispatch={() => dispatch({ type: "titleActive" })} isActive={state.titleActive}>
            {state.titleActive
              ? <Field name="title" type="text" className="w-full" />
              : <div className="w-full">{values.title}</div>}
          </FieldWrapper>

          <Field name="content" as="textarea" />
        </Form>
      )
      }
    </Formik>
  )
}

export default Task