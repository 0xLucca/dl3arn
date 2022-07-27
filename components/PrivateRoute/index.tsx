import { useUser } from "context/firebase";
import Router from "next/router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function PrivateRoute({ children }: Props) {
  const { user, isLoading } = useUser();
  if (isLoading) return null;
  if (!user) {
    Router.back();
    return null;
  }
  return <>{children}</>;
}

export default PrivateRoute;
