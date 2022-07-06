import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "../../data/users";
import { sleep } from "../../utils/sleep";
import sessionMiddleware from '../../utils/sessionMiddleware'

// extends IncomingMessage


declare module 'next' {
  export interface NextApiRequest {
    session: {
      userId: number
    };
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await sessionMiddleware(req, res)
  const user = getUser(req.body.username)
  if (user) {
    const { password, ...rest } = user
    req.session.userId = user.id
    res.send(rest)
  } else {
    res.status(404).json({ password: 'Wrong password or user doesn`t exist' })
  }
}


// export default withIronSessionApiRoute(
//   async function loginRoute(req, res) {
//     // await sleep(3000)
//     const user = getUser(req.body.username)
//     if (user) {
//       const { password, ...rest } = user
//       req.session.user = rest
//       await req.session.save();
//       res.send(rest);
//     } else {
//       res.status(404).json({ password: 'Wrong password or user doesn`t exist' })
//     }
//   },
//   config
// );

// declare module "iron-session" {
//   interface IronSessionData {
//     user?: {
//       id: number;
//       username: string;
//     };
//   }
// }