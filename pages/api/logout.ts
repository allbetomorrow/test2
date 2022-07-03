import { withIronSessionApiRoute } from "iron-session/next";
import { config } from "../../utils/sessionConfig";

export default withIronSessionApiRoute(
  function logoutRoute(req, res) {
    req.session.destroy();
    res.send({ ok: true });
  },
  config
);