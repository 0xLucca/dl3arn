import { useUser } from "context/firebase";
import Router from "next/router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  verified?: boolean;
}
const redirect = () => {
  Router.push("/");
  return null;
};
function PrivateRoute({ children, verified }: Props) {
  const { user, isLoading } = useUser();
  if (isLoading) return null;
  if (!user) return redirect();
  if (verified && !user.emailVerified) return redirect();
  return <>{children}</>;
}

export default PrivateRoute;
