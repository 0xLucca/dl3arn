import { PrimaryButton } from "components/Buttons";
import { useUser } from "context/firebase";
import { logout } from "@/firebase/auth";
import Link from "next/link";
import styled from "styled-components";
import Avatar from "../Avatar";
import { useState } from "react";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  height: 3.5rem;

  .wrapper,
  .menu,
  .avatar {
    height: 100%;
  }

  .wrapper {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      font-weight: bold;
      font-size: 1.25rem;
      letter-spacing: 0.5px;
    }
  }

  .menu {
    display: flex;
    align-items: center;
  }

  .avatar {
    position: relative;
    display: flex;
    align-items: center;

    .avatar-menu {
      list-style: none;
      display: flex;
      flex-flow: column;
      align-items: flex-end;
      position: absolute;
      top: 100%;
      right: 0;
    }
  }
`;
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, isLoading } = useUser();

  const handleMenu = () => setShowMenu((old) => !old);
  const handleOption = (cb?: any) => {
    setShowMenu(false);
    if (cb && typeof cb === "function") cb();
  };

  return (
    <Nav>
      <div className="wrapper">
        <Link href={user ? "/dashboard" : "/"}>
          <a>DL3arn</a>
        </Link>

        <div className="menu">
          {!isLoading && user ? (
            <div className="avatar">
              <Avatar
                username={user.email}
                img={user.photoURL}
                onClick={handleMenu}
                isLoading={isLoading}
              />
              {showMenu ? (
                <ul className="avatar-menu">
                  <li>
                    <Link href="/profile">
                      <a onClick={() => handleOption()}>profile</a>
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => handleOption(logout)}>logout</button>
                  </li>
                </ul>
              ) : null}
            </div>
          ) : (
            <PrimaryButton>
              <Link href="/auth/signin">
                <a>Login</a>
              </Link>
            </PrimaryButton>
          )}
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
