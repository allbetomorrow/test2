import axios from "axios"

export const login = async (body: { username: string, password: string }): Promise<User> => {
  const user = await axios.post(`${process.env.api}/login`, body, { withCredentials: true })
  return user.data.res
}

export const getUser = async (): Promise<User> => {
  const user = await axios.get(`${process.env.api}/users`, { withCredentials: true })
  return user.data
}

export const getSections = async (): Promise<Section[] | []> => {
  const sections = await axios.get(`${process.env.api}/sections`, { withCredentials: true })
  return sections.data
}

export const getTasks = async (url: string): Promise<Task[] | []> => {
  const tasks = await axios.get(`${process.env.api}/tasks/${url}`)
  return tasks.data
}

export const getMe = async (): Promise<User | null> => {
  const user = await axios.get(`${process.env.api}/users/me`, { withCredentials: true })
  return user.data
}