import { withIronSessionApiRoute } from "iron-session/next"
import { getUser } from "../../data/users";
import { config } from "../../utils/sessionConfig";

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    const user = getUser(req.body.username)
    if (user) {
      const { password, ...rest } = user
      req.session.user = rest
      await req.session.save();
      res.send(rest);
    } else {
      res.status(404).json({ password: 'Wrong password or user doesn`t exist' })
    }
  },
  config
);

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
      username: string;
    };
  }
}