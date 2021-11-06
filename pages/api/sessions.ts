import { gql } from "@apollo/client";
import { withIronSessionApiRoute } from "iron-session/next";
import { initializeApollo } from "../../apolloClient";

const LOGIN_QUERY = gql`
  query login($email: String!, $passwired: String!) {
    core_user(
      where: { email: { _eq: $email }, passwired: { _eq: $passwired } }
    ) {
      id
      email
    }
  }
`;
// agent@test.com W~JA5Tt`e&li
export default withIronSessionApiRoute(
  async (req, res) => {
    console.log(req.body);
    try {
      if (req.method === "POST") {
        const { email, password } = req.body;
        const apolloClient = initializeApollo();
        const { data } = await apolloClient.query({
          query: LOGIN_QUERY,
          variables: { email: email, passwired: password },
        });
        console.log(data);
        const [foundUser] = data.core_user;
        if (!foundUser) {
          return res.status(204).json({
            message: "no such user ... please sign up",
          });
        }
        if (foundUser.id) {
          (req.session as any).user = { id: foundUser.id };
          await req.session.save();
          return res.status(201).send("");
        }

        return res.status(403).send("");
      } else if (req.method === "DELETE") {
        (req.session as any).user = null;
        await req.session.save();
        return res.status(204).send("");
      }
    } catch (error) {
      console.log("error", error);
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
