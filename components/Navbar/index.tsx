import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SecondaryButton } from "components/Buttons";
import { useAuth } from "context/firebase";
import Link from "next/link";
import Router from "next/router";
import { ReactNode } from "react";
import Avatar from "../Avatar";
import { Nav } from "./styled";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link href={href}>
    <a className="link">{children}</a>
  </Link>
);

function Navbar() {
  const { data } = useAuth();
  const { user, isLoading } = data;

  return (
    <Nav>
      {user && !user.emailVerified && (
        <div className="verify">
          <p>Please verify your email</p>
        </div>
      )}
      <div className="wrapper">
        <Link href={user ? "/dashboard" : "/"}>
          <a>DL3arn</a>
        </Link>

        <ul className="menu">
          {!isLoading && user ? (
            <>
              <li>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </li>

              <li>
                <ConnectButton />
              </li>

              <li>
                <Avatar
                  onClick={() => Router.push("/profile")}
                  img={user.photoURL}
                  isLoading={isLoading}
                />
              </li>
            </>
          ) : (
            <SecondaryButton className="login">
              <Link href="/auth/login">
                <a>Login</a>
              </Link>
            </SecondaryButton>
          )}
        </ul>
      </div>
    </Nav>
  );
}

export default Navbar;
