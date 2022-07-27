import { PrimaryButton } from "components/Buttons";
import { useUser } from "context/firebase";
import { logout } from "@/firebase/auth";
import Link from "next/link";
import styled from "styled-components";
import Avatar from "../Avatar";

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
    > p {
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
  }
`;
function Navbar() {
  const { user, isLoading } = useUser();
  return (
    <Nav>
      <div className="wrapper">
        <p>DL3arn</p>

        <Link href={"/auth/signin"}>login</Link>

        <div className="menu">
          <div className="avatar">
            {!isLoading && user ? (
              <Avatar
                username={user.email}
                img={user.photoURL}
                onClick={() => logout()}
                isLoading={isLoading}
              />
            ) : (
              <PrimaryButton>
                <Link href="/auth/signin">
                  <a>Login</a>
                </Link>
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
