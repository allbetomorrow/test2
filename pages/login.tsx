import React, { useEffect } from "react";
import { Formik, Form } from 'formik';
import { toErrorMap } from "../utils/toErrorMap";
import * as Yup from 'yup';
import MyTextInput from "../components/textImput";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../components/button";
import Wrapper from "../components/wrapper";
import LightDarkMode from "../components/light-DarkMode";
import { login } from "../utils/swrHooks";
import { AxiosError } from "axios";
import { useMutation, useQueryClient } from 'react-query'

export default function Login() {
  const router = useRouter()
  const client = useQueryClient()
  const { mutateAsync } = useMutation(login, {
    onSuccess: (result) => {
      client.setQueryData('me', result)
    }
  })
  return (
    <Wrapper>
      <div className="flex h-full items-center">
        <div className="absolute top-3 right-3">
          <LightDarkMode />
        </div>
        <div className="flex flex-col items-center p-4 w-80 mx-auto border dark:bg-white border-purple-200 rounded-3xl shadow-lg">
          <h1 className="text-2xl font-semibold  text-gray-900">Welcome back!</h1>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required').min(3, 'Must be 3 characters or more'),
              password: Yup.string()
                .max(20, 'Must be 15 characters or less')
                .required('Required').min(3, 'Must be 3 characters or more')
            })}
            onSubmit={async (values, { setErrors }) => {
              try {
                await mutateAsync(values)
                router.push("/")
              } catch (err) {
                if (err instanceof AxiosError) {
                  setErrors(toErrorMap(err?.response?.data.errors))
                }
                throw err
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col items-center">

                <MyTextInput name="username" label="Username" type="text" />
                <MyTextInput name="password" label="Password" type="password" />
                <Button isLoading={isSubmitting} text="Sign in" type="submit" />

                <Link href='#'>
                  <a className="mt-4 text-sm text-purple-600 font-medium hover:underline focus:outline-none">Forgot password?</a>
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>

    </Wrapper>

  )
}