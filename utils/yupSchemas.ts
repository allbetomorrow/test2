import { object, string, number, date, InferType, array } from 'yup';


export const userSchema = object({
  id: number().required(),
  username: string().required()
})

export const loginSchema = object({
  username: string()
    .max(15, 'Must be 15 characters or less')
    .required('Required').min(3, 'Must be 3 characters or more'),
  password: string()
    .max(20, 'Must be 15 characters or less')
    .required('Required').min(3, 'Must be 3 characters or more')
})

export const sectionSchema = array().of(object({
  id: number().required(),
  url: string().required(),
  title: string().required()
}))