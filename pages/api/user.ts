import { NextApiRequest, NextApiResponse } from "next";
import { sleep } from "../../utils/sleep";
import sessionMiddleware from '../../utils/sessionMiddleware'
import { getUser } from '../../data/users'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sleep(2000)
    await sessionMiddleware(req, res)
    console.log(req.session)
    if (req.session.userId) {
      const user = getUser(req.session.userId)
      if (user) {
        const { password, ...rest } = user
        res.send(rest)
      } else {
        res.status(401).json('invalid cookie')
      }
    }
    res.status(200).end()

  } catch (err) {
    res.status(500).end()
  }
}