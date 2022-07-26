import styled from "styled-components";
import Avatar from "../Avatar";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 3rem;

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
`;
function Navbar() {
  return (
    <Nav>
      <div className="wrapper">
        <p>DL3arn</p>

        <div className="menu">
          <Avatar
            username="estebanorlandi4"
            img="https://picsum.photos/1920/1080?random=55"
            onClick={() => console.log("hola")}
          />
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
