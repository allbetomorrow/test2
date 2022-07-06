import { NextApiRequest, NextApiResponse } from "next";
import { sleep } from "../../utils/sleep";
import sessionMiddleware from '../../utils/sessionMiddleware'
import { getUser } from '../../data/users'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await sessionMiddleware(req, res)
  console.log(req.session)
  const user = getUser(req.session.userId)
  if (user) {
    const { password, ...rest } = user
    res.send(rest)
  } else {
    res.status(404).json({ password: 'Wrong password or user doesn`t exist' })
  }
}