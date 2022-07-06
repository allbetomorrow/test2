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

export const getUser = (user: string | number) => {
  if (typeof user == "string") {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === user) return users[i]
    }
  } else if (typeof user == "number") {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === user) return users[i]
    }
  }
  return null
}

export default users