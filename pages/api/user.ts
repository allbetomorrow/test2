import { withIronSessionApiRoute } from "iron-session/next";
import { sleep } from "../../utils/sleep";
import { config } from "../../utils/sessionConfig";

export default withIronSessionApiRoute(
  async function userRoute(req, res) {
    // await sleep(3000)
    const user = req.session.user
    if (user) {
      res.send(req.session.user)
    } else {
      res.status(404).json({ error: "wrong Cookie" })
    }

  },
  config
);