import { GetServerSidePropsContext } from "next";
import { auth } from "services/firebase/admin";

async function privateRoute(context: GetServerSidePropsContext) {
  const { token } = context.req.cookies;

  if (!token || !(await auth.verifyIdToken(token)))
    return { props: {}, redirect: { destination: "/", permanent: false } };

  return null;
}

export default privateRoute;
