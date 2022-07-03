import { withIronSessionApiRoute } from "iron-session/next";
import { sleep } from "../../utils/sleep";
import { config } from "../../utils/sessionConfig";

export default withIronSessionApiRoute(
  async function userRoute(req, res) {
    await sleep(3000)
    res.send(req.session.user);
  },
  config
);