import React from "react";
import { Formik, Form, useField } from 'formik';
import { useRouter } from "next/router";
import Wrapper from "../components/wrapper";
import axios, { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toFormikValidationSchema } from '../utils/zodAdapter'
import { loginSchema, userSchema } from '../utils/zod'
import { useIsUser } from "../utils/hooks"
import LoadingProxy from "../components/loadingProxy";

interface ButtonProps {
  isLoading?: boolean
  text: string,
  type: "button" | "submit" | "reset" | undefined
}
function Button({ isLoading, text, type }: ButtonProps) {
  return (
    <button type={type} disabled={isLoading}
      className="inline-flex shrink-0 justify-center items-center h-10 px-4 py-2 mt-12 w-full text-purple-600 font-semibold rounded-full border
      border-purple-200 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-80 cursor-pointer
      hover:text-white hover:bg-purple-600 hover:border-transparent disabled:opacity-70 disabled:bg-purple-500 disabled:text-white"
    >
      {isLoading
        ? <svg className={` h-5 w-5 animate-spin text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        : <span>{text}</span>
      }
    </button>
  )
}

interface MyTextInputProps {
  label: string,
  name: string,
  type: string,
  id?: string,
  placeholder?: string
}
const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
  const [field, meta] = useField(props)

  return (
    <div className='flex flex-col mt-10 relative'>
      <input {...field} {...props} autoComplete='off'
        className='peer h-10 z-10 bg-transparent w-full border-b-2 border-gray-300 text-gray-900 
        placeholder-transparent focus:outline-none focus:border-purple-600'
        placeholder=' '
      />
      <label htmlFor={props.id || props.name}
        className="absolute left-0 -top-4 text-gray-600 text-sm transition-all 
        peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
        peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className='absolute top-10 text-sm text-rose-500'>{meta.error}</div>
      ) : null}
    </div>
  );
};


export default function Login() {
  const router = useRouter()
  const client = useQueryClient()

  const { mutateAsync } = useMutation(async (data: { username: string, password: string }) => {
    const res = await axios.post('/api/login', data, { withCredentials: true })
    return userSchema.parse(res.data)
  }, {
    onSuccess: (result) => {
      client.setQueryData('me', result)
      router.push('/')
    }
  })
  return (
    <Wrapper>
      <div className="flex h-full items-center">
        <div className="flex flex-col items-center p-4 w-80 mx-auto border dark:bg-white border-purple-200 rounded-3xl shadow-lg">
          <h1 className="text-2xl font-semibold  text-gray-900">Welcome back!</h1>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={toFormikValidationSchema(loginSchema)}
            onSubmit={async (values, { setErrors }) => {
              try {
                await mutateAsync(values)
              } catch (err) {
                if (err instanceof AxiosError) {
                  setErrors(err?.response?.data)
                } else {
                  throw err
                }
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col items-center">

                <MyTextInput name="username" label="Username" type="text" />
                <MyTextInput name="password" label="Password" type="password" />
                <Button isLoading={isSubmitting} text="Sign in" type="submit" />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Wrapper>
  )
}
