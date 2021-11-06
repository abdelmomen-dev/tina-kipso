import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async (req, res) => {
    if (req.method === "POST") {
      const { user } = req.session as any;
      console.log("USER_FOUND", user);

      if (user && user.id) {
        return res.send(user);
      }
      return res.status(403).send("");
    }

    return res.status(404).send("");
  },
  {
    cookieName: "ALYAAQEEN_COOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: "" + process.env.F0APP_SECRET,
  }
);
