export interface User {
  id: number
  username: string
  password: string
}

const users: User[] = [
  {
    "id": 1251,
    "username": "inso",
    "password": "test"
  },
  {
    "id": 25126,
    "username": "taro",
    "password": "qwerty"
  }
]

export interface User {
  id: number
  username: string
  password: string
}

export const getUser = (username: string) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) return users[i]
  }
  return null
}

export default users